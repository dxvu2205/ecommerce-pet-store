import React, { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import { InputForm } from "../../components";

const Login = () => {
    const [isRegister, setIsRegister] = useState(false);
    return (
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div class="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                <img
                    src="https://www.hornsby.nsw.gov.au/__data/assets/image/0017/123623/pet-registration.jpg"
                    class="w-full"
                    alt="Phone image"
                />
            </div>
            <div className="w-full max-w-md space-y-8">
                <div>
                    <img
                        className="mx-auto h-12 w-auto"
                        src="https://cdn.shopify.com/s/files/1/0309/7621/files/Group_609_160x40_crop_center@2x.png?v=1639489711"
                        alt="Your Company"
                    />
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        {isRegister ? 'Register Account' : 'Sign in to your account'}
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Or{" "}
                        <a
                            href="#"
                            className="font-medium text-amber-300 hover:text-red-700">
                            start your 14-day free trial
                        </a>
                    </p>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="-space-y-px rounded-md shadow-sm">
                        {isRegister &&
                            <>
                                <InputForm placeholder={"Name"} />
                                <InputForm placeholder={"Email"} />
                            </>
                        }
                        <InputForm placeholder={"Phone"} />
                        <InputForm placeholder={"Password"} />
                    </div>

                    {isRegister ? <>
                        <div className="flex items-center">
                            <small
                                onClick={() => {setIsRegister(false)}}
                                className="font-medium text-sm text-red-600 hover:text-indigo-500 cursor-pointer">
                                Already have an account? Sign in
                            </small>
                        </div>
                        <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md bg-amber-300 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <LockClosedIcon
                                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 "
                                    aria-hidden="true"
                                />
                            </span>
                            Register
                        </button>
                    </>
                        :
                        <> <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <small
                                    onClick={() => {setIsRegister(true)}}
                                    className="font-medium text-sm text-amber-300 hover:text-indigo-500 cursor-pointer">
                                    Register account
                                </small>
                            </div>

                            <div className="text-sm">
                                <a
                                    href="#"
                                    className="font-medium text-amber-300 hover:text-indigo-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                            <div>
                                <button
                                    type="submit"
                                    className="group relative flex w-full justify-center rounded-md bg-amber-300 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                        <LockClosedIcon
                                            className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                            aria-hidden="true"
                                        />
                                    </span>
                                    Sign in
                                </button>
                            </div>
                        </>

                    }

                </form>
            </div>
        </div>
    );
}

export default Login;
