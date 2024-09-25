class Queue {
    constructor(){
        this.items = [];
    }

    //Agregar un elemento al final de la cola 
    enqueue(element){
        this.items.push(element);
    }

    //Remorvelo y devolver el que esta enfrente de la cola 
    dequeue(){
        if(this.isEmpty()){
            return "La cola esta vacia."
        }
        return this.items.shift();
    }  

    //Devolver el elemento de enfrente SIN removerlo 
    front(){
        if(this.isEmpty()){
            return "La cola esta vacia."
        }
        return this.items[0];
    }

    //Verificar si esta vacia 
    isEmpty(){
        return this.items.length === 0;
    }

    //Tamaño 
    size(){
        return this.items.length;
    }
    
    //Imprimirlos
    printQueue(){
        let str = "";
        for(let indice = 0; indice < this.items.length; indice++){
            str += this.items[indice] + " "; // str = str + this.items[i]
        }
        console.log(str)
    }
}

//Ejemplo

let cola = new Queue();
cola.enqueue("Juan");
cola.enqueue("Maria");
cola.enqueue("Pedro");
cola.enqueue("Fernanda")
console.log("Frente en la cola esta: ", cola.front());
console.log("Persona atendida: ", cola.dequeue()); // Atendimos a Juan
console.log("Persona atendida: ", cola.dequeue()); // Atendimos a Maria
console.log("--Falta por atender a --", cola.size())
cola.printQueue();
