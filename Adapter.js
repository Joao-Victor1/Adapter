//Interface do cliente:

class ITarget
{
    request(){}
}

class Client
{
    constructor(target){
        this.target = target;
    }

    makeRequest(){
        console.log("Fazendo uma requisição");
        this.target.request();
    }
}

class Adaptee
{
    sepecificRequest(){
        console.log("Requisição específica do Adaptee");
    }
}

//Adaptador:
class Adapter
{
    constructor(adaptee){
        this.adaptee = adaptee;
    }

    request(){
        this.adaptee.sepecificRequest();
    }
}

//Utilização do adaptador:
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);
const client = new Client(adapter);

client.makeRequest()