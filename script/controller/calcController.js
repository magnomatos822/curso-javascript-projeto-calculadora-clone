class CalcController {
    constructor(){
        this._displayCalc = '0';
        this._currentData;
        this.initialize();
    }

    initialize(){
        let displayCalcEl = document.querySelector('#display');
        let dataEl = document.querySelector('#data');
        let horaEl = document.querySelector('#hora');

        displayCalcEl.innerHTML = "2458";
        dataEl.innerHTML = "2458";
        horaEl.innerHTML = "2458";
    }

    get displayCalc(){
        return this._displayCalc;
    }

    set displayCalc(valor){
        this._displayCalc = valor;
    }

    get currentData(){
        return this._currentData;
    }

    set currentData(valor) {
        this._currentData = valor;
    }
}
