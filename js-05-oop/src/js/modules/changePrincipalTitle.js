
















const changePrincipalTitle = ( titleId ) => {
    const titleElement = document.getElementById( titleId );
    if ( titleElement != null ) {
        titleElement.innerText = "OOP in JavaScript, Cohorte 62";
    } else {
        console.warn( `Element with id "${ titleId }" not found.` );
    }
}

/** Cambia la imagen inicial por la especificada en la ruta
 * 
 * @param {string} imageRoute Ruta relativa, considerar como inicio la ubicación de este modulo
 */
const changeLogo = (imageRoute) => {
    if ( imageRoute !== null ) {
        document.getElementById("logo").src ="../assets/img/cat.jpg";
    } else {
        console.warn( "Elemento " +titleId + " no encontrado." );
    }
}

export{changePrincipalTitle, changeLogo}