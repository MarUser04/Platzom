'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = platzom;
function platzom(str) {
    var translation = str;

    if (str.toLowerCase().endsWith('ar')) {
        translation = str.slice(0, -2); //cortar dos caracteres antes del final
    }

    //Si la palabra inicia con Z, se le añade "pe" al final
    if (str.toLowerCase().startsWith('z')) {
        translation += 'pe';
    }

    //Si tiene mas de 10 letras, se debe partir por la mitad y unir con un guión

    if (translation.length >= 10) {
        var firstHalf = translation.slice(0, Math.round(translation.length / 2));
        var secondHalf = translation.slice(Math.round(translation.length / 2));
        translation = firstHalf + '-' + secondHalf;
    }

    //si es palídndromo, ninguna regla anterior cuenta y se 
    //devuelve la palabra intercalando mayúsculas y minúsculas

    var reverse = function reverse(str) {
        return str.split('').reverse().join('');
    };

    function minMay(str) {
        var length = str.length;
        var translation = '';
        var capitalize = true;

        for (var i = 0; i < length; i++) {
            var char = str.charAt(i);
            translation += capitalize ? char.toUpperCase() : char.toLowerCase();
            capitalize = !capitalize;
        }
    }

    if (str == reverse(str)) {
        return minMay(str);
    }

    return translation;
}