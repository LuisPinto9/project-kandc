import React from "react";
import imagenp1 from "../images/imagenp1.png";
import imagenp2 from "../images/imagenp2.png";
import imagenp3 from "../images/imagenp3.png";

const Card = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="div-imagenp1 p-3 m-3">
          <div className="card" style={{ width: "18rem" }}>
            <img src={imagenp1} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="div-imagenp1 p-3 m-3">
          <div className="card" style={{ width: "18rem" }}>
            <img src={imagenp2} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="div-imagenp1 p-3 m-3">
          <div className="card" style={{ width: "18rem" }}>
            <img src={imagenp3} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
