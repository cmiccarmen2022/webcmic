function salir() {
    if(confirm("¿Deseas Cerrar la Sesion y Salir?")){
    document.location="./php/close.php";
    alert("¡Se ha cerrado correctamente la sesión!");   
    } else {
    alert("¡Sesión cancelada!");
    } };
