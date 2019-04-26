interface IAnimalx {
  nome: string;
  idade: number;
  estaVivo: boolean;
  sexo: any;

  nascer(): void;
  crescer(): number;
  morrer(): void;
  info(): any;
}

enum sexo {
  macho = 1,
  femea
}

class Animalx implements IAnimalx {
  nome: string;
  idade: number;
  private _estaVivo: boolean;
  sexo: any;

  constructor(Nome: string = "", Idade: number = 0, Sexo: sexo = sexo.macho) {
    this.nome = Nome;
    this.idade = Idade;
    this.sexo = Sexo;
    this._estaVivo = true;
  }

  get estaVivo() {
    return this._estaVivo;
  }

  nascer(): void {
    console.log("...");
  }

  crescer(): number {
    return this.idade++;
  }

  morrer(): void {
    console.log(this.nome + " morreu! :(");
  }

  //   info = (msg: string): void => {
  //     console.log("Info: ", msg);
  //   };

  info = (): void => {
    console.log(
      "Info: ",
      "Nome:",
      this.nome,
      "Idade:",
      this.idade,
      "Vivo:",
      this._estaVivo,
      "Sexo:",
      sexo[this.sexo],
      this.sexo
    );
  };
}

class Cachorro extends Animalx {
  latir = () => {
    // this.info("test");
    console.log("uau uau!");
  };
}

let dog = new Cachorro("Bolinha", 12, sexo.femea);
dog.latir();
// dog.info('dog do bem')
dog.info();
dog.crescer();
dog.crescer();
console.log("idade: ", dog.idade);
console.log("vivo: ", dog.estaVivo);
