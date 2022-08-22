import Head from "next/head";
import {
  FaRegEnvelope,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

export default function Home() {
  return (
   
    <div className=" bg-gradient-to-r from-sky-200 to-amber-200 flex flex-col items-center justify-center min-h-screen py-2 bg-amber-00">
       
      <Head>
        <title>Kampy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 py-20 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-4/5	 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-amber-500">Kampy</span> Dashboard
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-amber-500 mb-2">
                Sign In 
              </h2>
              <div className="border-2 w-10 border-amber-500 inline-block mb-ç"></div>
            

              <p className="text-gray-400 my-3">Use your email account</p>

              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>

                {/* <div className="flex justify-between w-64 mb-5">
                  <label htmlFor="" className="flex items-center text-xs">
                    <input type="checkbox" name="remember" className="mr-1" />{" "}
                    Remember me
                  </label>
                  <a href="#" className="text-xs">
                    Forgot Password?
                  </a>
                </div> */}

                <a
                  href="/home"
                  className="border-2 border-amber-500 text-amber-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-amber-500 hover:text-white"
                >
                  Sign In
                </a>

              </div>
            </div>
          </div>

          <div className="w-2/5 bg-black text-orange-500 py-36 px-12 rounded-r-2xl">
            <h2 className="text-3xl font-bold mb-2">Hello, Admin!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
          </div>
        </div>
      </main>
    </div>
  );
}