// Clase padre - (Cascaron)
class FiguraGeometrica {
    constructor(){
        // Verifica si se intenta instanciar directamente la clase abstracta
        if(new.target === FiguraGeometrica){
            throw new Error("No se puede instanciar la clase Figura Geometrica")
        }
    }

    //Metodos genericos
    perimetro(){
        throw new Error("Debe implementar el metodo la subclase.")
    }

    area(){
        throw new Error("Debe implementar el metodo la subclase.")
    }
}

//Subclases: Triangulo, Cuadrado y Circulo 

//Encapsulamiento: Setters y Getters 

class Triangulo extends FiguraGeometrica{
    constructor(base,altura){
        super(); // Herendado los metodos  de la superclase
        this.base = base; 
        this.altura = altura;
    }

    //Getter y Setter para la  propiedad: Base 
    get base(){  // Acceder
        return this._base; // Prefijo ._ indicar que una propiedad es privada. 
    }

    set base(valor){ // Modificar
        if(valor > 0){
            this._base = valor;
        }else{
            throw new Error('La base debe ser mayor que 0')
        }
    }

    /*El guion bajo es una convención sugiere que la propiedad es privada y no se puede acceder a ella fuera de su Clase, los metodos get y set son los encargados de acceder y modificar esta propiedad*/

    //Getter y Setter para la  propiedad: Altura 
    get altura(){ 
        return this._altura; 
    }

    set altura(valor){ 
        if(valor > 0){
            this._altura = valor;
        }else{
            throw new Error('La altura debe ser mayor que 0')
        }
    } 
    

    //Implementacion de mis metodos

    perimetro(){
        //Suponiendo que es un triangulo equilatero
        return this.base * 3;
    }

    area(){
        return (this.base * this.altura) / 2;
    }
}


class Cuadrado extends FiguraGeometrica{
    constructor(lado){
        super();
        this.lado = lado;
    }

    get lado(){ // Acceder al dato
        return this._lado;
    }

    set lado(valor){ //Modificar el dato
        if(valor > 0){
            this._lado = valor;
        }else {
            throw new Error("El lado debe ser mayor que 0")
        }
    }

    perimetro(){
        return this.lado * 4;
    }

    area(){
        return this.lado * this.lado;
    }
}

class Circulo extends FiguraGeometrica {
    constructor(radio) {
        super();
        this.radio = radio;
    }

    // Getter y Setter para el radio
    get radio() {
        return this._radio;
    }

    set radio(valor) {
        if (valor > 0) {
            this._radio = valor;
        } else {
            throw new Error('El radio debe ser mayor que 0');
        }
    }

    // Implementación del método perimetro
    perimetro() {
        return 2 * Math.PI * this.radio;
    }

    // Implementación del método area
    area() {
        return Math.PI * this.radio * this.radio;
    }
}

// Ejemplos de uso de las subclases
const triangulo = new Triangulo(3, 4);
console.log(`Perímetro del triángulo: ${triangulo.perimetro()}`); 
console.log(`Área del triángulo: ${triangulo.area()}`);           

const cuadrado = new Cuadrado(4);
console.log(`Perímetro del cuadrado: ${cuadrado.perimetro()} poniendo mas texto`);   
console.log(`Área del cuadrado: ${cuadrado.area()}`);             

const circulo = new Circulo(5);
console.log(`Perímetro del círculo: ${circulo.perimetro()}`);     
console.log(`Área del círculo: ${circulo.area()}`);  

console.log("---Actualización de valores------")

// Ejemplo de uso de los setters
cuadrado.lado = 8; // Actualiza el valor de 'lado'
console.log(`Nuevo perímetro del cuadrado: ${cuadrado.perimetro()}`); 
// Nuevo perímetro del cuadrado: 32
console.log(`Nueva área del cuadrado: ${cuadrado.area()}`);          
 // Output: Nueva área del cuadrado: 64

// Ejemplo de uso de los getters
console.log(`Base del triángulo: ${triangulo.base}`);               
console.log(`Altura del triángulo: ${triangulo.altura}`);           
