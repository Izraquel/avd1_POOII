"use strict";
var Funcionarios = /** @class */ (function () {
    function Funcionarios(_nome, _salarioHora, _diasTrabalhados, _totalFaltasAno) {
        this._nome = _nome;
        this._salarioHora = _salarioHora;
        this._diasTrabalhados = _diasTrabalhados;
        this._totalFaltasAno = _totalFaltasAno;
    }
    Object.defineProperty(Funcionarios.prototype, "nome", {
        /* nome */
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            /*  if(!nome) {
                 throw new Error('Nome inválido !')
             } */
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionarios.prototype, "salarioHora", {
        /* salario hora */
        get: function () {
            return this._salarioHora;
        },
        set: function (salarioHora) {
            this._salarioHora = salarioHora;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionarios.prototype, "diasTrabalhados", {
        /* dias trabalhados*/
        get: function () {
            return this._diasTrabalhados;
        },
        set: function (diasTrabalhados) {
            this._diasTrabalhados = diasTrabalhados;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionarios.prototype, "totalFaltasAno", {
        /* total de faltas*/
        get: function () {
            return this._totalFaltasAno;
        },
        set: function (totalFaltasAno) {
            this._totalFaltasAno = totalFaltasAno;
        },
        enumerable: false,
        configurable: true
    });
    Funcionarios.prototype.metodoCalcularSalarioBruto = function () {
        return this._salarioHora * this.diasTrabalhados;
    };
    Funcionarios.prototype.metodoPLR = function () {
        if (this.totalFaltasAno == 0) {
            return this.metodoCalcularSalarioBruto();
        }
        else if (this.totalFaltasAno == 1) {
            return this.metodoCalcularSalarioBruto() * 0.94;
        }
        else if (this.totalFaltasAno == 2) {
            return this.metodoCalcularSalarioBruto() * 0.92;
        }
        else if (this.totalFaltasAno == 3) {
            return this.metodoCalcularSalarioBruto() * 0.90;
        }
        else if (this.totalFaltasAno == 4) {
            return this.metodoCalcularSalarioBruto() * 0.88;
        }
        else
            (this.totalFaltasAno >= 5);
        return 0;
    };
    Funcionarios.prototype.metodoDesconto = function () {
        return this.metodoCalcularSalarioBruto() - 0.05;
    };
    Funcionarios.prototype.metodoSalarioLiquido = function () {
        return this.metodoCalcularSalarioBruto() - this.metodoDesconto() + this.metodoPLR();
    };
    return Funcionarios;
}());
var funcionarios = new Funcionarios('Raquel', 80, 180, 8);
console.log("O funcion\u00E1rio de nome " + funcionarios.nome + " tem o sal\u00E1rio bruto de " + funcionarios.metodoCalcularSalarioBruto() + ", teve " + funcionarios.totalFaltasAno + " falta(s) e sua PLR foi\nde " + funcionarios.metodoPLR() + ".");
console.log('\n');
/* const funcionarioss = new Funcionarios('Silvio', 90, 50, 4)
console.log(`O funcionário de nome ${funcionarioss.nome} tem o salário bruto de ${funcionarioss.metodoCalcularSalarioBruto()}, o desconto de ${funcionarioss.metodoDesconto()}, a PLR de
${funcionarioss.metodoPLR()} e o salário líquido de ${funcionarioss.metodoSalarioLiquido()}.`);
 */ 
