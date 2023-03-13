export function fetchData() {
    return fetch('https://raw.githubusercontent.com/anushavs2000/Training-Oct-Hello/main/Etsy/data.JSON')
        .then(response => response.json())
}