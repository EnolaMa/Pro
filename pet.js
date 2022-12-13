
let panda1 = "panda1.jpg";
let panda2 = "panda2.jpg";
let panda3 = "panda3.jpg";
let panda4 = "panda4.jpg";

const pets = [panda1,panda2,panda3,panda4]


const panda = {
data() {
  return {
    pets,
    panda0: pets[0],
    panda1: pets[1],
  }
},
methods:{
  updatePet(id){
    this.panda0 = this.pets[id]
  },
  resetPet(){
    this.panda0 = this.pets[0];
  },
  updatePet2(id){
    this.panda1 = this.pets[id]
  },
  resetPet2(){
    this.panda1 = this.pets[1];
  },
},
}

Vue.createApp(panda).mount('#panda')



document.getElementById('panda').hidden = true;

function myFunction() {
  // Get the value of the input field with id="numb"
  let x = document.getElementById("numb").value;
  // If x is Not a Number or less than one or greater than 10
  let text;
  if (isNaN(x)) {
    text = "Please input a number between 1 and 10";
  } 
  else if(x<9){
    text = "Wrong... Maybe bigger?"
  }else if(x>9){
    text = "Wrong... Maybe smaller?"
  }else if(x=9){
    text = "Correct!!! It is 9!!!";
    document.getElementById('panda').hidden = false;
  }
  document.getElementById("demo").innerHTML = text;
}