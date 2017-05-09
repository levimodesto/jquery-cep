$(document).ready(function(){
    $('.modal-trigger').leanModal();
    $("#search").click(function(){
        var getVal = $("#inputValue").val();
        $.ajax({
            url: "http://api.postmon.com.br/v1/cep/" + getVal,
            beforeSend: function() {
                $('#loading').append('carregando...');
            },
            success: function (data) {
                limparDados();
                $('.cep').append("CEP: " + data.cep);
                $('.logradouro').append("Logradouro: " + data.logradouro);
                $('.bairro').append("Bairro: " + data.bairro);
                $('.cidade').append("Cidade: " + data.cidade);
                $('.estado').append("Estado: " + data.estado);
            },
            error: function(xhr, ajaxOptions, thrownError) { // if error occured
                limparDados();
                $('.cep').append("CEP inválido");
            },
            complete: function() {
                $('#loading').empty();
            }
        });
    });
    function limparDados(){
        $('.cep').empty();
        $('.logradouro').empty();
        $('.bairro').empty();
        $('.cidade').empty();
        $('.estado').empty();
        $('#clear').empty();
    }
});