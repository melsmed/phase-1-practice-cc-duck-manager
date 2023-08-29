const duckNav = document.querySelector('#duck-nav')
const duckName = document.querySelector("#duck-display-name")
const duckDisplayImg = document.querySelector("#duck-display-image")
const duckLikes= document.querySelector("#duck-display-likes")
const duckForm= document.querySelector('#new-duck-form')

fetch("http://localhost:3000/ducks")
.then(resp => resp.json())
.then(data => { 
    data.forEach(duck => {
      addDuckNav(duck)
    })
})

duckLikes.addEventListener('click', event => {
const currNum= parseInt(duckLikes.textContent)
const newNum = currNum  + 1
duckLikes.textContent = newNum
})


duckForm.addEventListener('submit', event => {
    event.preventDefault()
    const duckNameInput = event.target["duck-name-input"].value
    const duckImg = event.target["duck-image-input"].value

    const newDuck = {
        img_url: duckImg,
        name: duckNameInput,
        likes: 0
    }
        addDuckNav(newDuck)
})


    function addDuckNav(duck) {
        const duckImg = document.createElement('img')
        duckImg.src= duck.img_url
        duckImg.alt= duck.name
        
        duckImg.addEventListener('click', event => {
            duckName.textContent = duck.name
            duckDisplayImg.src = duck.img_url
            duckDisplayImg.alt = duck.name
            duckLikes.textContent = duck.likes
        })
        duckNav.append(duckImg)
    }







// let currentDuck;
// fetch('http://localhost:3000/ducks')
// .then(response => response.json())
// .then(ducks => {
//     ducks.forEach(duck => renderDucks(duck))
//     duckDetails(ducks[0])
// })

//     function renderDucks(duck) {
//         const duckList= document.querySelector('#duck-nav')
//         const duckImage=document.createElement('img')
    
//         duckImage.src=duck.img_url
//         duckList.append(duckImage)

//         duckImage.addEventListener('click', (e) => { 
//             duckDetails(duck)
//         })
//     }
//     const duckName= document.querySelector('#duck-display-name')
//     const image= document.querySelector('#duck-display-image')
//     const likebtn= document.querySelector('#duck-display-likes')
//     likebtn.addEventListener('click', (e) => {
//         currentDuck.likes += 1
//         likebtn.textContent= `${currentDuck.likes} Likes`
//     })

//     function duckDetails(ducks) {
//         currentDuck = ducks;

//         duckName.textContent=ducks.name
//         image.src=ducks.img_url
//         likebtn.innerHTML= `${ducks.likes} Likes`

//     }
//     function newForm(form){
//         const newDuckForm = document.querySelector('#new-duck-form')
//         newDuckForm.addEventListener('submit', (event)=> {
//             event.preventDefault()           
//             const newName= event.target['duck-name-input'].value
//             const newImage=event.target['duck-image-input'].value
//             // const newLikebtn=event.target.likes.value
             
//             const loadNewDuck=  {
//                 'name':newName,
//                 'img_url': newImage,
//                 'likes': 0
                
//             }
//             renderDucks(loadNewDuck)
//         })
//     }
   
//     newForm()