import React, { useState } from "react";

const Info = (props) => {
  if (props) {
    return (
      <>
        {props?.maindata?.map((dat, index) => (
          <div key={index}>
            <div className="row">
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{dat.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted"></h6>
                    <p className="card-text">{dat.body}</p>
                    <a href="#" className="card-link">
                      Card link
                    </a>
                    <a href="#" className="card-link">
                      Another link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
};

export default Info;
