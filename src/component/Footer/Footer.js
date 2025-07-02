import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import FeatherIcon from "feather-icons-react";

//import images
import logoDark from "../../assets/images/logo-dark.png";

class Footer extends Component {
  render() {
    // Estilos para os links do footer
    const footerLinkStyle = {
      transition: 'color 0.3s ease',
    };

    const footerLinks = {
      product: [
        { name: "Home", link: "#home" },
        { name: "Recursos", link: "#features" },
        { name: "Download", link: "#download" },
        { name: "Especificações", link: "#specifications" }
      ],
      support: [
        { name: "Contato", link: "#contact" },
        { name: "GitHub Issues", link: "https://github.com/xulioguimaraes/XGBoard/issues" },
        { name: "Documentação", link: "https://github.com/xulioguimaraes/XGBoard/blob/main/README.md" },
        { name: "Instalação", link: "https://github.com/xulioguimaraes/XGBoard/blob/main/INSTALA%C3%87%C3%83O.md" }
      ],
      download: [
        { name: "Download DMG", link: "https://github.com/xulioguimaraes/XGBoard/releases/tag/v1.1" },
        { name: "Ver no GitHub", link: "https://github.com/xulioguimaraes/XGBoard" },
        { name: "Código Fonte", link: "https://github.com/xulioguimaraes/XGBoard" },
        { name: "Changelog", link: "https://github.com/xulioguimaraes/XGBoard/releases" }
      ]
    };

    const socialLinks = [
      { icon: "github", link: "https://github.com/xulioguimaraes/XGBoard", name: "GitHub" },
      { icon: "mail", link: "#contact", name: "Email" },
      { icon: "book", link: "https://github.com/xulioguimaraes/XGBoard/blob/main/README.md", name: "Docs" }
    ];

    return (
      <React.Fragment>
        <footer className="footer bg-dark">
          <Container>
            <Row>
              <Col lg={4} className="mb-0 mb-md-4 pb-0 pb-md-2">
                <Link to="#" className="logo-footer">
                  <img src={logoDark} height="28" alt="XGBoard" />
                  <span className="ms-2 text-light fw-bold">XGBoard</span>
                </Link>
                <p className="mt-4 text-white-50">
                  O gerenciador de clipboard mais elegante e rápido para macOS.
                  Desenvolvido com foco em performance, privacidade e experiência do usuário excepcional.
                </p>
                <div className="mt-4">
                  <div className="d-flex align-items-center mb-2">
                    <FeatherIcon icon="check-circle" className="icon-sm text-success me-2" />
                    <span className="text-white-50 small">100% Gratuito e Open Source</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <FeatherIcon icon="shield" className="icon-sm text-success me-2" />
                    <span className="text-white-50 small">Privacidade Total - Dados locais</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <FeatherIcon icon="zap" className="icon-sm text-success me-2" />
                    <span className="text-white-50 small">Performance Zero - &lt; 0.1% CPU</span>
                  </div>
                </div>
              </Col>

              <Col lg={2} md={4} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h5 className="text-light footer-head">Produto</h5>
                <ul className="list-unstyled footer-list mt-4">
                  {footerLinks.product.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.link}
                        className="text-white-50 text-decoration-none footer-link"
                        style={footerLinkStyle}
                        onMouseEnter={(e) => e.target.style.color = '#fff'}
                        onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.5)'}
                      >
                        <i className="mdi mdi-chevron-right me-1"></i>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>

              <Col lg={3} md={4} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h5 className="text-light footer-head">Suporte</h5>
                <ul className="list-unstyled footer-list mt-4">
                  {footerLinks.support.map((item, index) => (
                    <li key={index}>
                      {item.link.startsWith('http') ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white-50 text-decoration-none footer-link"
                          style={footerLinkStyle}
                          onMouseEnter={(e) => e.target.style.color = '#fff'}
                          onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.5)'}
                        >
                          <i className="mdi mdi-chevron-right me-1"></i>
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          to={item.link}
                          className="text-white-50 text-decoration-none footer-link"
                          style={footerLinkStyle}
                          onMouseEnter={(e) => e.target.style.color = '#fff'}
                          onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.5)'}
                        >
                          <i className="mdi mdi-chevron-right me-1"></i>
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </Col>

              <Col lg={3} md={4} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h5 className="text-light footer-head">Download</h5>
                <ul className="list-unstyled footer-list mt-4">
                  {footerLinks.download.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white-50 text-decoration-none footer-link"
                        style={footerLinkStyle}
                        onMouseEnter={(e) => e.target.style.color = '#fff'}
                        onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.5)'}
                      >
                        <i className="mdi mdi-chevron-right me-1"></i>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <h6 className="text-light">Compatibilidade</h6>
                  <div className="d-flex align-items-center mb-2">
                    <span className="badge bg-primary me-2">macOS 13.0+</span>
                  </div>
                  <div className="d-flex flex-wrap gap-1">
                    <span className="badge bg-secondary small">Ventura</span>
                    <span className="badge bg-secondary small">Sonoma</span>
                    <span className="badge bg-secondary small">Sequoia</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </footer>

        <footer className="footer footer-bar bg-dark">
          <Container className="text-center">
            <Row className="align-items-center">
              <Col sm={6}>
                <div className="text-sm-start">
                  <p className="mb-0 text-white-50">
                    © {new Date().getFullYear()} XGBoard.
                    <span className="text-light"> Licenciado sob MIT License.</span>
                  </p>
                </div>
              </Col>

              <Col sm={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <ul className="list-unstyled social-icon social-icon-sm mb-0 text-sm-end">
                  {socialLinks.map((social, index) => (
                    <li key={index} className="list-inline-item">
                      {social.link.startsWith('http') ? (
                        <a
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded text-white-50"
                          title={social.name}
                          style={footerLinkStyle}
                          onMouseEnter={(e) => e.target.style.color = '#fff'}
                          onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.5)'}
                        >
                          <FeatherIcon icon={social.icon} className="fea icon-sm fea-social" />
                        </a>
                      ) : (
                        <Link
                          to={social.link}
                          className="rounded text-white-50"
                          title={social.name}
                          style={footerLinkStyle}
                          onMouseEnter={(e) => e.target.style.color = '#fff'}
                          onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.5)'}
                        >
                          <FeatherIcon icon={social.icon} className="fea icon-sm fea-social" />
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col lg={12}>
                <div className="text-center">
                  <div className="d-flex justify-content-center align-items-center flex-wrap gap-3">
                    <div className="d-flex align-items-center">
                      <FeatherIcon icon="heart" className="icon-sm text-danger me-1" />
                      <span className="text-white-50 small">Feito com ❤️ para a comunidade macOS</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <FeatherIcon icon="star" className="icon-sm text-warning me-1" />
                      <a
                        href="https://github.com/xulioguimaraes/XGBoard"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white-50 small text-decoration-none footer-link"
                        style={footerLinkStyle}
                        onMouseEnter={(e) => e.target.style.color = '#fff'}
                        onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.5)'}
                      >
                        Se gostou, deixe uma estrela!
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <span className="text-white-50 small">
                      XGBoard v1.1 • Seu clipboard nunca mais será o mesmo! 🚀
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
