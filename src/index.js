document.addEventListener('DOMContentLoaded', () => {


  const image = document.getElementById('1208')
  const like = document.getElementById('likes')
  const button = document.getElementById('like_button')

  //Enter the id from the fetched image here

  const imageURL = `https://randopic.herokuapp.com/images/1208`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  fetch(imageURL)
    .then(resp => resp.json())
    .then(
      json => {image.src = json.url
              like.innerHTML = json.like_count

    })


   document.addEventListener('click', (event) => {
     let likeCount = 0
     ++likeCount;
     if (event.target === button) {
      const like = document.querySelector('#likes')

      like.innerHTML = likeCount
     }
     fetch(`https://randopic.herokuapp.com/images/1208/1208`, {
       method: 'PATCH',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({
         like_count: `${likeCount}`
       })
     })



   })



})
