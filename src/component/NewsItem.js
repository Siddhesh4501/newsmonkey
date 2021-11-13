import React from 'react'

const NewsItem =(props)=> {
   
        let {title,decription,imageUrl,urltonews,sourceName}=props;
        return (
            <div className="card mx-auto my-3">
              <span className="position-absolute d-flex badge rounded-pill bg-danger" style={{zIndex:"1",alignItems:"flex-end",fontSize:"0.8em"}}>
                    {sourceName?sourceName:"Unknown"}
              </span>
            <img src={imageUrl?imageUrl:"https://thumbs.dreamstime.com/b/flag-india-indian-national-background-43514001.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title?title:"Not Provided"}</h5>
              <p className="card-text">{decription?decription:"Go to Read More"}</p>
              <a href={urltonews} className="btn btn-primary">Read More</a>
            </div>
          </div>
        )
    
}

export default NewsItem