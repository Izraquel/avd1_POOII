class ConversaoDeUnidadeDeTempo {

   /*  constructor(
        mesDias: number,
        horaMinutos: number,
        diaHoras: number,
        anoDias: number
    ) {} */
    
    static minutoSegundos(minutoSegundos: number) {
        return minutoSegundos * 60
    }


    static horaMinutos(horaMinutos: number) {
        return horaMinutos * 60
    }

    static diaHoras(diaHoras: number) {
        return diaHoras * 24
    }

    static semanaDias(semanaDias: number) {
        return semanaDias * 7
    }
    
    static mesDias(mesDias: number) {
        return mesDias * 30
    }

    static anoDias(anoDias: number) {
        return anoDias * 365.25
    }
}

console.log(`${ConversaoDeUnidadeDeTempo.minutoSegundos(8)}`)
console.log(`${ConversaoDeUnidadeDeTempo.horaMinutos(9)}`)
console.log(`${ConversaoDeUnidadeDeTempo.diaHoras(10)}`)
console.log(`${ConversaoDeUnidadeDeTempo.semanaDias(11)}`)
console.log(`${ConversaoDeUnidadeDeTempo.mesDias(12)}`)
console.log(`${ConversaoDeUnidadeDeTempo.anoDias(2)}`)






