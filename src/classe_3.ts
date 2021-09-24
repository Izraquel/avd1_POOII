class Funcionarios {
    constructor(
        private _nome: string,
        private _salarioHora: number,
        private _diasTrabalhados: number,
        private _totalFaltasAno: number
    ) {}

    /* nome */
    get nome() { 
        return this._nome; 
    }

    set nome(nome: string) { 
       /*  if(!nome) {
            throw new Error('Nome inválido !')
        } */
        this._nome = nome
    }


    /* salario hora */
    get salarioHora() { 
        return this._salarioHora; 
    }
    
    set salarioHora(salarioHora: number) { 
        this._salarioHora = salarioHora
    }


    /* dias trabalhados*/
    get diasTrabalhados() { 
        return this._diasTrabalhados; 
    }

    set diasTrabalhados(diasTrabalhados: number) {
        this._diasTrabalhados = diasTrabalhados
     }


    /* total de faltas*/
    get totalFaltasAno() {
        return this._totalFaltasAno
    }

    set totalFaltasAno(totalFaltasAno: number) {
        this._totalFaltasAno = totalFaltasAno
     }

     metodoCalcularSalarioBruto() {
         return this._salarioHora * this.diasTrabalhados
     }

     metodoPLR(){
        if(this.totalFaltasAno == 0) {
            return this.metodoCalcularSalarioBruto()
        } else if (this.totalFaltasAno == 1) {
            return this.metodoCalcularSalarioBruto() * 0.94
        } else if (this.totalFaltasAno == 2) {
            return this.metodoCalcularSalarioBruto() * 0.92
        } else if (this.totalFaltasAno == 3) {
            return this.metodoCalcularSalarioBruto() * 0.90
        } else if (this.totalFaltasAno == 4) {
            return this.metodoCalcularSalarioBruto() * 0.88
        } else (this.totalFaltasAno >= 5) 
            return 0
        
     }

     metodoDesconto() {
         return this.metodoCalcularSalarioBruto() - 0.05
     }

     metodoSalarioLiquido() {
         return this.metodoCalcularSalarioBruto() - this.metodoDesconto() + this.metodoPLR()
     }
    
}

const funcionarios = new Funcionarios('Raquel', 80, 180, 8)
console.log(`O funcionário de nome ${funcionarios.nome} tem o salário bruto de ${funcionarios.metodoCalcularSalarioBruto()}, teve ${funcionarios.totalFaltasAno} falta(s) e sua PLR foi
de ${funcionarios.metodoPLR()}.`)

console.log('\n');


/* const funcionarioss = new Funcionarios('Silvio', 90, 50, 4)
console.log(`O funcionário de nome ${funcionarioss.nome} tem o salário bruto de ${funcionarioss.metodoCalcularSalarioBruto()}, o desconto de ${funcionarioss.metodoDesconto()}, a PLR de
${funcionarioss.metodoPLR()} e o salário líquido de ${funcionarioss.metodoSalarioLiquido()}.`);
 */