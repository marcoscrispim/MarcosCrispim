import { Cliente } from "./cliente.js";
import { ContaCorrente } from "./contaCorrente.js";
import { ContaPoupanca } from "./contaPoupanca.js";
import { Conta } from "./contas.js";

const cliente1 = new Cliente("Ricardo",11122233312);
const cliente2 = new Cliente("Bruno",22233333312); 


const conta1 = new Conta(0, cliente1, 1001);

conta1.depositar(500)
const conta2 = new Conta(102, cliente2);

const contaPoupanca = new Conta(50, cliente1, 1001);

console.log(contaPoupanca);
console.log(conta1)




