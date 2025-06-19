
let search = document.getElementById("search")
let movies = document.getElementById("movies")
search.addEventListener("keyup", function(e){
    getMovies(e.target.value)
})

function getMovies(search){
    let api_key = '39ea6b66'
    
    let url = `http://www.omdbapi.com/?apikey=${api_key}&S=${search}`

    fetch(url)
    .then((res)=>res.json())
    .then((res)=>{
        showMovies(res.Search)
        
    })
}



function eachMovie(id){

    console.log(id)

    // fetch(`http://www.omdbapi.com/?apikey=39ea6b66&i=${id}`)
    // .then((res)=> res.json())
    // .then((res) =>{
    //     console.log(res)
    // })

}


function showMovies(data){

movies.innerHTML ="";

    data?.map((mov)=> {
       console.log(mov)
        movies.innerHTML += `
        <div class="col-3">
        <div class="card bg-black shadow ">
             <img src=${mov.Poster} class="card-img-top" alt="..." />
           <div class="card-body">
            <h5 class="card-title">${mov.Title}</h5>
            <button onclick="eachMovie(${mov.Year})" class="btn btn-primary btn-sm">Go somewhere</button>
           </div>
        </div>
        </div>
    `
    })


}