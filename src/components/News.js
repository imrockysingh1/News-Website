import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./spinner";
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component';
export class News extends Component {
  // static defaultProps = {
  //   pageSize:6,
  //   country :'in',
  //   category : "sports"
  // }
  // static propTypes ={
  //   pageSize:PropTypes.number,
  //   country : PropTypes.string,
  //   category : PropTypes.string
  // }
  articles = [];
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      page: 1,
      loading: false,
      totalResults:0, 
    };
    document.title = `NewsVilla - ${this.capitalizeFirstLetter(
      this.props.category
    )}`;
  }
  async updateNews(props) {
    this.props.setProgress(10);
    let apiKey = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0efd3e35bdd54e928fcf9c93d90c9079&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    this.setState({ loading: true });
    this.props.setProgress(30);
    let data = await fetch(apiKey);
    let parseData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
      
    })
    this.props.setProgress(100);
  }
  

  async componentDidMount(props) {
    this.updateNews();
  }
  fetchData=async()=>{
    this.setState({page:this.state.page+1})
    let apiKey = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0efd3e35bdd54e928fcf9c93d90c9079&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    let data = await fetch(apiKey);
    let parseData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
      loading: false,
    })};

  // handleNextBtn = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // };

  // handlePrevBtn = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // };
  render() {
    return (
      <div className="container my-3">
        <h2 className="my-3">
          Top Headlines_{" "}
          <span style={{ color: "blue" }}>
            {this.capitalizeFirstLetter(
              this.props.category === "general" ? "home" : this.props.category
            )}
          </span>
        </h2>
        {this.state.loading && <Spinner></Spinner>}
        <InfiniteScroll
          dataLength={this.state.articles.length} //This is important field to render the next data
          next={this.fetchData}
          hasMore={this.state.articles.length< this.state.totalResults}
          loader={<Spinner/>}>
          <div className="container">
          <div className="row">
            {this.state.articles.map((element) => {
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
              )
            })}
          </div>
          </div>
        </InfiniteScroll>
        
          
        </div>
      
    );
  }
}
export default News;
