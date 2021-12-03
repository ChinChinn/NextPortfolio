import Layout from "../components/Layout";
import Link from "next/link";
import { skills, experiences, projects } from "../profile";


const Index = () => (
<Layout>
    {/** Header Card */}
  <header className="row">
    <div className="col-md-12">
      <div className="card card-body bg-secondary text-light">
        <div className="row">
          <div className="col-md-4">
            <img src="profile.jpg" alt="" className="img-fluid"/>
          </div>
          <div className="col-md-8">
            <h1>Carlos Chin</h1>
            <h3>Jr. VideoGames Developer</h3>
            <p>I'm a computer science student and passionate about videogames. I want to have more experience in the videogame and web development industry</p>
            <a href="/hireme" >Hire Me</a>
          </div>
        </div>
      </div>
    </div>
  </header>


    {/** Second Section */}

    <div className="row py-2">
      <div className="col-md-4 py-2">
        <div className="card bg.dark">
          <div className="card-body">
            <h1>Skills</h1>
            {skills.map(({ skill, percentage }, i) => (
              <div className="py-3" key={i}>
                <h5>{skill}</h5>
                <div className="progress ">
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-8 py-2">
        <div className="card bg.dark ">
          <div className="card-body">
            <h1>Experience</h1>
            
            <ul>
              {
                experiences.map(({exp, description, from, to}, index) =>(
                  <li key= {index}>
                    <h3>{exp}</h3>
                    <h5>{from}-{to}</h5>
                    <p className="text-justify">{description}</p>
                  </li>
                  ))
              }
            </ul>
            <Link href="/experiences">
              <a className="btn btn-outline-info">
                Know More
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/** Protfolio */}

    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-light">Porfolio</h1>
            </div>
            {
              projects.map(({name, description, image, pageLink}, i) =>
                (
                  <div className="col-md-4 p-2" key={i}>
              <div className="card h-100">
                <div className="overflow"><img src={`/${image}`} alt="" className="card-img-top "/></div>
                <div className="card-body">
                  <h3>{name}</h3>
                  <p className="text-justify">{description}</p>
                  <Link href={pageLink}>
                    <a className="btn btn-outline-info">See More</a>
                  </Link>
                </div>
              </div>
            </div>
                )
                )
            }
          </div>
          <div className="text-center mt-4">
        {/**<Link href = "/portfolio">
            <a className="btn btn-outline-info">More Projects</a>
        </Link>**/}
      </div>
        </div>
      </div>
    </div>
  </Layout>
);
export default Index;
