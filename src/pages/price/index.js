import * as React from "react";

import Layout from "../../components/Layout";
import PriceRoll from "../../components/PriceRoll";

import $ from "jquery";

export default class PriceIndexPage extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   active: false,
    //   navBarActiveClass: "",
    // };
    // this.toggleHamburger = this.toggleHamburger.bind(this);

    
  }

  // componentDidMount() {

  //   console.log("height: " +  document.documentElement.scrollHeight + " window: " + window.outerHeight)
  //   // $("#logo").css("margin-top", "10vh");
  // }

  render() {
    return (
      <Layout>
        {/* <div className="placeholder"></div> */}
        <div className="columns">
          <div className="column is-4" style={{ backgroundImage: `url('../img/20230506_Marie-Breloer_PolasBerlin_IRP4086.jpg')`, height: "75vh", backgroundSize: "cover"}} ></div>
          <div className="column is-4" style={{ backgroundImage: `url('../img/20230506_Marie-Breloer_PolasBerlin_IRP4098.jpg')`, height: "75vh", backgroundSize: "cover"}} ></div>
          <div className="column is-4" style={{ backgroundImage: `url('../img/20230506_Marie-Breloer_PolasBerlin_IRP4105.jpg')`, height: "75vh", backgroundSize: "cover"}} ></div>
        </div>
        {/* <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('../img/Theater11 190.png')`,
            backgroundPosition: "25% 45%",
            height: "78vh",
            top: "-15vh",
          }}
        >
          {/* <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
              backgroundColor: "#f40",
              color: "white",
              padding: "1rem",
            }}
          >
            Latest Stories
          </h1>
        </div> */}
        <section className="section">
          <div className="container">
            <div className="content">
              <PriceRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
