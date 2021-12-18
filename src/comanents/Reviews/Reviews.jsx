import React from "react";
import clases from './../Reviews/Reviews.module.css';
import ReviewsGrup from "./ReviewsGrup/ReviewsGrup";



const Reviews = (props) => {





    return (
        <div className={clases.Reviews} >
            <div>
                <h2>Отзывы о наших работах</h2>
                <div>
                    <h4>Ваш питомец</h4>

                    <select name="" id="">
                        <option value="cet">cet</option>
                        <option selected value="dog">dog</option>
                        <option value="mug">mustang</option>
                    </select>


                </div>

                <div>
                    <form>
                        <label className="Label">
                            <input type="text" name="name" />
                        </label>
                        {/* <input type="submit" value="Отправить" /> */}
                    </form>
                </div>


                <textarea></textarea>
            </div>

            <div>
                <button>добавить <br /> отзыв</button>
            </div>
            <ReviewsGrup ClientRevievs={props.ClientRevievs} />
        </div>
    );
}
export default Reviews;