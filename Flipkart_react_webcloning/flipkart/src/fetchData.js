const fetchData = async () => {
    const response = await fetch('./data.json');
    const parsedResponse = await response.json();
    return parsedResponse;
}

export default fetchData;