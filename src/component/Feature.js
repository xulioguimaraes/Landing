import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

// Import FeatherIcon
import FeatherIcon from "feather-icons-react";

// Import Feature Image
import Background from "../assets/images/demos.png";
import features_img1 from "../assets/images/features-1.jpg";
import dot_img from "../assets/images/dot-img.png";
import features_img2 from "../assets/images/features-2.jpg";

class Feature extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="download">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <h2 className="fw-bold">🚀 Por que XGBoard?</h2>
                <p className="text-muted font-size-18">
                  Desenvolvido especificamente para macOS com foco em performance,
                  privacidade e experiência do usuário excepcional.
                </p>
              </Col>
            </Row>

            <Row className="align-items-center mb-5">
              <Col md={5} className="order-2 order-md-1 mt-md-0 mt-5">
                <div className="mb-4">
                  <span className="badge bg-primary text-white px-3 py-2 rounded-pill mb-3">
                    🎯 Interface Nativa
                  </span>
                  <h2 className="mb-4">Design Moderno e Intuitivo</h2>
                  <p className="text-muted mb-4">
                    Interface que segue as diretrizes de design do macOS. Aparência que se adapta
                    automaticamente ao modo claro/escuro do sistema.
                  </p>
                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <FeatherIcon icon="check" className="icon-sm text-success me-2" />
                      <span>Design nativo do macOS</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <FeatherIcon icon="check" className="icon-sm text-success me-2" />
                      <span>Modo claro/escuro automático</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <FeatherIcon icon="check" className="icon-sm text-success me-2" />
                      <span>Ícone elegante na barra de menu</span>
                    </div>
                  </div>
                </div>
                <a href="https://github.com/xulioguimaraes/XGBoard/releases/tag/v1.1" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Baixar Agora{" "}
                  <i>
                    <FeatherIcon icon="download" className="icon-xs ms-2" />
                  </i>
                </a>
              </Col>
              <Col md={6} className="ms-md-auto order-1 order-md-2">
                <div className="position-relative">
                  <div className="ms-5 features-img">
                    <img
                      src={features_img1}
                      alt="Interface do XGBoard"
                      className="img-fluid d-block mx-auto rounded shadow"
                    />
                  </div>
                  <img src={dot_img} alt="" className="dot-img-left" />
                </div>
              </Col>
            </Row>

            <Row className="align-items-center section pb-0">
              <Col md={6}>
                <div className="position-relative mb-md-0 mb-5">
                  <div className="me-5 features-img">
                    <img
                      src={features_img2}
                      alt="Performance do XGBoard"
                      className="img-fluid d-block mx-auto rounded shadow"
                    />
                  </div>
                  <img src={dot_img} alt="" className="dot-img-right" />
                </div>
              </Col>
              <Col md={5} className="ms-md-auto">
                <div className="mb-4">
                  <span className="badge bg-success text-white px-3 py-2 rounded-pill mb-3">
                    ⚡ Performance
                  </span>
                  <h2 className="mb-4">Zero Impacto no Sistema</h2>
                  <p className="text-muted mb-4">
                    XGBoard foi otimizado para usar recursos mínimos do sistema.
                    Funciona perfeitamente mesmo em Macs mais antigos.
                  </p>
                  <div className="mb-4">
                    <div className="row">
                      <div className="col-6">
                        <div className="text-center p-3 bg-white rounded shadow-sm">
                          <h4 className="text-primary mb-1">&lt; 0.1%</h4>
                          <small className="text-muted">CPU</small>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="text-center p-3 bg-white rounded shadow-sm">
                          <h4 className="text-primary mb-1">~10MB</h4>
                          <small className="text-muted">RAM</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="#specifications" className="btn btn-primary">
                  Ver Especificações{" "}
                  <i>
                    <FeatherIcon icon="arrow-right" className="icon-xs ms-2" />
                  </i>
                </Link>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section bg-gradient-primary" id="download-section">
          <div
            className="bg-overlay-img"
            style={{ background: `url(${Background})` }}
          ></div>
          <Container>
            <Row className="justify-content-center">
              <Col lg={8}>
                <div className="text-center">
                  <h1 className="text-white mb-4">
                    📥 Pronto para melhorar sua produtividade?
                  </h1>
                  <p className="text-white mb-5 font-size-16">
                    Baixe o XGBoard gratuitamente e transforme a forma como você trabalha com clipboard no macOS.
                    Instalação rápida e fácil, funcionando em segundos.
                  </p>
                  <div className="d-flex flex-wrap justify-content-center gap-3">
                    <a href="https://github.com/xulioguimaraes/XGBoard/releases/tag/v1.1" target="_blank" rel="noopener noreferrer" className="btn btn-lg btn-light">
                      <FeatherIcon icon="download" className="icon-sm me-2" />
                      Download DMG (Recomendado)
                    </a>
                    <a href="https://github.com/xulioguimaraes/XGBoard" target="_blank" rel="noopener noreferrer" className="btn btn-lg btn-outline-light">
                      <FeatherIcon icon="github" className="icon-sm me-2" />
                      Ver no GitHub
                    </a>
                  </div>
                  <div className="mt-4">
                    <small className="text-white-70">
                      <FeatherIcon icon="shield" className="icon-sm me-1" />
                      Compatível com macOS 13.0+ • 440KB • Gratuito
                    </small>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Feature;
