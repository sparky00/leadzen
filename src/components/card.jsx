import React from "react";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
 
  const navigate = useNavigate();

  return (
    <div className="homepage-bigi">
      <div className="card-component">
        <div className="table-div">
          <table>
            <tr style={{ textAlign: "center", fontWeight: "bold" }}>
              <td></td>
              <td>CONTACT</td>
              <td>CITY</td>
              <td>ZIP-CODE</td>
              <td></td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold", textTransform: "capitalize" }}>
                {props.bs}
              </td>
              <td>{props.contact}</td>
              <td>{props.city}</td>
              <td>{props.zip}</td>
            </tr>
          </table>
        </div>
    

     </div>
     <button className="button-23"
    onClick={()=> navigate("/page",{state: 
      {bs:props.bs,
       contact: props.contact,
       phone: props.phone,
       email: props.email,
       website:props.website,
       address:props.address,
       suite:props.suite,
       city:props.city,
       zip:props.zip,
      }})}

    >View Details</button>
    </div>
  );
};

export default Card;
