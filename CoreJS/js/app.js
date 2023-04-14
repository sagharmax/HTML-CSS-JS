(function(app) {
    'use strict';
    app.divide = function(x, y) {
        console.log(x/y);
        return x / y;
    };
    app.complicatedFormula = function(x) {
        let result = x * 3 + 2;
        result += 4;
        console.log(result);
        result = this.divide(result, 2)
        console.log(result);
        return result;
    }
})(window.app = window.app || {});
console.log(app.complicatedFormula(23));
// console.warn('This is a warning');
// console.error('This is an error');