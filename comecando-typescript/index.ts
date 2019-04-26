function Test(nome: string) {
  return "Nome: " + nome;
}

let nome = "Samuel";

document.body.innerHTML = Test(nome);
