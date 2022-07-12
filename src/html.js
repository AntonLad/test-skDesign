export function Html({ body }) {
  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8"/>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <meta name="theme-color" content="#000000"/>
        <meta name="description" content="Web site created using create-react-app"/>
        <link rel="apple-touch-icon" href="/logo192.png"/>
        <link rel="manifest" href="/manifest.json"/>
        <title>React App</title>
        <script defer="defer" src="/static/js/main.387f7210.js"></script>
        <link href="/static/css/main.51128cc1.css" rel="stylesheet">
      </head>

      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">${body}</div>
      </body>
    </html>
  `
}
