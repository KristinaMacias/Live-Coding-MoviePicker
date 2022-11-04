console.log('test')

let availMovies = [
    {
      name: "Hocus Pocus",
      description:
        "A teenage boy named Max and his little sister move to Salem, where he struggles to fit in before awakening a trio of diabolical witches that were executed in the 17th century",
      dateReleased: 1993,
      genre: ["comedy", "family", "fantasy"],
      ageRating: "PG",
      image:
        "https://lumiere-a.akamaihd.net/v1/images/p_hocuspocus_19880_e000b013.jpeg",
    },
    {
      name: "Independence Day",
      description:
        "The aliens are coming and their goal is to invade and destroy Earth. Fighting superior technology, mankind's best weapon is the will to survive.",
      dateReleased: 1996,
      genre: ["action", "adventure", "sci-fi"],
      ageRating: "PG-13",
      image:
        "https://m.media-amazon.com/images/M/MV5BMGQwNDNkMmItYWY1Yy00YTZmLWE5OTAtODU0MGZmMzQ1NDdkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    },
    {
      name: "E.T. the Extra-Terrestrial",
      description:
        "A troubled child summons the courage to help a friendly alien escape from Earth and return to his home planet.",
      dateReleased: 1982,
      genre: ["adventure", "family", "sci-fi"],
      ageRating: "PG",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTQ2ODFlMDAtNzdhOC00ZDYzLWE3YTMtNDU4ZGFmZmJmYTczXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    },
    {
      name: "The Goonies",
      description:
        "A group of young misfits called The Goonies discover an ancient map and set out on an adventure to find a legendary pirate's long-lost treasure.",
      dateReleased: 1985,
      genre: ["adventure", "comedy", "family"],
      ageRating: "PG",
      image:
        "https://m.media-amazon.com/images/M/MV5BODRlMjRkZGEtZWM2Zi00ZjYxLWE0MWUtMmM1YWM2NzZlOTE1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    },
    {
      name: "Back to the Future",
      description:
        "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
      dateReleased: 1985,
      genre: ["adventure", "comedy", "sci-fi"],
      ageRating: "PG",
      image:
        "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    },
    {
      name: "Jurassic Park",
      description:
        "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
      dateReleased: 1993,
      genre: ["action", "adventure", "sci-fi"],
      ageRating: "PG-13",
      image:
        "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_.jpg",
    },
    {
      name: "Toy Story",
      description:
        "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boys bedroom.",
      dateReleased: 1995,
      genre: ["animation", "adventure", "comedy"],
      ageRating: "G",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_.jpg",
    },
    {
      name: "The Land Before Time",
      description:
        "An orphaned brontosaurus teams up with other young dinosaurs in order to reunite with their families in a valley.",
      dateReleased: 1988,
      genre: ["animation", "adventure", "drama"],
      ageRating: "G",
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0095489%2F&psig=AOvVaw3tBpqzZA08_4NvjoDntkEK&ust=1667596231904000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJiipJr2kvsCFQAAAAAdAAAAABAE",
    },
    {
      name: "Labyrinth",
      description:
        "Sixteen-year-old Sarah is given thirteen hours to solve a labyrinth and rescue her baby brother Toby when her wish for him to be taken away is granted by the Goblin King Jareth.",
      dateReleased: 1986,
      genre: ["adventure", "family", "family"],
      ageRating: "PG",
      image:
        "https://m.media-amazon.com/images/M/MV5BMjM2MDE4OTQwOV5BMl5BanBnXkFtZTgwNjgxMTg2NzE@._V1_.jpg",
    },
    {
      name: "Cool Runnings",
      description:
        "When a Jamaican sprinter is disqualified from the Olympic Games, he enlists the help of a dishonored coach to start the first Jamaican Bobsled Team.",
      dateReleased: 1993,
      genre: ["adventure", "comedy", "family"],
      ageRating: "PG",
      image:
        "https://m.media-amazon.com/images/M/MV5BMjMxMTQ3MzMwMV5BMl5BanBnXkFtZTgwNTYxNzYxMTE@._V1_.jpg",
    },
  ];

  class Person {
    constructor(name, favoriteGenre) {
        this.name = name;
        this.favoriteGenre = favoriteGenre
    }
  }


  class MovieService {
    constructor() {
        //array to store users
        this.users = [];

        //array to store filtered movies
        this.filteredMovies = [];

        //array to store remainingCatalog
        this.remainingCatalog = [];
    }
    createUser() {
        let namePrompt = prompt('Please enter your name').toLocaleLowerCase();
        let genrePrompt = prompt('Please enter a genre').toLocaleLowerCase();

        //testing code:
        console.log("namePrompt:", namePrompt);
        console.log("genrePrompt:", genrePrompt );


        //create instance of Person
        let currentUser = new Person(namePrompt, genrePrompt);

        //test code:
        console.log("currentUser: ",currentUser);

        this.users.push(currentUser);
        console.log("users array", this.users)
    }
    filterMovies() {
        let userGenre = this.users[0].favoriteGenre;
        console.log(userGenre);

        //loop through array of objects
        for(let movie of availMovies) {
            //console.log(movie);

            //conditional statement to check if movie objects genre includes user genre
            if(movie.genre.includes(userGenre)) {
                this.filteredMovies.push(movie);
            } else {
                this.remainingCatalog.push(movie);
            }
        }
        //test arrays:
        console.log("filteredMovies: ", this.filteredMovies)
        console.log('remainingCatalog: ', this.remainingCatalog);

    }
    mapMovies() {
        document.getElementById('map-movies').innerHTML = this.filteredMovies.map(
            (movie) =>
            `
            <div class="card m-4">
                <div class="card-header bg-secondary text-light">
                    <div>
                        Name: ${movie.name}
                    </div>
                </div>
                <div class="card-body p-4">
                    <div class="mb-4 border-bottom">Description: ${movie.description}</div>
                    <div class="mb-2 border-bottom">Date Released: ${movie.dateReleased}</div>
                    <div class="mb-2 border-bottom">Genre: ${movie.genre}</div>
                    <div class="mb-2 border-bottom">Age Rating: ${movie.ageRating}</div>
                </div>
            </div>
            `

        ).join("")

    }
  }

  let movieApp = new MovieService();
  movieApp.createUser();
  movieApp.filterMovies();
  movieApp.mapMovies();