// Todos os dados abaixo são FICTÍCIOS. Nomes, telefones, pontos e links não pertencem a pessoas reais.
const PERFIL = { nome: "Maria Demonstração", pontos: 185 };

const CONTEUDO = {
  lote: "Lote: DEMO01 · Novembro/2026",
  grupoUrl: "#",
  suporteWhatsapp: "",
};

const RANKING = [
  { nome: "Helena Souza", pontos: 540 },
  { nome: "Rafael Monteiro", pontos: 410 },
  { nome: "Beatriz Lima", pontos: 365 },
  { nome: "Joaquim Alves", pontos: 290 },
  { nome: "Carla Nogueira", pontos: 245 },
  { nome: "Maria Demonstração", pontos: 185 },
  { nome: "Tiago Ferreira", pontos: 160 },
  { nome: "Luciana Prado", pontos: 120 },
  { nome: "Otávio Ramos", pontos: 85 },
  { nome: "Patrícia Duarte", pontos: 40 },
];

// Telefones fictícios (formato reservado de exemplo)
const CLIENTES_ADMIN = [
  { nome: "Helena Souza", telefone: "(65) 90000-0001", pontos: 540, ativo: true },
  { nome: "Rafael Monteiro", telefone: "(65) 90000-0002", pontos: 410, ativo: true },
  { nome: "Beatriz Lima", telefone: "(65) 90000-0003", pontos: 365, ativo: true },
  { nome: "Joaquim Alves", telefone: "(65) 90000-0004", pontos: 290, ativo: true },
  { nome: "Carla Nogueira", telefone: "(65) 90000-0005", pontos: 245, ativo: true },
  { nome: "Maria Demonstração", telefone: "(65) 90000-0006", pontos: 185, ativo: true },
  { nome: "Tiago Ferreira", telefone: "(65) 90000-0007", pontos: 160, ativo: true },
  { nome: "Luciana Prado", telefone: "(65) 90000-0008", pontos: 120, ativo: false },
  { nome: "Otávio Ramos", telefone: "(65) 90000-0009", pontos: 85, ativo: true },
  { nome: "Patrícia Duarte", telefone: "(65) 90000-0010", pontos: 40, ativo: true },
];

const MOVIMENTACOES = [
  { data: "18/11/2026", nome: "Helena Souza", pontos: 50, motivo: "Campanha de novembro" },
  { data: "15/11/2026", nome: "Maria Demonstração", pontos: 35, motivo: "Compra de 20 kg" },
  { data: "12/11/2026", nome: "Rafael Monteiro", pontos: 100, motivo: "Indicação de amigo" },
  { data: "09/11/2026", nome: "Carla Nogueira", pontos: 45, motivo: "Compra de 30 kg" },
  { data: "04/11/2026", nome: "Tiago Ferreira", pontos: 20, motivo: "Bônus de boas-vindas" },
];

window.DEMO = { PERFIL, CONTEUDO, RANKING, CLIENTES_ADMIN, MOVIMENTACOES };
