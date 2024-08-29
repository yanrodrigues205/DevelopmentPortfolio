import "../../styles/globals.css";
import Head from "next/head";
import Header from "../../components/Header";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";


function MyApp({ Component, pageProps})
{
    const router = useRouter();
    
    return (
        <>
            <Head>
                <title>Yan Rodrigues</title>
            </Head>
            <Header/>
            <Component { ...pageProps} />
            {router.asPath !== "/" && <Footer/>}
        </>
    );
}

export default MyApp;