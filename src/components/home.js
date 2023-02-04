import React,{useState, useEffect} from 'react'
import Card from './card';
import { getInfo } from '../leadzenapi';



export default function Home() {
  const[data,setData] = useState("")
  
  // console.log(data, "home data")
  useEffect(()=>{
    getInfo().then((info)=>setData(info));
  },[])

  return (
    <div>
        <header className='header-component-H'><h1>LEADZEN ASSIGNMENT</h1></header>
      {data? data.map((e)=> <Card bs={e.company.bs}
       contact ={e.name} 
       city={e.address.city} 
       zip ={e.address.zipcode} 
       phone={e.phone}
       email={e.email}
       website={e.website}
       address={e.address.street}
       suite={e.address.suite}
       
       />):<p>No data available</p>}
    </div>
  )
}
