import React from "react";
import clases from './../Reviews/Reviews.module.css';
import ReviewsGrup from "./ReviewsGrup/ReviewsGrup";



const Reviews = (props) => {
    return (
        <div className={clases.Reviews} >
            <div>
                <h2>Отзывы о наших работах</h2>
                <textarea></textarea>
            </div>
            <div>
                <button>ADD</button>
            </div>

            <div>

                <ReviewsGrup massedges1='хочу оставить отзыв' />
                <ReviewsGrup massedges1='хочу отзыв'/>
                
            </div>
        </div>
    );
}
export default Reviews;