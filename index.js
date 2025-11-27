// datos a pedir: nombre completo, correo electronico, contraseña
const nombreCompleto = prompt("ingresa tu nombre completo");
const correoElectronico = prompt("ingresa tu correo electronico");
let contraseña = prompt("crea una contraseña (minimo 8 caracteres)");

// proceso de validacion: campos obligatorios y longitud de la contraseña

if (nombreCompleto === null || nombreCompleto === ""){
    console.log ("ingresa un nombre válido");
    alert ("ingresa un nombre válido");
} else if (correoElectronico === null || correoElectronico === ""){
console.log ("ingresa un correo válido");
    alert ("ingresa un correo válido");
} else if (contraseña === null || contraseña === ""){
console.log ("ingresa una contraseña");
    alert ("ingresa una contraseña");
} else if (contraseña.length <8){
    console.log ("ingresa una contraseña de al menos 8 caracteres");
    alert("ingresa una contraseña de al menos 8 caracteres");
}else{
    console.log ("Registro exitoso")
    alert ("Registro exitoso, ¡Bienveido " + nombreCompleto + "!")
}

// 
