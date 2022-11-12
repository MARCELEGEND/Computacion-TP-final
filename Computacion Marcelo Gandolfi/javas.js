
var produ=2;

function agregar(){
   
    switch(produ){
        case 2:
            document.getElementById("segundoProducto").style.display = "inline-block";
            document.getElementById('eliminarProducto').style.display = "inline-block"; 
            produ=3;
           
            break;

        case 3: 
            document.getElementById("tercerProducto").style.display = "inline-block";
            document.getElementById('eliminarProducto').style.display = "inline-block"; 
            produ=4;
            
            break;
        
        case 4:
            document.getElementById("cuartoProducto").style.display = "inline-block";
            document.getElementById('eliminarProducto').style.display = "inline-block"; 
            produ=5;
           
            break;
        
        case 5: 
            document.getElementById("quintoProducto").style.display = "inline-block";
            document.getElementById('añadirProducto').style.display = "none";
            document.getElementById('eliminarProducto').style.display = "inline-block"; 
            produ=6;
           
            break;      
    }
}

function eliminar(){
   
        switch(produ){
            case 6:
                document.getElementById("quintoProducto").style.display = "none";
                document.getElementById('añadirProducto').style.display = "inline-block"; 
                produ=5;

        
                break;
    
            case 5: 
                document.getElementById("cuartoProducto").style.display = "none";
                document.getElementById('añadirProducto').style.display = "inline-block";
                produ=4;
               
                break;
            
            case 4:
                document.getElementById("tercerProducto").style.display = "none";
                document.getElementById('añadirProducto').style.display = "inline-block";
        
                produ=3;
                
                break;
            
            case 3: 
                document.getElementById("segundoProducto").style.display = "none";
                document.getElementById('eliminarProducto').style.display = "none";
                document.getElementById('añadirProducto').style.display = "inline-block";
             
                tabla = document.getElementById('tabla2').rows[1];
                
                produ=2;
               
                break;      
        }
    
}
var total1=0;
var total2=0;
var total3=0;
var total4=0;
var total5=0;

