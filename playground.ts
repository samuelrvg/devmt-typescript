interface IAnimal {
  nome: string;
  idade: number;
  estaVivo: boolean;

  nascer(): void;
  crescer(): void;
  morrer(): void;
  info(msg): any;
}

class Animal implements IAnimal {
  nome: string;
  idade: number = 1;
  private _estaVivo: boolean = true;

  constructor(Nome: string = "") {
    this.nome = Nome;
  }

  get estaVivo() {
    return this._estaVivo;
  }

  // set estaVivo(estaVivo: boolean) {
  //     this._estaVivo = estaVivo;
  // }

  nascer(): void {}

  crescer(): void {
    this.idade += 1;
    alert("O animal cresceu");
  }

  morrer(): void {
    this._estaVivo = true;
  }

  info(msg) {
    alert(msg);
  }
}

let cachorro = new Animal();
cachorro.nome = "Hulk";
cachorro.crescer();
// cachorro.estaVivo = false;
alert(cachorro.nome);
alert(cachorro.estaVivo);
alert(
  cachorro.info(
    "Nome: " +
      cachorro.nome +
      "\nIdade: " +
      cachorro.idade +
      "\nVivo: " +
      cachorro.estaVivo
  )
);

// enum meuEstado { Habilitado = 0, Desabilitado }
// alert(meuEstado.Desabilitado)
// let textoMeuEstado: string = meuEstado[meuEstado.Habilitado]
// alert(textoMeuEstado)
