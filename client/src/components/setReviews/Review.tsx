import React from "react";
import './style.css'

const Review = () => {

    return (
        <div className="father-container-yassine">
            <div className="red-aside">
                <p>asid mostfa</p>
            </div>
            <div className="profil-dr-pt">
                <div className="title-place-yassine">
                    <h2>My Profile</h2>
                </div>
                <div id="carouselExampleControls" className="carousel slide text-center carousel-dark" data-mdb-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="rounded-circle shadow-1-strong mb-4"
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar"
                            style={{ width: "150px" }} />
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                                <h5 className="mb-3">Maria Kate</h5>
                                <p>Photographer</p>
                                <p className="text-muted">
                                    <i className="fas fa-quote-left pe-2"></i>
                                    Lorem 
                                </p>
                            </div>
                        </div>
                        <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="fas fa-star fa-sm"></i></li>
                            <li><i className="far fa-star fa-sm"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
            
        </div>

    )
}
export default Review;