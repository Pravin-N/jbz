// import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import "../styles/videomodal.css";
import "../styles/style.css";
import "../styles/custom.css";
// import "font-awesome/css/font-awesome.min.css";

import Layout from "../components/Layout/Layout";

import { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as ga from '../lib/ga'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
