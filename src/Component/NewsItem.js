import React, { Component } from "react";
export default class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsDate, newsUrl,newsName } = this.props;
    return (
      <div>
        <div className="card mt-4" style={{border:"none",boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
          <img style={{height:"150px"}}
            src={
              !imgUrl
                ? "https://media.istockphoto.com/photos/breaking-news-3d-rendering-virtual-set-studio-picture-id1219965949?k=20&m=1219965949&s=612x612&w=0&h=9yXmM0qrzrAtVCn3p2F8RwVzsFn-qD44jIWAFyK8wGM="
                : imgUrl
            }
            className="card-img-top"
            alt={imgUrl}
          />
          <div className="card-body" style={{padding: "1% 3%"}}>
            <div className="meta-top">
              <span
                className="my-2 badge bg-danger"
                style={{
                  padding: "2.5%",
                  height: "25px",
                  width: "auto",
                  margin: "0",
                }} 
              >
              {newsName}
              </span>&nbsp;&nbsp;
              <b>{newsDate}</b>
            </div>
            <hr/>
            <h6 className="card-title">{title}</h6>
            <p style={{fontSize:"13px"}}>{description}</p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-primary mb-2"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
