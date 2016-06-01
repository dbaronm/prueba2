function Telefono(numero, marca, col, contador) {
 
        this.numero = numero;
        this.marca = marca;
        this.col = col;
        this.contador = contador;
    }
var detalle= new Telefono(3141196390, 'Nokia', 'Blanco', 0);
console.log(detalle.numero);
console.log(detalle.marca);
console.log(detalle.col);
console.log(detalle.contador);

