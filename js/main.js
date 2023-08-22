
/* linhas da tabela tarefas */
let linhasContato = '';

/* indicador de alerta */
let inAlerta = false;
let camposincorretos = 0;

$('#telefone').mask('(00) 00000-0000',{
    placeholder: '(00) 00000-0000'
})

$(document).ready(function () {
  
    inInclui = true;
    
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome completo.', 
            telefone: 'Por favor, informe seu telefone.',
            email: 'Por fafor, informe seu email.'
        },
        submitHandler: function (form) {
            form.submit();
        },
        invalidHandler: function(evento, validador) {
            camposincorretos = validador.numberOfInvalids();
        }
    })
})  

$('form').on('submit', function (e) {
    e.preventDefault();

    /* recupera o form informada */
    const inputNome = $('#nome').val();
    const inputEmail = $('#email').val();
    const inputTelefone = $('#telefone').val();

    if (!inAlerta) {
        incluiContato(inputNome, inputEmail, inputTelefone);
    }

    /* limpa o campo do formulario */ 
    $('#nome').val('');
    $('#email').val('');
    $('#telefone').val('');

})  

function incluiContato(inputNome, inputEmail, inputTelefone) {
    
    /* prepara novo item na tabela */
    const itemTabela = $('<tr></tr>');

    $(`<td>${inputNome}</td>`).appendTo(itemTabela);
    $(itemTabela).appendTo('tbody');

    $(`<td>${inputEmail}</td>`).appendTo(itemTabela);
    $(itemTabela).appendTo('tbody');

    $(`<td>${inputTelefone}</td>`).appendTo(itemTabela);
    $(itemTabela).appendTo('tbody');

}