const filmek = [
  {
    "title": "Ratatouille",
    "year": 2007,
    "genre": "Animation",
    "rating": 5
  },
  {
    "title": "Kung Fu Panda",
    "year": 2008,
    "genre": "Animation",
    "rating": 4
  },
  {
    "title": "Up",
    "year": 2009,
    "genre": "Animation",
    "rating": 4
  },
  {
    "title": "Toy Story 3",
    "year": 2010,
    "genre": "Animation",
    "rating": 1
  },
  {
    "title": "Frozen",
    "year": 2013,
    "genre": "Animation",
    "rating": 4
  },
  {
    "title": "Inside Out",
    "year": 2015,
    "genre": "Animation",
    "rating": 5
  },
  {
    "title": "Zootopia",
    "year": 2016,
    "genre": "Animation",
    "rating": 4
  },
  {
    "title": "Coco",
    "year": 2017,
    "genre": "Animation",
    "rating": 4
  },
  {
    "title": "Spider-Man: Into the Spider-Verse",
    "year": 2018,
    "genre": "Animation",
    "rating": 3
  },
  {
    "title": "Joker",
    "year": 2019,
    "genre": "Drama",
    "rating": 4
  },
  {
    "title": "Parasite",
    "year": 2019,
    "genre": "Thriller",
    "rating": 4
  },
  {
    "title": "Encanto",
    "year": 2021,
    "genre": "Animation",
    "rating": 2
  },
  {
    "title": "Everything Everywhere All at Once",
    "year": 2022,
    "genre": "Action",
    "rating": 3
  },
  {
    "title": "The Super Mario Bros. Movie",
    "year": 2023,
    "genre": "Animation",
    "rating": 2
  },
  {
    "title": "Inside Out 2",
    "year": 2024,
    "genre": "Animation",
    "rating": 5
  }
];

const table = document.getElementById("tartalom")

function renderFilms() {
  table.innerHTML = ""
  for (const film of filmek) {
    const tr = document.createElement("tr")
    const tdTitle = document.createElement("td")
    const tdYear = document.createElement("td")
    const tdGenre = document.createElement("td")
    const tdRating = document.createElement("td")

    tdTitle.innerText = film.title
    tdYear.innerText = film.year
    tdGenre.innerText = film.genre
    tdRating.innerText = ""

    tr.appendChild(tdTitle)
    tr.appendChild(tdYear)
    tr.appendChild(tdGenre)
    //tdRating.innerText = film.rating

    if (film.rating < 3) {
      tdRating.className = 'lowrating'
    }

    for (let i = 0; i < film.rating; i++) {
      tdRating.innerText += '⭐'
    } 

    tr.appendChild(tdRating)
    table.appendChild(tr)
  }
}

renderFilms()

const form = document.getElementById('filmForm')
const titleInput = document.getElementById('title')
const yearInput = document.getElementById('year')
const genreInput = document.getElementById('genre')
const ratingInput = document.getElementById('rating')

function addFilm(event) {
  event.preventDefault()

  const newFilm = {
    title: titleInput.value,
    year: Number(yearInput.value),
    genre: genreInput.value,
    rating: Number(ratingInput.value)
  }

  filmek.push(newFilm)
  renderFilms()
  form.reset()
}

form.addEventListener("submit", addFilm)

