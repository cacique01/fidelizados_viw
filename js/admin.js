(function () {
const { CLIENTES_ADMIN, MOVIMENTACOES } = window.DEMO;

// VERSÃO DEMONSTRATIVA: nada é enviado nem salvo. Dados fictícios.
const form = document.getElementById("admin-points-form");
const phoneInput = document.getElementById("customer-phone");
const feedback = document.getElementById("admin-feedback");

phoneInput.addEventListener("input", (event) => {
  const d = event.target.value.replace(/\D/g, "").slice(0, 11);
  event.target.value = d.length > 7 ? `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}` : d.length > 2 ? `(${d.slice(0, 2)}) ${d.slice(2)}` : d;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  feedback.className = "admin-feedback is-success";
  feedback.textContent = "Demonstração: em produção os pontos seriam somados ao saldo. Nada foi salvo aqui.";
});

function celula(tr, texto) {
  const td = document.createElement("td");
  td.textContent = texto;
  tr.append(td);
}

const corpoClientes = document.getElementById("demo-clientes");
for (const c of CLIENTES_ADMIN) {
  const tr = document.createElement("tr");
  celula(tr, c.nome);
  celula(tr, c.telefone);
  celula(tr, c.pontos.toLocaleString("pt-BR"));
  celula(tr, c.ativo ? "Ativo" : "Desativado");
  corpoClientes.append(tr);
}

const corpoMov = document.getElementById("demo-movimentacoes");
for (const m of MOVIMENTACOES) {
  const tr = document.createElement("tr");
  celula(tr, m.data);
  celula(tr, m.nome);
  celula(tr, `+${m.pontos}`);
  celula(tr, m.motivo);
  corpoMov.append(tr);
}

})();
