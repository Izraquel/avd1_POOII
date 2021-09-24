"use strict";
var NumeroUm = /** @class */ (function () {
    function NumeroUm(_produto, _preco, _quantidade) {
        this._produto = _produto;
        this._preco = _preco;
        this._quantidade = _quantidade;
    }
    Object.defineProperty(NumeroUm.prototype, "produto", {
        /* produto */
        get: function () {
            return this._produto;
        },
        set: function (produto) {
            if (!produto) {
                throw new Error('Não é aceito produto vazio!!');
            }
            this._produto = produto;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NumeroUm.prototype, "preco", {
        /* preco */
        get: function () {
            return this._preco;
        },
        set: function (preco) {
            if (preco <= 0) {
                throw new Error('Preço inválido!!');
            }
            this._preco = preco;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NumeroUm.prototype, "quantidade", {
        /* quantidade */
        get: function () {
            return this._quantidade;
        },
        set: function (quantidade) {
            if (quantidade <= 0) {
                throw new Error('Quantidade inválida!!');
            }
            this._quantidade = quantidade;
        },
        enumerable: false,
        configurable: true
    });
    NumeroUm.prototype.metodoDesconto = function () {
        if (this.quantidade <= 10) {
            return 0; //não tem desconto
        }
        else if (this.quantidade <= 20) {
            return this._preco * 0.1;
        }
        else if (this.quantidade <= 50) {
            return this._preco * 0.2;
        }
        else {
            return this._preco * 0.25;
        }
    };
    NumeroUm.prototype.metodoPrecoDesconto = function () {
        return this.quantidade * this.preco - this.metodoDesconto();
    };
    return NumeroUm;
}());
var numeroUm = new NumeroUm('Notebook Acer', 2800, 11);
console.log("O produto " + numeroUm.produto + " de pre\u00E7o " + numeroUm.preco + ", quantidade comprada de " + numeroUm.quantidade + " teve o desconto de " + numeroUm.metodoDesconto() + " e o valor pago foi de " + numeroUm.metodoPrecoDesconto());
try {
    numeroUm.produto = 'Xiomi Redmi Note 8';
    numeroUm.preco = 1900;
    numeroUm.quantidade = 0;
}
catch (err) {
    console.log(err.message);
}
//console.log(`O produto ${numeroUm.produto} de preço ${numeroUm.preco}, quantidade comprada de ${numeroUm.quantidade} teve o desconto de ${numeroUm.metodoDesconto()} e o valor pago foi de ${numeroUm.metodoPrecoDesconto()}`);
