// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" type="image/x-icon" href="../static/icono.ico" />
                    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="preload" as="style" />
                </Head>
                <body>
                    <Main />
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
