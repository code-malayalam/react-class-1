
function etsyJson(url) {
    return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // SectionsInEtsy(data)
            // console.log(data)
            return data
        })
}


export {etsyJson}
