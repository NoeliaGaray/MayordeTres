rotulo1.innerHTML = "Ingresar número";
rotulo2.innerHTML = "Ingresar número";
rotulo3.innerHTML = "Ingresar número";

let btnEnv = document.getElementById("btnEnviar");
let número1: number = Number(dato1.value);
let número2: number = Number(dato2.value);
let número3: number = Number(dato3.value);

btnEnv.addEventListener("click", () => {
  let btnEnv = document.getElementById("btnEnviar");
  let número1: number = Number(dato1.value);
  let número2: number = Number(dato2.value);
  let número3: number = Number(dato3.value);
  if (número1 >= número2 && número1 >= número3) {
    console.log("El número mayor es: ", número1);
  } else {
    console.log("El número mayor es: ", número2);
  }
});
