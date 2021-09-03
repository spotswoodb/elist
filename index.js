fetch("http://localhost:3000/podcasts")
.then(resp => resp.json())
.then(json => console.log(json))
