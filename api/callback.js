export default async function handler(req, res)
{
    const { code } = req.query;

    if (!code)
    {
        return res.status(400).send('No authorization code provided');
    }

    const clientId = process.env.OAUTH_GITHUB_CLIENT_ID || process.env.GITHUB_CLIENT_ID;
    const clientSecret = process.env.OAUTH_GITHUB_CLIENT_SECRET || process.env.GITHUB_CLIENT_SECRET;

    try
    {
        const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                client_id: clientId,
                client_secret: clientSecret,
                code,
            }),
        });

        const tokenData = await tokenResponse.json();
        const token = tokenData.access_token;
        const provider = 'github';

        if (!token)
        {
            throw new Error(tokenData.error_description || 'Failed to retrieve access token');
        }

        const responseBody = `
      <!DOCTYPE html>
      <html>
        <head><title>Authorizing Decap CMS...</title></head>
        <body>
          <p>Authorizing, please wait...</p>
          <script>
            (function() {
              function receiveMessage(e) {
                window.opener.postMessage(
                  'authorization:${provider}:success:${JSON.stringify({ token, provider })}',
                  e.origin
                );
                window.removeEventListener('message', receiveMessage, false);
                window.close();
              }
              window.addEventListener('message', receiveMessage, false);
              window.opener.postMessage('authorizing:${provider}', '*');
            })();
          </script>
        </body>
      </html>
    `;

        res.setHeader('Content-Type', 'text/html');
        return res.status(200).send(responseBody);
    } catch (error)
    {
        console.error('OAuth Error:', error);
        return res.status(500).send(`Authentication failed: ${error.message}`);
    }
}