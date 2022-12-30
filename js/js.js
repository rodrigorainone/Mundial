



let polonia = {
    nombre:"Polonia",
    img:"./img/bandera polonia.png",
    PJ:0,
    PG:0,
    PE:0,
    PP:0,
    GF:0,
    GC:0,
    Dif:0,
    Pts:0
};
let argentina = {
    nombre:"Argentina",
    img:"./img/bandera argentina.jpg",
    PJ:0,
    PG:0,
    PE:0,
    PP:0,
    GF:0,
    GC:0,
    Dif:0,
    Pts:0
};
let mexico = {
    nombre:"Mexico",
    img:"./img/bandera mexico.png",
    PJ:0,
    PG:0,
    PE:0,
    PP:0,
    GF:0,
    GC:0,
    Dif:0,
    Pts:0
};
let arabiaSaudita = {
    nombre:"Arabia Saudita",
    img:"./img/bandera arabia saudita.png",
    PJ:0,
    PG:0,
    PE:0,
    PP:0,
    GF:0,
    GC:0,
    Dif:0,
    Pts:0
};

function PaisesVs (Pais1,Pais2,GolPais1,GolPais2){
    if ((GolPais1!=='') && (GolPais2!=='') ){
        Pais1.PJ+=1;
        Pais2.PJ+=1;
        Pais1.GF+=parseInt(GolPais1);
        Pais1.GC-=parseInt(GolPais2);
        Pais1.Dif=(Pais1.GF-Math.abs(Pais1.GC));
        Pais2.GF+=parseInt(GolPais2);
        Pais2.GC-=parseInt(GolPais1);
        Pais2.Dif=(Pais2.GF-Math.abs(Pais2.GC));
        if (GolPais1>GolPais2){
            Pais1.PG+=1;
            Pais1.Pts+=3;        
            Pais2.PP+=1;
        }
        else if (GolPais1<GolPais2){
            Pais1.PP+=1;        
            Pais2.PG+=1;
            Pais2.Pts+=3;
        }else{
            Pais1.PE+=1;        
            Pais1.Pts+=1;
            Pais2.PE+=1;        
            Pais2.Pts+=1;
         }       
    }

}

function checkNumero (numero) {                             // para checkear que sea solo numeros
    if (/^[0-9]+$/.test(numero)){        
        return true
    }
    return false
}



const getInputs = document.querySelectorAll('#contenedor input');

const getCalcular= document.querySelector('#calcular');
const getPlanilla =document.querySelector(".planilla");
const getEvent = document.querySelector("#event");

