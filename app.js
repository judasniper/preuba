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
     
    var nombre= document.getElementById('nombre').value;
    var apellido= document.getElementById('apellido').value;
    var fecha= document.getElementById('fecha').value;
    db.collection("users").add({
        first: nombre,
        last: apellido,
        born: fecha
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
       document.getElementById('nombre').value='';
       document.getElementById('apellido').value='';
       document.getElementById('fecha').value='';

        // otra opcion para borrar 
        // document.getElementById("miForm").reset();

    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

//Leer documentos.
var tabla = document.getElementById('tabla');
db.collection("users").onSnapshot((querySnapshot) => {
    tabla.innerHTML='';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().first}`);
        tabla.innerHTML += `
        <tr>
        <th scope="row">${doc.id}</th>
        <td>${doc.data().first}</td>
        <td>${doc.data().last}</td>
        <td>${doc.data().born}</td>
        <td><button class="btn btn-danger" onclick="eliminar('${doc.id}')"> eliminar</button></td>
        <td><button class="btn btn-warning"onclick="editar('${doc.id}','${doc.data().first}','${doc.data().last}','${doc.data().born}')"> editar</button></td>
        </tr>        
        ` //<- ojo a estas comillas especiales
    });
});

//borrar documentos.

function eliminar(id){
    db.collection("users").doc(id).delete().then(function() {
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

    var washingtonRef = db.collection("users").doc(id);

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
        console.log("Current data: ", doc.data().
        Descripcion);
        //document.getElementById('text1').value= "doc.data().name";
        document.getElementById('text1').value = doc.data().
        Descripcion;
    });
}





 











