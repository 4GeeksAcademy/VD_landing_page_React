//paso 1
import React from "react";

//paso 2
function Card() {
    //el return va con parentesis, no corren las llaves...
    return (
        <div className="card mx-2" style={{ width: "15rem" }}>
            <img src="https://picsum.photos/500/325" className="card-img-top" />
            <div className="card-body">
                <h4 className="card-title text-center fw-medium">Card title</h4>
                <div className="border-bottom " style={{ height: "200px" }}>
                    <p className="card-text fs-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <a href="#" className="btn btn-primary mt-4 d-flex justify-content-center">Go somewhere</a>

            </div>
        </div>
    )
}

//paso 3

export default Card;