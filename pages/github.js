import Layout from "../components/Layout";
import Error from "../components/_error";

const Github = ({user, statusCode}) => 
{
    if (statusCode){
        return <Error statusCode={statusCode}/>
    }
    return (
    <Layout footer = {false}>
        <div className="row">
            <div className="col-md-4 offset-md-4">
                <div className="card card-body text-center">
                    <h1>{user.name}</h1>
                    <img src={user.avatar_url} alt="/"/>
                    <p>{user.bio}</p>
                    <a href={user.blog} target="_blank" className="btn btn-outline-info my-2">My blog</a>
                    <a href={user.html_url} target="blank" className="btn btn-primary">Go to github</a>
                </div>
            </div>
        </div>
    </Layout>
)
}
export async function getServerSideProps(){

    const res = await fetch('https://api.github.com/users/ChinChinn')
    const data = await res.json();

    const statusCode = res.status > 200 ? res.status : false;

    console.log(data)
    return {
        props:{
            user:data,
            statusCode
        }
    }
}

export default Github; 