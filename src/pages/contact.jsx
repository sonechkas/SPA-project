import { Link } from "react-router-dom";

function Contact() {
    return <div className="d-flex flex-column justify-content-center align-">
        <h1 className="text-center mt-4 mb-3">Our team</h1>
        <div className="d-flex flex-wrap justify-content-between">
            <div className="d-flex flex-column">
                <img className="w-100" src={`${process.env.PUBLIC_URL}/images/elina.png`} alt="" />
                <h2 className="text-center mt-3 mb-4">Elina Maslova</h2>
                <h3>Contacts</h3>
                <p className="fs-3">maslova.e.s@edu.mirea.ru</p>
            </div>
            <div className="d-flex flex-column">
            <img className="w-100" src={`${process.env.PUBLIC_URL}/images/sonya.jpg`} alt="" />
                <h2 className="text-center mt-3 mb-4">Sofia Suhorukova</h2>
                <h3>Contacts</h3>
                <p className="fs-3">suhorukova.s.a@edu.mirea.ru</p>
            </div>
        </div>
        <button className="btn btn-dark mt-4 mb-4">
        <Link to="/" className="nav-link" aria-current="page">Back to homepage</Link></button>
        
    </div>;
}

export {Contact};