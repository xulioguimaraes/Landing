# 🚀 XGBoard Landing Page

Uma landing page moderna e responsiva para o **XGBoard** - O gerenciador de clipboard mais elegante e rápido para macOS.

## 📋 Sobre o XGBoard

XGBoard é um gerenciador de clipboard inteligente desenvolvido especificamente para macOS, oferecendo:

- 🎯 **Atalho Global**: `Cmd+F2` para acesso instantâneo
- 📋 **Histórico Inteligente**: Até 20 itens de clipboard
- 🔍 **Busca Rápida**: Encontre qualquer item digitando
- 🖼️ **Suporte Completo**: Texto, imagens e conteúdo formatado
- ⚡ **Performance Zero**: Não afeta a velocidade do sistema
- 🎨 **Interface Moderna**: Design nativo do macOS
- 🔐 **Privacidade**: Dados ficam apenas no seu Mac

## 🌐 Landing Page

Esta landing page foi desenvolvida em React e apresenta:

### ✨ Seções Principais

- **Hero Section**: Apresentação do XGBoard com CTA principal
- **Recursos**: Principais funcionalidades do aplicativo
- **Demo**: Demonstração das vantagens e diferenciais
- **Instalação**: Métodos de download e instalação
- **Especificações**: Detalhes técnicos e compatibilidade
- **Suporte**: Troubleshooting e solução de problemas
- **Contato**: Formulário de contato e contribuição

### 🎨 Características

- ✅ Design responsivo e moderno
- ✅ Componentes reutilizáveis
- ✅ Navegação suave entre seções
- ✅ Tema claro/escuro
- ✅ Otimizada para SEO
- ✅ Performance otimizada

## 🚀 Tecnologias Utilizadas

- **React 18.3.1** - Framework principal
- **React Router DOM** - Navegação
- **Bootstrap 5.3.3** - Sistema de grid e componentes
- **Reactstrap** - Componentes Bootstrap para React
- **Feather Icons** - Ícones elegantes
- **SASS** - Pré-processador CSS
- **EmailJS** - Integração de formulário de contato

## 🛠️ Instalação e Execução

### Pré-requisitos

- Node.js 16+ 
- npm ou yarn

### Executar localmente

```bash
# Clone o repositório
git clone [URL_DO_REPOSITORIO]
cd xgboard-landing

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm start
```

O projeto estará disponível em `http://localhost:3000`

### Build para produção

```bash
# Gerar build otimizado
npm run build
```

## 📁 Estrutura do Projeto

```
src/
├── component/           # Componentes reutilizáveis
│   ├── Navbar/         # Navegação
│   ├── Footer/         # Rodapé
│   ├── Services.js     # Seção de recursos
│   ├── Feature.js      # Seção de demo
│   ├── Pricing.js      # Seção de instalação
│   ├── Team.js         # Especificações técnicas
│   ├── Blog.js         # Suporte
│   └── Contact.js      # Contato
├── pages/
│   └── Layout1/        # Layout principal
├── assets/             # Imagens, CSS, SCSS
└── config/             # Configurações
```

## 🎯 Customização

### Cores e Tema

As cores principais podem ser alteradas em:
- `src/assets/scss/_variables.scss`
- `src/assets/scss/_theme-light.scss`
- `src/assets/scss/_theme-dark.scss`

### Conteúdo

Para alterar o conteúdo das seções, edite os componentes em `src/component/`

### Navegação

Os itens de navegação estão definidos em `src/pages/Layout1/Layout_1.js`

## 📞 Suporte

Para dúvidas sobre esta landing page:

- Abra uma issue no repositório
- Entre em contato através do formulário na página

## 📄 Licença

Este projeto está licenciado sob a MIT License.

---

<div align="center">

**Desenvolvido com ❤️ para a comunidade macOS**

*XGBoard - Seu clipboard nunca mais será o mesmo!* 🚀

</div>
