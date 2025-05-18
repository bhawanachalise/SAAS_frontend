import { useEffect, useState } from "react";

function LearningUseEffect(){
    // useEffect(()=>{
    //     console.log("Hello world")//dependency array or list

    // },[])
    const [number,setNumber]=useState
    (0)
    const [number2,setNumber2]=useState
    (100)
    function increaseNumber(){
        setNumber(number +1)
    }
    function increaseNumber2(){
        setNumber2(number2 +1)
    }
    useEffect(()=>{
        console.log("useEffect triggred!")

    },[number,number2])

    useEffect(()=>{
        console.log("Types 3 useEffect triggred")
    })  //execute everytime whereever state changes + on page load or component load

 return(
        <div>
        <h1>learning use effect hook today!</h1>
        <h3>{number}</h3>
        <button onClick={increaseNumber}>change number 1 +</button>
        <h2>{number2}</h2>
        <button onClick={increaseNumber2}>change number 2 +</button>
        </div>
    )
}
export default LearningUseEffect