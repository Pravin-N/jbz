// import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/videomodal.css";
import "../styles/style.css";
import "../styles/custom.css";

import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
