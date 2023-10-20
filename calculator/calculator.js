function Calculator(s) {
    let ALG_OPERATORS = ['+', '-', '*', '/'];
    this.showing = '';
    this.firstValue = '';
    this.secondValue = '';
    this.operator = '';

    this.currentValue = function() {
        if (this.secondValue) {
            return this.secondValue;
        } else {
            return this.firstValue;
        }
    }

    this.updateCurrentValue = function(value) {
        if (this.secondValue) {
            this.secondValue = value;
        } else {
            this.firstValue = value;
        }
    }

    this.computeShow = function(key) {
        let result;
        if (key === 'clr') {
            result = clr();
        } else if (key === 'del') {
            if (this.showing) {
                result = currentValue().slice(0, -1) ;
            }
        } else if (ALG_OPERATORS.includes(key)) {
            if (this.operator) {

            } else {
                this.operator = key;
                this.firstValue = currentValue();
                }
        } else {
            // number
            if (this.currentValue()) {
                result = this.currentValue() + key
            } else {
                result = key.toString();
            }
            this.updateCurrentValue(result);

        }
        return `${this.firstValue}${this.operator}${this.secondValue}`;
    };

    

    function clr() {
        return '';
    };

}




module.exports = {
    Calculator
  };
  