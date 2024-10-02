import React, { Component } from 'react'

const NewsItems = (props)=> {
  
    let {title , description ,urlToImage , url , author , date,source} = props;
    return (
      <div>
        <div className="card my-3" >
          <img className="card-img-top" src={urlToImage} alt="#"/>
          <span className="badge badge-pill badge-danger" style={{ position: 'absolute', top: -10, left: 0 , backgroundColor:'red' , fontWeight:'500'}}>{source.name}</span>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-danger">Last updated {new Date(date).toGMTString()} By {!author?"Unknown":author}</small></p>
            <a href={url} target='_blank' className="btn btn-sm btn-primary">More detail</a>
          </div>
</div>
      </div>
    )
  
}

export default NewsItems