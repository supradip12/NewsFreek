// import React, { Component } from "react"; At class based component time
import React, {useEffect,useState}from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News= (props)=> {
 
const [articles, setarticles] = useState([])
const [loading, setloading] = useState(true)
const [page, setpage] = useState(1)
const [totalResults, settotalResults] = useState(0)

  
 const capitalizeFirstLetter= (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);



  }
//  constructor(props){
//   super(props);
//   console.log("Hello I am a consturctor from news component");
//   this.state = {
//     articles:[],
//     loading:true,
//     page:1,
//     totalResults:0
    
//   }
//   document.title =  "NewsFreek-"+`${this.capitalizeFirstLetter(props.category)}`;
//  }
//  https://newsapi.org/v2/top-headlines?country=in&apiKey=0e5d2b99e93a4ef1a8fc63e6352bae23


 const updateNews= async()=> {
   props.setProgress(10);
  const url =`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page="${page}"&pageSize=${props.pageSize}`;

  // this.setState({loading:true}); 
  
  setloading(true);
  let  data = await fetch(url);
  props.setProgress(30);
  let parsedData = await data.json();
  props.setProgress(50);
  setarticles(parsedData.articles)
  settotalResults(parsedData.totalResults)
  setloading(false)
  console.log(parsedData);

  // this.setState(
  //   {articles:parsedData.articles,
  //   totalResults:parsedData.totalResults,
  //    loading:false
  //   })
  
  props.setProgress(100);
  
}

useEffect(() => {
  document.title =  "NewsFreek-"+`${capitalizeFirstLetter(props.category)}`;
  updateNews();
}, [])


// const componentDidMount() {
//   // let url =`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=a9e77f6540ff4f38a62e93bc70e826bc&page=1&pageSize=${props.pageSize}`;
//   // this.setState({loading:true}); 
//   // let  data = await fetch(url);
//   // let parsedData = await data.json();
//   // console.log(parsedData);
//   // this.setState({articles:parsedData.articles,
//   //   totalArticles:parsedData.totalResults,
//   //    loading:false})

//  }

//   const handelNextClick =  async()=>{
//    console.log("Next");
//   //  if(!(this.state.page + 1>Math.ceil(this.state.totalArticles/props.pageSize))){
//   //    let url =`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=a9e77f6540ff4f38a62e93bc70e826bc&page=${this.state.page + 1}&pageSize=${props.pageSize}`
//   //    this.setState({loading:true});
//   //   let  data = await fetch(url);
//   //   let parsedData = await data.json();
//   //   // console.log(parsedData);
//   //   this.setState({     
//   //      page: this.state.page + 1,
//   //      articles:parsedData.articles,
//   //      loading:false
  
//   //    })
//   //   }  

//   // this.setState({page:this.state.page + 1});
//   // this.updateNews();

//   setpage(page - 1)
//   updateNews();

// }

// const handelPreClick = async()=>{
//   console.log("Prvious")
//   // let url =`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=a9e77f6540ff4f38a62e93bc70e826bc&page=${this.state.page - 1}&pageSize=${props.pageSize}`
//   // this.setState({loading:true});
//   // let  data = await fetch(url);
//   // let parsedData = await data.json();
//   // // console.log(parsedData);
//   // this.setState({     
//   //    page: this.state.page - 1,
//   //    articles:parsedData.articles,
//   //    loading:false

//   //  })
//   // setState({page:this.state.page - 1});
//   setpage(page - 1)
//   updateNews();
 
// }

// fetchMoreData = async() => {
  
//   this.setState({page:this.state.page + 1})
//   // this.updateNews();
//   const url =`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=0e5d2b99e93a4ef1a8fc63e6352bae23&page=${this.state.page}&pageSize=${props.pageSize}`;
//   // this.setState({loading:true}); 
//   let  data = await fetch(url);
//   let parsedData = await data.json();
//   console.log(parsedData);
//   this.setState({
//     articles: this.state.articles.concat( parsedData.articles),
//     totalResults:parsedData.totalResults,
//     //  loading:false
//     })

// };
const fetchMoreData = async() => {
  
  // this.setState({page:this.state.page + 1})
  const url =`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
  setpage(page + 1)
  let  data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);
  setarticles(articles.concat( parsedData.articles))
  settotalResults(parsedData.totalResults)

  // this.setState({
  //   articles: this.state.articles.concat( parsedData.articles),
  //   totalResults:parsedData.totalResults
  //   })

};

 
  
    return (
       <>
        <h1 className="text-center" style={{margin:'30px 0px',marginTop:'90px'}}>NewsFreek Top Headlines-On {capitalizeFirstLetter(props.category)}</h1> 
        {/* {this.state.loading && <Spinner/>} */}
         <InfiniteScroll
         dataLength = {articles.length}
         next = {fetchMoreData}
         hasMore = {articles.lenght !== totalResults}
         loader = {loading && <Spinner/>}
         >
        
        
        <div className="container">

        
        <div className="row">
         {/* {!this.state.loading && this.state.articles.map((element)=>{                */}
         { articles.map((element)=>{               
          return <div className="col-md-4" key={element.url}>
            <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}  source={element.source.name}/>
          </div>
        })}
         
        </div>
        </div>
       
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handelPreClick}> &larr; Prvious</button>
        <button  disabled= {this.state.page + 1>Math.ceil(this.state.totalArticles/props.pageSize)} type="button" className="btn btn-dark" onClick={this.handelNextClick}>  Next &rarr;</button>
        </div> */}
      </>
    );
  }

News.defaultProps = {
  pageSize:6,
  category:'general',
}

News. propTypes = {
  pageSize:PropTypes.number,
  category:PropTypes.string,
}
export default News;
