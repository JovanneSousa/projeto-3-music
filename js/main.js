$(document).ready(function(){
    $('#tel').mask('(99)99999-9999',{
        placeholder: '(__)_____-____'
    });
    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true
            },
            txt:{
                required: true
            }
        },
        messages:{
            nome:'Insira um nome válido',
            email:'Insira um email válido',
            txt:'Insira sua mensagem'
        }
    })
})