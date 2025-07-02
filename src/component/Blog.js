import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import FeatherIcon from "feather-icons-react";

//import images
import user1 from "../assets/images/user/img-2.jpg";
import user2 from "../assets/images/user/img-3.jpg";
import user3 from "../assets/images/user/img-1.jpg";
import Background from "../assets/images/cta-bg.png";
import demo from "../assets/images/demos.png";

export default class Blog extends Component {
  render() {
    const supportTopics = [
      {
        icon: "alert-circle",
        title: "App não pode ser aberto",
        problem: '"XGBoard não pode ser aberto porque o desenvolvedor não pode ser verificado"',
        solution: "Vá em Configurações → Privacidade e Segurança → Clique em 'Abrir mesmo assim'",
        difficulty: "Fácil",
        color: "warning"
      },
      {
        icon: "key",
        title: "Permissões solicitadas toda vez",
        problem: "Sistema pede permissão de acessibilidade repetidamente",
        solution: "Execute o script ./fix_permissions_persistence.sh no Terminal",
        difficulty: "Médio",
        color: "info"
      },
      {
        icon: "ghost",
        title: "Entrada fantasma na acessibilidade",
        problem: "Múltiplas entradas do XGBoard nas configurações de acessibilidade",
        solution: "Execute ./fix_ghost_entry.sh para limpar entradas duplicadas",
        difficulty: "Médio",
        color: "secondary"
      },
      {
        icon: "command",
        title: "Atalho Cmd+F2 não funciona",
        problem: "Pressionar Cmd+F2 não abre a interface do XGBoard",
        solution: "Verifique se o XGBoard tem permissão de acessibilidade ativada",
        difficulty: "Fácil",
        color: "danger"
      },
      {
        icon: "refresh-cw",
        title: "Reset completo",
        problem: "Problemas persistentes que não foram resolvidos",
        solution: "Execute ./nuclear_remove_accessibility.sh para reset total",
        difficulty: "Avançado",
        color: "dark"
      },
      {
        icon: "clipboard",
        title: "Histórico não salva",
        problem: "Itens copiados não aparecem no histórico do clipboard",
        solution: "Reinicie o XGBoard ou verifique permissões do sistema",
        difficulty: "Fácil",
        color: "success"
      }
    ];

    const quickTips = [
      {
        tip: "Use Cmd+F2 em qualquer aplicativo para acesso rápido",
        icon: "zap"
      },
      {
        tip: "Digite qualquer texto para buscar no histórico",
        icon: "search"
      },
      {
        tip: "Use setas ↑↓ ou mouse para navegar",
        icon: "navigation"
      },
      {
        tip: "Enter ou duplo-clique para colar",
        icon: "corner-down-left"
      },
      {
        tip: "Esc para fechar a interface rapidamente",
        icon: "x"
      },
      {
        tip: "Ícone na barra de menu para acesso alternativo",
        icon: "menu"
      }
    ];

    return (
      <React.Fragment>
        <section className="section" id="blog">
          <Container>
            <Row className="justify-content-center mb-4">
              <Col lg={7} className="text-center">
                <h2 className="fw-bold">Our Blog</h2>
                <p className="text-muted">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem ab illo inventore.
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg={4}>
                <Card className="mt-4 border-0 shadow">
                  <CardBody className="p-4">
                    <span className="badge badge-soft-primary">
                      UI & UX Design
                    </span>
                    <h4 className="font-size-22 my-4">
                      <Link to="#">
                        Step bt step to conduct usability testing
                      </Link>
                    </h4>
                    <p className="text-muted">
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit.
                    </p>
                    <div className="d-flex align-items-center mt-4 pt-2">
                      <img
                        src={user1}
                        className="rounded-circle avatar-sm me-3"
                        alt="..."
                      />
                      <div className="flex-body">
                        <h5 className="font-size-17 mb-0">John Yeager</h5>
                        <p className="text-muted mb-0 font-size-14">
                          Designer, New York
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={4}>
                <Card className="mt-4 border-0 shadow">
                  <CardBody className="p-4">
                    <span className="badge badge-soft-primary">CEO</span>
                    <h4 className="font-size-22 my-4">
                      <Link to="#">
                        Increase conversion rate from ad to landing page
                      </Link>
                    </h4>
                    <p className="text-muted">
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit.
                    </p>
                    <div className="d-flex align-items-center mt-4 pt-2">
                      <img
                        src={user2}
                        className="rounded-circle avatar-sm me-3"
                        alt="..."
                      />
                      <div className="flex-body">
                        <h5 className="font-size-17 mb-0">Berneice Harris</h5>
                        <p className="text-muted mb-0 font-size-14">
                          Designer, New York
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={4}>
                <Card className="mt-4 border-0 shadow">
                  <CardBody className="p-4">
                    <span className="badge badge-soft-primary">Developer</span>
                    <h4 className="font-size-22 my-4">
                      <Link to="#">
                        Why small business should start marketing
                      </Link>
                    </h4>
                    <p className="text-muted">
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit.
                    </p>
                    <div className="d-flex align-items-center mt-4 pt-2">
                      <img
                        src={user3}
                        className="rounded-circle avatar-sm me-3"
                        alt="..."
                      />
                      <div className="flex-body">
                        <h5 className="font-size-17 mb-0">Sarah Pettway</h5>
                        <p className="text-muted mb-0 font-size-14">
                          Designer, New York
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <section
          className="section bg-center w-100 bg-light"
          style={{ background: `url(${Background})` }}
        >
          <Container>
            <Row>
              <Col lg={12}>
                <Card className="bg-gradient-primary text-center border-0">
                  <div
                    className="bg-overlay-img"
                    style={{ background: `url(${demo})` }}
                  ></div>
                  <CardBody className="mx-auto p-sm-5 p-4">
                    <Row className="justify-content-center">
                      <Col lg={10}>
                        <div className="p-3">
                          <h2 className="text-white mb-4">
                            Join our Growing Community
                          </h2>
                          <p className="text-white-70 font-size-16 mb-4 pb-3">
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia, there live
                            the blind texts.
                          </p>
                          <Link to="#" className="btn btn-light rounded-pill">
                            Sign Up for free
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section" id="support">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <h2 className="fw-bold">🛠️ Suporte & Solução de Problemas</h2>
                <p className="text-muted font-size-18">
                  Encontre soluções rápidas para os problemas mais comuns do XGBoard.
                  A maioria dos problemas pode ser resolvida em poucos minutos.
                </p>
              </Col>
            </Row>

            {/* Common Problems */}
            <Row className="mb-5">
              {supportTopics.map((topic, index) => (
                <Col lg={4} md={6} key={index}>
                  <Card className="border-0 shadow mb-4 h-100">
                    <CardBody className="p-4">
                      <div className="d-flex align-items-center mb-3">
                        <div className={`icon-mono bg-soft-${topic.color} rounded p-3 me-3`}>
                          <FeatherIcon icon={topic.icon} className={`icon-md text-${topic.color}`} />
                        </div>
                        <div>
                          <h5 className="mb-1">{topic.title}</h5>
                          <span className={`badge bg-${topic.color} text-white`}>{topic.difficulty}</span>
                        </div>
                      </div>
                      <div className="mb-3">
                        <h6 className="text-muted mb-2">Problema:</h6>
                        <p className="small mb-0">{topic.problem}</p>
                      </div>
                      <div className="mb-3">
                        <h6 className="text-success mb-2">Solução:</h6>
                        <p className="small mb-0">{topic.solution}</p>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>

            {/* Quick Tips */}
            <Row className="justify-content-center mb-5">
              <Col lg={10}>
                <div className="bg-light rounded p-4">
                  <h4 className="text-center mb-4">💡 Dicas Rápidas</h4>
                  <Row>
                    {quickTips.map((tip, index) => (
                      <Col lg={6} key={index}>
                        <div className="d-flex align-items-center mb-3">
                          <div className="icon-mono bg-soft-success rounded p-2 me-3">
                            <FeatherIcon icon={tip.icon} className="icon-sm text-success" />
                          </div>
                          <span className="text-muted">{tip.tip}</span>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Col>
            </Row>

            {/* Support Resources */}
            <Row className="justify-content-center">
              <Col lg={8}>
                <div className="text-center bg-gradient-primary rounded p-5 text-white">
                  <h3 className="text-white mb-4">📞 Precisa de Mais Ajuda?</h3>
                  <p className="text-white-70 mb-4">
                    Se os problemas persistirem, temos várias opções de suporte disponíveis.
                  </p>
                  <Row className="justify-content-center">
                    <Col md={4} className="mb-3">
                      <Link to="#" className="btn btn-light btn-lg w-100">
                        <FeatherIcon icon="book" className="icon-sm me-2" />
                        Guia Completo
                      </Link>
                    </Col>
                    <Col md={4} className="mb-3">
                      <Link to="#" className="btn btn-outline-light btn-lg w-100">
                        <FeatherIcon icon="github" className="icon-sm me-2" />
                        GitHub Issues
                      </Link>
                    </Col>
                    <Col md={4} className="mb-3">
                      <Link to="#" className="btn btn-outline-light btn-lg w-100">
                        <FeatherIcon icon="mail" className="icon-sm me-2" />
                        Contato Direto
                      </Link>
                    </Col>
                  </Row>
                  <div className="mt-4">
                    <small className="text-white-70">
                      <FeatherIcon icon="clock" className="icon-sm me-1" />
                      Suporte técnico via GitHub Issues • Guia de instalação completo disponível
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
