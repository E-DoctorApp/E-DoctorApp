import React from "react";
import './review.css'
import OneReviewComponent from "./OneReviewComponent";

const YasBar = () => {

    return (
        <div className="grid-father-yas">
            <div className="yasbar-cont grid-item-yas">
                <div className="element-of-yasbar">
                    <h5 className="hover-button-yassine  grid-item-yas">My Profile</h5>
                    <h5 className="hover-button-yassine  grid-item-yas">Change Password</h5>
                    <h5 className="hover-button-yassine  grid-item-yas">Notification</h5>
                    <h5 className="hover-button-yassine  grid-item-yas">Reviews</h5>
                </div>
            </div><br />
            <div className="static-review-h1">
                <h5>Reviews</h5>
            </div>
            <div className="all-yas-review-wrapper gap-1">
                <OneReviewComponent/>
                <OneReviewComponent/>
                <OneReviewComponent/>
                <OneReviewComponent/>
                <OneReviewComponent/>
                <OneReviewComponent/>
                <OneReviewComponent/>
                <OneReviewComponent/>
                <OneReviewComponent/>
            </div>

        </div>


    )
}
export default YasBar;