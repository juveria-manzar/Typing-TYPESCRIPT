//tsc typescript.ts --watch

console.log('hello world');

//variable declaration
var me:string="Juveria";
let random:any;
random=true;

//arrays
let  numbers:Array<number>=[1,2,3,4];

//function
//return a no.
function doStuff(name?):number{
    console.log(name)
    console.log(name)
    return 1;
}
doStuff("Juveria")

//interface

interface Person{
    name:string,
    other:boolean
}

let person:Person;
person={
    name:'Juveria',
    other:false
}

//enums
enum Platform{PC,XBOX,PSP,PS4}
interface Gamer extends Person{
    gamerTag:string,
    platform:Platform
}
let gamer={
    name:'Juveria',
    gamerTag:'Juv',
    platform:Platform.PC
}

class Pet{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    sleep(hours:number=6){
        console.log(`${this.name} has slept for ${hours}`)
    }
    eat():void{
        console.log(`${this.name} is eating`)
    }
}

class Dog extends Pet{
    constructor(name:string){
        super(name)
    }
    sleep(hours=7){
        super.sleep(hours)
    }
    bark(){
        console.log(`${this.name} is barking`)
    }
}
let lady=new Dog('Lady')
lady.bark()