import { useLocation,useNavigate } from "react-router-dom";

import React from "react";

const Page = (props) => {
  
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state,"state SSS")
  return (
    <>
       
        
           <div className="main-component">
             <header className="header-component">
               <h4 style={{ fontWeight: "bold", textTransform: "capitalize" }}>{location.state.bs}</h4>
             </header>
             <div className="info-left">
               <li style={{ fontWeight: "bold" }}>CONTACT</li>
               <li>{location.state.contact}</li>
               <br></br>
               <li style={{ fontWeight: "bold" }}>E-MAIL</li>
               <li>{location.state.email}</li>
               <br></br>
               <li style={{ fontWeight: "bold" }}>PHONE NO</li>
               <li>{location.state.phone}</li>
               <br></br>
               <li style={{ fontWeight: "bold" }}>WEBSITE</li>
               <li>{location.state.website}</li>
             </div>
             <div className="info-right">
               <li style={{ fontWeight: "bold" }}>ADDRESS</li>
               <li>{location.state.address}</li>
               <br></br>
               <li style={{ fontWeight: "bold" }}>SUITE</li>
               <li>{location.state.suite}</li>
               <br></br>
               <li style={{ fontWeight: "bold" }}>CITY</li>
               <li>{location.state.city}</li>
               <br></br>
               <li style={{ fontWeight: "bold" }}>ZIP-CODE</li>
               <li>{location.state.zip}</li>
             </div>
           </div>
  
      

      <button className="button-23" onClick={() => navigate(-1)}>
        GO Back
      </button>
    </>
  );
};

export default Page;
