import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

//import icon
import FeatherIcon from "feather-icons-react";

export default class Services extends Component {
  render() {
    const features = [
      {
        icon: "zap",
        title: "Atalho Global",
        description: "Cmd+F2 para acesso instantâneo em qualquer aplicativo. Funciona em Finder, Safari, Xcode, Slack e muito mais.",
        isActive: true
      },
      {
        icon: "clock",
        title: "Histórico Inteligente",
        description: "Até 20 itens de clipboard salvos automaticamente. Nunca mais perca algo importante que você copiou.",
        isActive: false
      },
      {
        icon: "search",
        title: "Busca Rápida",
        description: "Digite para encontrar qualquer item do histórico instantaneamente. Busca em qualquer parte do texto.",
        isActive: false
      },
      {
        icon: "image",
        title: "Suporte Completo",
        description: "Funciona com texto, imagens e conteúdo formatado. Preview de imagens antes de colar.",
        isActive: false
      },
      {
        icon: "shield",
        title: "Privacidade Total",
        description: "Todos os dados ficam apenas no seu Mac. Nenhuma conexão com a internet necessária.",
        isActive: false
      },
      {
        icon: "cpu",
        title: "Performance Zero",
        description: "Menos de 0.1% de CPU e apenas ~10MB de RAM. Não afeta a velocidade do seu sistema.",
        isActive: false
      }
    ];

    return (
      <React.Fragment>
        <section className="section" id="features">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <h2 className="fw-bold">✨ Recursos Principais</h2>
                <p className="text-muted font-size-18">
                  XGBoard foi projetado para ser o clipboard manager mais elegante e eficiente para macOS.
                  Cada funcionalidade foi pensada para melhorar sua produtividade.
                </p>
              </Col>
            </Row>

            <Row>
              {features.map((feature, index) => (
                <Col lg={4} md={6} key={index}>
                  <div className={`service-box text-center px-4 py-5 position-relative mb-4 ${feature.isActive ? 'active' : ''}`}>
                    <div className="service-box-content p-4">
                      <div className="icon-mono service-icon avatar-md mx-auto mb-4">
                        <i>
                          <FeatherIcon icon={feature.icon} />
                        </i>
                      </div>
                      <h4 className="mb-3 font-size-22">{feature.title}</h4>
                      <p className="text-muted mb-0">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>

            <Row className="justify-content-center mt-5">
              <Col lg={8} className="text-center">
                <div className="bg-light rounded p-4">
                  <h5 className="mb-3">🎬 Como Usar</h5>
                  <div className="row">
                    <div className="col-md-3 mb-3">
                      <div className="text-primary mb-2">
                        <FeatherIcon icon="command" className="icon-lg" />
                      </div>
                      <strong>Cmd+F2</strong>
                      <br />
                      <small className="text-muted">Abrir Interface</small>
                    </div>
                    <div className="col-md-3 mb-3">
                      <div className="text-primary mb-2">
                        <FeatherIcon icon="edit-3" className="icon-lg" />
                      </div>
                      <strong>Digite</strong>
                      <br />
                      <small className="text-muted">Buscar Item</small>
                    </div>
                    <div className="col-md-3 mb-3">
                      <div className="text-primary mb-2">
                        <FeatherIcon icon="arrow-up" className="icon-lg" />
                      </div>
                      <strong>↑↓ ou Mouse</strong>
                      <br />
                      <small className="text-muted">Navegar</small>
                    </div>
                    <div className="col-md-3 mb-3">
                      <div className="text-primary mb-2">
                        <FeatherIcon icon="corner-down-left" className="icon-lg" />
                      </div>
                      <strong>Enter</strong>
                      <br />
                      <small className="text-muted">Colar</small>
                    </div>
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
