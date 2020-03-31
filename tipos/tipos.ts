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

//funções
// tipo void não retorna nada
function retornaMeuNome(): string {
  return nome;
}

function multiplicar(numA: number, numB: number): number {
  return numA * numB;
}

console.log(multiplicar(20, 20));

//tipo função
let calculo: (numA: number, numB: number) => number;
calculo = multiplicar;

//objetos
let usuarios: { nome: string; idade: number } = {
  nome: "Junior",
  idade: 27
};

//Desafio
let funcionario: {
  supervisores: string[];
  batePonto: (horas: number) => string;
} = {
  supervisores: ["Junior", "Joice", "Duarte"],
  batePonto(horas: number): string {
    if (horas <= 8) {
      return "Ponto Normal";
    } else {
      return "Fora do horário";
    }
  }
};

//Alias
type Funcionario = {
  supervisores: string[];
  batePonto: (horas: number) => string;
};

let funcionario2: Funcionario = {
  supervisores: ["Junior", "Joice", "Duarte"],
  batePonto(horas: number): string {
    if (horas <= 8) {
      return "Ponto Normal";
    } else {
      return "Fora do horário";
    }
  }
};

//Union types - dois tipos
let nota: string | number = 10;

//Tipo never - erro,laço infinito...
function falha(msg: string) {
  throw new Error(msg);
}

//Desafio 2
type ContaBancaria = {
  saldo: number;
  depositar: (valor: number) => void;
};

let contaBancaria: ContaBancaria = {
  saldo: 3456,
  depositar(valor: number) {
    this.saldo += valor;
  }
};

type Correntista = {
  nome: string;
  contaBancaria: ContaBancaria;
  contatos: string[];
};

let correntista: Correntista = {
  nome: "Junior",
  contaBancaria: contaBancaria,
  contatos: ["97016-3734", "2235-6908"]
};
