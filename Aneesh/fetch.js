import { callFunctions } from "./script1.js";

async function jsonDataToObj(dataURL){
    const res = await fetch(dataURL);
    const data = await res.json();
  
    callFunctions(data)
    
  }

export default jsonDataToObj
