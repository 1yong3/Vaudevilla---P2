const botoes = document.querySelectorAll(".btn_add");
const listaCarrinho = document.getElementById("lista_carrinho");
const totalEl = document.getElementById("total");
const btnFinalizar = document.querySelector(".btn_finalizar");

let total = 0;

// Função para verificar se carrinho está vazio
function carrinhoVazio() {
    return listaCarrinho.children.length === 1 &&
           listaCarrinho.querySelector(".vazio");
}

botoes.forEach(btn => {
    btn.addEventListener("click", () => {
        const nome = btn.getAttribute("data-nome");
        const preco = parseFloat(btn.getAttribute("data-preco"));

        // Remove mensagem "vazio"
        const vazio = document.querySelector(".vazio");
        if (vazio) vazio.remove();

        const li = document.createElement("li");
        li.textContent = `${nome} - R$ ${preco.toFixed(2)}`;

        // Botão remover
        const removerBtn = document.createElement("button");
        removerBtn.textContent = "Remover";
        removerBtn.style.marginLeft = "10px";
        removerBtn.style.cursor = "pointer";
        removerBtn.style.backgroundColor = "red";
        removerBtn.style.padding = "5px 10px";
        removerBtn.style.color = "white";
        removerBtn.style.borderRadius = "10px";
        removerBtn.style.border = "none";

        removerBtn.addEventListener("click", () => {
            listaCarrinho.removeChild(li);
            total -= preco;
            totalEl.innerText = total.toFixed(2);

            // Se carrinho ficar vazio → volta mensagem
            if (listaCarrinho.children.length === 0) {
                const vazioLi = document.createElement("li");
                vazioLi.textContent = "Ainda não há pedidos.";
                vazioLi.classList.add("vazio");
                listaCarrinho.appendChild(vazioLi);
            }
        });

        li.appendChild(removerBtn);
        listaCarrinho.appendChild(li);

        total += preco;
        totalEl.innerText = total.toFixed(2);
    });
});

// FINALIZAR PEDIDO
btnFinalizar.addEventListener("click", () => {

    if (carrinhoVazio()) {
        alert("O carrinho está vazio! Adicione um item primeiro.");
        return;
    }

    alert("Pedido finalizado!");

    // Limpar carrinho
    listaCarrinho.innerHTML = `<li class="vazio">Ainda não há pedidos.</li>`;
    total = 0;
    totalEl.textContent = "0,00";
});
