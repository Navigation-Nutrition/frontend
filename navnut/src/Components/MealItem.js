import React from "react";
import './Meal.css';
const Mealitem=(getMeal)=>{
    console.log(getMeal.data)
    return(
        <div className="mealitem">
             <div className="mealcard">
                        <img src={getMeal.data.strMealThumb} alt="meal"/>
                        <div className ="info">
                        <h2>{getMeal.data.strMeal}</h2>
                        <p>{getMeal.data.strArea} food</p>
                        </div>
                        <div className ="recipe">
                            <h2>Recipe</h2>
                            <p>{getMeal.data.strInstructions}</p>
                            <img src={getMeal.data.strMealThumb}/>
                            <a href={getMeal.data.strSource}>Get Full Recipe</a>
                        </div>
            </div>  
        </div>
    )
}
export default Mealitem;