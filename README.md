# Platzom

Platzom es un idioma inventado para el curso de Fundamento de Javascript.

## Descripción del idioma

-Si la palabra termina en "ar", se le quitan esas dos letras

-Si la palabra inicia con Z, se le añade "pe" al final

-Si tiene mas de 10 letras, se debe partir por la mitad y unir con un guión

-Si es palídndromo, ninguna regla anterior cuenta y se devuelve la palabra intercalando mayúsculas y minúsculas

## Instalación

```
npm install platzom
```

## Uso 

```
import platzom from 'platzom'

console.log(platzom("Programar"));
console.log(platzom("Zorro"));
console.log(platzom("Zarpar"));
console.log(platzom("abecedario"));
console.log(platzom("sometemos"));


```

## Creditos

-[Marco Useche](https://twitter.com/@marco_0497)