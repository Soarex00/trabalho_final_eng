const TipoCobranca = Object.freeze({
  HORA: "HORA",
  DIARIA: "DIARIA",
  MENSALIDADE: "MENSALIDADE",
});

class ContaEstacionamentoSemStrategy {
  constructor(horas) {
    if (horas <= 0) {
      throw new Error("A quantidade de horas deve ser positiva.");
    }

    this.horas = horas;
  }

  valorConta(tipoCobranca) {
    switch (tipoCobranca) {
      case TipoCobranca.HORA:
        return 2.0 * Math.ceil(this.horas);
      case TipoCobranca.DIARIA:
        return 24.0 * Math.ceil(this.horas / 24.0);
      case TipoCobranca.MENSALIDADE:
        return 240.0 * Math.ceil(this.horas / 720.0);
      default:
        throw new Error("Tipo de cobranca invalido.");
    }
  }
}

const conta = new ContaEstacionamentoSemStrategy(30);

console.log("Sem Strategy");
console.log(`Por hora: R$ ${conta.valorConta(TipoCobranca.HORA).toFixed(2)}`);
console.log(`Diaria: R$ ${conta.valorConta(TipoCobranca.DIARIA).toFixed(2)}`);
console.log(
  `Mensalidade: R$ ${conta.valorConta(TipoCobranca.MENSALIDADE).toFixed(2)}`
);
