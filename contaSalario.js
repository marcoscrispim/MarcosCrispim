import { Conta } from "./contas";
export class ContaSalario extends Conta{
    constructor(cliente){
        super(0,this.cliente,100)
    }
    sacar(valor){
        const taxa = 1.01;
    }
}