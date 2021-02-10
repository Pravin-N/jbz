import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* Meta Data */}
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta httpEquiv="content-type" content="text/html" charSet="utf-8" />
          <meta name="description" content="" />
          <meta name="keywords" content="" />

          {/* Favicon */}
          <link rel="shortcut icon" href="favicon.png" />

          {/* Web Fonts */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Muli%7CRubik:400,400i,500,700"
          />

          {/* ======= Bootstrap CSS ======= */}
          <link rel="stylesheet" href="assets/css/bootstrap.min.css" />

          {/* ======= Font Awesome CSS ======= */}
          <link rel="stylesheet" href="assets/css/font-awesome.min.css" />

          {/* ======= Owl Carousel CSS ======= */}
          <link
            rel="stylesheet"
            href="assets/plugins/owlcarousel/owl.carousel.min.css"
          />

          {/* ======= Magnific Popup CSS ======= */}
          <link
            rel="stylesheet"
            href="assets/plugins/magnific-popup/magnific-popup.min.css"
          />

          {/* ======= Main Stylesheet ======= */}
          <link rel="stylesheet" href="assets/css/style.css" />

          {/* ======= Custom Stylesheet ======= */}
          <link rel="stylesheet" href="assets/css/custom.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* ======= jQuery Library ======= */}
          <script src="assets/js/jquery.min.js"></script>

          {/* ======= Bootstrap Bundle JS ======= */}
          <script src="assets/js/bootstrap.bundle.min.js"></script>

          {/* =======  Mobile Menu JS ======= */}
          <script src="assets/js/menu.min.js"></script>

          {/* ======= Waypoints JS ======= */}
          <script src="assets/plugins/waypoints/jquery.waypoints.min.js"></script>

          {/* ======= Counter Up JS ======= */}
          <script src="assets/plugins/waypoints/jquery.counterup.min.js"></script>

          {/* ======= Owl Carousel JS ======= */}
          <script src="assets/plugins/owlcarousel/owl.carousel.min.js"></script>

          {/* ======= Isotope JS ====== */}
          <script src="assets/plugins/isotope/isotope.pkgd.min.js"></script>

          {/* ======= Magnific Popup JS ======= */}
          <script src="assets/plugins/magnific-popup/jquery.magnific-popup.min.js"></script>

          {/* ======= Countdown JS ======= */}
          <script src="assets/plugins/countdown/countdown.min.js"></script>

          {/* ======= Retina JS ======= */}
          <script src="assets/plugins/retinajs/retina.min.js"></script>

          {/* ======= Google API ======= */}
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCjkssBA3hMeFtClgslO2clWFR6bRraGz0"></script>

          {/* ======= Main JS ======= */}
          <script src="assets/js/main.js"></script>

          {/* ======= Custom JS ======= */}
          <script src="assets/js/custom.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
