export default function platzom(str){
    let translation= str;

    if(str.toLowerCase().endsWith('ar')){
        translation = str.slice(0, -2); //cortar dos caracteres antes del final
    }

    //Si la palabra inicia con Z, se le añade "pe" al final
    if(str.toLowerCase().startsWith('z')){
        translation += 'pe';
    }

    //Si tiene mas de 10 letras, se debe partir por la mitad y unir con un guión

    if(translation.length>= 10){
        const firstHalf= translation.slice(0, Math.round(translation.length /2));
        const secondHalf= translation.slice(Math.round(translation.length /2));
        translation= `${firstHalf}-${secondHalf}`;
    }

    //si es palídndromo, ninguna regla anterior cuenta y se 
    //devuelve la palabra intercalando mayúsculas y minúsculas

    const reverse= (str) => str.split('').reverse().join('');

    function minMay(str){
        const length= str.length;
        let translation='';
        let capitalize= true;

        for(let i=0; i<length; i++){
            const char= str.charAt(i);
            translation += capitalize ? char.toUpperCase() : char.toLowerCase();
            capitalize= !capitalize;
        }
    }

    if(str == reverse(str)){
        return minMay(str);
    }

    return translation;
}
