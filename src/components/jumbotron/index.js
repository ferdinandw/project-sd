import React from 'react'

const Jumbotron = () => {
    return(
        // <section id=jumbotron className="jumbotron">
    // <div className="jumbotron jumbotron-fluid"></div>
    <div id="demo" classNameName="carousel slide mt-4" data-ride="carousel">
      <div className="container">
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" className="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={require('./../img/1.jpg')}  className="img-fluid" alt="Los Angeles"/>
          </div>
          <div className="carousel-item">
            <img src={require('./../img/2.jpg')}  className="img-fluid" alt="Chicago"/>
          </div>
          <div className="carousel-item">
            <img src={require('./../img/3.jpg')}  className="img-fluid" alt="New York"/>
          </div>
      </div>
      <a classNameName="carousel-control-prev" href="#demo" data-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </a>
      <a classNameName="carousel-control-next" href="#demo" data-slide="next">
        <span className="carousel-control-next-icon"></span>
      </a>
    </div>
  </div>
    )
}

export default Jumbotron