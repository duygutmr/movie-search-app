import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/Breadcrumb.scss'

function Breadcrumb({text}) {
  return (
    <section>
        <div className="breadcrumb">
            <ul className="breadcrumb__unordered container">
                <li className="breadcrumb__list-yellow">Home</li>
                <li className="breadcrumb__list">{text}</li>
            </ul>
        </div>
    </section>
)}
 
export default Breadcrumb;