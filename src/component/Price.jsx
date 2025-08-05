import React from "react";

const Price = () => {
  return (
    <>
    <div className="contener">
      <div className="price-main">
        <h1 id="bottom">price plans</h1>
        <p>I don't think they tried to market it to the billionaire, spelunking, base-jumping crowd. i did the same thing to gandhi, he didn't eat for three weeks. i once heard a wise man say there are no perfect men.</p>
        <div className="plans-info">
          <div className="plan" id="left">
            <h3>silver</h3>
            <h2>$0.00 <span>/hour</span></h2>
            <p>For most businesses that want to <br /> optimize web queries</p>
            <ul>
              <li><i className="fa fa-check"></i> UI Design</li>
              <li><i className="fa fa-check"></i> web development</li>
              <li><i className="fa fa-times" id="black"></i> web deployment</li>
              <li><i className="fa fa-times" id="black"></i> seo optimization</li>
              <li><i className="fa fa-times" id="black"></i> wordPress integration</li>
              <li><i className="fa fa-times" id="black"></i> 5 Websites</li>
              <li><i className="fa fa-times" id="black"></i> unlimited user</li>
              <li><i className="fa fa-times" id="black"></i> 20 gB bandwith</li>
            </ul>
            <button className="price-button" id="star-scale">order now</button>
          </div>
          <div className="plan" id="top">
            <h3>gold</h3>
            <h2>$50.00 <span>/hour</span></h2>
            <p>For most businesses that want to <br /> optimize web queries</p>
            <ul>
              <li><i className="fa fa-check"></i> UI Design</li>
              <li><i className="fa fa-check"></i> web development</li>
              <li><i className="fa fa-check"></i> web deployment</li>
              <li><i className="fa fa-check"></i> seo optimization</li>
              <li><i className="fa fa-times" id="black"></i> wordPress integration</li>
              <li><i className="fa fa-times" id="black"></i> 5 Websites</li>
              <li><i className="fa fa-times" id="black"></i> unlimited user</li>
              <li><i className="fa fa-times" id="black"></i> 20 gB bandwith</li>
            </ul>
            <button className="price-button" id="star-scale">order now</button>
          </div>
          <div className="plan" id="right">
            <h3>dimond</h3>
            <h2>$80.00 <span>/hour</span></h2>
            <p>For most businesses that want to <br /> optimize web queries</p>
            <ul>
              <li><i className="fa fa-check"></i> UI Design</li>
              <li><i className="fa fa-check"></i> web development</li>
              <li><i className="fa fa-check"></i> web deployment</li>
              <li><i className="fa fa-check"></i> seo optimization</li>
              <li><i className="fa fa-check"></i> wordPress integration</li>
              <li><i className="fa fa-check"></i> 5 Websites</li>
              <li><i className="fa fa-check"></i> unlimited user</li>
              <li><i className="fa fa-check"></i> 20 gB bandwith</li>
            </ul>
            <button className="price-button" id="star-scale">order now</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Price;
