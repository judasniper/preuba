
var d = new Date();
var n = d.toLocaleDateString();
document.getElementById('FechaActual').innerHTML= n;


// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyC74QNWfrpQ_dlAxU9fkSGYL-qDgYxiHn4',
    authDomain: 'iempos-d2216.firebaseapp.com',
    projectId: 'tiempos-d2216'
  });
  // Initialize Firebase
  var db = firebase.firestore();
  
//agregar documentos
function guardar (){
     
    var receta= document.getElementById('numReceta').value;
    var apellido= document.getElementById('apellido').value;
    var fecha= document.getElementById('fecha').value;
    var ebais = document.getElementById('centroSalud').value;
    var fechaReceta = document.getElementById('fechaReceta').value;
    var horaEntra = document.getElementById('horaEntra').value;


    console.log(fechaReceta);
    db.collection("bdTiempos").add({
        Ebais: ebais,
        Receta : receta,
        FechaReceta: fechaReceta,
        FechaActual: n, 
        HoraEntra : horaEntra
               
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
       document.getElementById('nombre').value='';
       document.getElementById('apellido').value='';
       document.getElementById('fecha').value='';
       document.getElementById('fechaReceta').value='';
       document.getElementById('numReceta').value='';
       document.getElementById('horaEntra').value='';

        // otra opcion para borrar 
        // document.getElementById("miForm").reset();

    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

//Leer documentos.
var tabla = document.getElementById('tabla');
db.collection("bdTiempos").onSnapshot((querySnapshot) => {
    tabla.innerHTML='';
    querySnapshot.forEach((doc) => {

        // let date = doc.data().fecha.toDate() // convierte a un objeto Date de JS
        // var fecha = date.toDateString();
        // console.log(`${doc.id} => ${doc.data().first}`);
        tabla.innerHTML += `
        <tr>
        <th scope="row">${doc.id}</th>
        <td>${doc.data().FechaActual}</td>
        <td>${doc.data().Ebais}</td>
        <td>${doc.data().Receta}</td>
        <td>${doc.data().FechaReceta}</td>
        <td>${doc.data().HoraEntra}</td>
        <td><button class="btn btn-danger" onclick="eliminar('${doc.id}')"> eliminar</button></td>
        <td><button class="btn btn-warning"onclick="editar('${doc.id}','${doc.data().FechaActual}','${doc.data().Ebais}','${doc.data().Receta}','${doc.data().FechaReceta}','${doc.data().HoraEntra}')"> editar</button></td>
        </tr>        
        ` //<- ojo a estas comillas especiales

    });
});


//borrar documentos.

function eliminar(id){
    db.collection("bdTiempos").doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });

}


//editar documentos
function editar(id,nombre,apellido,fecha){

    console.log (nombre);

document.getElementById('nombre').value= nombre ;
document.getElementById('apellido').value= apellido;
document.getElementById('fecha').value= fecha;
document.getElementById('centroSalud').value= id;


var boton = document.getElementById('boton');
boton.innerHTML='Editar';

boton.onclick = function (){

    var washingtonRef = db.collection("bdTiempos").doc(id);

    // Set the "capital" field of the city 'DC'

    var nombre = document.getElementById('nombre').value ;
    var apellido = document.getElementById('apellido').value;
    var fecha = document.getElementById('fecha').value;

    return washingtonRef.update({
        first: nombre,
        last: apellido,
        born: fecha
    })
    .then(function() {
        console.log("Document successfully updated!");
        boton.innerHTML='Guardar';
        document.getElementById('nombre').value='';
       document.getElementById('apellido').value='';
       document.getElementById('fecha').value='';


    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
    
    
    } 
}




function buscar(){
    var citiesRef = db.collection("cities");

citiesRef.doc("SF").set({
    name: "San Francisco", state: "CA", country: "USA",
    capital: false, population: 860000,
    regions: ["west_coast", "norcal"] });
citiesRef.doc("LA").set({
    name: "Los Angeles", state: "CA", country: "USA",
    capital: false, population: 3900000,
    regions: ["west_coast", "socal"] });
citiesRef.doc("DC").set({
    name: "Washington, D.C.", state: null, country: "USA",
    capital: true, population: 680000,
    regions: ["east_coast"] });
citiesRef.doc("TOK").set({
    name: "Tokyo", state: null, country: "Japan",
    capital: true, population: 9000000,
    regions: ["kanto", "honshu"] });
citiesRef.doc("BJ").set({
    name: "Beijing", state: null, country: "China",
    capital: true, population: 21500000,
    regions: ["jingjinji", "hebei"] });

}




function consulta(){
    centroSalud = document.getElementById('centroSalud').value;
    db.collection("Area Salud Limon").doc(centroSalud)
    .onSnapshot(function(doc) {
        document.getElementById('text1').value = doc.data().Descripcion;
        console.log(doc.data().Descripcion)
    });
}

var centroSalud = document.getElementById ('centroSalud');
centroSalud.addEventListener("keypress", myFunction)

var botonBuscar = document.getElementById('btnBuscar');
botonBuscar.addEventListener("click", consulta);

function msj(){
    console.log("josuea Aqui")
}

function myFunction(event) {
    var x = event.which || event.keyCode;
    //document.getElementById("demo").innerHTML = "The Unicode value is: " + x;
  if (x==13){
      console.log('x')
    consulta();
  }
  
  }
 



        



 











