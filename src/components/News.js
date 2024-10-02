import React, { useState, useEffect } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [progress, setProgress] = useState(0);
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async (props) => {
    setProgress(10);
    let apiKey = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0efd3e35bdd54e928fcf9c93d90c9079&pageSize=${props.pageSize}&page=${page}`;
    setLoading(true);
    setProgress(30);
    let data = await fetch(apiKey);
    let parseData = await data.json();
    setProgress(70);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
    setProgress(100);
  };

  useEffect(() => {
    document.title = `NewsVilla - ${capitalizeFirstLetter(props.category)}`;
    updateNews(props);
   
  }, []);
  const fetchData = async (props) => {
    let apiKey = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${
      props.category
    }&apiKey=0efd3e35bdd54e928fcf9c93d90c9079&pageSize=${props.pageSize}&page=${
      page + 1
    }`;
    setPage(page + 1);
    let data = await fetch(apiKey);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
    setLoading(false);
  };


  return (
    <>
      <div className="container my-3 ">
        <h2
          className="my-6 "
          style={{ marginTop: "80px", backgroundColor: "white" }}
        >
          Top Headlines_{" "}
          <span style={{ color: "blue" }}>
            {capitalizeFirstLetter(
              props.category === "general" ? "home" : props.category
            )}
          </span>
        </h2>
        {loading && <Spinner></Spinner>}
        <InfiniteScroll
          dataLength={articles.length} //This is important field to render the next data
          next={fetchData}
          hasMore={articles.length < totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div key={element.url} className="col-md-4">
                    <NewsItems
                      title={element.title ? element.title : " "}
                      description={
                        element.description ? element.description : " "
                      }
                      urlToImage={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://s.france24.com/media/display/e6279b3c-db08-11ee-b7f5-005056bf30b7/w:1280/p:16x9/news_en_1920x1080.jpg"
                      }
                      url={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source}
                    ></NewsItems>
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

News.defaultProps = {
  pageSize: 6,
  country: "in",
  category: "general",
};
News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
};
export default News;
