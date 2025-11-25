
export const pi = 3.1416;
const e = 1.68;

export function areaCirculo(radio) {
    return ( radio * pi ) ** 2;
}

export function areaRectangulo(base, altura) {
    return base * altura;
}

export function areaTriangulo(base, altura) {
    return (base * altura) / 2
}