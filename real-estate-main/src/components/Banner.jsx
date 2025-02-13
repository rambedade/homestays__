import React from 'react';
import Image from "../assets/img/house-banner.png"
import Search from './Search';
 

const Banner = () => {



  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col
        items-center lg:text-left justify-center flex-1 px-4 lg:px-0 '>
          <h1><span>Rent</span> Your Dream House With Us</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus neque, dolorum totam, error unde quaerat adipisci eligendi veritatis inventore eaque deserunt fugiat sapiente, pariatur numquam molestiae voluptatem. A, eveniet!</p>
        </div>
        {/* Image section */}
        <div>
           <img src={Image} alt="" />
        </div>
      </div> 
      <Search />
    </section>
  )
};

export default Banner;
