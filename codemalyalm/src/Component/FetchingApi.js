
export function FetchingApiTopNav(url){
    return fetch(url)
    .then((response) => response.json())
    .then((data) => {
        return data
    })
}