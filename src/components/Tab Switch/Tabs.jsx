import { useState } from "react";

export default function Tabs(){
    const [activeTab,setActive]=useState("home");
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-xl p-6 w-96">
                {/*Tabs*/}
                <div className="flex justify-around mb-6">
                    <button
                    onClick={()=>setActiveTab("home")}
                    className={`px-4 py-2 rounded-lg ${activeTab==="home" 
                        ?"bg-blue-500 text-white"
                        :"bg-gray-200"
                    }`}
                    >
                        Home
                    </button>
                    <button
                    onClick={()=> setActiveTab("about")}
                    className={`px-4 py-2 rounded-lg ${activeTab==="about"
                         ?"bg-blue-500 text-white"
                        :"bg-gray-200"
                    }`}
                    >
                        About
                    </button>
                    <button
                    onClick={()=>setActiveTab("contact")}
                    className={`px-4 py-2 rounded-lg ${activeTab==="contact"
                        ?"bg-blue-500 text-white"
                        :"bg-gray-200"
                    }`}
                    >
                        contact
                    </button>
                    {/*conditional Rendering*/}
                    <div className="text-center text-lg">
                        {activeTab==="home"&& <p>Welcome to the home page</p>}
                        {activeTab==="about"&& <p>This is the about page</p>}
                        {activeTab==="contact"&&<p>contact us at contact@example.com</p>}
                    </div>

                </div>
            </div>
        </div>
    )
}