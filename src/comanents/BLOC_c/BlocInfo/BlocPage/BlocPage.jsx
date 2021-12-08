import React from "react";
import clases from './../BlocPage/BlocPage.module.css';
import Price from './../../../Price/Price';
import BlokInfo from './../../BlocInfo/BlocInfo/BlokInfo';
import Grum from './../../../Grum/Grum';
import Galereya from './../../../Galereya/Galereya';
import Reviews from './../../../Reviews/Reviews';
import Dialogs from "../../../Dialog/Dialogs";
import { Route, Routes } from "react-router-dom";

const BlocPage = () => {

    return (

        <div className={clases.BlocInfoPage}>

           

            <div>
                <Routes>
                    <Route  path="/" element={<BlokInfo />} />
                    <Route  path="/Grum/" element={<Grum />} />
                    <Route  path="/Price/" element={<Price />} />
                    <Route  path="/Galereya/" element={<Galereya />} />
                    <Route  path="/Reviews/" element={<Reviews />} />
                    <Route  path="/Dialogs/" element={<Dialogs />} />

                </Routes>
            </div>
            
        </div>

    );
}
export default BlocPage;