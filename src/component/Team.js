import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import FeatherIcon from "feather-icons-react";

//import icon 
import { Link as RouterLink } from "react-router-dom";

export default class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      developerInfo: {
        name: "Júlio Guimarães",
        title: "Desenvolvedor Fullstack | Criador do XGBoard",
        subtitle: "Especialista em React, Next.js, NestJS, Laravel, PHP, TypeScript & SwiftUI",
        bio: "Formado em Análise de Sistemas com mais de 5 anos de experiência em desenvolvimento de aplicações web e mobile. Focado em entregar soluções escaláveis, performáticas e com excelente experiência de usuário.",
        experience: "Desenvolveu sistemas completos para empresas como A Principal Bebê e Mamãe, e participou de projetos de grandes players como AgileGo, Liberta Play, CEISC e AMBIPAR na Multti Tecnologia.",
        current: "Atualmente desenvolve em SwiftUI, expandindo suas habilidades para o ecossistema Apple nativo.",
        role: "Além da experiência prática, atua como mentor e professor, ajudando desenvolvedores a evoluírem suas habilidades em desenvolvimento moderno.",
        technologies: [
          { name: "React.js", icon: "code" },
          { name: "Next.js", icon: "layers" },
          { name: "React Native", icon: "smartphone" },
          { name: "NestJS", icon: "server" },
          { name: "Node.js", icon: "cpu" },
          { name: "Laravel", icon: "database" },
          { name: "SwiftUI", icon: "aperture" },
          { name: "TypeScript", icon: "terminal" }
        ]
      }
    };
  }

  render() {
    const specifications = [
      {
        category: "💾 Sistema",
        icon: "monitor",
        details: [
          { label: "Compatibilidade", value: "macOS 13.0+ (Ventura, Sonoma, Sequoia)" },
          { label: "Arquitetura", value: "Intel x64 & Apple Silicon (M1/M2/M3)" },
          { label: "Tamanho", value: "440KB (instalador DMG)" },
          { label: "Armazenamento", value: "Local apenas - sem nuvem" }
        ]
      },
      {
        category: "⚡ Performance",
        icon: "cpu",
        details: [
          { label: "CPU", value: "< 0.1% em uso normal" },
          { label: "RAM", value: "~10MB consumo médio" },
          { label: "Inicialização", value: "< 2 segundos" },
          { label: "Impacto", value: "Zero na velocidade do sistema" }
        ]
      },
      {
        category: "🔐 Segurança",
        icon: "shield",
        details: [
          { label: "Permissões", value: "Apenas Acessibilidade" },
          { label: "Rede", value: "Nenhuma conexão necessária" },
          { label: "Dados", value: "Ficam apenas no seu Mac" },
          { label: "Assinatura", value: "Desenvolvedor verificado" }
        ]
      },
      {
        category: "🎯 Funcionalidades",
        icon: "clipboard",
        details: [
          { label: "Histórico", value: "Até 20 itens simultaneamente" },
          { label: "Busca", value: "Instantânea em todo conteúdo" },
          { label: "Tipos", value: "Texto, imagens, formatação" },
          { label: "Atalho", value: "Cmd+F2 configurável" }
        ]
      }
    ];

    const compatibilityMatrix = [
      { app: "Finder", status: "✅", note: "Totalmente compatível" },
      { app: "Safari", status: "✅", note: "Funciona perfeitamente" },
      { app: "Xcode", status: "✅", note: "Ideal para desenvolvimento" },
      { app: "Slack", status: "✅", note: "Ótimo para comunicação" },
      { app: "Discord", status: "✅", note: "Suporte completo" },
      { app: "Adobe Creative", status: "✅", note: "Funciona com imagens" },
      { app: "Terminal", status: "✅", note: "Perfeito para comandos" },
      { app: "Office", status: "✅", note: "Word, Excel, PowerPoint" }
    ];

    return (
      <React.Fragment>
        <section className="section bg-light" id="team">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <h2 className="fw-bold">👨‍💻 Sobre o Desenvolvedor</h2>
                <p className="text-muted font-size-18">
                  Conheça quem está por trás do XGBoard - um gerenciador de clipboard
                  desenvolvido com paixão por tecnologia e experiência do usuário.
                </p>
              </Col>
            </Row>

            {/* Developer Profile */}
            <Row className="justify-content-center">
              <Col lg={10}>
                <div className="bg-white rounded shadow p-5">
                  <Row className="align-items-center">
                    <Col lg={4} className="text-center mb-4 mb-lg-0">
                      <div className="position-relative">
                        <div
                          className="bg-gradient-primary rounded-circle mx-auto d-flex align-items-center justify-content-center"
                          style={{ width: "180px", height: "180px" }}
                        >
                          <FeatherIcon icon="user" className="h1 text-white" />
                        </div>
                        <div className="mt-3">
                          <h4 className="mb-1">{this.state.developerInfo.name}</h4>
                          <p className="text-primary mb-1 fw-bold">{this.state.developerInfo.title}</p>
                          <p className="text-muted small">{this.state.developerInfo.subtitle}</p>
                        </div>

                        {/* Social Links */}
                        <div className="mt-3">
                          <a href="https://github.com/xulioguimaraes" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm me-2">
                            <FeatherIcon icon="github" className="icon-sm me-1" />
                            GitHub
                          </a>
                          <a href="#contact" className="btn btn-outline-primary btn-sm">
                            <FeatherIcon icon="mail" className="icon-sm me-1" />
                            Contato
                          </a>
                        </div>
                      </div>
                    </Col>

                    <Col lg={8}>
                      <div className="ps-lg-4">
                        <div className="mb-4">
                          <h5 className="mb-3">📝 Sobre</h5>
                          <p className="text-muted mb-3">{this.state.developerInfo.bio}</p>
                          <p className="text-muted mb-3">{this.state.developerInfo.experience}</p>
                          <p className="text-muted mb-3">
                            <strong>🚀 Novidade:</strong> {this.state.developerInfo.current}
                          </p>
                          <p className="text-muted">{this.state.developerInfo.role}</p>
                        </div>

                        <div className="mb-4">
                          <h5 className="mb-3">🛠️ Tecnologias & Ferramentas</h5>
                          <Row>
                            {this.state.developerInfo.technologies.map((tech, index) => (
                              <Col lg={3} md={4} sm={6} key={index}>
                                <div className="d-flex align-items-center mb-3">
                                  <div className="icon-mono bg-soft-primary rounded p-2 me-3">
                                    <FeatherIcon icon={tech.icon} className="icon-sm text-primary" />
                                  </div>
                                  <span className="fw-medium">{tech.name}</span>
                                </div>
                              </Col>
                            ))}
                          </Row>
                        </div>



                        <div className="bg-gradient-primary rounded p-3 text-white">
                          <div className="d-flex align-items-center">
                            <FeatherIcon icon="heart" className="icon-sm me-2" />
                            <div>
                              <strong>Vamos nos conectar!</strong>
                              <p className="mb-0 small text-white-70">
                                Sempre aberto a novas oportunidades, projetos ou trocas de experiências sobre desenvolvimento.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section bg-light" id="specifications">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <h2 className="fw-bold">📊 Especificações Técnicas</h2>
                <p className="text-muted font-size-18">
                  XGBoard foi desenvolvido com as melhores práticas de performance e segurança.
                  Veja todos os detalhes técnicos abaixo.
                </p>
              </Col>
            </Row>

            {/* Technical Specifications */}
            <Row className="mb-5">
              {specifications.map((spec, index) => (
                <Col lg={6} md={6} key={index}>
                  <div className="bg-white rounded shadow p-4 mb-4 h-100">
                    <div className="d-flex align-items-center mb-4">
                      <div className="icon-mono bg-soft-primary rounded p-3 me-3">
                        <FeatherIcon icon={spec.icon} className="icon-md text-primary" />
                      </div>
                      <h5 className="mb-0">{spec.category}</h5>
                    </div>
                    <div className="ps-2">
                      {spec.details.map((detail, idx) => (
                        <div key={idx} className="d-flex justify-content-between align-items-center py-2 border-bottom border-light">
                          <span className="text-muted">{detail.label}:</span>
                          <strong className="text-dark">{detail.value}</strong>
                        </div>
                      ))}
                    </div>
                  </div>
                </Col>
              ))}
            </Row>

            {/* Compatibility Matrix */}
            <Row className="justify-content-center">
              <Col lg={10}>
                <div className="bg-white rounded shadow p-4">
                  <div className="text-center mb-4">
                    <h4 className="mb-3">🚀 Compatibilidade com Aplicativos</h4>
                    <p className="text-muted">
                      XGBoard funciona em qualquer aplicativo macOS. Veja alguns exemplos:
                    </p>
                  </div>
                  <Row>
                    {compatibilityMatrix.map((app, index) => (
                      <Col lg={3} md={4} sm={6} key={index}>
                        <div style={{
                          height: "145px",
                        }} className="text-center p-3 mb-3 border rounded">
                          <div className="mb-2">
                            <span className="h4">{app.status}</span>
                          </div>
                          <h6 className="mb-1">{app.app}</h6>
                          <small className="text-muted">{app.note}</small>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Col>
            </Row>

            {/* Installation Requirements */}
            <Row className="justify-content-center mt-5">
              <Col lg={8}>
                <div className="text-center bg-gradient-primary rounded p-4 text-white">
                  <h4 className="text-white mb-3">✅ Verificação de Instalação</h4>
                  <p className="text-white-70 mb-4">
                    Antes de considerar instalado, confirme todos os itens:
                  </p>
                  <Row>
                    <Col md={6}>
                      <div className="mb-3">
                        <FeatherIcon icon="check-circle" className="icon-sm me-2" />
                        <span>XGBoard em /Applications</span>
                      </div>
                      <div className="mb-3">
                        <FeatherIcon icon="check-circle" className="icon-sm me-2" />
                        <span>Permissão de acessibilidade ativa</span>
                      </div>
                      <div className="mb-3">
                        <FeatherIcon icon="check-circle" className="icon-sm me-2" />
                        <span>Cmd+F2 abre a interface</span>
                      </div>
                      <div className="mb-3">
                        <FeatherIcon icon="check-circle" className="icon-sm me-2" />
                        <span>Ícone na barra superior</span>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb-3">
                        <FeatherIcon icon="check-circle" className="icon-sm me-2" />
                        <span>Histórico funcionando</span>
                      </div>
                      <div className="mb-3">
                        <FeatherIcon icon="check-circle" className="icon-sm me-2" />
                        <span>Busca operacional</span>
                      </div>
                      <div className="mb-3">
                        <FeatherIcon icon="check-circle" className="icon-sm me-2" />
                        <span>Colar com Enter funciona</span>
                      </div>
                      <div className="mb-3">
                        <FeatherIcon icon="check-circle" className="icon-sm me-2" />
                        <span>Preview de imagens ativo</span>
                      </div>
                    </Col>
                  </Row>
                  <div className="mt-4">
                    <h5 className="text-white">🎉 Todos marcados? Instalação PERFEITA!</h5>
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
