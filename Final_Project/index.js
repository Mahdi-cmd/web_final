const guideList= document.querySelector('.guides');
const loggedOutLinks = document.querySelectorAll(".logout");
const loggedInLinks = document.querySelectorAll(".login");
const accountDetails = document.querySelector('.account-details');


const setupUI = (user) =>{
    if(user){
        //account info
        const html = `
          <div>Logged in as ${user.email}</div>
        `;
        accountDetails.innerHTML = html;
        
        //show and remove navbar
        loggedInLinks.forEach(item => item.style.display = 'flexbox');
        loggedOutLinks.forEach(item=> item.style.display = 'none');
    }else {
        //hide account info

        //show and remove navbar
        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item=> item.style.display = 'flexbox');
        loggedOutLinks.forEach(item=> item.style.marginLeft = '200px');

    }

}
//setup
const setupGuides = (data) => {
   if(data.length){
        let html = '';
        data.forEach(doc =>{
            const guide = doc.data();
            const li = `
            <li> 
            <div> ${guide.Donation} </div>
            </li>
            `;
            html += li;
        })

    }else{
        guideList.innerHTML = '<h5 class="center"> Login in To view your history</h5>'
    }
}

