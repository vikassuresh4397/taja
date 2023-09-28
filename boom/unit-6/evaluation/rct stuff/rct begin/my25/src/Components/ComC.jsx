import React, { useContext } from 'react';
import { first,last } from '../App';

export function CompC(){
const fname= useContext(first);
const lname= useContext(last)

    return(<>
        My name is {fname} {lname}
    </>)
}
    // return (
    //     <first.Consumer>{(e)=>{
    //     return(
    //         <>
    //         <last.Consumer>{(p)=>{
    //                 return (<div>Hello {e} {p}</div>)
    //         }}</last.Consumer>
             
    //     </>
    //     )
    //     }}
      
    //     </first.Consumer>
        
    // )
