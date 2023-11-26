
    function mostrarMensagem() {
       // Adicione lógica adicional aqui, se necessário
       window.alert("Formulário enviado com sucesso!");

       // Limpar os campos do formulário após o alerta
       limparCampos();
   }   

   function limparCampos() {
       // Obter referências aos campos do formulário
       var nomeCampo = document.getElementById("exampleFormControlInput1");
       var telefoneCampo = document.getElementById("exampleFormControlInput2");
       var emailCampo = document.getElementById("exampleFormControlInput3");
       var mensagemCampo = document.getElementById("exampleFormControlTextarea1");

       // Limpar os valores dos campos
       nomeCampo.value = "";
       telefoneCampo.value = "";
       emailCampo.value = "";
       mensagemCampo.value = "";
   }