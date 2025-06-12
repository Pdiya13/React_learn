import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

function Features()
{
    return(
       <div>
        <h1>hello our features list </h1>
        
            <NavLink
             to={"demo"}
             className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive?"text-orange-700":"text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                                    }
            >
                 My demo code 
            </NavLink>
            <Outlet/>
    
    </div> 
    )
}

export default Features