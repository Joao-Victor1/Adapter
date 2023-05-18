#Interface do cliente:

class ITarget:

    def request(self):
        pass

class Client:

    def __init__(self, target):
        self.target = target
    

    def makeRequest(self):
        print("Fazendo uma requisição")
        self.target.request()
    

class Adaptee:

    def sepecificRequest(self):
        print("Requisição específica do Adaptee")
    

#Adaptador:
class Adapter(ITarget):

    def __init__(self, adaptee):
        self.adaptee = adaptee
    

    def request(self):
        self.adaptee.sepecificRequest()
    

#Utilização do adaptador:
adaptee = Adaptee()
adapter = Adapter(adaptee)
client = Client(adapter)

client.makeRequest();
