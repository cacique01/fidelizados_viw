(function () {
const { PERFIL, CONTEUDO, RANKING } = window.DEMO;

// VERSÃO DEMONSTRATIVA: sem login, sem Firebase, sem API. Tudo é estático e fictício.
const $ = (id) => document.getElementById(id);
const area = $("area");
const menuToggle = $("menu-toggle");
const topbarNav = $("topbar-nav");

function fecharMenu() {
  topbarNav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
  menuToggle.title = "Abrir menu";
}

function mostrarPagina(nome) {
  const pagina = document.getElementById(`page-${nome}`) ? nome : "inicio";
  document.querySelectorAll("[data-page-view]").forEach((view) => {
    view.classList.toggle("is-active", view.dataset.pageView === pagina);
  });
  topbarNav.querySelectorAll("[data-page]").forEach((link) => {
    if (link.dataset.page === pagina) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  fecharMenu();
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (pagina === "ranking") renderizarRanking(RANKING);
}

menuToggle.addEventListener("click", () => {
  const aberto = menuToggle.getAttribute("aria-expanded") !== "true";
  topbarNav.classList.toggle("is-open", aberto);
  menuToggle.setAttribute("aria-expanded", String(aberto));
  menuToggle.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
  menuToggle.title = aberto ? "Fechar menu" : "Abrir menu";
});

document.addEventListener("click", (event) => {
  const link = event.target.closest("[data-page]");
  if (!link) return;
  event.preventDefault();
  const pagina = link.dataset.page;
  history.pushState({ page: pagina }, "", `#${pagina}`);
  mostrarPagina(pagina);
});
document.addEventListener("keydown", (e) => { if (e.key === "Escape") fecharMenu(); });
window.addEventListener("popstate", () => mostrarPagina(location.hash.slice(1) || "inicio"));

// Guias: [arquivo, imagem, nome]
const GUIAS = [
  ["acerola.pdf", "acerola.jpg", "Acerola"],
  ["atapinha.pdf", "pinha.jpg", "Ata Pinha"],
  ["cocoana.pdf", "cocoanao.jpg", "Coco Anão"],
  ["cupuacu.pdf", "cupuacu.jpg", "Cupuaçu"],
  ["goiaba.pdf", "goiaba.jpeg", "Goiaba"],
  ["limao.pdf", "limao.jpeg", "Limão"],
  ["maracuja.pdf", "maracuja.jpg", "Maracujá"],
  ["pimenta.pdf", "pimenta.jpeg", "Pimenta"],
  ["primavera.pdf", "primavera.jpeg", "Primavera"],
  ["rosadodeserto.pdf", "rosadodeserto.jpeg", "Rosa do Deserto"],
  ["samambaia.pdf", "samambaia.jpeg", "Samambaia"],
  ["videira.pdf", "videira.jpeg", "Videira"],
];

const PRODUTOS = {
  frutifera: {
    nome: "Frutífera Premium",
    indicacoes: ["1 a 2 vasos", "Jardim pequeno", "Jardim médio", "Jardim grande", "Horta + jardim", "Produção doméstica"],
    precos: [12, 35, 120, 190, 290, 420],
  },
  comum: {
    nome: "Turbinado Comum",
    indicacoes: ["Plantas ornamentais", "Canteiro pequeno", "Jardim médio", "Jardim grande", "Área ampla", "Produção doméstica"],
    precos: [9, 25, 100, 170, 270, 400],
  },
};
const PESOS_PRODUTO = [1, 4, 20, 30, 50, 100];
const IMAGEM_PRODUTO = "img/esterco.svg";
let linhaProduto = "frutifera";

function renderizarPerfil(perfil) {
  $("perfil-nome").textContent = perfil.nome;
  $("perfil-pontos").textContent = perfil.pontos.toLocaleString("pt-BR");
}

function renderizarRanking(clientes) {
  const body = $("community-ranking-body");
  const feedback = $("community-ranking-feedback");
  body.replaceChildren();
  clientes.forEach((cliente, index) => {
    const linha = document.createElement("tr");
    for (const valor of [String(index + 1), cliente.nome, cliente.pontos.toLocaleString("pt-BR")]) {
      const celula = document.createElement("td");
      celula.textContent = valor;
      linha.append(celula);
    }
    if (cliente.nome === PERFIL.nome) linha.style.fontWeight = "800";
    body.append(linha);
  });
  feedback.textContent = `${clientes.length.toLocaleString("pt-BR")} participantes no ranking (dados fictícios).`;
  feedback.className = "community-ranking-feedback is-success";
}

function renderizar(c) {
  $("lote-texto").textContent = c.lote;

  const wrap = $("video-wrap");
  wrap.replaceChildren();
  const aviso = document.createElement("div");
  aviso.className = "preview-placeholder";
  aviso.textContent = "▶ Aqui aparece o vídeo do mês (demonstração: nenhum vídeo configurado).";
  wrap.append(aviso);

  $("btn-grupo").href = "#";
  $("btn-whats").href = "#";
  $("topbar-whats").href = "#";
  for (const id of ["btn-grupo", "btn-whats", "topbar-whats"]) {
    $(id).removeAttribute("target");
    $(id).addEventListener("click", (e) => { e.preventDefault(); alert("Demonstração: este botão abriria o WhatsApp."); });
  }

  const grid = $("pdf-grid");
  grid.replaceChildren();
  for (const [arquivo, img, nome] of GUIAS) {
    const a = document.createElement("a");
    a.className = "pdf-card";
    a.href = `guias/${arquivo}`;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    const im = document.createElement("img");
    im.src = `img/${img}`; im.alt = nome; im.loading = "lazy";
    const d = document.createElement("div");
    d.className = "nome";
    d.append(nome, document.createElement("br"), "Guia PDF");
    a.append(im, d);
    grid.append(a);
  }
  renderizarProdutos();
}

function renderizarProdutos() {
  const grid = $("product-grid");
  const produto = PRODUTOS[linhaProduto];
  for (const botao of document.querySelectorAll("[data-product-line]")) {
    const sel = botao.dataset.productLine === linhaProduto;
    botao.classList.toggle("is-active", sel);
    botao.setAttribute("aria-pressed", String(sel));
  }
  grid.replaceChildren();
  produto.precos.forEach((preco, index) => {
    const peso = PESOS_PRODUTO[index];
    const card = document.createElement("article");
    card.className = "product-card";
    const imagem = document.createElement("img");
    imagem.src = IMAGEM_PRODUTO;
    imagem.alt = `Esterco Turbinado ${produto.nome}`;
    imagem.loading = "lazy";
    const detalhes = document.createElement("div");
    detalhes.className = "product-details";
    const nome = document.createElement("h3");
    nome.textContent = `${peso} kg`;
    const indicacao = document.createElement("p");
    indicacao.textContent = produto.indicacoes[index];
    const valor = document.createElement("strong");
    valor.className = "product-price";
    valor.textContent = preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
    const pedido = document.createElement("a");
    pedido.className = "product-order";
    pedido.href = "#";
    pedido.textContent = "Pedir pelo WhatsApp";
    pedido.addEventListener("click", (e) => { e.preventDefault(); alert("Demonstração: este botão abriria o WhatsApp com o pedido."); });
    detalhes.append(nome, indicacao, valor);
    card.append(imagem, detalhes, pedido);
    grid.append(card);
  });
}

for (const botao of document.querySelectorAll("[data-product-line]")) {
  botao.addEventListener("click", () => { linhaProduto = botao.dataset.productLine; renderizarProdutos(); });
}

// Inicialização: entra direto, sem login
area.hidden = false;
const banner = document.createElement("div");
banner.className = "preview-banner";
banner.setAttribute("role", "status");
banner.textContent = "VERSÃO DE DEMONSTRAÇÃO · somente visualização · todos os dados são fictícios";
area.prepend(banner);
renderizar(CONTEUDO);
renderizarPerfil(PERFIL);

mostrarPagina(location.hash.slice(1) || "inicio");

})();
