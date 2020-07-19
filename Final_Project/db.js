var firebaseConfig = {
    apiKey: "AIzaSyCM8By0OqKVw2Lg0GXrYbm0O_32WgAbSS0",
    authDomain: "project-ac329.firebaseapp.com",
    databaseURL: "https://project-ac329.firebaseio.com",
    projectId: "project-ac329",
    storageBucket: "project-ac329.appspot.com",
    messagingSenderId: "746258907281",
    appId: "1:746258907281:web:73ca2b0597bee5b949bf30",
    measurementId: "G-2HBFLGSQ9V"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const outputHeader=document.querySelector("#lblQuote");
 const inputTextField=document.querySelector("#txtQuote");
 const saveButton=document.querySelector("#saveButton");
 const loadButton=document.querySelector("#loadButton");


 saveButton.addEventListener("click",function(){
    const textToSave=inputTextField.value;
    console.log("Quotes "+textToSave);
});

var firestore = firebase.firestore();

const docRef = firestore.doc("samples/quote");

saveButton.addEventListener("click",function(){
    const textToSave=inputTextField.value;
    console.log("Quotes "+textToSave);
    docRef.set({
        inspirationalQuote:textToSave
    }).then(function(){
        console.log("Quote Save");
    }).catch(function(error){
        console.log("Got an error: ",error);
    });
});

loadButton.addEventListener("click",function(){
    docRef.get().then(function(doc){
        if(doc && doc.exists){
            const myQuote=doc.data();
            outputHeader.innerText="My Inspirational Quote: "+myQuote.inspirationalQuote;
        }
    }).catch(function(error){
        console.log("Got an error: ",error);
    });
});

getRealTimeUpdate=function(){
    docRef.onSnapshot(function(doc){
        if(doc && doc.exists){
            const myQuote=doc.data();
            console.log("Check out this document I received ",doc);
            outputHeader.innerText="My Inspirational Quote: "+myQuote.inspirationalQuote;
        }
    });
}
getRealTimeUpdate();