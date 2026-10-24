// Reproduz a função original, sem rede e sem tentativas de login.
// Uso: node laboratorio/reproduzir_senhas.cjs
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const html = fs.readFileSync(path.join(__dirname,'verificador_de_senhas.html'),'utf8');
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
const elements = {};
const document = {getElementById: id => elements[id] ??= {value:'',textContent:'',style:{}}};
const ctx = vm.createContext({document});
vm.runInContext(script,ctx,{timeout:1000});
const passwords = ["123456", "PortoDaBarra2026", "aluguel", "Chave#Mar", "C@s4!Brr", "ladeira cuscuz farol varanda", "Nuvem!Tijolo!Cacto!Violino"];
const results = passwords.map(senha => {
 document.getElementById('pw').value=senha;
 vm.runInContext('avaliar()',ctx,{timeout:1000});
 return {senha,tamanho:elements.r_tam.textContent,tipos:elements.r_tipos.textContent,combinacoes:elements.r_comb.textContent,tempo:elements.r_tempo.textContent,previsibilidade:elements.r_comum.textContent,classificacao:elements.r_class.textContent};
});
console.log(JSON.stringify(results,null,2));
