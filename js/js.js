// Escolha  de cpf ou cnpj
function CpfCnpj(tipo) {
    if(tipo == "1"){
        document.getElementById("cpf").style.display = "inline";
        document.getElementById("cnpj").style.display = "none";
        document.getElementById("cnpj-radio").checked = false;
    }
    else if(tipo=="2"){
        document.getElementById("cpf").style.display = "none";
        document.getElementById("cnpj").style.display = "inline";
        document.getElementById("cpf-radio").checked = false;
    }
}


// validação cpf
function formataCPF(cpf) {
    const cpfAlvo = cpf //valor final que será passado na função
    const cpfDigitado = cpf.value   // valor definido pelo usuario
    let cpfNovo; // função que vai receber o cpfDigitado e fazer sua formatação

        cpfNovo = cpfDigitado.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, 
            function( regex, arg1, arg2, arg3, arg4 ) {
                    return arg1 + '.' + arg2 + '.' + arg3 + '-' + arg4;
            })  
    cpfAlvo.value = cpfNovo; 
    } 
function VerificaCPF() {
    strCpf = document.getElementById('cpf').value;
    var soma = 0;
    var resto;
    // retira o . e -
    strCpf= strCpf.replace(".", "")
    strCpf= strCpf.replace(".", "")
    strCpf= strCpf.replace("-", "")

    //verifica os cpf errados mais comuns
    if (strCpf == "00000000000" ||strCpf == "11111111111" ||strCpf == "22222222222" ||strCpf == "33333333333" ||strCpf == "44444444444" ||strCpf == "55555555555" ||strCpf == "66666666666" ||strCpf == "77777777777" ||strCpf == "88888888888" ||strCpf == "99999999999" || strCpf.length != 11) {
        alert("CPF Inválido");
        return false;
    }
    // verifica conforme a receita federal
    for (i = 1; i <= 9; i++) {
        soma = soma + parseInt(strCpf.substring(i - 1, i)) * (11 - i);
    }
    resto = (soma*10 )% 11;
    //cpf verdadeiro
    if (resto == 10 || resto == 11) {
        resto = 0;
        formataCPF(cpf)
    }
   
    if (resto != parseInt(strCpf.substring(9, 10))) {
        alert("CPF Inválido");
        return false;
    }
    soma = 0;
    for (i = 1; i <= 10; i++) {
        soma = soma + parseInt(strCpf.substring(i - 1, i)) * (12 - i);
    }
    resto = (soma*10) % 11;
    //cpf verdadeiro
    if (resto == 10 || resto == 11 ) {
        resto = 0;
        formataCPF(cpf)
    } 
    if (resto != parseInt(strCpf.substring(10, 11))) {
        alert("CPF Inválido");
        return false;
    }
    //cpf verdadeiro
    else{
        formataCPF(cpf)
        return true;
    }
}

//cnpj
function formataCNPJ(cnpj) {
    var cnpjAlvo = cnpj //valor final que será passado na função
    var cnpjDigitado = cnpj.value   // valor definido pelo usuario
    var cnpjNovo; // função que vai receber o cnpjDigitado e fazer sua formatação

        cnpjNovo = cnpjDigitado.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, 
            function( regex, arg1, arg2, arg3, arg4, arg5 ) {
                    return arg1 + '.' + arg2 + '.' + arg3 + '/' + arg4 + '-' + arg5;
            })  
    cnpjAlvo.value = cnpjNovo; 
     } 

function validarCNPJ(cnpj) {
    cnpj = document.getElementById('cnpj').value;
    cnpj = cnpj.replace(".","");
    cnpj = cnpj.replace(".","");
    cnpj = cnpj.replace("/","");
    cnpj = cnpj.replace("-","");
 
     if(cnpj == ''){
     alert("CNPJ Inválido1")
     return false;
     }
    if (cnpj.length != 14){
        console.log(cnpj.length)
        console.log(cnpj)
        alert("CNPJ Inválido 2")
        return false;
    }
    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" || 
        cnpj == "11111111111111" || 
        cnpj == "22222222222222" || 
        cnpj == "33333333333333" || 
        cnpj == "44444444444444" || 
        cnpj == "55555555555555" || 
        cnpj == "66666666666666" || 
        cnpj == "77777777777777" || 
        cnpj == "88888888888888" || 
        cnpj == "99999999999999"){
        alert("CNPJ Inválido 3")
        return false;
     }    
    // Valida DVs
    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0,tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2){
            pos = 9;
        }
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0)){
        alert("CNPJ Inválido 4")
        return false;
    }
           
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if(pos < 2){
            pos = 9;
        }
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1)){
        alert("CNPJ Inválido 5")
        return false;
    }   
    
    console.log(cnpj)
    formataCNPJ(cnpj)
    return true;
    
}

   //validando E-mail
   function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@")); //antes do @
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length); // depois do @
    if ((usuario.length >=1) && 
        (dominio.length >=3) &&
        (usuario.search("@")==-1) && //usuario / dominio não pode conter @
        (dominio.search("@")==-1) && 
        (usuario.search(" ")==-1) && //usuario / dominio sem espaço em branco
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) && //tem que ter ponto no dominio
        (dominio.indexOf(".") >=1)&&  // posição do 1° ponto tem que ser maior ou igual a 1 espaço, pois posição 0> deve ser ocupada por um caracter
        // tedm que ter caracter depois do ultimo ponto
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
    }
    else{
        alert("E-mail invalido");
    }
}

