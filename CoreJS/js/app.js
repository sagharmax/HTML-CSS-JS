(function(app) {
    'use strict';
    app.divide = function(x, y) {
        return x / y;
    };
    app.complicatedFormula = function(x) {
        let result = x * 3 + 2;
        x += 4;
        result += this.divide(result, 2)
        return result;
    }
})(window.app = window.app || {});
console.log(app.complicatedFormula(23));