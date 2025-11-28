document.getElementById("formLogin").addEventListener("submit", function(e) {
    e.preventDefault(); // impede recarregar
    console.log("DEBUG: O valor de 'numero' é:");
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    const emailCorreto1 = "felipe@vaudevilla.com";
    const senhaCorreta1 = "1391392522033";
    const emailCorreto2 = "iago@vaudevilla.com";
    const senhaCorreta2 = "1291392522038";

    if (!email.includes("@") || !email.includes(".")) {
        alert("Digite um email válido!");
        return;
    }
    
    const loginValido =
        (email === emailCorreto1 && senha === senhaCorreta1) ||
        (email === emailCorreto2 && senha === senhaCorreta2);

    if (loginValido) {
        alert("Login realizado com sucesso!");
        window.location.href = "loja.html"; // redireciona
    } else {
        alert("Email ou senha incorretos!");
    }
});
