import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { handleSearchInput } from "../../../Redox/NewsSlice";
import { Field, Form, Formik } from "formik";
import search from "../../../assets/Image/search.png";

const Search = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(handleSearchInput(e.search));
  };

  return (
    <div>
      <Formik onSubmit={handleSearchChange}  initialValues={{ search: "" }}>
        <Form className="rounded-full flex items-center justify-between bg-[#FFFF] border overflow-hidden border-[#158B68]">
          <Field
            name="search"
            type="text"
            className="text-sm bg-transparent px-8 py-4 min-w-[290px] text-[16px]"
            placeholder="جستجو..."
            required
          />
          <button type="submit">
            <div className="flex items-center justify-center bg-[#A4F6DE] px-5 py-5">
              <img src={search} />
            </div>
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Search;
