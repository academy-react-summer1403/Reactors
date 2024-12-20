import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { handleSearchInput } from "../../Redux/CourseSlice";
import { Field, Form, Formik } from "formik";
import search from "../../assets/Image/search.png";
import { CiSearch } from "react-icons/ci";
const Search = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(handleSearchInput(e.search));
  };

  return (
    <Formik onSubmit={handleSearchChange} initialValues={{ search: "" }}>
      <Form className="rounded-full flex items-center justify-between border overflow-hidden border-[#158B68]">
        <Field
          name="search"
          type="text"
          className="text-sm bg-transparent px-8 py-4 min-w-[290px] text-[16px]"
          placeholder="جستجو..."
          required
        />
        <button type="submit">
          <div className="flex items-center justify-center bg-[#A4F6DE] px-5 py-5">
            <CiSearch className="text-2xl" />
          </div>
        </button>
      </Form>
    </Formik>
  );
};

export default Search;
