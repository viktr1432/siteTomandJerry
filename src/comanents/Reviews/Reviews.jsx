import React from "react";
import clases from './../Reviews/Reviews.module.css';
import ReviewsGrup from "./ReviewsGrup/ReviewsGrup";



const Reviews = (props) => {
    let ReviewsGrupData = [
        {id: 1, massedges: 'приввет как дела'},
        {id: 2, massedges: 'приввет как дела efw '},
        {id: 3, massedges: 'приввет как дела rr  rr refw '},
        
    ]

    let ReviewsGrupElements = ReviewsGrupData
    .map ((reviews) => <ReviewsGrup massedges={reviews.massedges}/>);

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

            {ReviewsGrupElements} 
                {/* <ReviewsGrup massedges={ReviewsGrupData [1].massedges}/> */}
                
            </div>
        </div>
    );
}
export default Reviews;