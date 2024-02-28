const mainData = () => {
  fetch('https://test-project-423bd-default-rtdb.firebaseio.com/anime.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data)
    })
}

mainData();