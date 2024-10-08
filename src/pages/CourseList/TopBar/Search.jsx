import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleSearchInput } from '../../../Redux/CourseSlice';
import { Field, Form, Formik } from 'formik';

const Search = () => {

    const dispatch = useDispatch();

    const handleSearchChange = (e) => {
        dispatch(handleSearchInput(e.search));

    }

    return (

        <Formik onSubmit={handleSearchChange} initialValues={{search:""}}>
                <Form className="max-w-lg mx-auto ml-[-37rem] mt-2">
            <div className="flex ">
                <div className="relative w-full mt-[6px]">
                    <Field  name="search" type="text"
                        className="block p-2 w-72 ml-0 h-11 z-20 text-sm text-gray-900 bg-[#ffff] rounded-3xl border border-[#158B68]" placeholder="...سرچ کن" required />
                    <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-[#A4F6DE] rounded-3xl border border-[#158B68] w-14">
                        <img className="w-4 h-4 ml-[10px]" src='https://www.svgrepo.com/show/55048/search.svg'></img>
                        <span className="sr-only">Search</span>
                    </button>

                </div>
            </div>
            </Form>
        </Formik>

    )
}

export default Search