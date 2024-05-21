import { Link } from "react-router-dom";

function Header() {
    return <nav className="navbar bg-dark" data-bs-theme="dark">
    <div className="container">
        <Link to="/" className="navbar-brand">React SPA project</Link>
      {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Переключатель навигации">
        <span className="navbar-toggler-icon"></span>
      </button> */}
      <div className="d-flex">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row">
          <li className="nav-item">
            <Link to="/" className="nav-link" aria-current="page">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
}

export {Header};
