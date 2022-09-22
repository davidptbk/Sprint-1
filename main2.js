let cont = prompt('Cantidad de personas a ingresar');
let user = [];
let dineroEntregado,cantRetiro,cantBilletesEntrega100,calculo,cantBilletesEntrega50,cantBilletesEntrega20,cantBilletesEntrega10,cantBilletesEntrega5;
let cantBilletes =[];

let cajeroCargado = 0;
let total=0;
while(cajeroCargado == 0){
    for (let i = 0; i < cont; i++){
        const newuser = {
            nameu: prompt("Ingrese el nombre del usuario"),
            documento: prompt("Ingrese el numero de documento de la persona"),
            password: prompt("Ingrese la contraseña del usuario"),
            typeUser: Number(prompt("Ingrese el tipo de usuario 1 para cliente y 2 para admin")),
            }
        user.push(newuser);
    }
    let n =1;
    while(n == 1){
    let getId = prompt('Ingrese el numero de documento del usuario');
    let getPassword = prompt('Ingrese la contraseña del usuario');
    user.forEach(function(element){
        if(element.documento === getId && element.password === getPassword){
            n = 0;
            if(element.typeUser == 2){
                alert('Bienvenido a cargar billetes')
                const billetes5 =  (Number(prompt('Ingrese la cantidad en billetes de 5 ')));
                const billetes10 = Number(prompt('Ingrese la cantidad en billetes de 10 '));
                const billetes20 = Number(prompt('Ingrese la cantidad en billetes de 20 '));
                const billetes50 = Number(prompt('Ingrese la cantidad en billetes de 50 '));
                const billetes100 = Number(prompt('Ingrese la cantidad en billetes de 100 '));
                const cant5 = billetes5 * 5;
                const cant10 = billetes10 * 10;
                const cant20 = billetes20 * 20;
                const cant50 = billetes50 * 50;
                const cant100 = billetes100 * 100;
                    let newCantBilletes = [billetes5,billetes10,billetes20,billetes50,billetes100];
                    let monto = [cant5,cant10,cant20,cant50,cant100];
                    total = total + cant5 + cant10 + cant20 + cant50 + cant100;
                    console.log(newCantBilletes);
                cantBilletes.push(newCantBilletes);
                cajeroCargado = 1;
                alert(`En billetes de 5 se tiene ${cant5}  En billetes de 10 se tiene ${cant10}  En billetes de 20 se tiene ${cant20}  En billetes de 50 se tiene ${cant50}  En billetes de 100 se tiene ${cant100}` )
                n = 1;
            }else if(element.typeUser ==1){
                if(cajeroCargado == 0){
                    console.log('Cajero en mantenimiento, Vuelva pronto')
                }else if(cajeroCargado == 1){
                    cantRetiro = Number(prompt('Ingrese la cantidad a retirar'));
                    if(cantRetiro<total){
                        alert(`El cajero puede entregar maximo ${total}`)
                        if(cantRetiro>100){// 272
                            calculo = cantRetiro/100;// y quitar los decimales 2.72
                            cantBilletesEntrega100 = Math.trunc(calculo); // 2
                            cantRetiro = (calculo - cantBilletesEntrega100)*10;// calcular cuanto le queda 72
                            let cantRestante = cantBilletes.billetes100 - cantBilletesEntrega100; //10 - 2 = 8
                            cantBilletes.splice(4,1,cantRestante);
                            dineroEntregado = cantBilletesEntrega100 * 100;//200
                            total = total - dineroEntregado;
                            console.log(`Se entrego ${cantBilletesEntrega100} billetes de 100`);// se debe cambiar a Console log
                        }else if(cantRetiro>50){
                            calculo = cantRetiro/100;
                            cantBilletesEntrega50 = Math.trunc(calculo);
                            cantRetiro = (calculo - cantBilletesEntrega50)*10;
                            let cantRestante = cantBilletes.billetes50 - cantBilletesEntrega50;
                            cantBilletes.splice(3,1,cantRestante);
                            dineroEntregado = cantBilletesEntrega50 * 100;
                            total = total - dineroEntregado;
                            console.log(`Se entrego ${cantBilletesEntrega50} billetes de 50`);
                        }else if(cantRetiro>20){
                            calculo = cantRetiro/100;
                            cantBilletesEntrega20 = Math.trunc(calculo);
                            cantRetiro = (calculo - cantBilletesEntrega20)*10;
                            let cantRestante = cantBilletes.billete20 - cantBilletesEntrega20;
                            cantBilletes.splice(2,1,cantRestante);
                            dineroEntregado = cantBilletesEntrega20 * 100;
                            total = total - dineroEntregado;
                            console.log(`Se entrego ${cantBilletesEntrega20} billetes de 20`);
                        }else if(cantRetiro>10){
                            calculo = cantRetiro/100;
                            cantBilletesEntrega10 = Math.trunc(calculo);
                            cantRetiro = (calculo - cantBilletesEntrega10)*10;
                            let cantRestante = cantBilletes.billete10 - cantBilletesEntrega10;
                            cantBilletes.splice(1,1,cantRestante);
                            dineroEntregado = cantBilletesEntrega10 * 10;
                            total = total - dineroEntregado;
                            console.log(`Se entrego ${cantBilletesEntrega10} billetes de 10`);
                        }else if(cantRetiro>5){
                            calculo = cantRetiro/100; 
                            cantBilletesEntrega5 = Math.trunc(calculo);
                            cantRetiro = (calculo - cantBilletesEntrega5)*10;
                            let cantRestante = cantBilletes.billete5 - cantBilletesEntrega5;
                            cantBilletes.splice(0,1,cantRestante);
                            dineroEntregado = cantBilletesEntrega5 * 100;
                            total = total - dineroEntregado;
                            console.log(`Se entrego ${cantBilletesEntrega5} billetes de 5`);
                        }                        
                    }else{
                        console.log(`No se tiene dinero suficiente te sobro ${cantRetiro}`);
                    }
                    console.log(`Dinero restante en cajero ${total}, en billetes de 5 ${newCantBilletes.billetes5}, en billetes de 10 ${newCantBilletes.billetes10}, en billetes de 20 ${newCantBilletes.billetes20}, en billetes de 50 ${newCantBilletes.billetes50}, en billetes de 100 ${newCantBilletes.billetes100},`)
                }
            }
        }
        alert('Usuario no existe')
        n=1;
        
        })
    
    }
}
