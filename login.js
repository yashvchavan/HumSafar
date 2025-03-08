import { readdata, writeUserData } from "./firebase.js";
// const auth = getAuth(app);
//   auth.languageCode = 'en'
//   const provider = new GoogleAuthProvider();

const loginSection = document.querySelector('.login-section');
loginSection.innerHTML = `
<div class="registration">
    <div class="grid">
        <div class="form">
            <h2>Welcome Back Travellers!!</h2>
            <p>Keep Exploring :)</p>
            <button class="login-btn">Login here</button>
        </div>
        <div class="reg-form">
            <h2>Create Account</h2>
            <div class="social">
                <ul>
                    <li><a href="#"><i id="insta" class="bi bi-instagram"></i></a></li>
                    <li><a href="#"><i id="twit" class="bi bi-twitter"></i></a></li>
                    <li><a href="#"><i id="linked" class="bi bi-linkedin"></i></a></li>
                    <li><a href="#"><i id="face" class="bi bi-facebook"></i></a></li>
                </ul>
            </div>
            <p>or use email for registration</p>
            <div>
                <div class="input-field">
                    <label for="username">
                        <input id="username" class="js-Rusername" name="#" placeholder="Name" type="text">
                    </label>
                </div>
                <div class="input-field">
                    <label for="Email">
                        <input id="Email" class="js-Remail" name="#" 
                        placeholder="Email"  type="email">
                    </label>
                </div>
                <div class="input-field">
                    <label for="Password">
                        <input id="Password" class="js-Rpassword" name="#" 
                        placeholder="Password" type="password">
                    </label>
                </div>
                <div class="input-field">
                    <input type="submit" class="js-Rsubmit" value="register">
                </div>
            </div>
            
        </div>
    </div>
</div>
<div class="login">
    <div class="grid">
        <div class="form">
            <h2>Hello Travelling Enthusiast</h2>
            <p>Start Your Ultimate Travel Journey Now!!!</p>
            <button class="registration-btn">Register here</button>
        </div>
        <div class="login-form">
            <h2>Login</h2>
            <div class="social">
                <ul>
                    <li><a href="#"><i id="insta" class="bi bi-instagram"></i></a></li>
                    <li><a href="#"><i id="twit" class="bi bi-twitter"></i></a></li>
                    <li><a href="#"><i id="linked" class="bi bi-linkedin"></i></a></li>
                    <li><a href="#"><i id="face" class="bi bi-facebook"></i></a></li>
                </ul>
            </div>
            <p></p>
            <div>
                <div class="input-field">
                    <label for="Email1">
                        <input id="Email1" class="js-username" name="#" placeholder="Email" type="text">
                    </label>
                </div>
                <div class="input-field">
                    <label for="Password1">
                        <input id="Password1" class="js-password" name="#" placeholder="Password" type="password">
                    </label>
                </div>
                <div class="input-field">
                    <input type="submit" class="js-submit" value="register">
                </div>
            </div>
            
        </div>
    </div>
</div> 


`;

auth();
const user_con = document.querySelector('.user-container');
const reg_btn = document.querySelector('.registration-btn');
const login_btn = document.querySelector('.login-btn');

reg_btn.addEventListener('click', () => {
    user_con.classList.add('login-section')
})
login_btn.addEventListener('click', () => {
    user_con.classList.remove('login-section')
})


const setUsername = document.querySelector('.js-Rusername');
const setEmail = document.querySelector('.js-Remail');
const setPassword = document.querySelector('.js-Rpassword');
const username = document.querySelector('.js-username');
const password = document.querySelector('.js-password');

const Rsubmit = document.querySelector('.js-Rsubmit');
const submit = document.querySelector('.js-submit');
// const googleLogin = document.getElementById('google-login-btn')

// googleLogin.addEventListener(('click'), () => {
    
//     signInWithPopup(auth, provider)
//     .then((result) => {
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const user = result.user;
//         console.log(user);
//         window.location.href = "index.html";
//     }).catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//     });
// }) 



Rsubmit.addEventListener(('click') , async ()=>{
    let data = {
        username : setUsername.value,
        email : setEmail.value,
        password : setPassword.value
    }
    await writeUserData(data.username , data);
})
function auth(){
    if(sessionStorage.getItem('user') != null){
        console.log("hii");
        let data = JSON.parse(sessionStorage.getItem('user'));
        loginSection.innerHTML = `
        
             <h1 class="message">Hii , ${data.username}</h1>
             <button class="logout">logout</button>
       

        `;
        let logout = document.querySelector('.logout');
        logout.addEventListener(('click'),()=>{
            sessionStorage.removeItem('user');
            window.location.reload();
        });
        
    }
}


submit.addEventListener(('click') , async ()=>{
    let data = {
        username : username.value,
        password : password.value
    }
    const getUser = await readdata(data);
    if(data.username == getUser.username && data.password == getUser.password)
    {
        
        sessionStorage.setItem("user",JSON.stringify(data));
        auth();
        window.location.href = 'index.html';
        alert('Login Successfull!!!');
        
    }
    else{
        alert('Register First!!!');
    }
});





