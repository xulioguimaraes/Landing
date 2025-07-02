import React, { Component } from "react";
import hero1 from "../../assets/images/mesa.png";
import { Container, Row, Col } from "reactstrap";

// Import Background Image
import Background from "../../assets/images/hero-1-bg.png";
import herolight from "../../assets/images/hero-1-bottom-shape.png";
import herodark from "../../assets/images/hero-1-bottom-shape-dark.png"
import { Link } from "react-router-dom";

// Modal Video
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

import FeatherIcon from "feather-icons-react";

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <>
        {/* Hero Start */}
        <section
          className="hero-1 bg-center bg-primary position-relative"
          // Define Background Image
          style={{ background: `url(${Background})` }}
          id="home"
        >
          <Container>
            <Row className="align-items-center hero-content">
              <Col lg={6}>
                <div className="d-flex align-items-center mb-3">
                  <span className="badge bg-light text-primary px-3 py-2 rounded-pill me-3">
                    🚀 XGBoard v1.1
                  </span>
                  <span className="text-white-70 small">para macOS 13.0+</span>
                </div>
                <h1 className="text-white display-4 font-weight-bold mb-4 hero-1-title">
                  🎯 Gerenciador de Clipboard <span className="text-warning">Inteligente</span>
                </h1>
                <p className="text-white-70 mb-4 mb-lg-5 font-size-18">
                  O clipboard manager mais elegante e rápido para macOS.
                  Acesso instantâneo com <strong className="text-white">Cmd+F2</strong>,
                  histórico de até 20 itens, busca inteligente e muito mais.
                </p>
                <div className="d-flex flex-wrap gap-3 mb-4">
                  <a href="https://github.com/xulioguimaraes/XGBoard/releases/tag/v1.1" target="_blank" rel="noopener noreferrer" className="btn btn-lg btn-light rounded-pill px-4">
                    <FeatherIcon icon="download" className="icon-sm me-2" />
                    Download Gratuito
                  </a>
                  <div className="d-inline-block" onClick={this.openModal}>
                    <Link to="#" className="video-play-icon text-white d-flex align-items-center">
                      <span className="play-icon-circle me-3">
                        <i>
                          <FeatherIcon icon="play" className="icon-sm icon" />{" "}
                        </i>
                      </span>
                      <span className="">Ver Demonstração</span>
                    </Link>
                  </div>
                </div>
                <div className="d-flex align-items-center text-white-70">
                  <FeatherIcon icon="check-circle" className="icon-sm text-success me-2" />
                  <span className="small">Compatível com Ventura, Sonoma e Sequoia</span>
                </div>
              </Col>
              <Col lg={6} sm={10} className="mx-auto">
                <div className="mt-lg-0 mt-4 text-start">
                  <div className="position-relative">
                    <img src={hero1} alt="XGBoard Interface" style={{
                      maxHeight: "400px",
                    }} className="img-md-responsive rounded shadow-lg" />

                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <ModalVideo
            channel="youtube"
            isOpen={this.state.isOpen}
            videoId="dQw4w9WgXcQ"
            onClose={() => this.setState({ isOpen: false })}
          />
          <div className="hero-bottom-shape shape-light">
            <img src={herolight} alt="" className="img-fluid d-block mx-auto" />
          </div>
          <div className="hero-bottom-shape shape-dark">
            <img src={herodark} alt="" className="img-fluid d-block mx-auto" />
          </div>
        </section>
        {/* Hero End */}
      </>
    );
  }
}

export default Section;
