import React from 'react';

const HomePage: React.FC = () => {
  return (
        <div className="container my-5">
          <header className="mb-4">
            <h3>New products</h3>
          </header>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="card w-100 my-2 shadow-2-strong">
                <img src="https://tse1.mm.bing.net/th?id=OIP.ytGZU0bis2NBAlO1QgSzaQHaFj&pid=Api&P=0&h=180" className="card-img-top" style={{ aspectRatio: "1 / 1" }} alt="GoPro HERO6" />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Kem bát dâu tây</h5>
                  <p className="card-text">22.000</p>
                  <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                    <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
                    <a href="#!" className="btn btn-light border px-2 pt-2 icon-hover"><i className="fas fa-heart fa-lg text-secondary px-1"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="card w-100 my-2 shadow-2-strong">
                <img src="https://tse2.mm.bing.net/th?id=OIP.5Z7ehW36GvENOBZdBg60oQAAAA&pid=Api&P=0&h=180" className="card-img-top" style={{ aspectRatio: "1 / 1" }} alt="Canon camera" />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Nước ngọt mix vị</h5>
                  <p className="card-text">9.000</p>
                  <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                    <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
                    <a href="#!" className="btn btn-light border px-2 pt-2 icon-hover"><i className="fas fa-heart fa-lg text-secondary px-1"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="card w-100 my-2 shadow-2-strong">
                <img src="https://tse2.mm.bing.net/th?id=OIP.YKs5SYhBpANRgBvkYqhLowHaHa&pid=Api&P=0&h=180" className="card-img-top" style={{ aspectRatio: "1 / 1" }} alt="Xiaomi Redmi" />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Snack bắp ngọt</h5>
                  <p className="card-text">5.000</p>
                  <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                    <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
                    <a href="#!" className="btn btn-light border px-2 pt-2 icon-hover"><i className="fas fa-heart fa-lg text-secondary px-1"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="card w-100 my-2 shadow-2-strong">
                <img src="https://tse1.mm.bing.net/th?id=OIP.QiOPhdVaefgDnEDlqSjlIgHaHx&pid=Api&P=0&h=180" className="card-img-top" style={{ aspectRatio: "1 / 1" }} alt="Apple iPhone X" />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Bánh bông lan ruốc trứng</h5>
                  <p className="card-text">18.000</p>
                  <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                    <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
                    <a href="#!" className="btn btn-light border px-2 pt-2 icon-hover"><i className="fas fa-heart fa-lg text-secondary px-1"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}
export default HomePage;