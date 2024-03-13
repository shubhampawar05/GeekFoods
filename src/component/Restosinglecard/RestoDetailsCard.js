import React from 'react'

const RestoDetailsCard = ({items}) => {
    // console.log(items);
  return (
    <div className=' shadow-md min-w-[400px] mb-8'>
        <div className='py-4 px-8'>
           
            <div className='flex align-middle'>
            <h1 className='font-semibold text-xl mt-1  mr-2'>{items.name}</h1>
              {[...Array(5)].map((e,i)=>{
                return(
                  <span className='text-yellow-400 text-3xl pb-2' key={"s"+i}> 
                    {i < items.rating ? "★" : "☆"}
                  </span>
                )
              })}
            </div>
            <p className='pb-2'> <span><i class="ri-map-pin-2-fill"></i></span> {items.address}, {items["address line 2"]} </p>
            <p className='pb-4'>{items.outcode} {items.postcode}</p>
        </div>
        <div className='py-4 px-8 bg-[#F3F4F6]'>
            <p className='text-green-500'> <span><i class="ri-restaurant-fill"></i></span> {items.type_of_food}</p>
            <p className='text-blue-500 text=xl'><a href="#">Visit Menu</a></p>
        </div>
    </div>
  )
}

export default RestoDetailsCard