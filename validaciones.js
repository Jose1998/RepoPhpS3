function validarComentarios(){
    
    var nombreAyudanos; 
    var apellidosAyudanos;
    var correoAyudanos;
    var comentarioAyudanos;
    var expresionNombreAyudanos;
    var expresionApellidosAyudanos;
    var expresionCorreoAyudanos;

    nombreAyudanos = document.getElementById("nombreAyudanos").value;
    apellidosAyudanos = document.getElementById("apellidosAyudanos").value;
    correoAyudanos = document.getElementById("correoAyudanos").value;
    comentarioAyudanos = document.getElementById("comentarioAyudanos").value;

    expresionNombreAyudanos = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
    expresionApellidosAyudanos = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
    expresionCorreoAyudanos = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

    if(nombreAyudanos === "" || apellidosAyudanos === "" || correoAyudanos === "" || comentarioAyudanos === ""){
        alert ("Todos los campos son obligatorios. Favor de llenar el campo: \n \n - Nombre \n - Apellidos \n - Correo \n - Comentario")
        return false;
    }
    
    else if (nombreAyudanos.length > 40) {
        alert ("El nombre es muy largo, el máximo son 40 caracteres.");
        return false;
    }
    else if (!expresionNombreAyudanos.test(nombreAyudanos)) {
        alert ("El nombre solo admite letras y espacios. Si ha dejado un espacio al final, borrelo e intentelo de nuevo.");
        return false;
    }
    else if (apellidosAyudanos.length > 40) {
        alert ("Los apellidos son muy largos, el máximo son 50 caracteres.");
        return false;
    }
    else if (!expresionApellidosAyudanos.test(apellidosAyudanos)) {
        alert ("Los apellidos solo admiten letras y espacios. Si ha dejado un espacio al final, borrelo e intentelo de nuevo.");
        return false;
    }
    else if (correoAyudanos.length > 50) {
        alert ("El correo es muy largo, el máximo son 50 caracteres.");
        return false;
    }
    else if (!expresionCorreoAyudanos.test(correoAyudanos)) {
        alert ("El correo no es válido. Verificarlo.");
        return false;
    }
    else if (comentarioAyudanos.length > 500) {
        alert ("Los comentarios son muy largos, el máximo son 500 caracteres.");
        return false;
    } 
}
