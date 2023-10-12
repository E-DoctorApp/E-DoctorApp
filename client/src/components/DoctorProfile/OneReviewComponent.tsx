import React from 'react'

const OneReviewComponent = () => {
    return (
        <div className="user-review-yas mt-2">
            <div className="d-flex w-100 justify-content-between align-items-center">
                <div className="d-flex justify-content-center user-review-image p-2">
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                            className="rounded-circle shadow-1-strong" width="40" height="40" />
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <p style={{ fontWeight: "bold", marginBottom: "-3px" }}>mounira</p>
                            <p style={{ fontSize: "10px" }}>3emel yawmy</p>
                        </div>
                    </div>
                </div>
                <div className="stars-date" style={{ display: "flex", flexDirection: "column" }} >
                    <ul className="list-unstyled d-flex justify-content-center text-warning mb-3" >
                        <li><i className="fas fa-star fa-sm"></i></li>
                        <li><i className="fas fa-star fa-sm"></i></li>
                        <li><i className="fas fa-star fa-sm"></i></li>
                        <li><i className="fas fa-star fa-sm"></i></li>
                        <li><i className="far fa-star fa-sm"></i></li>
                    </ul>
                    <p style={{ fontSize: "10px", marginTop: "-15px" }}>15 janv 2023</p>
                </div>
            </div>
            <div className="message-costumer">
                <p>sa77a doctor melli kont manjibech wled wallit manjibech sghar merci barcha 3ala majhoudetek</p>
            </div>
        </div>
    )
}

export default OneReviewComponent