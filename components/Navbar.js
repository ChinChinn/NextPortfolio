import Link from 'next/link'

const Navbar  = () =>{
  return(
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
      <Link href="/">
      <a className="navbar-brand">
        Carlos Chin
      </a>
      </Link>
      {/** 
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarColor01" >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/blog">
            <a className="nav-link active" aria-current ="page" >
              Blog
            </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/github" >
            <a className="nav-link">
              Github
            </a>
            </Link>
          </li>
        </ul>
      </div>*/}
    </div>
  </nav>
);
  };

export default Navbar;