getCalcular.onclick = (e)=>{
    e.preventDefault(); 
    let argetinaP1= document.querySelector(`#argentina1`).value;
    let argetinaP2= document.querySelector(`#argentina2`).value;
    let argetinaP3= document.querySelector(`#argentina3`).value;

    let mexicoP1 = document.querySelector("#mexico1").value;
    let mexicoP2 = document.querySelector("#mexico2").value;
    let mexicoP3 = document.querySelector("#mexico3").value;

    let poloniaP1 = document.querySelector("#polonia1").value;
    let poloniaP2 = document.querySelector("#polonia2").value;
    let poloniaP3 = document.querySelector("#polonia3").value;

    let arabiaSauditaP1 = document.querySelector("#arabiaSaudita1").value;
    let arabiaSauditaP2 = document.querySelector("#arabiaSaudita2").value;
    let arabiaSauditaP3 = document.querySelector("#arabiaSaudita3").value;


    


   

/*
    if ((argetinaP1!=='') && (arabiaSauditaP1!=='') ){
        argentina.PJ+=1;
        arabiaSaudita.PJ+=1;
        argentina.GF+=parseInt(argetinaP1);
        argentina.GC-=parseInt(arabiaSauditaP1);
        argentina.Dif=(argentina.GF-Math.abs(argentina.GC));
        arabiaSaudita.GF+=parseInt(arabiaSauditaP1);
        arabiaSaudita.GC-=parseInt(argetinaP1);
        arabiaSaudita.Dif=(arabiaSaudita.GF-Math.abs(arabiaSaudita.GC));
        if (argetinaP1>arabiaSauditaP1){
            argentina.PG+=1;
            argentina.Pts+=3;        
            arabiaSaudita.PP+=1;
        }
        else if (argetinaP1<arabiaSauditaP1){
            argentina.PP+=1;        
            arabiaSaudita.PG+=1;
            arabiaSaudita.Pts+=3;
        }else{
            argentina.PE+=1;        
            argentina.Pts+=1;
            arabiaSaudita.PE+=1;        
            arabiaSaudita.Pts+=1;
         }       
    }

*/
if ( checkNumero (arabiaSauditaP1) && checkNumero (arabiaSauditaP2) && checkNumero (arabiaSauditaP3) &&  checkNumero(poloniaP1)&&  checkNumero(poloniaP2) &&  checkNumero(poloniaP3) && checkNumero(mexicoP1) && checkNumero(mexicoP2) && checkNumero(mexicoP3) && checkNumero(argetinaP1) && checkNumero(argetinaP2) && checkNumero(argetinaP3)){


        PaisesVs(argentina,arabiaSaudita,argetinaP1,arabiaSauditaP1);
        PaisesVs(mexico,polonia,mexicoP1,poloniaP1);

        PaisesVs(polonia,arabiaSaudita,poloniaP2,arabiaSauditaP2);
        PaisesVs(argentina,mexico,argetinaP2,mexicoP2);

        PaisesVs(polonia,argentina,poloniaP3,argetinaP3);
        PaisesVs(arabiaSaudita,mexico,arabiaSauditaP3,mexicoP3);
















    
    let equipos1 = [polonia,mexico,argentina,arabiaSaudita];    

    equipos1.sort((a,b) =>  {
        if (a.Pts > b.Pts)
            return -1;
        else if (a.Pts < b.Pts)
            return 1;
        else 
            if (a.Dif>b.Dif)
                return -1;
            else if (a.Dif< b.Dif)
                return 1;
            else 
                return 0;
    });   

    
       
    getEvent.innerHTML="";
        equipos1.forEach((element,index) => {
            getPlanilla.style.display= "flex";
            getEvent.innerHTML+=`
    
               <table id="tablaEvent${index}">
                        <tr>
                            <th class="thImg"><img src="${element.img}" alt=""></th>
                            <th class="thNombre">${element.nombre}</th>
                            <th class="nada"></th>
                            <th class="thPJ">${element.PJ}</th>                       
                            <th class="thPJ">${element.PG}</th>
                            <th class="thPJ">${element.PE}</th>
                            <th class="thPJ">${element.PP}</th>
                            <th class="thPJ">${element.GF}</th>
                            <th class="thPJ">${element.GC}</th>
                            <th class="thPJ">${element.Dif}</th>
                            <th class="thPJ">${element.Pts}</th>
                        </tr>
                </table>
                                `
            console.log(index);
            if ((index==0) || (index==1)){
                document.getElementById(`tablaEvent${index}`).setAttribute("bgColor","#8d1c3d");
                document.getElementById(`tablaEvent${index}`).style.color = "white";
            }        
            else{
                document.getElementById(`tablaEvent${index}`).setAttribute("bgColor","silver");
            }
        });    

    
    
    
    /* se vuelve a poner en cero para restartear cuando apretas y no vuelva a sumar . */
    
    polonia = {
        nombre:"Polonia",
        img:"./img/bandera polonia.png",
        PJ:0,
        PG:0,
        PE:0,
        PP:0,
        GF:0,
        GC:0,
        Dif:0,
        Pts:0
    };
    argentina = {
        nombre:"Argentina",
        img:"./img/bandera argentina.jpg",
        PJ:0,
        PG:0,
        PE:0,
        PP:0,
        GF:0,
        GC:0,
        Dif:0,
        Pts:0
    };
    mexico = {
        nombre:"Mexico",
        img:"./img/bandera mexico.png",
        PJ:0,
        PG:0,
        PE:0,
        PP:0,
        GF:0,
        GC:0,
        Dif:0,
        Pts:0
    };
    arabiaSaudita = {
        nombre:"Arabia Saudita",
        img:"./img/bandera arabia saudita.png",
        PJ:0,
        PG:0,
        PE:0,
        PP:0,
        GF:0,
        GC:0,
        Dif:0,
        Pts:0
    };
    }
    else{
        getEvent.innerHTML="";
        getPlanilla.style.display= "none";        
        getEvent.innerHTML=`<div class="divMessi">
                            <img class="picMessi"src="./img/messi.png" alt="">
                            <p class="subMessi">Completa todo y solo con numeros</p></div>`;
        
    }
   
}
   
    
        

    

    
