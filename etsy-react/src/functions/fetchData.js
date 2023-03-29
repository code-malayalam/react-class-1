const fetchData = async () => {
    const response = await fetch('./data.json');
    const parsedResponse = await response.json();


    // console.log(parsedResponse)
    return parsedResponse
}

export default fetchData;