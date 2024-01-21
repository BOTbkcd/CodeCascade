import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import Head from "next/head";
declare global {
    interface Window {
        MktoForms2: any;
        ingest: any;
    }
}
function MyApp({ Component, pageProps: { session, ...pageProps }}: AppProps) {
    return (
        <>
            <Component {...pageProps} />
            <ToastContainer hideProgressBar={true} autoClose={3000} />
        </>
    );
}
export default MyApp;
