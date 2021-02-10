import "../styles/globals.css";
// // import "../styles/font-awesome.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "owl.carousel/dist/assets/owl.carousel.css";
// // import "../styles/magnific-popup.min.css";
// import "../styles/style.css";

import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
