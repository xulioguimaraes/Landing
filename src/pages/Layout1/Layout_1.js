import React, { Component, Suspense } from "react";
import Switch from "../../component/Switch";

// import Team from "../../component/Team";
// import Blog from "../../component/Blog";
// import Contact from "../../component/Contact";
// import Footer from "../../component/Footer/Footer";

// Importing Section
const Navbar = React.lazy(() => import("../../component/Navbar/NavBar"));

const Section = React.lazy(() => import("./Section"));
const Services = React.lazy(() => import("../../component/Services"));
const Feature = React.lazy(() => import("../../component/Feature"));
// const Pricing = React.lazy(() => import("../../component/Pricing"));
const Team = React.lazy(() => import("../../component/Team"));
// const Blog = React.lazy(() => import("../../component/Blog"));
const Contact = React.lazy(() => import("../../component/Contact"));
const Footer = React.lazy(() => import("../../component/Footer/Footer"));

// import { Spinner } from "reactstrap";

class Layout_1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        { id: 1, idnm: "home", navheading: "Home" },
        { id: 2, idnm: "features", navheading: "Recursos" },
        { id: 3, idnm: "download", navheading: "Download" },
        { id: 4, idnm: "specifications", navheading: "Especificações" },
        { id: 5, idnm: "contact", navheading: "Contato" },
      ],
      pos: document.documentElement.scrollTop,
      imglight: true,
      navClass: "",
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > this.state.pos) {
      this.setState({ navClass: "nav-sticky", imglight: false });
    } else {
      this.setState({ navClass: "", imglight: true });
    }
  };

  //set preloader div
  PreLoader = () => {
    return (
      <div id="preloader">
        <div id="status">
          <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        <Suspense fallback={this.PreLoader()}>
          {/* Importing Navbar */}
          <Navbar
            navItems={this.state.navItems}
            navClass={this.state.navClass}
            imglight={this.state.imglight}
          />

          {/* Importing Section */}
          <Section />

          {/* Importing Services (Features) */}
          <Services />

          {/* Importing Feature (Download) */}
          <Feature />

          {/* Importing Team (Specifications) */}
          <Team />

          {/* Importing Contact */}
          <Contact />

          {/* Importing Footer */}
          <Footer />

          {/* Importing Mode */}
          <Switch />

        </Suspense>
      </React.Fragment>
    );
  }
}
export default Layout_1;