function primerProducto(){
    let precio = [1830,854,355,754,468,1011,398,388,466];
    let cant1;
    let producto1;
   
    let precioProducto1;
    
    cant1 = document.getElementById("cant1").value;
    producto1 = parseInt(document.getElementById("selectorPrimerProducto").value);
    
    if(isNaN(producto1)){
        document.getElementById("precioProducto1").textContent = "";
        
    }else{
        precioProducto1 = precio [producto1-1];
        total1 = cant1 * precioProducto1;
        document.getElementById("precioProducto1").textContent = total1;
        document.getElementById("cantProducto1").textContent = cant1;
        document.getElementById("nombreProducto1").textContent = document.getElementById("selectorPrimerProducto").childNodes[(producto1*2)+1].innerText;
        
    }
    }
   

    function segundoProducto(){
        let precio = [1830,854,355,754,468,1011,398,388,466];
        let cant2;
        let producto2;
       
        let precioProducto1;
        
        cant2 = document.getElementById("cant2").value;
        producto2 = parseInt(document.getElementById("selectorSegundoProducto").value);
        
        if(isNaN(producto2)){
            document.getElementById("precioProducto2").textContent = "";
            
        }else{
            precioProducto2 = precio [producto2-1];
            total2 = cant2 * precioProducto2;
            document.getElementById("precioProducto2").textContent = total2;
            document.getElementById("cantProducto2").textContent = cant2;
            document.getElementById("nombreProducto2").textContent = document.getElementById("selectorSegundoProducto").childNodes[(producto2*2)+1].innerText;
            
        }
        }


            function tercerProducto(){
                let precio = [1830,854,355,754,468,1011,398,388,466];
                let cant3;
                let producto3;
               
                let precioProducto3;
                
                cant3 = document.getElementById("cant3").value;
                producto3 = parseInt(document.getElementById("selectorTercerProducto").value);
                
                if(isNaN(producto3)){
                    document.getElementById("precioProducto3").textContent = "";
                    
                }else{
                    precioProducto3 = precio [producto3-1];
                    total3 = cant3 * precioProducto3;
                    document.getElementById("precioProducto3").textContent = total3;
                    document.getElementById("cantProducto3").textContent = cant3;
                    document.getElementById("nombreProducto3").textContent = document.getElementById("selectorTercerProducto").childNodes[(producto3*2)+1].innerText;
                    
                }
                }

                function cuartoProducto(){
                    let precio = [1830.86,854.74,355,754,468,1011,398,388,466];
                    let cant4;
                    let producto4;
                   
                    let precioProducto4;
                    
                    cant4 = document.getElementById("cant4").value;
                    producto4 = parseInt(document.getElementById("selectorCuartoProducto").value);
                    
                    if(isNaN(producto4)){
                        document.getElementById("precioProducto2").textContent = "";
                    
                    }else{
                        precioProducto4 = precio [producto4-1];
                        total4 = cant4 * precioProducto4;
                        document.getElementById("precioProducto4").textContent = total4;
                        document.getElementById("cantProducto4").textContent = cant4;
                        document.getElementById("nombreProducto4").textContent = document.getElementById("selectorCuartoProducto").childNodes[(producto4*2)+1].innerText;
                        
                    }
                    }
                    function quintoProducto(){
                        let precio = [1830.86,854.74,355,754,468,1011,398,388,466];
                        let cant5;
                        let producto5;
                       
                        let precioProducto5;
                        
                        cant5 = document.getElementById("cant5").value;
                        producto5 = parseInt(document.getElementById("selectorQuintoProducto").value);
                        
                        if(isNaN(producto5)){
                            document.getElementById("precioProducto5").textContent = "";
                         
                        }else{
                            precioProducto5 = precio [producto5-1];
                            total5 = cant5 * precioProducto5;
                            document.getElementById("precioProducto5").textContent = total5;
                            document.getElementById("cantProducto5").textContent = cant5;
                            document.getElementById("nombreProducto5").textContent = document.getElementById("selectorQuintoProducto").childNodes[(producto5*2)+1].innerText;
                            
                        }
                        }

function pagoFinal(){
    let precioFinal;
    let iva;
    let cuotas;
    let totalFinal;
   
    
    precioFinal = total1 + total2 + total3 + total4 + total5;
    iva = precioFinal*0.21;
    
    if(document.getElementById("Pagar").value == 2){
        totalFinal = ((precioFinal + iva) + (precioFinal + iva)*0.75).toFixed(2);
        cuotas= (totalFinal / 18).toFixed(2);
    }
    else{
        totalFinal = (precioFinal + iva).toFixed(2);
        cuotas= (totalFinal / 12).toFixed(2);
    }
    if(document.getElementById("Pagar").value == 0){
        totalFinal = (precioFinal+ iva).toFixed(2);
       cuotas = ""
    }
    
    
    
    document.getElementById("precioFinal").textContent = precioFinal;
    document.getElementById("iva").textContent = iva;
    document.getElementById("cuotas").textContent= cuotas;
    document.getElementById("total").textContent = totalFinal;
}

document.addEventListener("DOMContentLoaded", () => {
    // Escuchamos el click del botón
    const $boton = document.querySelector("#btnCrearPdf");
    $boton.addEventListener("click", () => {
        const $elementoParaConvertir = document.body; // <-- Aquí puedes elegir cualquier elemento del DOM
        html2pdf()
            .set({
                margin: 0,
                filename: 'documento.pdf',
                
                html2canvas: {
                    scale: 3, // A mayor escala, mejores gráficos, pero más peso
                    letterRendering: true,
                },
                jsPDF: {
                    unit: "in",
                    format: "a3",
                    orientation: 'portrait' // landscape o portrait
                }
            })
            .from($elementoParaConvertir)
            .save()
            .catch(err => console.log(err));
    });
});