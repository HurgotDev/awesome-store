import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/global.css'

function App({ Component, pageProps }) {
    return <Layout>
        <Component {...pageProps} />
    </Layout>
}

export default App