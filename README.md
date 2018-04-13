# Platzom
Platzom es un idioma inventado para el curso de
[Fundamentos de Javascript](https://www.platzi.com/js)
en [Platzi](https://www.platzi.com), el mejor lugar de
educación online.

## Descripción del idioma
- Si la palabra termina con "ar", se le quitan esas dos letras
- Si la palabra inicia con "z", se le añade "pe" al final
- Si la palabra tiene 10 o mas letras, se debe partir en dos por la mitad y unir con un guion
- Si la palabra es palindromo, obvia todas las reglas anteriores y se devuelve intercalada por mayusculas y minusculas

## Instalación
```
npm  install platzom
```
## Uso
```
import platzom from 'platzom'

platzom('programar') // program
platzom("Zorro") // Zorrope
platzom("Zarpar") // Zarppe
platzom("abecedario") // abece-dario
platzom("sometemos") // SoMeTeMoS
```
## Créditos
- [Jahdiel Vargas](https://platzi.com/@jahdielvargas/)

## Licencias
[MIT](https://opensource.org/licenses/MIT)
