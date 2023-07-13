const form = document.getElementById('form-atividade');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeAtividade = documet.getElementById('nome-atividade');
    const inputNotaAtividade = documet.getElementById('nota-atividade');

    alert(`Atividade: ${inputNomeAtividade.value} - Nota: ${inputNotaAtividade.value}`);
});