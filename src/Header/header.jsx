import React from "react"

const Header = () => {

    return (
        <>
            {/* <div className="font-mono border w-4.5  bg-slate-600 shadow-sm shadow-white">salam</div> */}
            <header>
                <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-emerald-200">
                    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <a href="https://flowbite.com" class="flex items-center">
                        </a>
                        <div class="flex items-center lg:order-2">
                            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-black">آکادامی اچ وان</span>
                            <img src="https://cdn-icons-png.flaticon.com/512/6395/6395489.png" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />

                        </div>
                        <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 ml-40">
                                <li>
                                    <a href="#" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-teal-950" aria-current="page">درباره ما</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-teal-950 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">مقالات</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-teal-950 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">دوره ها</a>
                                </li>

                                <li>
                                    <a href="#" class="text-gray-800 dark:text-teal-950 dark:hover:text-green-600 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-slate-100 focus:outline-none dark:focus:ring-gray-800">صفحه اصلی</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export { Header };
