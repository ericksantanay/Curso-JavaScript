
    const inputEnvio = document.getElementById('envioFoto');
    const fotoPerfil = document.getElementById('fotoPerfil');

    // 1. Quando clicar na imagem, abre o input file escondido
    function acionarInput() {
        inputEnvio.click();
    }

    // 2. Quando o usuário escolher um arquivo
    inputEnvio.addEventListener('change', function () {
        const arquivo = this.files[0];

        if (arquivo) {
            const leitor = new FileReader();

            // 3. Quando o arquivo TERMINAR de ser lido
            leitor.onload = function (e) {
                const imagemEmTexto = e.target.result;

                // Mostra a imagem na tela
                fotoPerfil.src = imagemEmTexto;

                // 🔥 SALVA NO LOCALSTORAGE
                localStorage.setItem('fotoPerfil', imagemEmTexto);
            };

            // 4. Inicia a leitura do arquivo
            leitor.readAsDataURL(arquivo);
        }
    });

    // 5. Quando o app abrir, verifica se já existe foto salva
    const fotoSalva = localStorage.getItem('fotoPerfil');

    if (fotoSalva) {
        fotoPerfil.src = fotoSalva;
    }

