
import { readdata, writeUser } from "./firebase.js";
const explore = document.querySelector('.post');
const homeBtn = document.querySelector('.home-btn');
homeBtn.addEventListener('click', () => {
explore.innerHTML = `
        <div class="header">
            <h2>Home</h2>
        </div>

        <div class="tweet_box">
            <div class="form">
                <div class="tweet_box-input">
                    <img src="img/profile.jpg" alt="profile imagw">
                    <input type="text" class="post-new-text" placeholder="What's happening?">
                    <button class="post-share-btn">Share</button>
                </div>
            </div>
        </div>
`;
const postShare = document.querySelector('.post-share-btn');
const post = document.querySelector('.post-new-text');
postShare.addEventListener(('click') , async()=>{
    var text = post.value;
    console.log(text);
    let newdata = {
        post : text
    }
    let data = JSON.parse(sessionStorage.getItem('user'));
    await writeUser(data.username , newdata);
});
})
// const getUser = await readdata(data);


let data = JSON.parse(sessionStorage.getItem('user'));
// console.log(data);
const user_con = document.querySelector(".main");
const expbtn = document.querySelector(".explore-btn");
expbtn.addEventListener('click', () => {
    explore.innerHTML = `
    <div class="exp-header">
        <h2>Explore</h2>
    </div>
    <div class="post-main">
        <div class="post_profile-image">
            <img src="img/profile.jpg" alt="java-logo">
        </div>
        <div class="post_body">
            <div class="post_header">
                <div class="post_header-text">
                    <h3>${data.username}
                        <span class="header-icon-section">
                            <span class="material-icons post_badge">verified</span>
                        </span>
                    </h3>
                </div>

                <div class="post_header-discription">
                    <p>Lonavala Trip with Colleagues </p>
                    <br>
                    <p>Nestled in the scenic Sahyadri mountain ranges of Maharashtra,<br> Lonavala is a charming hill station renowned for its lush greenery, <br>cascading waterfalls, and serene lakes. Whether you seek adventure, relaxation,<br> or simply a break from the hustle and bustle of city life,<br> Lonavala offers a perfect retreat just a few hours away from Mumbai and Pune
                        </p>
                </div>
            
            </div>
            <img src="img/lonavala.jpeg" alt="java18">

            <div class="post_footer">

                <span class="material-icons">chat</span>
                <span class="material-icons">repeat</span>
                <span class="material-icons">favorite_border</span>
                <span class="material-icons">file_upload</span>
                

            </div>
        </div>
    </div>
    <div class="post-main">
        <div class="post_profile-image">
        <img src="img/khume.png" alt="java-logo">
        </div>
        <div class="post_body">
            <div class="post_header">
                <div class="post_header-text">
                    <h3>Khume
                        <span class="header-icon-section">
                            <span class="material-icons post_badge">verified</span>
                        </span>
                    </h3>
                </div>

                <div class="post_header-discription">
                <p>Rishikesh: Where Spirituality Meets Adventure</p>
                <br>
                <p>Nestled in the foothills of the majestic Himalayas and straddling <br>the banks of the holy Ganges River, Rishikesh is a spiritual haven and adventure <br>seeker's paradise. From tranquil ashrams and ancient temples to thrilling river<br> rafting and yoga retreats, Rishikesh offers a unique blend of spirituality, <br>adventure, and natural beauty that captivates travelers from around the world.<br>
                   Travel Exprience : 
                    <ol>
                        <li>1.Best Time to Visit: September to April</li>
                        <li>2.Transportation: Well-connected by road, rail, and air (nearest airport in Dehradun).</li>
                        <li>3.Dress Code: Dress modestly, especially in temples and ashrams.</li>
                        <li>4.Water Safety: Exercise caution in the Ganges River</li>
                    </ol>
                </p>
                </div>
            
            </div>
            <img src="img/rishikesh.avif" alt="java18">


            <div class="post_footer">

                <span class="material-icons">chat</span>
                <span class="material-icons">repeat</span>
                <span class="material-icons">favorite_border</span>
                <span class="material-icons">file_upload</span>
                

            </div>
        </div>
    </div>
    `;
})

const proBtn = document.querySelector('.profile-btn');
proBtn.addEventListener('click', ()=>{
    explore.innerHTML = `
    <div class="pro">
        <div class="pro-header">
            <h2>Profile</h2>
        </div>
        <div class="profile-info">
            <div class="profile-image">
                <img src="img/profile.jpg" alt="java-logo">
            </div>
            <div class="profile-post track">
                <h5>2</h5>
                <p>Posts</p>
            </div>
            <div class="profile-followers track">
                <h5>20</h5>
                <p>follower</p>
            </div>
            <div class="profile-following track">
                <h5>20</h5>
                <p>following</p>
            </div>
            
        </div>
        <div class="profile-content">
            <div class="profile-name">
                <h3>${data.username}
                    
                </h3>
            </div>
            <div class="profile-bio">
                <p>

                </p>
            </div>
            
        </div>
    </div>
    `;
})



// const post = document.querySelector('.post-new-text');

// postShare.addEventListener(('click') , async ()=>{
//     let data = {
//         post : setPost.value
//     }
//     await writeUserData(data.post , data);
// })
// const getUser = await readdata(data);