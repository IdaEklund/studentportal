import { useState, useEffect } from "react";

export const NewsData = () => {
let [newsData, setNewsData] = useState([]); 

//Nyheter hämtas från ett API och returneras.
useEffect(() => {
    async function fetchNews() {
    try {
        const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setNewsData(data);
    } catch (error) {
        console.error("The data couldn't be fetched", error);
    }
    }
    fetchNews();
}, []);

return newsData;
};
