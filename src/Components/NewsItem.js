// import { getByTitle } from '@testing-library/react'
import React from 'react'

const NewsItem =(props)=> {
    // constructor(){
    //     super();
    //     console.log("in constructor")
    //     // runs once for each NewsItem
    // }


    
        let {title, description, imageUrl, newsUrl, author, date, source} = props;
        return (
            <div className='my-3'>
                <div className="card">
                <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>

                <span className="badge rounded-pill bg-danger" style={{zIndex: '1',left:'91%'}}>
                    {source}
                </span>
                </div>
                <img src={imageUrl?imageUrl:"https://images.hindustantimes.com/img/2022/01/16/1600x900/CRICKET-INDIA-KOHLI-0_1642348069521_1642348091816.JPG"} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    {/* <span class="badge bg-secondary">{source}</span> */}
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {author? author: "Unknown"} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
                </div>
                </div>
            </div>
        )
    
}

export default NewsItem
