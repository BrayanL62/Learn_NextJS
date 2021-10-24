import Link from 'next/link'
import Head from 'next/head'
// On importe le fichier JS du style dans le dossier components.
import Layout from '../../components/layout'

export default function FirstPost() {
    return (
        <>
        {/* On viens entourer ce qu'on souhaite styliser par les balises <Layout>  */}
            <Layout>
                <Head>
                    <title>Create Next App</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <h1>First Post</h1>
                <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
                </h2>
            </Layout>
        </>
    )
    
}