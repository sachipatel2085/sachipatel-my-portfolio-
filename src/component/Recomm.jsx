import React from "react";

const Recomm = () => {
  return (
    <>
    <div className="contener">
      <div className="recomm-main">
        <h1 id="bottom">recommendations</h1>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
        <div className="recomm-info">
          <div className="recomm" id="left">
            <div className="reting">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <h4>great quality</h4>
            <p>"Hello Everyone, Alex Smith has good skills in Web Designing as well as frontend development."</p>
            <div className="recomm-user">
              <img src="public\Profile.png" alt="" />
              <div className="user-info">
                <h5>James Gouse</h5>
                <p>Graphic Designer</p>
              </div>
            </div>
          </div>
          <div className="recomm" id="top">
            <div className="reting">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <h4>Amazing work!</h4>
            <p>"Alex Smith creates very clean designs, Also good knowledge of development."</p>
            <div className="recomm-user">
              <img src="public\Profile.png" alt="" />
              <div className="user-info">
                <h5>Tiana Philips</h5>
                <p>Photographer</p>
              </div>
            </div>
          </div>
          <div className="recomm" id="right">
            <div className="reting">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <h4>great quality</h4>
            <p>I gave worked to Alex Smith it handles the project very easily. Gives all Star to Alex.""</p>
            <div className="recomm-user">
              <img src="public\Profile.png" alt="" />
              <div className="user-info">
                <h5>Talan Westervelt</h5>
                <p>Business Man</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Recomm;
