import React from "react";
import {CarouselChild} from "./CarouselChild";
import {CarouselReducer} from "../../reducers/CarouselReducer"

export const CarouselParent = () => {
    return(
        <div>
        {CarouselReducer.Data.map((item)=>{
            return<CarouselChild data1={item}/>

        })}
        </div>
    )
}
