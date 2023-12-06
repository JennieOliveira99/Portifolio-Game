//Função do desarme a bomba
function iniciarDesarmamento() {
    // Exibe a mensagem ao clicar no botão
    document.getElementById('mensagem').innerHTML = 'Desarme a bomba...';

    // Desativa o botão após clicar
    document.querySelector('button').disabled = true;

    // Exibe o pop-up com o cronômetro
    document.getElementById('popupCronometro').style.display = 'block';

    // Inicia o cronômetro de 4 segundos
    let segundos = 4; // Reduzido para 4 segundos
    let cronometroPopUp = document.getElementById('cronometroPopUp');

    let cronometroInterval = setInterval(function() {
        let minutos = Math.floor(segundos / 60);
        let segundosRestantes = segundos % 60;

        cronometroPopUp.innerHTML = `${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;

        segundos--;

        if (segundos < 0) {
            // Fecha o pop-up do cronômetro
            document.getElementById('popupCronometro').style.display = 'none';

            // Exibe o pop-up com a imagem após 1 segundo
            setTimeout(function() {
                document.getElementById('popupImagem').style.display = 'block';
            }, 1000);

            // Limpa o intervalo do cronômetro
            clearInterval(cronometroInterval);
        }
    }, 1000);
}


