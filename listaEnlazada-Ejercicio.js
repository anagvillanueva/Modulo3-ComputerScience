// Clase: Nodo
// Dato, Puntero(Next)
class Node {
    constructor(data) {
        this.data = data; // Almacena el dato en el nodo
        this.next = null; // Apunta al sig nodo (inicialmente nulo)
    }
}

// Clase: Lista Enlazada 
// Si no tenemos data => null 
class LinkedList {
    constructor() {
        this.head = null; //Referencia al primer nodo de la lista
    }

    // AgregarInicio
    insertAtBeginning(data) {
        const newNode = new Node(data); // Instanciando nuevo nodo
        newNode.next = this.head;
        this.head = newNode;
    }

    // AgregarFinal (sin repetidos)
    insertAtEndUnique(data) {
        if (this.contains(data)) { // Verificar si el dato ya existe
            return; // No hacer nada si ya está presente
        }

        const newNode = new Node(data);
        if (!this.head) { // Si la lista esta vacia
            //El nuevo nodo se convierte en la cabeza
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) { //Recorremos la lista hasta encontrar el ultimo n
            current = current.next;
        }
        current.next = newNode; // Enlazando el nuevo nodo al final
    }

    // Eliminar el primer nodo (con un dato en especifico)
    deleteNode(data) {
        //Si la lista esta vacia, no hay nada que eliminar 
        if (!this.head) {
            return;
        }

        if (this.head.data === data) { // Si el dato esta en la cabeza
            this.head = this.head.next; // Actualizamos la cabeza
            return;
        }

        let current = this.head;
        let previous = null;
        while (current && current.data !== data) { // Buscamos el nodo a eliminar
            previous = current;
            current = current.next; // +++
        }

        if (current) { // Si encontramos el nodo
            //Lo eliminamos reajustando los enlaces
            previous.next = current.next;
        }
    }

    // Imprimir los elementos 
    printList() {
        let current = this.head;
        let str = "";
        while (current) {
            str += current.data + " | ";
            current = current.next;
        }
        console.log(str)
    }

    // Verificar si un dato existe en la lista
    contains(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    // Mostrar nodos mayores a un valor
    showNodesGreaterThan(value) {
        let current = this.head;
        let str = "";
        while (current) {
            if (current.data > value) {
                str += current.data + " | ";
            }
            current = current.next;
        }
        console.log(str);
    }

    // Generar una lista con números aleatorios insertados al final
    generateRandomListAtEnd(size) {
        for (let i = 0; i < size; i++) {
            this.insertAtEndUnique(Math.floor(Math.random() * 100)); // Números entre 0 y 99
        }
    }

    // Generar una lista con números aleatorios insertados al inicio
    generateRandomListAtBeginning(size) {
        for (let i = 0; i < size; i++) {
            this.insertAtBeginning(Math.floor(Math.random() * 100)); // Números entre 0 y 99
        }
    }
}

// Ejemplo de uso:

const list = new LinkedList();

// Ejercicio 2
list.generateRandomListAtEnd(5); // Lista con inserción al final
console.log("Lista generada al final:");
list.printList();
list.showNodesGreaterThan(50); // Mostrar nodos mayores a 50

list.generateRandomListAtBeginning(5); // Lista con inserción al inicio
console.log("\nLista generada al inicio:");
list.printList();
list.showNodesGreaterThan(50); // Mostrar nodos mayores a 50


/*Explicación de los cambios:

insertAtEndUnique(data):
- Se agregó la función contains(data) para verificar si el dato ya existe en la lista.
- Si el dato existe, la función retorna sin hacer nada.
- Si el dato no existe, se procede a insertarlo al final como antes.

contains(data):
- Recorre la lista buscando el dato.
- Retorna true si lo encuentra, false si no.

showNodesGreaterThan(value):
- Recorre la lista e imprime los nodos cuyo dato es mayor al valor dado.

generateRandomListAtEnd(size) y generateRandomListAtBeginning(size):
- Generan listas con números aleatorios insertados al final o al inicio, respectivamente.
- Usan insertAtEndUnique para evitar repetidos en la primera. */