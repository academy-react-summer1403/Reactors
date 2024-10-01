import React from 'react'
import { useNavigate } from 'react-router-dom';

const Card = ({ img, title, desription, id, readMore }) => {
  //   const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate("/detail/" + id)}
      className="mx-auto flex  flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60"
    >
      <img
        className="aspect-video rounded-t-2xl  object-center"
        src={"https://platri.de/wp-content/uploads/2024/01/Angular-Framework-e1649312852136.png"}
      // src={img }

      />

      <div className="p-4">
        <small className="text-black text-xs">آشنایی با برنامه نویسی با وردپرس</small>
        <h1 className="text-2xl font-medium text-slate-600 pb-2">
          {title}
        </h1>
        <p className="text-sm tracking-tight font-light text-slate-400 leading-6">
          {desription}
        </p>
        <button class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={() => navigate("/ProductDetail/" + id)}>
          {readMore}جزئیات دوره
        </button>


      </div>
    </div>
  );
}

export { Card }
