import React from 'react'
import phone from '../../assets/Auth/phone-icon.svg'
import verify from '../../assets/Auth/verfy.svg'
import { Formik, Form, Field } from 'formik'

const Auth = () => {
    return (
        <div className='w-full h-full rounded-[20px] flex flex-row-reverse bg-[#FBF6F6] shadow-[10px_10px_5px_0_#00000029]'>
            <div className="w-1/2 h-full rounded-l-[20px] bg-[#A4F6DE] flex justify-center items-center">
                <img src={verify} alt="" className="w-[90%] h-[70%]" />
            </div>
            <div className="w-1/2 h-full p-[30px] flex flex-col items-center">

                <div className="w-full flex flex-row-reverse">
                    <svg className="w-[30px] h-[30px]" width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.18896 17.5603L16.714 2.03352C17.4769 1.27235 18.7114 1.27235 19.4726 2.03352L34.9993 17.5603M5.09016 13.6591V31.2145C5.09016 32.2912 5.96403 33.165 7.04076 33.165H14.1929V24.7125C14.1929 23.6357 15.0668 22.7619 16.1435 22.7619H20.0447C21.1215 22.7619 21.9953 23.6357 21.9953 24.7125V33.165H29.1475C30.2243 33.165 31.0981 32.2912 31.0981 31.2145V13.6591M11.5922 33.165H25.8965" stroke="#158B68" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                <Formik initialValues={{ remember: false, phone: "", password: "" }}>
                    <Form className="w-[90%] text-[#22445D] flex flex-col">
                        <h1 className="text-[35px]"> ورود به سیستم </h1>
                        <div className="mt-10 flex flex-col gap-5">
                            <div className="px-[20px] py-[20px] flex gap-[25px] bg-white rounded-[15px] border-2 border-[#158B68]">
                                <img src={phone} alt="" />
                                <Field name="phone" placeholder="شماره همراه" className="w-full outline-none text-[#ABA7A7]" />
                            </div>

                            <div className="px-[20px] py-[20px] flex gap-[25px] bg-white rounded-[15px] border-2 border-[#158B68]">
                                <img src={phone} alt="" />
                                <Field name="password" placeholder="رمز عبور" className="w-full outline-none text-[#ABA7A7]" />
                            </div>
                        </div>


                        <div className="flex gap-[15px] mt-[25px]">
                            <div className="w-7 h-7 border-2 border-[#158B68] rounded-[2px]">
                                <Field type="checkbox" name="remember" id="rememberMe" className="w-full h-full" />
                            </div>
                            <label htmlFor="rememberMe"> مرا به خاطر بسپار </label>
                        </div>

                        <div className="w-full mt-[30px] flex flex-col gap-5">
                            <button className="w-full py-5 bg-[#158B68] text-white rounded-[10px] text-[18px]"> تایید </button>
                            <button className="w-full border-2 border-[#158B68] py-5 bg-white rounded-[10px] text-[18px]"> بازگشت به صفحه اصلی </button>
                        </div>

                        <div className="flex justify-between mt-[30px] underline">
                            <a href="#"> یک حساب کاربری ایجاد کنید </a>
                            <a href="#"> فراموشی رمز </a>
                        </div>
                    </Form>
                </Formik>

            </div>
        </div>
    )
}

export { Auth }
