import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
export default class News extends Component {   
  static defaultProps = {
country:'in',
category:'world',
  };
  static propTypes = {
country: PropTypes.string,
category: PropTypes.string,
  };
    constructor(props) {
        super();
        this.state={
            articles:[],
            loading:false,
            page:1,
            totalResults:0
        }
    };
    async updateNews(){
      this.props.setProgress(10);
      let url=`https://newsdata.io/api/1/news?apikey=${this.props.apiKey}&category=${this.props.category}&country=${this.props.country}&language=en,hi&page=${this.state.page}`;
      this.setState({loading:true});
      let data = await fetch(url);
      this.props.setProgress(30);
      let parsedDate = await data.json();
      this.props.setProgress(70);
      this.setState(
        {
          articles:parsedDate.results,
          totalResults:parsedDate.totalResults,
          loading:false
        }
        );
        this.props.setProgress(100);
    }
   async componentDidMount()
    {
        this.updateNews();
    };
    fetchMoreData = async () => {
        let url=`https://newsdata.io/api/1/news?apikey=${this.props.apiKey}&category=${this.props.category}&country=${this.props.country}&language=en,hi&page=${this.state.page}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedDate = await data.json();
        this.setState(
          {
            articles:this.state.articles.concat(parsedDate.results),
            totalResults:parsedDate.totalResults,
            loading:false,
            page:this.state.page+1 
          }
          )
    };
  render() {
    return (
      <>
      <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !==this.state.totalResults}
          loader={<Spinner />}  
        >

      <div className="container my-4 mt-5 pt-4">
      <h4 className="text-center py-2" style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>Morning Express -Top Headlines</h4>
      <div className="text-center">
        {this.state.loading && <Spinner/>}
      </div>      
        <div className="row">
        {this.state.articles.map((a)=>{
          return  <div className="col-md-3" key={a.link}>
            <NewsItem newsName={a.source_id} newsDate={a.pubDate} title={a.title} description={a.description?a.description.slice(0, 150):"No Description for this post"} imgUrl={a.image_url} newsUrl={a.link}/>
          </div>
        })}          
        </div>
       
      </div>
      </InfiniteScroll>
      </>
    );
  }
}
