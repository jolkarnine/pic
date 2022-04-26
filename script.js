// let imgDiv = document.querySelector('#img-div');

// let buttonList = document.querySelectorAll("button");

// let buttonArray = Array.from(buttonList);

// buttonArray.map(function (b) {

//     b.addEventListener('click',

//         function () {

//             imgDiv.innerHTML = `<img src="${b.dataset.url}"/>`;

//         }
//     );
// });






// let btn = document.querySelectorAll("button")

// let col = document.querySelector("#img-div")

// let myarr = Array.from(btn)

// // console.log(myarr)

// myarr.map(function(shariful2){
//     // console.log(shariful)
//     shariful2.addEventListener('click' , function(shariful){
//         col.innerHTML =`<img src="${shariful.target.dataset.url}" alt="pic">`
//     })
// })

// btn.addEventListener('click' , function(){
//     col.innerHTML=`<img src="${btn.dataset.url}" alt="pic">`
// })


// btnOne.addEventListener('click', function (e) {



// alert(e.target.innerHTML)

/*    body.innerHTML += `<div class="images">
    <img src="${btnOne.dataset.goal}" alt="pic">
</div>`*/
// })








let bot = document.querySelectorAll('button')

let men = Array.from(bot)

let imgDiv = document.querySelector('#img-div')

// let doc = bot.dataset.url


men.map(function(bee){
    bee.addEventListener('click' , function(shofik){
        imgDiv.innerHTML = `<img src="${shofik.target.dataset.url}" alt="pic">`
    })
})



// bot.addEventListener('click' , function(){
//     imgDiv.innerHTML = `<img src="${doc}" alt="pic">`
// })