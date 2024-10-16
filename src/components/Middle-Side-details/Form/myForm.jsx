import React from 'react'
import { Formik, Form, Field } from 'formik';

const MyForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
      <Formik
        initialValues={{ title: '', text: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form className="flex flex-col gap-4">
            <div className="flex border-b border-gray-200">
              <button
                type="button"
                className="w-1/2 py-2 text-center bg-green-100 hover:bg-green-200"
              >
                ثبت نظر
              </button>
              <button
                type="button"
                className="w-1/2 py-2 text-center"
              >
                نظرات کاربران
              </button>
            </div>

            <div className="flex flex-col gap-2">
              <Field
                name="title"
                placeholder="عنوان"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
              />
              <Field
                name="text"
                as="textarea"
                placeholder="متن"
                rows="4"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
              />
            </div>

            <button
              type="submit"
              className="py-2 bg-green-300 text-white rounded-md hover:bg-green-400"
            >
              ثبت کردن
            </button>
          </Form>
        )}
      </Formik>
    </div>
  </div>
  )
}

export default MyForm
