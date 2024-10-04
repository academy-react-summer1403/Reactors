import React from "react"

const Header = () => {

    return (
        <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-1 py-2.5 dark:bg-[#A4F6DE]">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

                    <a href="https://flowbite.com" className="flex items-center">
                    </a>
                    <div className="flex items-center lg:order-2  ">
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-black">آکادامی اچ وان</span>
                        <img src="https://cdn-icons-png.flaticon.com/512/6395/6395489.png" className="mr-2 h-6 sm:h-9" alt="Logo" />
                    </div>

                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x lg:mt-0 ml-40">
                            <li>
                                <a href="#" className="text-gray-800 dark:text-teal-950 dark:hover:text-[#158B68] hover:bg-[#6D676757] focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-slate-100 focus:outline-none dark:focus:ring-gray-800">درباره ما</a>
                            </li>

                            <li>
                                <a href="#" className="text-gray-800 dark:text-teal-950 dark:hover:text-[#158B68] hover:bg-[#6D676757] focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-slate-100 focus:outline-none dark:focus:ring-gray-800">مقالات</a>
                            </li>

                            <li>
                                <a href="#" className="text-gray-800 dark:text-teal-950 dark:hover:text-[#158B68] hover:bg-[#6D676757] focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-slate-100 focus:outline-none dark:focus:ring-gray-800">دوره ها</a>
                            </li>

                            <li>
                                <a href="#" className="text-gray-800 dark:text-teal-950 dark:hover:text-[#158B68] hover:bg-[#6D676757] focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-slate-100 focus:outline-none dark:focus:ring-gray-800">صفحه اصلی</a>
                            </li>

                        </ul>
                    </div>
                </div>
                <img className="w-10 h-10 rounded-full -mt-10 ml-2" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar"></img>

            </nav>
        </header>
    )
}

export { Header };
