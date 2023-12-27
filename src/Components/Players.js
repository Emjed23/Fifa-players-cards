import React from 'react'
import { Button } from 'react-bootstrap';

function Players(props) {
  return (
    <div>
     <img src={props.img} />
     <p>Name : {props.name}</p>
     <p>LastName : {props.lastname}</p>
     <p>Age : {props.age}</p>
     <p>Nationality:{props.nationality}</p>
     <p>JerseyNumber: {props.jerseynumber}</p>
     <Button onClick={()=>props.handleName(props.name)} >click</Button>
    </div>
  );
}
export default Players
