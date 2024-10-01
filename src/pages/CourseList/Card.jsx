import React from 'react'
// import { useNavigate } from 'react-router-dom';

const Card = ({ img, title, desription, id, readMore, reserv }) => {
  //   const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate("/detail/" + id)}
      className=" mx-auto  justify-center bg-[#FBF6F6] rounded-2xl shadow-lg shadow-slate-600/80 w-3/6  h-full"
    >

      <img
        className="object-center -mt-24 ml-0 p-9 max-w-full max-h-full"
        src={"https://platri.de/wp-content/uploads/2024/01/Angular-Framework-e1649312852136.png"}
      // src={img }

      />

      <div className="text-right">
        <small className="text-black text-sm">آشنایی با برنامه نویسی با وردپرس</small>
      </div>



      {/* <img class=" me-4 rounded-full ml-28" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt=""></img>

      <div class="flex items-center ">

        <svg class="-mt-14 w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>

        <p class="-mt-14 ms-2 text-sm font-bold text-gray-900 dark:text-black">4.95</p>
        
      </div> */}

      <h1 className=" text-xs font-medium text-slate-600 pb-2 ">
        {title}
      </h1>

      <p className="  text-sm tracking-tight font-light text-slate-400 leading-6">
        {desription}
      </p>
      <div>
        <button class="py-2.5 px-5 me-2  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={() => navigate("/ProductDetail/" + id)}>
          {readMore}جزئیات دوره
        </button>

        <button class="py-2.5  px-5 me-2  text-sm font-medium text-gray-900 bg-[#5BE1B9] rounded-lg border  hover:bg-emerald-400 "
          onClick={() => navigate("/ProductDetail/" + id)}>
          {reserv}رزرو
        </button>
      </div> 
    </div>
  );
}

export { Card }
