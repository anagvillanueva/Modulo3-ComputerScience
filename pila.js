class Stack {
    constructor(){
        this.items = []; // Usamos un array para almacenar los elementos
    }

    //Agregando un elemento a la cima de la pila
    push(element){
        this.items.push(element);
    }

    //Remueve y devuelve de la cima de la pila
    pop(){
        if(this.isEmpty()){
            return "La pila esta vacia."
        }
        return this.items.pop();
    }

    //Devuelve el elemento de la cima SIN removerlo
    peek(){
        if(this.isEmpty()){
            return "La pila esta vacia."
        }
        return this.items[this.items.length-1]
    }

    //Verificar si la pila esta vacia
    isEmpty(){
        return this.items.length === 0;
    }

    //Devuelva el tamaño de nuestra pila
    size(){
        return this.items.length;
    }

    //Imprimir los elementos de la pila
    printStack(){
        let str = "";
        for(let indice = 0; indice < this.items.length; indice++){
            str += this.items[indice] + " "; // str = str + this.items[i]
        }
        console.log(str)
    }
}

//Ejemplo 
let pila = new Stack();

//Apilamos
pila.push(1)
pila.push(2)
pila.push(3)

//Cima de mi pila 
console.log("Cima de la pila: ", pila.peek());
console.log("Elemento eliminado: ", pila.pop());
pila.printStack();
pila.pop() // Elimina 2
pila.pop() // Elimina 1 
console.log("Cima de la pila: ", pila.peek());
console.log("Tamaño de mi pila: ", pila.size());
