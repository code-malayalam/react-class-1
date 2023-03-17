
function etsyJson(url) {
    return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            return data
        })
}


export {etsyJson}
