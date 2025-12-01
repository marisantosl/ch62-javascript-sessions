let isActive= true;

if (isActive === true) console.log("El usuario esta activo");

if (isActive === true){
    console.log("El usuario esta activo");
}
if (isActive){ //Podemos evitar el = solo si es booleano
    console.log("El usuario esta activo");
}

{
    let firstName = "Juan";
    let lastName = "Perez";
    var alias = "Juampi";
    let age = 28
    
    console.log(firstName,lastName,alias);
    {
        let firstName = "Sergio";
        let lastName = "Torres";
        var alias = "Serch";
        var alias = "Serchmo";
        console.log(firstName,lastName,alias);
        
    }
}


const clima = (temperatura) => {
    if (temperatura > 25){
    return(`Hace calor`);
}else{
    return(`Hace frío`);
}
} 


