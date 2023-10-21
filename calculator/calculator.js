function Calculator() {
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

    this.updateCurrentValue = function(key) {
        if (this.operator) {
            this.secondValue += key;
        } else {
            this.firstValue += key;
        }
    }

    this.computeShow = function(key) {
        let result;
        if (key === 'clr') {
            this.clr();
        } else if (key === 'del') {
            this.del();
        } else if (key === '=') {
            if (this.operator) {
                this.firstValue = this.compute().toString();
                this.operator = '';
                this.secondValue = '';
            }
        } else if (ALG_OPERATORS.includes(key)) {
            if (this.operator) {
                this.firstValue = this.compute().toString();
                this.operator = key;
                this.secondValue = '';
            } else {
                this.operator = key;
            }
        } else {
            // number
            this.updateCurrentValue(key);

        }
        return `${this.firstValue}${this.operator}${this.secondValue}`;
    };

    

    this.clr = function() {
        this.firstValue = '';
        this.secondValue = '';
        this.operator = '';
    };

    this.del = function() {
        if (this.secondValue) {
            this.secondValue = this.secondValue.slice(0, -1);
        } else if (this.operator) {
            this.operator = '';
        } else if (this.firstValue) {
            this.firstValue = this.firstValue.slice(0, -1);
        }
    }

    this.compute = function() {
        switch(this.operator) {
            case '+':
                return Number(this.firstValue) + Number(this.secondValue);
            case '-':
                return Number(this.firstValue) - Number(this.secondValue);
            case '*':
                return Math.floor(this.firstValue*this.secondValue);
            case '/':
                return Math.floor(this.firstValue/this.secondValue);
        }
    }

}




module.exports = {
    Calculator
  };
  