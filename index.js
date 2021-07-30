// Funciones que encapsulan las funcionalidades de cuadrado
function perimetroCuadrado(lado) {
  return lado > 0 ? lado * 4 : "Ingresar un valor válido";
}

function areaCuadrado(lado) {
  return lado > 0 ? lado * lado : "Ingresar un valor válido";
}

// Funciones que encapsulan las funcionalidades de triángulo
function perimetroTriangulo(lado1, lado2, base) {
  return (lado1 > 0) & (lado2 > 0) & (base > 0)
    ? lado1 + lado2 + base
    : "Ingresar valores válido";
}

function areaTriangulo(altura, base) {
  return (altura > 0) & (base > 0)
    ? (base * altura) / 2
    : "Ingresar valores válido";
}

// Funciones que encapsulan las funcionalidades de círculo
function diametroCirculo(radio) {
  return radio > 0 ? radio * 2 : "Ingresar un valor válido";
}

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return radio > 0 ? diametro * Math.PI : "Ingresar un valor válido";
}

function areaCirculo(radio) {
  return radio > 0 ? radio * radio * Math.PI : "Ingresar un valor válido";
}

/* Altura de un triángulo isósceles.  */

function funcionIsoceles(lado1, lado2, base) {
  if (lado1 === lado2 && lado1 != base) {
    alert("Triangulo Isósceles");
  } else {
    alert("No es");
  }
}

/* Interaccion HTML */

function calcularPerimetroCuadrado(params) {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);

  const ResultPerimetro = document.getElementById("ResultPerimetro");
  ResultPerimetro.innerText = "El perimetro es " + perimetro;
}
function calcularAreaCuadrado(params) {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);

  const ResultArea = document.getElementById("ResultArea");
  ResultArea.innerText = "El area es " + area;
}

/* Porcemtajes y Descuentos */
function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}

calcularPrecioConDescuento(300, 30);

function calcDiscountPrice(params) {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  const InputDiscount = document.getElementById("InputDiscount");
  const discountValue = InputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    discountValue
  );

  const ResultPrice = document.getElementById("ResultPrice");
  ResultPrice.innerText = "El precio con descuento son $" + precioConDescuento;
}

/* Validation number */
function validNumber(e) {
  let code = e.which ? e.which : e.keyCode;
  if (code == 8) {
    return true;
  } else if (code >= 48 && code <= 57) {
    return true;
  } else {
    return false;
  }
}


/* Cupon Discount */

