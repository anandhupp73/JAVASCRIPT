// alert("external js")

class Bank {

    name = 'milan'
    showName() {          
        console.log(this.name);
    }
}

let obj = new Bank();
obj.showName();  
