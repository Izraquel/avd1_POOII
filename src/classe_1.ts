class NumeroUm {
    constructor (
        private _produto: string,
        private _preco: number,
        private _quantidade: number
    ) {}

    /* produto */
    get produto() {
        return this._produto
    }

    set produto(produto: string) {
        if(!produto) {
            throw new Error('Não é aceito produto vazio!!')
        }
        this._produto = produto
    }


    /* preco */
    get preco() {
        return this._preco;
    }
    set preco(preco: number) {
        if(preco <= 0) {
            throw new Error('Preço inválido!!')
        }
        this._preco = preco
    }


    /* quantidade */
    get quantidade() {
        return this._quantidade;
    }
    
    set quantidade(quantidade: number) {
        if(quantidade <= 0) {
            throw new Error('Quantidade inválida!!')
        }
        this._quantidade = quantidade
    }


    metodoDesconto() {
        if(this.quantidade <= 10) {
            return 0 //não tem desconto
        } else if (this.quantidade <= 20) {
            return this._preco * this.quantidade * 0.1
        } else if (this.quantidade <= 50) {
            return this._preco * this.quantidade * 0.2
        } else {
            return this._preco * this.quantidade * 0.25
        }
        
    }

     metodoTotal(){
        return this.quantidade * this.preco - this.metodoDesconto()
    } 

}

const numeroUm = new NumeroUm('Notebook Acer', 2800, 11)
console.log(`O produto ${numeroUm.produto} de preço ${numeroUm.preco}, quantidade comprada de ${numeroUm.quantidade} teve o desconto de ${numeroUm.metodoDesconto()} e o valor pago foi de ${numeroUm.metodoTotal()}`);

/* try {
    numeroUm.produto = 'Xiomi Redmi Note 8'
    numeroUm.preco = 1900
    numeroUm.quantidade = 0
} catch (err:any) {
    console.log(err.message);
    
} */

//console.log(`O produto ${numeroUm.produto} de preço ${numeroUm.preco}, quantidade comprada de ${numeroUm.quantidade} teve o desconto de ${numeroUm.metodoDesconto()} e o valor pago foi de ${numeroUm.metodoPrecoDesconto()}`);

