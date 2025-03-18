//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []; // Array para armazenar os nomes dos amigos

        function adicionarAmigo() {
            let nomeInput = document.getElementById("amigo");
            let nome = nomeInput.value.trim(); // Remove espaços extras

            if (nome === "") {
                alert("Por favor, insira um nome."); // Validação de entrada vazia
                return;
            }

            amigos.push(nome); // Adiciona ao array
            atualizarLista(); // Atualiza a exibição da lista
            nomeInput.value = ""; // Limpa o campo de entrada
        }

        function atualizarLista() {
            let lista = document.getElementById("listaAmigos");
            lista.innerHTML = ""; // Limpa a lista antes de atualizar

            amigos.forEach((amigo, index) => {
                let li = document.createElement("li");
                li.textContent = amigo;
                lista.appendChild(li);
            });
        }

        function sortearAmigo() {
            if (amigos.length === 0) {
                alert("A lista está vazia! Adicione amigos antes de sortear.");
                return;
            }

            let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
            document.getElementById("resultado").textContent = `🎉 O amigo secreto é: ${sorteado}! 🎉`;
        }