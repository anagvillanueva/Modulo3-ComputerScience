// Clase: Nodo
// Dato, Puntero(Next)
class Node {
    constructor(data){
        this.data = data; // Almacena el dato en el nodo
        this.next = null; // Apunta al sig nodo (inicialmente nulo)
    }
}

// Clase: Lista Enlazada 
// Si no tenemos data => null 
class LinkedList {
    constructor(){
        this.head = null; //Referencia al primer nodo de la lista
    }

    //AgregarInicio
    insertAtBeginning(data){
        const newNode = new Node(data); // Instanciando nuevo nodo
        newNode.next = this.head;
        this.head = newNode;
    }

    //AgregarFinal
    insertAtEnd(data){
        const newNode = new Node(data);
        if(!this.head){ // Si la lista esta vacia
            //El nuevo nodo se convierte en la cabeza
            this.head = newNode;
            return;
        }

        let current = this.head;
        while(current.next) { //Recorremos la lista hasta encontrar el ultimo n
            current = current.next; 
        }
        current.next = newNode; // Enlazando el nuevo nodo al final
    }
    //Eliminar el primer nodo (con un dato en especifico)
    deleteNode(data){
        //Si la lista esta vacia, no hay nada que eliminar 
        if(!this.head){
            return;
        }

        if(this.head.data === data){// Si el dato esta en la cabeza
            this.head = this.head.next; // Actualizamos la cabeza
            return;
        } 

        let current = this.head;
        let previous = null; 
        while(current && current.data !== data){ // Buscamos el nodo a eliminar
            previous = current; 
            current = current.next; // +++
        }

        if(current){ // Si encontramos el nodo
            //Lo eliminamos reajustando los enlaces
            previous.next = current.next;
        }
    }

    //Imprimir los elementos 
    printList(){
        let current = this.head;
        let str = "";
        while(current){
            str += current.data + " | ";
            current = current.next;
        }
        console.log(str)
    }
}

//Ejemplo: Playlist 
let playlist = new LinkedList();
playlist.insertAtEnd("Cancion 1: Gloria Trevi - Dr Psquiatra");
playlist.insertAtBeginning("Cancion 2: Ariana Grande - In to you");
playlist.insertAtEnd("Cancion 3: El pollito pio");
playlist.printList();

console.log("-------------------")
