import { useState, useEffect, createContext } from "react";
import axios from "axios";

const NewsContext = createContext()

const NewsProvider = ({children}) => {
    const [category, setCategory] = useState("general")
    const [news, setNews] = useState([])
    const [page, setPage] = useState(1)
    const [totalNews, setTotalNews] = useState(0)

    useEffect(() => {
      const consultAPI = async () => {
        const url = `https://newsapi.org/v2/top-headLines?country=us&category=${category}&apiKey=${"ab14ef059ac348dd9eddde19b3b106de"}`;

        const {data} = await axios (url)
        setNews(data.articles)
        setTotalNews(data.totalResults)
        setPage(1)

      }
    
     consultAPI()
    }, [category])

     useEffect(() => {
       const consultAPI = async () => {
         const url = `https://newsapi.org/v2/top-headLines?country=us&page=${page}&category=${category}&apiKey=${"ab14ef059ac348dd9eddde19b3b106de"}`;

         const { data } = await axios(url);
         setNews(data.articles);
         setTotalNews(data.totalResults);
       };

       consultAPI();
     }, [page]);
    

    const handleChangeCategory = e => {
        setCategory(e.target.value)
    }

    const handleChangePage = (e, value) => {
        setPage(value)

    }

    return(
        <NewsContext.Provider value={{
            category,
            handleChangeCategory,
            news,
            totalNews,
            handleChangePage,
            page

        }}
        >
            {children}
        </NewsContext.Provider>
    )
}

export {NewsProvider}

export default NewsContext