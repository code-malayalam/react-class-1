async function jsonDataToObj(dataURL){
    const res = await fetch(dataURL);
    const data = await res.json();

    return data
  }

// function jsonDataToObj(dataURL){
//   return fetch(dataURL)
//           .then(response => response.json())
//           .then(data => data)
// }

export default jsonDataToObj
