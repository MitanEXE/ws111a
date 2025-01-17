import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

function page(title,css,body) {
  return `<html>
  <head>
  <title>${title}</title>
  <style>
  ${css}
  </style>
  </head>
  <body>
  ${body}
  </body>
  </html>`
}

app.use((ctx) => {
  console.log('ctx.request.url=', ctx.request.url)
  let pathname = ctx.request.url.pathname
  if (pathname.startsWith("/login")) {
    ctx.response.body = page(`Login`,
    `a {
      text-decoration: none;
    }
    body {
      background: -webkit-linear-gradient(bottom, #2dbd6e, #a6f77b);
      background-repeat: no-repeat;
    }
    label {
      font-family: "Raleway", sans-serif;
      font-size: 11pt;
    }
    #forgot-pass {
      color: #2dbd6e;
      font-family: "Raleway", sans-serif;
      font-size: 10pt;
      margin-top: 3px;
      text-align: right;
    }
    #card {
      background: #fbfbfb;
      border-radius: 8px;
      box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.65);
      height: 410px;
      margin: 6rem auto 8.1rem auto;
      width: 329px;
    }
    #card-content {
      padding: 12px 44px;
    }
    #card-title {
      font-family: "Raleway Thin", sans-serif;
      letter-spacing: 4px;
      padding-bottom: 23px;
      padding-top: 13px;
      text-align: center;
    }
    #signup {
      color: #2dbd6e;
      font-family: "Raleway", sans-serif;
      font-size: 10pt;
      margin-top: 16px;
      text-align: center;
    }
    #submit-btn {
      background: -webkit-linear-gradient(right, #a6f77b, #2dbd6e);
      border: none;
      border-radius: 21px;
      box-shadow: 0px 1px 8px #24c64f;
      cursor: pointer;
      color: white;
      font-family: "Raleway SemiBold", sans-serif;
      height: 42.3px;
      margin: 0 auto;
      margin-top: 50px;
      transition: 0.25s;
      width: 153px;
    }
    #submit-btn:hover {
      box-shadow: 0px 1px 18px #24c64f;
    }
    .form {
      align-items: left;
      display: flex;
      flex-direction: column;
    }
    .form-border {
      background: -webkit-linear-gradient(right, #a6f77b, #2ec06f);
      height: 1px;
      width: 100%;
    }
    .form-content {
      background: #fbfbfb;
      border: none;
      outline: none;
      padding-top: 14px;
    }
    .underline-title {
      background: -webkit-linear-gradient(right, #a6f77b, #2ec06f);
      height: 2px;
      margin: -1.1rem auto 0 auto;
      width: 89px;
    }`,`
    <div id="card">
    <div id="card-content">
        <div id="card-title">
            <h2>LOGIN</h2>
            <div class="underline-title"></div>
        </div>
        <form action="/" method="post" class="form">
            <label for="user-email" style="padding-top: 13px"> &nbsp;Email </label>
            <input id="user-email" class="form-content" type="email" name="email" autocomplete="on"
                value="JohnDoe@example.com" required />
            <div class="form-border"></div>
            <label for="user-password" style="padding-top: 22px">&nbsp;Password
            </label>
            <input id="user-password" class="form-content" type="password" name="password" value="1234" required />
            <div class="form-border"></div>
            <a href="#">
                <legend id="forgot-pass">Forgot password?</legend>
            </a>
            <input id="submit-btn" type="submit" name="submit" value="LOGIN" />
            <a href="#" id="signup">Don't have account yet?</a>
        </form>
    </div>
</div>
    `)
  } else {
    ctx.response.body = page(`Dashboard`,
    `a {
      text-decoration: none;
    }
    body {
      background: -webkit-linear-gradient(bottom, #2dbd6e, #a6f77b);
      background-repeat: no-repeat;
    }
    #card {
      background: #fbfbfb;
      border-radius: 8px;
      box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.65);
      height: 410px;
      margin: 6rem auto 8.1rem auto;
      width: 1200px;
    }
    #card-content {
      padding: 12px 44px;
    }
    #card-title {
      font-family: "Raleway Thin", sans-serif;
      font-weight: 900;
      padding-bottom: 23px;
      padding-top: 13px;
    }`,`
    <div id="card">
    <div id="card-content">
        <div id="card-title">
            <h2>你好, John Doe</h2>
            <div class="underline-title"></div>
        </div>
    </div>
</div>
    `)
  }
  // searchParams.get('name')=${ctx.request.url.searchParams.get('name')}
});

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 });
