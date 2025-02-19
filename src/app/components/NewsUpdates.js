import React, { useState } from 'react'

function NewsUpdates() {

    const [title, setTitle] = useState();

    const news = async () => {
        try {
            const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=919f5b6813344c418eea9f70e87c6547");
            const data = await response.json();

            const name = data.length > 0 ? data[0].articles.source : "No name found";
            console.log(name);

            // setTitle(data.articles);

            // console.log(data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
    }};
    news();
    
  return (
   
    (`${title}` || []) 
  )
}

export default NewsUpdates