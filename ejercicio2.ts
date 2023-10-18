function esParOImpar(numero: number): string {
    if (numero % 2 === 0) {
      return "par";
    } else {
      return "impar";
    }
  }
  

  const numero = 7;
  const resultado = esParOImpar(numero);
  console.log(`El número ${numero} es ${resultado}.`);
  