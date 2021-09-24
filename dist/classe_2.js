"use strict";
var ConversaoDeUnidadeDeTempo = /** @class */ (function () {
    function ConversaoDeUnidadeDeTempo() {
    }
    /*  constructor(
         mesDias: number,
         horaMinutos: number,
         diaHoras: number,
         anoDias: number
     ) {} */
    ConversaoDeUnidadeDeTempo.minutoSegundos = function (minutoSegundos) {
        return minutoSegundos * 60;
    };
    ConversaoDeUnidadeDeTempo.horaMinutos = function (horaMinutos) {
        return horaMinutos * 60;
    };
    ConversaoDeUnidadeDeTempo.diaHoras = function (diaHoras) {
        return diaHoras * 24;
    };
    ConversaoDeUnidadeDeTempo.semanaDias = function (semanaDias) {
        return semanaDias * 7;
    };
    ConversaoDeUnidadeDeTempo.mesDias = function (mesDias) {
        return mesDias * 30;
    };
    ConversaoDeUnidadeDeTempo.anoDias = function (anoDias) {
        return anoDias * 365.25;
    };
    return ConversaoDeUnidadeDeTempo;
}());
