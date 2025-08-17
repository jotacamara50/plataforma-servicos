document.addEventListener('DOMContentLoaded', function() {

    // --- LÓGICA DA PÁGINA DE CADASTRO ---
    const cadastroForm = document.getElementById('cadastroForm');
    if (cadastroForm) {
        const tipoUsuarioRadios = document.querySelectorAll('input[name="tipoUsuario"]');
        const camposPrestador = document.getElementById('camposPrestador');

        tipoUsuarioRadios.forEach(radio => {
            radio.addEventListener('change', function() {
                if (this.value === 'prestador') {
                    camposPrestador.classList.remove('hidden');
                } else {
                    camposPrestador.classList.add('hidden');
                }
            });
        });

        cadastroForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Impede o envio real do formulário
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('cad-email').value;
            const senha = document.getElementById('cad-senha').value;
            const errorDiv = document.getElementById('cadastroError');

            if (!nome || !email || !senha) {
                errorDiv.textContent = "Por favor, preencha todos os campos obrigatórios.";
                return;
            }

            // Simulação de sucesso
            alert('Cadastro realizado com sucesso! (Simulação)\nVocê será redirecionado para a página de login.');
            window.location.href = 'index.html'; // Redireciona o usuário
        });
    }

    // --- LÓGICA DA PÁGINA DE LOGIN ---
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Impede o envio real
            const email = document.getElementById('email').value;
            const senha = document.getElementById('senha').value;
            const errorDiv = document.getElementById('loginError');

            // Validação simples (apenas para o protótipo)
            if (email === "cliente@teste.com" && senha === "1234") {
                // Usamos localStorage para "lembrar" que o usuário está logado nesta simulação
                localStorage.setItem('usuarioLogado', 'Cliente de Teste');
                window.location.href = 'painel.html';
            } else if (email === "admin@teste.com" && senha === "admin") {
                localStorage.setItem('usuarioLogado', 'Administrador');
                window.location.href = 'painel.html';
            } else {
                errorDiv.textContent = "Email ou senha inválidos. (Tente: cliente@teste.com | senha: 1234)";
            }
        });
    }

    // --- LÓGICA DO PAINEL ---
    const welcomeMessage = document.getElementById('welcomeMessage');
    if (welcomeMessage) {
        // Verifica se há um usuário "logado" no localStorage
        const usuario = localStorage.getItem('usuarioLogado');
        if (usuario) {
            welcomeMessage.textContent = `Bem-vindo(a), ${usuario}!`;
        } else {
            // Se alguém acessar o painel sem "logar", redireciona
            alert("Você precisa fazer login para acessar esta página.");
            window.location.href = 'index.html';
        }
    }
    
    const logoutBtn = document.getElementById('logoutBtn');
    if(logoutBtn) {
        logoutBtn.addEventListener('click', function(e){
            e.preventDefault();
            // Limpa a simulação de login
            localStorage.removeItem('usuarioLogado');
            alert("Você saiu da sua conta.");
            window.location.href = 'index.html';
        });
    }
});
