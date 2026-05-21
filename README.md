# Python Brasil 2026 - Documentação Completa do Projeto

## Índice
1. [Visão Geral](#visão-geral)
2. [Tecnologias](#tecnologias)
3. [Arquitetura](#arquitetura)
4. [Funcionalidades](#funcionalidades)
5. [Internacionalização](#internacionalização)
6. [Design e UX](#design-e-ux)
7. [Roteamento e Navegação](#roteamento-e-navegação)
8. [Como Executar](#como-executar)
9. [Deploy](#deploy)
10. [Estrutura do Projeto](#estrutura-do-projeto)
11. [Links e Referências](#links-e-referências)

---

## Visão Geral

O **Python Brasil 2026** é o site oficial da maior conferência sobre linguagem de programação Python do Brasil e da América Latina. O evento será realizado em **Florianópolis/SC** de 14 a 19 de outubro de 2026, organizado pela comunidade Python local com o apoio da APyB (Associação Python Brasil).

O site é uma aplicação web SPA (Single Page Application) desenvolvida com React + TypeScript + Vite, oferecendo:

- **Três idiomas**: Português, Inglês e Espanhol
- **Contador regressivo** até o dia do evento
- **Informações completas** sobre o evento, programação, localização e patrocinadores
- **Sistema de FAQ** interativo
- **Design responsivo** otimizado para mobile e desktop
- **Navegação suave** com rolagem para âncoras internas
- **Experiência de loading** com animação temática (cobra)

---

## Tecnologias

### Stack Principal
- **React 19.2.0** - UI library para interfaces interativas
- **TypeScript 5.9.3** - Tipagem estática para código seguro
- **Vite 7.2.4** - Build tool com dev server ultra-rápido
- **React Router 7.12.0** - Roteamento client-side SPA
- **React Router Hash Link 2.4.3** - Links hash para navegação interna

### Internacionalização
- **i18next 25.7.4** - Framework de tradução
- **react-i18next 16.5.3** - Integração React com i18next

### Desenvolvimento
- **ESLint + TypeScript-ESLint** - Linting com regras TypeScript
- **eslint-plugin-react-hooks** - Regras específicas para React
- **eslint-plugin-react-refresh** - Suporte a Hot Module Replacement

### Design
- **Google Fonts**: Inter (textos) e Cascadia Mono (títulos/código)
- **Cores temáticas**: Preto (#0f0f0f), Verde limão (#b7ff06), Verde claro (#E8F4BA)
- **Imagens**: PNG e SVG organizados em pastas temáticas

---

## Arquitetura

### Estrutura Geral
O projeto segue uma arquitetura de **componentes compostos** com separação clara entre lógica, apresentação e dados:

```
App (Raiz)
  └── Layout (Header + Footer + Contador + Outlet)
        ├── Home (Página inicial com 7 seções)
        ├── FAQ (Perguntas frequentes)
        └── Programação (Agenda do evento)
```

### Componentes Principais

#### Layout
É o wrapper que envolve toda a aplicação. Contém:
- **Header**: Menu de navegação lateral + seletor de idioma + logo
- **Contador**: Timer regressivo fixo no topo
- **Outlet**: Área onde o conteúdo da rota atual é renderizado
- **ButtonPrincipal**: Botões flutuantes no rodapé (ingressos, patrocínio)
- **Footer**: Links do site, redes sociais, APyB

#### Página Home
Composta por 7 seções visuais:

1. **Hero Section** - Banner principal com imagem e carrossel de scrolling
2. **Sobre o Evento** - Descrição do Python Brasil 2026, comunidade, APyB
3. **Keynotes** - Palestrantes principais com carrossel interativo
4. **Submissão de Atividades** - CFP (Call for Papers) com links para talks.python.org
5. **Guia da Cidade** - Informações sobre Florianópolis, atividades, clima
6. **Localização** - Hotel do evento, datas, planta, mapa
7. **Patrocinadores** - Níveis de patrocínio (Bronze, Prata, Ouro, Apoiador, Comunidade)

#### FAQ
- Lista de perguntas frequentes expansíveis
- Cada pergunta abre/fecha com animação suave
- Textos traduzidos em 3 idiomas

#### Programação
- Agendamento do evento em preparação
- Painel com datas, horários, atividades
- Filtro por tipo: Palestras, Tutoriais, Debates
- Palestrantes com fotos e bios

### Gerenciamento de Estado
- **useState**: Estado local em componentes (menu aberto, FAQ aberto, idioma)
- **useEffect**: Side effects (contador, loading de 2 segundos)
- **i18n context**: Estado global de idioma via i18next
- **React Router state**: Roteamento e navegação

---

## Funcionalidades

### 1. Contador Regressivo
Um timer fixo no topo de todas as páginas que conta os dias, horas, minutos e segundos até **15 de outubro de 2026**. Atualiza a cada segundo com formatação visual (000 dias, 00 horas, etc.).

### 2. Menu Lateral (Drawer)
Ao clicar no ícone de menu (hambúrguer), abre um painel lateral fullscreen com:
- Logo e botão de fechar
- Links de navegação (Início, Evento, FAQ, Contato)
- Botões de ação (Comprar Ingressos, Plano de Patrocínio)
- Imagem decorativa de surfista

O menu fecha ao clicar em um link ou no botão fechar. Responsivo: layout diferente para mobile.

### 3. Seletor de Idioma
No header, três opções de linguagem: **BR**, **EN**, **ES**. Ao clicar:
- Muda o contexto i18next
- Atualiza todos os textos da interface
- Destaca a opção selecionada com cor verde

### 4. Carrossel de Scrolling
Carrossel automático infinito com texto alternado:
- "pela comunidade" / "para comunidade"
- Logo miniatura entre os textos
- Animação CSS contínua (150 segundos para completar ciclo)
- Background verde limão (#b7ff06)

### 5. Seção de Keynotes
Swiper interativo com:
- 4 slides de palestrantes
- Dots de seleção clicáveis
- Foto do palestrante + links de redes sociais + bio
- Exemplo: Fernanda Wanderley (UFRJ, UFMG, Google Developer Expert)

### 6. FAQ Interativo
Cada pergunta funciona como um acordeão:
- Clique para expandir/recolher
- Seta animada (rotação 180°)
- Texto aparece com transição suave de altura e opacidade
- Border verde decorativa

### 7. Painel de Programação
Exibe a agenda do evento organizada por dias:
- Cada dia lista atividades com horário, duração, nível e tipo
- Cards com título, descrição e palestrantes
- Filtro por categoria (Palestras, Tutoriais, Debates)
- Dados em JSON com suporte multi-idioma

### 8. Tela de Loading
Ao abrir o site, exibe uma tela de carregamento por 2 segundos:
- Imagem SVG animada de cobra
- Texto "Carregando..."
- Animação de slide contínuo
- Posição fixa com z-index alto

### 9. Botões Flutuantes
No rodapé, dois botões fixos:
- "Comprar Ingressos" → Link externo para ingressos.python.org.br
- "Plano de Patrocínio" → Link para canva com plano de patrocínio

Desaparecem em telas menores que 800px.

---

## Internacionalização

O projeto suporta **3 idiomas** com tradução completa:

### Português (br) - Idioma padrão
- Todos os textos em português brasileiro
- Fallback caso nenhum idioma seja selecionado

### Inglês (en)
- Tradução completa para inglês
- Mantém mesma estrutura de chaves

### Espanhol (es)
- Tradução completa para espanhol
- Mantém mesma estrutura de chaves

### Como funciona
- **useTranslation()**: Hook que fornece `t()` e `i18n`
- **t("chave.caminho")**: Retorna texto traduzido
- **Trans**: Componente para tradução de HTML inline (usado em spans coloridos)
- **Arrays**: Chaves como `faq.perguntas[]` retornam arrays de objetos
- **Placeholders**: Tags `<1>` são substituídas por spans coloridos na tradução

Exemplo de uso:
```typescript
const { t } = useTranslation();
p<p>{t("home.section2.paragrafo1")}</p>
```

---

## Design e UX

### Paleta de Cores
- **Fundo escuro** (#0f0f0f): Usado nas seções principais
- **Verde limão** (#b7ff06): Cor de destaque, botões, elementos importantes
- **Verde claro** (#E8F4BA): Seções alternativas, fundo de cards
- **Aliceblue** (#f0f8ff): Texto claro sobre fundo escuro
- **Roxo** (#c95fb4): Destaque em textos com spans (nomes do evento, cidade)

### Tipografia
- **Inter**: Fonte sans-serif para textos corridos e botões
- **Cascadia Mono**: Fonte monospace para títulos, legendas e elementos de código

### Responsividade
O site é **mobile-first** com breakpoints em:
- 250px: Layout ultra-comprimido
- 400px: Contador em wrap
- 500px: Swiper track mais largo
- 600px: Layout de cards
- 650px: Header reorganizado para mobile
- 760px: Footer links em wrap
- 800px: Menu e botões adaptados
- 1000px: Layout desktop completo

### Animações
- **Loading**: Cobra animada com slide infinito
- **Menu**: Transição de translateX (0.3s)
- **FAQ**: Transição de altura, opacidade e rotação de seta
- **Carrossel**: Animação CSS de scroll contínuo

### Experiência do Usuário
- **Loading de 2s**: Tela de carregamento com animação antes do conteúdo
- **Navegação suave**: HashLink faz scroll suave para âncoras
- **Contador fixo**: Sempre visível no topo
- **CTAs fixos**: Botões de ação sempre acessíveis no rodapé
- **Menu intuitivo**: Ícone → painel lateral → links

---

## Roteamento e Navegação

### Rotas
```
/                              → Home (com Layout)
/perguntas_frequentes          → FAQ
/programacao                   → Programação
```

### Navegação Interna
Usa `HashLink` para links âncora dentro da mesma página:
- `/#O_EVENTO` → Rola para elemento com id="O_EVENTO"
- `/#HOME` → Rola para topo
- `/#SUBMISSAO_DE_ATIVIDADES` → Rola para seção de submissão
- `/#PATROCINADORES` → Rola para patrocinadores
- `/#CONTATO_footer` → Rola para rodapé

### Navegação entre Páginas
- `<Link to="/">` → Home
- `<Link to="/perguntas_frequentes">` → FAQ
- Links externos abrem em nova aba via `target="_blank"`

---

## Como Executar

### Pré-requisitos
- Node.js 18+ instalado
- npm (visto no package.json)

### Instalação
```bash
cd c:\Users\Pichau\Desktop\Py's\pybr2026
npm install
```

### Desenvolvimento
```bash
npm run dev
```
- Servidor em http://localhost:5173
- Hot reload automático
- Fast Refresh via Vite

### Build
```bash
npm run build
```
- Gera pasta `dist/` otimizada
- Pronto para deploy

### Preview
```bash
npm run preview
```
- Testa o build localmente

### Linting
```bash
npm run lint
```

---

## Deploy

### GitHub Pages
Usa `gh-pages` para publicar no GitHub Pages:

```bash
npm run deploy
```

Ou via script Windows `deploy.bat`:
```batch
npm run build
cd dist && copy index.html 404.html
cd .. && npm run deploy
```

O site será acessível em: **https://2026.pythonbrasil.org.br/**

### Configuração
- `base: '/'` no vite.config.ts para GitHub Pages
- `404.html` criado automaticamente no deploy
- gh-pages hospeda a pasta `dist/`

---

## Estrutura do Projeto

```
pybr2026/
├── config/                     # Configurações de build
│   ├── tsconfig.json
│   ├── tsconfig.app.json
│   ├── tsconfig.node.json
│   ├── vite.config.ts
│   └── eslint.config.js
├── src/
│   ├── App.tsx                  # Raiz: rotas + loading
│   ├── main.tsx                 # Ponto de entrada
│   ├── i18n.ts                  # Configuração de idiomas
│   ├── links.ts                 # Links constantes
│   ├── Layout.tsx               # Layout wrapper
│   ├── components/              # Componentes reutilizáveis
│   │   ├── Header.tsx           # Cabeçalho + menu + idioma
│   │   ├── Footer.tsx           # Rodapé + redes sociais
│   │   ├── Contador.tsx         # Contador regressivo
│   │   ├── Carregamento.tsx     # Tela de loading
│   │   ├── Carrossel.tsx        # Carrossel de scrolling
│   │   ├── SimpleSwiper.tsx     # Swiper para keynotes
│   │   ├── slide.tsx            # Slide de keynote
│   │   ├── ButtonPrincipal.tsx  # Botões flutuantes
│   │   └── PainelDaProgramacao.tsx # Painel de agenda
│   ├── pages/
│   │   ├── home/
│   │   │   ├── Home.tsx         # Página inicial
│   │   │   └── section/         # 7 seções da home
│   │   ├── faq/
│   │   │   ├── Faq.tsx          # Página FAQ
│   │   │   └── FaqQuestion.tsx  # Pergunta expansível
│   │   └── programacao/
│   │       └── Programacao.tsx  # Página de programação
│   └── styles/                  # Arquivos CSS de cada componente
├── public/img/                  # Imagens do projeto
├── index.html                   # HTML principal
├── package.json                 # Dependências
├── deploy.bat                   # Script de deploy Windows
├── script.js                    # Script vanilla fallback
├── style.css                    # Estilos globais
└── TODO                         # Tarefas pendentes
```

---

## Links e Referências

### Site e Evento
- **Site oficial**: https://2026.pythonbrasil.org.br/
- **Ingressos**: https://ingressos.python.org.br/pybr/
- **CFP (Call for Papers)**: https://talks.python.org.br/pybr26/cfp
- **Plano de Patrocínio**: https://www.canva.com/design/DAG4CpYjEEA/

### Redes Sociais
- Instagram: https://www.instagram.com/pythonbrasil/
- LinkedIn: https://www.linkedin.com/company/apyb/
- Facebook: https://www.facebook.com/pythonbrasil/
- X (Twitter): https://x.com/pythonbrasil
- Bluesky: https://bsky.app/profile/pythonbrasil.bsky.social
- YouTube: https://www.youtube.com/@pythonbrasiloficial
- Flickr: https://www.flickr.com/photos/pythonbrasil/
- E-mail: brasil@python.org.br

### Comunidade
- APyB: https://www.python.org.br/
- Código de Conduta: https://www.python.org.br/codigo-de-conduta/

---

## Créditos

Site desenvolvido para a comunidade Python Brasil 2026, organizado pela comunidade Python de Florianópolis/SC com o apoio da APyB (Associação Python Brasil).

A edição de 2026 reúne pessoas desenvolvedoras, entusiastas, pesquisadoras e empresas para compartilhar conhecimento, experiências e fortalecer a comunidade Python no Brasil e na América Latina.
