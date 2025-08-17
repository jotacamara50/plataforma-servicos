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
            e.preventDefault();
            alert('Cadastro realizado com sucesso! (Simulação)\nVocê será redirecionado para a página de login.');
            window.location.href = 'index.html';
        });
    }

    // --- LÓGICA DA PÁGINA DE LOGIN ---
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const senha = document.getElementById('senha').value;
            const errorDiv = document.getElementById('loginError');

            // Validação para CLIENTE
            if (email === "cliente@teste.com" && senha === "1234") {
                localStorage.setItem('usuarioLogado', 'Cliente de Teste');
                window.location.href = 'painel.html';
            
            // Validação para PRESTADOR (NOVO)
            } else if (email === "prestador@teste.com" && senha === "1234") {
                localStorage.setItem('usuarioLogado', 'Prestador de Teste');
                window.location.href = 'painel-prestador.html'; // Redireciona para o painel do prestador
                
            } else {
                errorDiv.textContent = "Email ou senha inválidos. (Tente: cliente@teste.com ou prestador@teste.com | senha: 1234)";
            }
        });
    }

    // --- LÓGICA DOS PAINÉIS (Cliente e Prestador) ---
    const welcomeMessage = document.getElementById('welcomeMessage');
    if (welcomeMessage) {
        const usuario = localStorage.getItem('usuarioLogado');
        if (usuario) {
            // Personaliza a mensagem de boas-vindas
            if (welcomeMessage.closest('body').querySelector('title').textContent.includes('Prestador')) {
                 welcomeMessage.textContent = `Painel do Prestador`; // Mensagem para o prestador
            } else {
                 welcomeMessage.textContent = `Bem-vindo(a), ${usuario}!`; // Mensagem para o cliente
            }
        } else {
            alert("Você precisa fazer login para acessar esta página.");
            window.location.href = 'index.html';
        }
    }
    
    // --- LÓGICA DE LOGOUT (Funciona em ambas as páginas) ---
    const logoutBtn = document.getElementById('logoutBtn');
    if(logoutBtn) {
        logoutBtn.addEventListener('click', function(e){
            e.preventDefault();
            localStorage.removeItem('usuarioLogado');
            alert("Você saiu da sua conta.");
            window.location.href = 'index.html';
        });
    }
});
