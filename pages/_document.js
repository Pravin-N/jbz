import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Meta Data */}

          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta httpEquiv="content-type" content="text/html" charSet="utf-8" />

          {/* <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          /> */}

          {/* Web Fonts */}
          {/* <link
            rel="preload"
            as="style"
            href="/fonts/LucidaFax/Lucida-Fax-Regular.ttf"
          />
          <link
            rel="stylesheet"
            href="/fonts/LucidaFax/Lucida-Fax-Regular.ttf"
            media="print"
            onLoad="this.media='all'"
          />
          <noscript>
            <link
              rel="stylesheet"
              href="/fonts/LucidaFax/Lucida-Fax-Regular.ttf"
            />
          </noscript> */}
          {/* ======= Bootstrap CSS ======= */}
          {/* <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
          /> */}

          {/* ======= Font Awesome CSS ======= */}
          <link rel="stylesheet" href="assets/css/font-awesome.min.css" />
        </Head>

        <body>
          <Main />
          <NextScript />
          {/* <!--Start of Tawk.to Script--> */}

          <script
            src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
            integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs="
            crossOrigin="anonymous"
          ></script>

          <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
            crossOrigin="anonymous"
          ></script>
          {/* <script type="text/javascript" src="/js/chat.js"></script> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
