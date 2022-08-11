import { useEffect } from "react";
import { useState } from "react"
import { Link, NavLink } from "react-router-dom";

function getData(){
    return fetch(`http://localhost:3000/products`)
               .then((res)=>res.json())
};

export default function Products(){

    const [data,setData] = useState([]);
    

    useEffect(()=>{
        getData()
         .then((res)=>
         {setData(res) })
        
    },[])

    console.log(data);

   
    
    
    return(
        <div>
            <h1>Products Page</h1>
            {data?.map((e)=>{
                return(
                    <div>
                        <Link to={`/sproduct/${e.id}`}>
                        {e.name}
                        </Link>
                        </div>
                )
            })}
        </div>
    )
}