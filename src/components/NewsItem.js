// import { getByTitle } from '@testing-library/react'

import React from "react";

const NewsItem =(props)=> {
  
    let { title, description, imgUrl, newsUrl, author, date,source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}} >

        <span className=" badge rounded-pill bg-danger "> 
                {source}
                
              </span>
          </div>
          <img
            src={
              !imgUrl
                ? "https://i2.wp.com/www.inventiva.co.in/wp-content/uploads/2021/12/1639611628_NASAs-space-probe-touches-the-sun-The-Parker-Solar-Probe.jpg"
                : imgUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
              ...
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
