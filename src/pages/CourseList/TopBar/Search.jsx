import React, { useEffect, useState } from 'react';
import { getCoursList } from '../../../core/services/api/course';

const Search = () => {
    // const [SarchCourse, setSarchCourse] = useState([]);

    // const getSarchCourse = async () => {
    //     const SarchCourse = await getCoursList();
    //     setSarchCourse(SarchCourse);
    //     console.log(SarchCourse, "CourseSearch");
    // }
    // useEffect(() => {
    //     getSarchCourse();
    // }, []);

    return (

        <form className="max-w-lg mx-auto ml-[-37rem] mt-2">
            <div className="flex ">
                <div className="relative w-full">
                    <input type="search" id="search-dropdown" className="block p-2 w-72 ml-0 h-11 z-20 text-sm text-gray-900 bg-[#ffff] rounded-3xl border border-[#158B68]" placeholder="Search..." required />
                    <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-[#A4F6DE] rounded-3xl border border-[#158B68] w-14">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </div>
        </form>

    )
}

export default Search