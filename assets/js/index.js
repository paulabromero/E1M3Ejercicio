// datos a pedir: nombre completo, correo electronico, contraseña
const nombreCompleto = prompt("ingresa tu nombre completo");
const correoElectronico = prompt("ingresa tu correo electronico");
let contraseña = prompt("crea una contraseña (minimo 8 caracteres)");

// proceso de validacion: campos obligatorios y longitud de la contraseña

if (nombreCompleto === null || nombreCompleto === ""){
    console.log ("❌ Error: El campo 'nombre' no puede estar vacío.");
    alert ("❌ Error: El campo 'nombre' no puede estar vacío.");
} else if (correoElectronico === null || correoElectronico === ""){
console.log ("❌ Error: El campo 'correo electrónico' no puede estar vacío.");
    alert ("❌ Error: El campo 'correo electrónico' no puede estar vacío.");
} else if (contraseña === null || contraseña === ""){
console.log ("❌ Error: El campo 'contraseña' no puede estar vacío.");
    alert ("❌ Error: El campo 'contraseña' no puede estar vacío.");
} else if (contraseña.length <8){
    console.log ("❌ Error: La contraseña debe tener al menos 8 caracteres.");
    alert("❌ Error: La contraseña debe tener al menos 8 caracteres.");
}else{
    console.log ("Registro exitoso")
    alert ("Registro exitoso. ¡Bienvenido " + nombreCompleto + "!")
}

// 
