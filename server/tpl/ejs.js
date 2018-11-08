module.exports= `
 <!DOCTYPE html>
 <html>
  <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>koa server HTML</title>
    <link href="https://cdn.bootcss.com/twitter-bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet">
    <body>
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <h1> hi <%=you %> </h1>
            <p>this is <%=me %></p>
          </div>
          <div class="col-md-4">
            <p>动态的ejs模板引擎</p>
          </div>
        </div>
      </div>
      <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
      <script src="https://cdn.bootcss.com/twitter-bootstrap/4.1.3/js/bootstrap.min.js"></script>
    </body>
  </head>
 </html>
`
