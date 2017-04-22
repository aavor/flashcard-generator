var inquirer = require("inquirer");

function BasicCard (front, back) {
	this.front = front,
	this.back = back
};

function ClozeCard (text, cloze) {
	this.text=text,
	this.cloze=cloze,
	this.full = this.cloze + " " + this.text,
	this.checkError = function() {
		if (this.full.includes(this.cloze)===false) {
			throw error;
		};
	}
};

//Basic Test
var firstPresident = new BasicCard(
	"Who was the first president of the United States?", "George Washington");

console.log("\n" + "//////Basic Card Test//////");
console.log(firstPresident.front);
console.log(firstPresident.back);
console.log("\n");


//Close Test
var firstPresidentCloze = new ClozeCard(
    "was the first president of the United States.", "George Washington");

console.log("//////Close Card Test//////")
console.log(firstPresidentCloze.text);
console.log(firstPresidentCloze.cloze); 
console.log(firstPresidentCloze.full);


