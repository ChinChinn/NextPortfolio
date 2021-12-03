import Layout from "./Layout";
const _error = ({statusCode}) => {
    return (
        <Layout>
            {
                statusCode ? (
                    <p className = "text-center">Could not load your page : Status Code {statusCode}</p>
                ):(
                    <p>CVould not get this page</p>
                )
            }
        </Layout>

    )
}

export default _error