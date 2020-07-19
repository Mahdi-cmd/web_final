const auth = firebase.auth();
const db = firebase.firestore();

//get data


//listen for auth status change
auth.onAuthStateChanged( user => {
    if(user){
        
db.collection('guides').get().then(snapshot => {
    setupGuides(snapshot.docs);
    setupUI(user);
  });
    }else{
        setupUI();
        setupGuides([]);
    }
});



const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;


    //sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred =>{
        console.log(cred);
        alert("الحساب اقيم بنجاح ");

        
    });

});


// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
});

const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred =>{
        console.log(cred.user);
        alert("نجح تسجيل الدخول");
       
    });
})

AOS.init({
    duration:1200
   


})