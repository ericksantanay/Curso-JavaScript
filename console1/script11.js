//Função de senha forte

let senha = "Erickzin8373";

let temNumero = /\d/.test(senha);           // verifica se tem número
let temMaiuscula = /[A-Z]/.test(senha);     // verifica se tem maiúscula

if (senha.length < 6) {
    console.log("Senha Fraca!");
} 
else if (senha.length >= 6 && temNumero) {
    console.log("Senha Média!");
} 
else if (senha.length >= 8 && temNumero && temMaiuscula) {
    console.log("Senha Forte!!");
} 
else {
    console.log("Senha não se enquadra nas regras.");
}
