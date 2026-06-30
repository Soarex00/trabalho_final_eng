class CalculoPorHora {
  constructor(valorHora) {
    this.valorHora = valorHora;
  }

  calcular(horas) {
    return this.valorHora * Math.ceil(horas);
  }
}

class CalculoDiaria {
  constructor(valorDiaria) {
    this.valorDiaria = valorDiaria;
  }

  calcular(horas) {
    return this.valorDiaria * Math.ceil(horas / 24.0);
  }
}

class CalculoMensalidade {
  constructor(valorMensalidade) {
    this.valorMensalidade = valorMensalidade;
  }

  calcular(horas) {
    return this.valorMensalidade * Math.ceil(horas / 720.0);
  }
}

class ContaEstacionamentoComStrategy {
  constructor(horas) {
    if (horas <= 0) {
      throw new Error("A quantidade de horas deve ser positiva.");
    }

    this.horas = horas;
  }

  valorConta(calculoValor) {
    return calculoValor.calcular(this.horas);
  }
}

const conta = new ContaEstacionamentoComStrategy(30);

const porHora = new CalculoPorHora(2.0);
const diaria = new CalculoDiaria(24.0);
const mensalidade = new CalculoMensalidade(240.0);

console.log("Com Strategy");
console.log(`Por hora: R$ ${conta.valorConta(porHora).toFixed(2)}`);
console.log(`Diaria: R$ ${conta.valorConta(diaria).toFixed(2)}`);
console.log(`Mensalidade: R$ ${conta.valorConta(mensalidade).toFixed(2)}`);
