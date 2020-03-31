//string, number, boolean
let nome: string = "Junior";
let idade: number = 27;
let possuiHobbies: boolean = true;

//array
let hobbies: any[] = ["Games", "Futebol", 1];

//tuplas
let endereco: [string, number] = ["Av. principal", 22];

//enums

enum Cor {
  Cinza = "Cinza",
  Verde = "Verde",
  Azul = "Verde"
}

let minhaCor: Cor = Cor.Verde;
console.log(minhaCor);
