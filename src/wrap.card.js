const cardWrap = (cards) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profiles</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"/>
  </head>

  <body class="pb-5">
    <header class="bg-danger py-4 mb-5">
      <h1 class="text-center text-white">
        My Team
      </h1>
    </header>

    <!--Profile Cards-->
    <main>
      <div class="container">
        <div class="row justify-content-center align-items-center">   
          ${cards}       
        </div>
      </div>
    </main>

  </body>
  </html>
`;

module.exports = cardWrap;