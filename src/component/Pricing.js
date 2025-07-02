import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";

// import images
import price2 from "../assets/images/pricing/2.png";
import price1 from "../assets/images/pricing/1.png";
import price3 from "../assets/images/pricing/3.png";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";

export default class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1",
      monthlyPricingData: [
        {
          image: price1,
          title: "Basic",
          space: "50MB",
          support: "No",
          price: "$9.00",
          isPopular: false,
        },
        {
          image: price2,
          title: "Standard",
          space: "100MB",
          support: "Yes",
          price: "$39.00",
          isPopular: true,
          isPrimary: true,
        },
        {
          image: price3,
          title: "Premium",
          space: "200MB",
          support: "No",
          price: "$79.00",
          isPopular: false,
        },
      ],
      yearlyPricingData: [
        {
          image: price1,
          title: "Basic",
          space: "50MB",
          support: "No",
          price: "$29.00 ",
          isPopular: false,
        },
        {
          image: price3,
          title: "Standard",
          space: "100MB",
          support: "Yes",
          price: "$49.00",
          isPopular: false,
        },
        {
          image: price3,
          title: "Premium",
          space: "200MB",
          support: "No",
          price: "$99.00",
          isPopular: true,
        },
      ],
      installationMethods: [
        {
          icon: "package",
          title: "DMG Installer",
          subtitle: "Método Recomendado",
          size: "440KB",
          description: "Instalador automático com interface gráfica",
          features: [
            "Instalação com um clique",
            "Interface gráfica amigável",
            "Verificação automática de assinatura",
            "Configuração de permissões guiada"
          ],
          buttonText: "Download DMG",
          buttonClass: "btn-primary",
          isRecommended: true,
          badge: "🏆 Recomendado"
        },
        {
          icon: "download",
          title: "ZIP Direto",
          subtitle: "Download Simples",
          size: "380KB",
          description: "Arquivo compactado para instalação manual",
          features: [
            "Download direto",
            "Extração manual necessária",
            "Mover para Applications",
            "Configurar permissões manualmente"
          ],
          buttonText: "Download ZIP",
          buttonClass: "btn-outline-primary",
          isRecommended: false,
          badge: null
        },
        {
          icon: "github",
          title: "GitHub Source",
          subtitle: "Para Desenvolvedores",
          size: "Código fonte",
          description: "Código completo para build personalizado",
          features: [
            "Código fonte completo",
            "Scripts de build inclusos",
            "Customização avançada",
            "Contribuições bem-vindas"
          ],
          buttonText: "Ver no GitHub",
          buttonClass: "btn-outline-dark",
          isRecommended: false,
          badge: "🔧 Dev"
        }
      ],
      systemRequirements: [
        { label: "Sistema", value: "macOS 13.0+" },
        { label: "Arquitetura", value: "Intel & Apple Silicon" },
        { label: "Permissões", value: "Apenas Acessibilidade" },
        { label: "Conexão", value: "Não necessária" }
      ]
    };
    this.toggleTab = this.toggleTab.bind(this);
  }
  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }
  render() {
    return (
      <React.Fragment>
        <section className="section" id="pricing">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={7} className="text-center">
                <h2 className="fw-bold">Pricing Plan</h2>
                <p className="text-muted">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem ab illo inventore.
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <div className="text-center mb-4 pricing-tab">
                  <ul
                    className="nav nav-pills rounded-pill justify-content-center d-inline-block shadow-sm"
                    id="pricingpills-tab"
                    role="tablist"
                  >
                    <NavItem className="d-inline-block">
                      <NavLink
                        to="#"
                        className={classnames(
                          { active: this.state.activeTab === "1" },
                          "rounded-pill"
                        )}
                        onClick={() => {
                          this.toggleTab("1");
                        }}
                      >
                        Monthly
                      </NavLink>
                    </NavItem>
                    <NavItem className="d-inline-block">
                      <NavLink
                        to="#"
                        className={classnames(
                          { active: this.state.activeTab === "2" },
                          "rounded-pill"
                        )}
                        onClick={() => {
                          this.toggleTab("2");
                        }}
                      >
                        Yearly
                      </NavLink>
                    </NavItem>
                  </ul>
                </div>
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane className="fade show" tabId="1">
                    <Row>
                      {this.state.monthlyPricingData.map((monthly, key) => (
                        <Col lg={4} key={key}>
                          <Card className="plan-card mt-4 rounded text-center border-0 shadow overflow-hidden">
                            <CardBody className="px-4 py-5">
                              {monthly.isPopular && (
                                <span className="badge badge-primary pricing-badge shadow-lg">
                                  Most Popular
                                </span>
                              )}
                              <div className="icon-mono avatar-md bg-soft-primary rounded mx-auto mb-5 p-3">
                                <img
                                  src={monthly.image}
                                  alt=""
                                  className="img-fluid d-block mx-auto"
                                />
                              </div>
                              <h4 className="text-uppercase mb-4 pb-1">
                                {monthly.title}
                              </h4>
                              <p className="text-muted">
                                Onlinespace:{" "}
                                <span className="fw-bold">{monthly.space}</span>
                              </p>
                              <p className="text-muted">
                                Support:{" "}
                                <span className="fw-bold">
                                  {monthly.support}
                                </span>
                              </p>
                              <p className="text-muted mb-4 pb-1">Domain 1</p>
                              <p className="text-muted font-size-14 mb-1">
                                All Extension Included
                              </p>
                              <p className="text-dark font-size-16 font-weight-semibold mb-4">
                                {monthly.price} / Month
                              </p>
                              {monthly.isPrimary ? (
                                <Link to="#" className="btn btn-primary">
                                  Buy Now
                                </Link>
                              ) : (
                                <Link to="#" className="btn btn-soft-primary">
                                  Buy Now
                                </Link>
                              )}
                            </CardBody>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </TabPane>

                  <TabPane className="fade show" tabId="2">
                    <Row>
                      {this.state.yearlyPricingData.map((yearly, key) => (
                        <Col lg={4} key={key}>
                          <Card className="plan-card mt-4 rounded text-center border-0 shadow overflow-hidden">
                            <CardBody className="px-4 py-5">
                              {yearly.isPopular && (
                                <span className="badge badge-primary pricing-badge shadow-lg">
                                  Most Popular
                                </span>
                              )}
                              <div className="icon-mono avatar-md bg-soft-primary rounded mx-auto mb-5 p-3">
                                <img
                                  src={yearly.image}
                                  alt=""
                                  className="img-fluid d-block mx-auto"
                                />
                              </div>
                              <h4 className="text-uppercase mb-4 pb-1">
                                {yearly.title}
                              </h4>
                              <p className="text-muted">
                                Onlinespace:{" "}
                                <span className="fw-bold">{yearly.space}</span>
                              </p>
                              <p className="text-muted">
                                Support:{" "}
                                <span className="fw-bold">
                                  {yearly.support}
                                </span>
                              </p>
                              <p className="text-muted mb-4 pb-1">Domain 1</p>
                              <p className="text-muted font-size-14 mb-1">
                                All Extension Included
                              </p>
                              <p className="text-dark font-size-16 font-weight-semibold mb-4">
                                {yearly.price} / Year
                              </p>
                              <Link to="#" className="btn btn-soft-primary">
                                Buy Now
                              </Link>
                            </CardBody>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section" id="installation">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <h2 className="fw-bold">📦 Instalação Rápida</h2>
                <p className="text-muted font-size-18">
                  Escolha o método de instalação que melhor se adapta às suas necessidades.
                  Recomendamos o instalador DMG para a melhor experiência.
                </p>
              </Col>
            </Row>

            <Row className="justify-content-center">
              {this.state.installationMethods.map((method, key) => (
                <Col lg={4} md={6} key={key}>
                  <Card className={`plan-card mt-4 rounded text-center border-0 shadow overflow-hidden h-100 ${method.isRecommended ? 'border-primary' : ''}`}>
                    <CardBody className="px-4 py-5 d-flex flex-column">
                      {method.badge && (
                        <span className={`badge ${method.isRecommended ? 'badge-primary' : 'badge-secondary'} pricing-badge shadow-lg`}>
                          {method.badge}
                        </span>
                      )}
                      <div className={`icon-mono avatar-md ${method.isRecommended ? 'bg-primary text-white' : 'bg-soft-primary'} rounded mx-auto mb-4 p-3 d-flex align-items-center justify-content-center`}>
                        <FeatherIcon icon={method.icon} className="icon-md" />
                      </div>
                      <h4 className="text-uppercase mb-2">
                        {method.title}
                      </h4>
                      <p className="text-muted mb-3 font-size-14">
                        {method.subtitle}
                      </p>
                      <p className="text-muted mb-4">
                        {method.description}
                      </p>
                      <div className="mb-4 flex-grow-1">
                        {method.features.map((feature, index) => (
                          <div key={index} className="d-flex align-items-center mb-2 text-start">
                            <FeatherIcon icon="check" className="icon-sm text-success me-2 flex-shrink-0" />
                            <span className="small text-muted">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-dark font-size-16 font-weight-semibold mb-4">
                        {method.size}
                      </p>
                      <Link to="#" className={`btn ${method.buttonClass} mt-auto`}>
                        {method.buttonText}
                      </Link>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>

            {/* System Requirements */}
            <Row className="justify-content-center mt-5">
              <Col lg={10}>
                <div className="bg-light rounded p-4">
                  <Row className="align-items-center">
                    <Col md={6}>
                      <h5 className="mb-3">📊 Especificações Técnicas</h5>
                      <div className="row">
                        {this.state.systemRequirements.map((req, index) => (
                          <div key={index} className="col-6 mb-3">
                            <div className="text-center">
                              <h6 className="mb-1">{req.value}</h6>
                              <small className="text-muted">{req.label}</small>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Col>
                    <Col md={6}>
                      <h5 className="mb-3">🛠️ Problemas Comuns?</h5>
                      <div className="text-start">
                        <div className="d-flex align-items-center mb-2">
                          <FeatherIcon icon="alert-circle" className="icon-sm text-warning me-2" />
                          <span className="small">"App não pode ser aberto" → Configurações de Segurança</span>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                          <FeatherIcon icon="key" className="icon-sm text-info me-2" />
                          <span className="small">Permissões solicitadas → Execute scripts de correção</span>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                          <FeatherIcon icon="book" className="icon-sm text-success me-2" />
                          <span className="small">Guia completo disponível no GitHub</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
