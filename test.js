var name = 'Alice';

var myObject = {
    name: 'Bob',
    update:(function() {
        var thatName = this.name;
        console.log(thatName);
        this.name = 'Peter';
        console.log(this.name);

        return function(){
            var name = this.name;
            console.log(name);
            this.name = 'Jack';
            console.log(this.name);
        }
    }    
    )(),//Alice peter
}

var fn = myObject.update;
fn();//PETER JACK
myObject.update();//BOB JACK
console.log(name);//JACK
console.log(myObject.name);//JACK