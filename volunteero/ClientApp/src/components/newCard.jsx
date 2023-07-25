
 
import { getUsers } from "../api/api";
import { useState } from "react";
import CardF from "./cardF";
export default function NewCard({ formData }) {
  
    
    
    return (
      

<>
<div className="row">

  {
                    formData.map((item, index) => (
                        <CardF key={item.approvedPostID} name={item.postname} uploadby={item.updateBy} articles={item.postdescribtion} imgi={item.postImage} numberofLikes={item.numberofLikes} approvedPostID={item.approvedPostID} />
))

  }
</div>
</>


);
    
    }