import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row, Card, CardBody, Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";
import FeatherIcon from "feather-icons-react";
import emailjs from '@emailjs/browser';
import { emailjsConfig } from "../config/emailjs";

//import images
import contact from "../assets/images/contact.png";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      isSubmitting: false,
      submitStatus: null, // null, 'success', 'error'
      submitMessage: ''
    };
  }

  componentDidMount() {
    // Inicializar EmailJS
    emailjs.init(emailjsConfig.publicKey);
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value
      }
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { formData } = this.state;

    // Validação básica
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      this.setState({
        submitStatus: 'error',
        submitMessage: 'Por favor, preencha todos os campos.'
      });
      return;
    }

    this.setState({ isSubmitting: true, submitStatus: null });

    try {
      // Preparar dados para o template
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        reply_to: formData.email,
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date().toLocaleString('pt-BR'),
        to_email: emailjsConfig.destinationEmail
      };

      // Enviar email
      const response = await emailjs.send(
        emailjsConfig.serviceID,
        emailjsConfig.templateID,
        templateParams
      );

      console.log('Email enviado com sucesso:', response);

      this.setState({
        isSubmitting: false,
        submitStatus: 'success',
        submitMessage: 'Mensagem enviada com sucesso! Responderemos em breve.',
        formData: {
          name: '',
          email: '',
          subject: '',
          message: ''
        }
      });

    } catch (error) {
      console.error('Erro ao enviar email:', error);

      this.setState({
        isSubmitting: false,
        submitStatus: 'error',
        submitMessage: 'Erro ao enviar mensagem. Tente novamente mais tarde.'
      });
    }
  };

  render() {
    const { formData, isSubmitting, submitStatus, submitMessage } = this.state;
    const projectInfo = [
      {
        icon: "code",
        title: "Desenvolvedor",
        content: "xulioguimaraes",
        link: "https://github.com/xulioguimaraes"
      },
      {
        icon: "tag",
        title: "Versão Atual",
        content: "v1.1",
        link: "https://github.com/xulioguimaraes/XGBoard/releases/tag/v1.1"
      },
      {
        icon: "github",
        title: "Código Fonte",
        content: "GitHub Repository",
        link: "https://github.com/xulioguimaraes/XGBoard"
      },
      {
        icon: "file-text",
        title: "Licença",
        content: "MIT License",
        link: "https://github.com/xulioguimaraes/XGBoard/blob/main/LICENSE"
      }
    ];

    const contributionWays = [
      {
        icon: "star",
        title: "Deixe uma Estrela",
        description: "Ajude o projeto dando uma estrela no GitHub",
        action: "⭐ Star no GitHub",
        link: "https://github.com/xulioguimaraes/XGBoard"
      },
      {
        icon: "alert-circle",
        title: "Reporte Bugs",
        description: "Encontrou um problema? Abra uma issue detalhada",
        action: "🐛 Reportar Bug",
        link: "https://github.com/xulioguimaraes/XGBoard/issues"
      },
      {
        icon: "zap",
        title: "Sugira Melhorias",
        description: "Tem uma ideia? Compartilhe conosco via issue",
        action: "💡 Sugerir Feature",
        link: "https://github.com/xulioguimaraes/XGBoard/issues"
      },
      {
        icon: "git-pull-request",
        title: "Contribua com Código",
        description: "Fork o projeto e submeta um Pull Request",
        action: "🚀 Fazer Fork",
        link: "https://github.com/xulioguimaraes/XGBoard/fork"
      }
    ];

    return (
      <React.Fragment>
        <section className="section" id="contact">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <h2 className="fw-bold">📞 Suporte & Contribuição</h2>
                <p className="text-muted font-size-18">
                  Entre em contato conosco ou contribua para tornar o XGBoard ainda melhor.
                  Toda ajuda é bem-vinda!
                </p>
              </Col>
            </Row>

            <Row className="align-items-center">
              <Col lg={6}>
                <div className="me-lg-4">
                  <img
                    src={contact}
                    alt="Contato XGBoard"
                    className="img-fluid d-block mx-auto"
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div className="ms-lg-4 mt-lg-0 mt-5">
                  {/* Project Information */}
                  <div className="mb-5">
                    <h4 className="mb-4">📋 Informações do Projeto</h4>
                    <div className="row">
                      {projectInfo.map((info, index) => (
                        <div key={index} className="col-md-6 mb-3">
                          <a href={info.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                            <div className="d-flex align-items-center p-3 bg-light rounded hover-shadow">
                              <div className="icon-mono bg-soft-primary rounded p-2 me-3">
                                <FeatherIcon icon={info.icon} className="icon-sm text-primary" />
                              </div>
                              <div>
                                <small className="text-muted">{info.title}</small>
                                <br />
                                <strong>{info.content}</strong>
                              </div>
                            </div>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact Form */}
                  <div className="bg-light rounded p-4">
                    <h5 className="mb-3">✉️ Envie uma Mensagem</h5>

                    {/* Status Messages */}
                    {submitStatus && (
                      <Alert
                        color={submitStatus === 'success' ? 'success' : 'danger'}
                        className="mb-3"
                      >
                        <FeatherIcon
                          icon={submitStatus === 'success' ? 'check-circle' : 'alert-circle'}
                          className="icon-sm me-2"
                        />
                        {submitMessage}
                      </Alert>
                    )}

                    <Form onSubmit={this.handleSubmit}>
                      <Row>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="name">Nome *</Label>
                            <Input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={this.handleInputChange}
                              placeholder="Seu nome completo"
                              className="form-control"
                              disabled={isSubmitting}
                              required
                            />
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="email">Email *</Label>
                            <Input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={this.handleInputChange}
                              placeholder="seu@email.com"
                              className="form-control"
                              disabled={isSubmitting}
                              required
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <FormGroup>
                        <Label for="subject">Assunto *</Label>
                        <Input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={this.handleInputChange}
                          placeholder="Sobre o que você gostaria de falar?"
                          className="form-control"
                          disabled={isSubmitting}
                          required
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="message">Mensagem *</Label>
                        <Input
                          type="textarea"
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={this.handleInputChange}
                          rows="4"
                          placeholder="Descreva seu problema, sugestão ou feedback..."
                          className="form-control"
                          disabled={isSubmitting}
                          required
                        />
                      </FormGroup>
                      <Button
                        type="submit"
                        color="primary"
                        className="w-100"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="spinner-border spinner-border-sm me-2" role="status">
                              <span className="visually-hidden">Enviando...</span>
                            </div>
                            Enviando...
                          </>
                        ) : (
                          <>
                            <FeatherIcon icon="send" className="icon-sm me-2" />
                            Enviar Mensagem
                          </>
                        )}
                      </Button>
                    </Form>

                    <div className="mt-3 text-center">
                      <small className="text-muted">
                        <FeatherIcon icon="shield" className="icon-sm me-1" />
                        Seus dados são seguros e serão usados apenas para resposta.
                      </small>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>

            {/* Contribution Section */}
            <Row className="justify-content-center mt-5">
              <Col lg={10}>
                <div className="text-center mb-5">
                  <h3 className="mb-3">🤝 Como Contribuir</h3>
                  <p className="text-muted">
                    XGBoard é um projeto de código aberto. Existem várias formas de contribuir:
                  </p>
                </div>
                <Row>
                  {contributionWays.map((way, index) => (
                    <Col lg={3} md={6} key={index} >
                      <Card className="text-center border-0 shadow-sm mb-4 h-100">
                        <CardBody className="p-2" style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",

                        }}>
                          <div style={{
                            width: "150px",
                            height: "150px",
                          }} className="icon-mono bg-soft-primary rounded-circle p-3 mx-auto mb-3 ">
                            <FeatherIcon icon={way.icon} className="icon-md text-primary" />
                          </div>
                          <h5 className="mb-3">{way.title}</h5>
                          <p className="text-muted mb-4">{way.description}</p>
                          <a href={way.link} target="_blank" rel="noopener noreferrer" style={{
                            padding: '8px 10px'
                          }} className="btn btn-outline-primary btn-sm w-100">
                            {way.action}
                          </a>
                        </CardBody>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>

            {/* Support Links */}
            <Row className="justify-content-center mt-5">
              <Col lg={8}>
                <div className="bg-gradient-primary rounded p-4 text-white text-center">
                  <h4 className="text-white mb-3">🔗 Links Úteis</h4>
                  <Row className="justify-content-center">
                    <Col md={4} className="mb-3">
                      <a href="https://github.com/xulioguimaraes/XGBoard/releases/tag/v1.1" target="_blank" rel="noopener noreferrer" className="btn btn-light btn-sm w-100">
                        <FeatherIcon icon="download" className="icon-sm me-1" />
                        Download
                      </a>
                    </Col>
                    <Col md={4} className="mb-3">
                      <a href="https://github.com/xulioguimaraes/XGBoard" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm w-100">
                        <FeatherIcon icon="github" className="icon-sm me-1" />
                        GitHub
                      </a>
                    </Col>
                    <Col md={4} className="mb-3">
                      <a href="https://github.com/xulioguimaraes/XGBoard/blob/main/README.md" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm w-100">
                        <FeatherIcon icon="book" className="icon-sm me-1" />
                        Documentação
                      </a>
                    </Col>
                  </Row>
                  <div className="mt-3">
                    <small className="text-white-70">
                      <FeatherIcon icon="heart" className="icon-sm me-1" />
                      Feito com ❤️ para a comunidade macOS
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
