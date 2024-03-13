import React, { useState } from "react";
import { Data } from "../../Assets/Data/RestaurantData";
import RestoDetailsCard from "../Restosinglecard/RestoDetailsCard";

const RestaurantCard = () => {
    const [data , setData ] = useState(Data)

    const searchHandler = (searchname)=>{
        let filteredData = data.filter((items)=>{
         if(items.name.toLowerCase().includes(searchname.toLowerCase())){
          return true
         }
        })
      
        setData(filteredData)

        // if(searchname ==''){
        //   setData(data)
        // }


    }

    const ratingHandler = (searchRating)=>{
      console.log(searchRating);
      let ratingfilter = data.filter((items)=>{
      
        if(items.rating >= Number(searchRating) && items.rating != ''){
          return true 
        }
      })
       setData(ratingfilter)
       console.log(ratingfilter);
      
    }

  return (
    <div className="m-[100px] max-w-screen-xl mx-auto">
      <div className="flex justify-between pb-12">
        <div>
          {" "}
          <input
            type="text"
            placeholder="Search restaurent..."
            className="border py-2 px-2 rounded-md "
            onKeyDown={(e)=>searchHandler(e.target.value)}
          />
        </div>
        <div>
          {" "}
          <label htmlFor="">Minimum Rating: </label>{" "}
          <input
            type="number"
            name=""
            id=""
            className="border py-1 w-12 px-2 rounded"
            min={0}
            max={5}
            onChange={(e)=>ratingHandler(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-8">
        {data.map((items, i) => {
          return <RestoDetailsCard items={items} key={"dfjk"+i}/>;
        })}
      </div>
    </div>
  );
};

export default RestaurantCard;
