import React, { useState, useEffect } from "react";

function WatchList() {
  const [favourites, setFavourites] = useState([]);
  const [genres, setGenres] = useState([]);
  const [currGenre, setCurrGenre] = useState("All Genre");
  const [rating, setRating] = useState(0);
  const [searchStr, setSearchStr] = useState("");

  let movies = [
    {
      backdrop_path: "/5cCfqeUH2f5Gnu7Lh9xepY9TB6x.jpg",
      id: 967847,
      original_title: "Ghostbusters: Frozen Empire",
      overview:
        "The Spengler family returns to where it all started – the iconic New York City firehouse – to team up with the original Ghostbusters, who've developed a top-secret research lab to take busting ghosts to the next level. But when the discovery of an ancient artifact unleashes an evil force, Ghostbusters new and old must join forces to protect their home and save the world from a second Ice Age.",
      poster_path: "/e1J2oNzSBdou01sUvriVuoYp0pJ.jpg",
      media_type: "movie",
      adult: false,
      title: "Ghostbusters: Frozen Empire",
      original_language: "en",
      genre_ids: [14, 12, 35],
      popularity: 919.006,
      release_date: "2024-03-20",
      video: false,
      vote_average: 6.578,
      vote_count: 510,
    },
    {
      backdrop_path: "/iHYh4cdO8ylA3W0dUxTDVdyJ5G9.jpg",
      id: 653346,
      original_title: "Kingdom of the Planet of the Apes",
      overview:
        "Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.",
      poster_path: "/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
      media_type: "movie",
      adult: false,
      title: "Kingdom of the Planet of the Apes",
      original_language: "en",
      genre_ids: [878, 12, 28],
      popularity: 1527.508,
      release_date: "2024-05-08",
      video: false,
      vote_average: 6.949,
      vote_count: 99,
    },
    {
      backdrop_path: "/ySgY4jBvZ6qchrxKnBg4M8tZp8V.jpg",
      id: 1111873,
      original_title: "Abigail",
      overview:
        "After a group of would-be criminals kidnap the 12 year old ballerina daughter of a powerful underworld figure, all they have to do to collect a $50 million ransom is watch the girl overnight. In an isolated mansion, the captors start to dwindle, one by one, and they discover, to their mounting horror, that they’re locked inside with no normal little girl.",
      poster_path: "/5Uq8P6MPj9Ppsns5t82AiCiUaWE.jpg",
      media_type: "movie",
      adult: false,
      title: "Abigail",
      original_language: "en",
      genre_ids: [27, 53, 35],
      popularity: 829.879,
      release_date: "2024-04-18",
      video: false,
      vote_average: 7.2,
      vote_count: 203,
    },
    {
      backdrop_path: "/m0XCtFisSD0O6P55G1pUHdFccuL.jpg",
      id: 1093231,
      original_title: "Mother of the Bride",
      overview:
        "When Lana’s daughter Emma returns from a year abroad in London, she drops a bombshell on her mother: she’s getting married. On an island. Next month! Things only get worse when Lana discovers that the mystery man who stole her daughter’s heart just so happens to be the son of the man who broke hers years ago.",
      poster_path: "/vdTvwykMWvVgdaViBVRh8IFTku5.jpg",
      media_type: "movie",
      adult: false,
      title: "Mother of the Bride",
      original_language: "en",
      genre_ids: [10749, 35],
      popularity: 55.129,
      release_date: "2024-05-08",
      video: false,
      vote_average: 6.4,
      vote_count: 13,
    },
    {
      backdrop_path: "/hm21I7yc6oYBogTloET3eXsVPlq.jpg",
      id: 799583,
      original_title: "The Ministry of Ungentlemanly Warfare",
      overview:
        "A true story about a secret British World War II organization; the Special Operations Executive. Founded by Winston Churchill, their irregular warfare against the Germans helped to change the course of the war, and gave birth to modern black operations.",
      poster_path: "/x8Od47ZMDDT3ho3IRdXNmcjHknX.jpg",
      media_type: "movie",
      adult: false,
      title: "The Ministry of Ungentlemanly Warfare",
      original_language: "en",
      genre_ids: [28, 10752, 35],
      popularity: 79.81,
      release_date: "2024-04-18",
      video: false,
      vote_average: 7,
      vote_count: 41,
    },
    {
      backdrop_path: "/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
      id: 693134,
      original_title: "Dune: Part Two",
      overview:
        "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
      poster_path: "/czembW0Rk1Ke7lCJGahbOhdCuhV.jpg",
      media_type: "movie",
      adult: false,
      title: "Dune: Part Two",
      original_language: "en",
      genre_ids: [878, 12],
      popularity: 1204.574,
      release_date: "2024-02-27",
      video: false,
      vote_average: 8.215,
      vote_count: 3752,
    },
    {
      backdrop_path: "/fY3lD0jM5AoHJMunjGWqJ0hRteI.jpg",
      id: 940721,
      original_title: "ゴジラ-1.0",
      overview:
        "Postwar Japan is at its lowest point when a new crisis emerges in the form of a giant monster, baptized in the horrific power of the atomic bomb.",
      poster_path: "/hkxxMIGaiCTmrEArK7J56JTKUlB.jpg",
      media_type: "movie",
      adult: false,
      title: "Godzilla Minus One",
      original_language: "ja",
      genre_ids: [878, 27, 28],
      popularity: 2841.736,
      release_date: "2023-11-03",
      video: false,
      vote_average: 7.71,
      vote_count: 867,
    },
    {
      backdrop_path: "/rSRA1p4e3laAAJflzdgtqNlx27Y.jpg",
      id: 1049574,
      original_title: "Darkness of Man",
      overview:
        "Russell Hatch, an Interpol operative who takes on the role of father figure to Jayden, the son of an informant killed in a routine raid gone wrong. Years later, Hatch finds himself protecting Jayden and his uncle from a group of merciless gangs in an all-out turf war, stopping at nothing to protect Jayden and fight anyone getting in his way. Including supposed allies with hidden agendas and nefarious intents.",
      poster_path: "/tsj5oYBRoF5PuTYrfe1Hw6fsxfG.jpg",
      media_type: "movie",
      adult: false,
      title: "Darkness of Man",
      original_language: "en",
      genre_ids: [28, 53],
      popularity: 38.905,
      release_date: "2024-05-07",
      video: false,
      vote_average: 8,
      vote_count: 3,
    },
    {
      backdrop_path: "/sI6uCeF8mUlZx22mFfHSi9W3XQ9.jpg",
      id: 843527,
      original_title: "The Idea of You",
      overview:
        "40-year-old single mom Solène begins an unexpected romance with 24-year-old Hayes Campbell, the lead singer of August Moon, the hottest boy band on the planet.",
      poster_path: "/zDi2U7WYkdIoGYHcYbM9X5yReVD.jpg",
      media_type: "movie",
      adult: false,
      title: "The Idea of You",
      original_language: "en",
      genre_ids: [10749, 35],
      popularity: 1606.328,
      release_date: "2024-05-02",
      video: false,
      vote_average: 7.556,
      vote_count: 518,
    },
    {
      backdrop_path: "/1sh2S5J7bTPu6LuOgS9gamkGs2J.jpg",
      id: 786892,
      original_title: "Furiosa: A Mad Max Saga",
      overview:
        "As the world falls, young Furiosa is snatched from the Green Place of Many Mothers into the hands of a great biker horde led by the warlord Dementus. Sweeping through the wasteland, they encounter the citadel presided over by Immortan Joe. The two tyrants wage war for dominance, and Furiosa must survive many trials as she puts together the means to find her way home.",
      poster_path: "/pKaA8VvfkNfEMUPMiiuL5qSPQYy.jpg",
      media_type: "movie",
      adult: false,
      title: "Furiosa: A Mad Max Saga",
      original_language: "en",
      genre_ids: [878, 28, 12],
      popularity: 252.874,
      release_date: "2024-05-22",
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      backdrop_path: "/pyCS2FWvTOTsLq4qCOsdsQY7hbZ.jpg",
      id: 844185,
      original_title: "Unfrosted",
      overview:
        "In a time when milk and cereal ruled breakfast, a fierce corporate battle begins over a revolutionary new pastry.",
      poster_path: "/efvnagceBlmNG10BKnSOEqI6VtP.jpg",
      media_type: "movie",
      adult: false,
      title: "Unfrosted",
      original_language: "en",
      genre_ids: [35, 36],
      popularity: 372.955,
      release_date: "2024-04-30",
      video: false,
      vote_average: 5.429,
      vote_count: 105,
    },
    {
      backdrop_path: "/lzWHmYdfeFiMIY4JaMmtR7GEli3.jpg",
      id: 438631,
      original_title: "Dune",
      overview:
        "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
      poster_path: "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
      media_type: "movie",
      adult: false,
      title: "Dune",
      original_language: "en",
      genre_ids: [878, 12],
      popularity: 540.429,
      release_date: "2021-09-15",
      video: false,
      vote_average: 7.779,
      vote_count: 11553,
    },
    {
      backdrop_path: "/qrGtVFxaD8c7et0jUtaYhyTzzPg.jpg",
      id: 823464,
      original_title: "Godzilla x Kong: The New Empire",
      overview:
        "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.",
      poster_path: "/tMefBSflR6PGQLv7WvFPpKLZkyk.jpg",
      media_type: "movie",
      adult: false,
      title: "Godzilla x Kong: The New Empire",
      original_language: "en",
      genre_ids: [28, 878, 12],
      popularity: 1366.658,
      release_date: "2024-03-27",
      video: false,
      vote_average: 6.47,
      vote_count: 1014,
    },
    {
      backdrop_path: "/v7JTQy194gRbljdlK4OJhwnOypQ.jpg",
      id: 61791,
      original_title: "Rise of the Planet of the Apes",
      overview:
        "A highly intelligent chimpanzee named Caesar has been living a peaceful suburban life ever since he was born. But when he gets taken to a cruel primate facility, Caesar decides to revolt against those who have harmed him.",
      poster_path: "/cjLsuP75UDlRdJVMXzXg3TJ4umX.jpg",
      media_type: "movie",
      adult: false,
      title: "Rise of the Planet of the Apes",
      original_language: "en",
      genre_ids: [53, 28, 18, 878],
      popularity: 312.083,
      release_date: "2011-08-03",
      video: false,
      vote_average: 7.306,
      vote_count: 11282,
    },
    {
      backdrop_path: "/qwK9soQmmJ7kRdjLZVXblw3g7AQ.jpg",
      id: 7451,
      original_title: "xXx",
      overview:
        'Xander Cage is your standard adrenaline junkie with no fear and a lousy attitude. When the US Government "recruits" him to go on a mission, he\'s not exactly thrilled. His mission: to gather information on an organization that may just be planning the destruction of the world, led by the nihilistic Yorgi.',
      poster_path: "/xeEw3eLeSFmJgXZzmF2Efww0q3s.jpg",
      media_type: "movie",
      adult: false,
      title: "xXx",
      original_language: "en",
      genre_ids: [28, 12, 53, 80],
      popularity: 627.242,
      release_date: "2002-08-09",
      video: false,
      vote_average: 5.932,
      vote_count: 4033,
    },
    {
      backdrop_path: "/72clA3Tlo9hGY815pubweHOxVAR.jpg",
      id: 937287,
      original_title: "Challengers",
      overview:
        'Tennis player turned coach Tashi has taken her husband, Art, and transformed him into a world-famous Grand Slam champion. To jolt him out of his recent losing streak, she signs him up for a "Challenger" event — close to the lowest level of pro tournament — where he finds himself standing across the net from his former best friend and Tashi\'s former boyfriend.',
      poster_path: "/H6vke7zGiuLsz4v4RPeReb9rsv.jpg",
      media_type: "movie",
      adult: false,
      title: "Challengers",
      original_language: "en",
      genre_ids: [18, 10749],
      popularity: 255.011,
      release_date: "2024-04-18",
      video: false,
      vote_average: 7.5,
      vote_count: 436,
    },
    {
      backdrop_path: "/v5XyXZe8FADw8iHupB4L7QOAwH9.jpg",
      id: 748783,
      original_title: "The Garfield Movie",
      overview:
        "Garfield, the world-famous, Monday-hating, lasagna-loving indoor cat, is about to have a wild outdoor adventure! After an unexpected reunion with his long-lost father – scruffy street cat Vic – Garfield and his canine friend Odie are forced from their perfectly pampered life into joining Vic in a hilarious, high-stakes heist.",
      poster_path: "/zK2sFxZcelHJRPVr242rxy5VK4T.jpg",
      media_type: "movie",
      adult: false,
      title: "The Garfield Movie",
      original_language: "en",
      genre_ids: [16, 35, 10751],
      popularity: 656.994,
      release_date: "2024-04-30",
      video: false,
      vote_average: 6.5,
      vote_count: 50,
    },
    {
      backdrop_path: "/vpWVeIMNi0Np5shuKFE3QkneiTt.jpg",
      id: 639720,
      original_title: "IF",
      overview:
        "A girl discovers she can see everyone's imaginary friends and embarks on a magical adventure to reconnect forgotten IFs with their kids.",
      poster_path: "/xbKFv4KF3sVYuWKllLlwWDmuZP7.jpg",
      media_type: "movie",
      adult: false,
      title: "IF",
      original_language: "en",
      genre_ids: [35, 14, 10751],
      popularity: 154.939,
      release_date: "2024-05-08",
      video: false,
      vote_average: 7.917,
      vote_count: 6,
    },
    {
      backdrop_path: "/1XyIHrP7X7rn3UBkNy9hPb9vCUf.jpg",
      id: 762441,
      original_title: "A Quiet Place: Day One",
      overview:
        "As New York City is invaded by alien creatures who hunt by sound, a woman named Sammy fights to survive.",
      poster_path: "/vbI5h1Enc3gscdmg7lRnG4jX4R7.jpg",
      media_type: "movie",
      adult: false,
      title: "A Quiet Place: Day One",
      original_language: "en",
      genre_ids: [27, 878, 53],
      popularity: 88.893,
      release_date: "2024-06-26",
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      backdrop_path: "/ulMscezy9YX0bhknvJbZoUgQxO5.jpg",
      id: 281338,
      original_title: "War for the Planet of the Apes",
      overview:
        "Caesar and his apes are forced into a deadly conflict with an army of humans led by a ruthless Colonel. After the apes suffer unimaginable losses, Caesar wrestles with his darker instincts and begins his own mythic quest to avenge his kind. As the journey finally brings them face to face, Caesar and the Colonel are pitted against each other in an epic battle that will determine the fate of both their species and the future of the planet.",
      poster_path: "/mMA1qhBFgZX8O36qPPTC016kQl1.jpg",
      media_type: "movie",
      adult: false,
      title: "War for the Planet of the Apes",
      original_language: "en",
      genre_ids: [18, 878, 10752],
      popularity: 332.856,
      release_date: "2017-07-11",
      video: false,
      vote_average: 7.178,
      vote_count: 8453,
    },
  ];
  let genreids = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("imdb");
    moviesFromLocalStorage = JSON.parse(moviesFromLocalStorage);
    setFavourites(moviesFromLocalStorage);
  }, []);
  useEffect(() => {
    let temp = favourites.map((movie) => genreids[movie.genre_ids[0]]);
    temp = new Set(temp); //imp
    setGenres(["All Genre", ...temp]);
  });

  let filteredArray = [];

  // genre fillter

  filteredArray =
    currGenre == "All Genre"
      ? favourites
      : favourites.filter((movie) => genreids[movie.genre_ids[0]] == currGenre);

  // sorting with respect to rating
  if (rating == -1) {
    filteredArray = filteredArray.sort(function (objA, objB) {
      return objB.vote_average - objA.vote_average;
    });
  }

  if (rating == 1) {
    filteredArray = filteredArray.sort(function (objA, objB) {
      return objA.vote_average - objB.vote_average;
    });
  }

  filteredArray = filteredArray.filter((movie) => {
    return movie.title.toLowerCase().includes(searchStr.toLocaleLowerCase());
  });

  // sorting with respect to popularity

  const del = (movie) => {
    let newArray = favourites.filter((m) => m.id != movie.id);
    setFavourites([...newArray]);
    localStorage.setItem("imdb", JSON.stringify(newArray));
  };
  return (
    <>
      <div className="mt-6 flex space-x-2 justify-center">
        {genres.map((genre) => {
          return (
            <button
              className={
                currGenre == genre
                  ? "m-2 text-lg p-1 px-2 bg-blue-400 text-white rounded-xl font-bold"
                  : "m-2 text-lg p-1 px-2 bg-gray-400 hover:bg-blue-400 text-white rounded-xl font-bold"
              }
              onClick={() => {
                setCurrGenre(genre);
              }}
            >
              {genre}
            </button>
          );
        })}
      </div>
      <div className="text-center">
        <input
          type="text"
          className="border bg-gray-200 border-4 text-center p-1 m-2"
          placeholder="search for movies"
          value={searchStr}
          onChange={(e) => setSearchStr(e.target.value)}
        />
      </div>
      <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table class="w-full border-collapse bg-white text-left text-5m text-gray-500">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-4 font-medium text-gray-900">Name</th>
              <th>
                <div className="flex">
                  <img
                    src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png"
                    className="mr-1"
                    onClick={() => {
                      setRating(1);
                    }}
                  />
                  <div>Rating</div>
                  <img
                    src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png"
                    className="ml-1"
                    onClick={() => {
                      setRating(-1);
                    }}
                  />
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>Popularity</div>
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>Genre</div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 border-t bprder-gray-100">
            {filteredArray.map((movie) => {
              return (
                <tr class="hover:bg-gray-50">
                  <td class="fles items-center px-6 py-4 font-normal text-gray-900">
                    <img
                      class="h-[6rem] w-[10rem] object-fit"
                      src={`https://image.tmdb.org/t/p/original/t/p/original/${movie.poster_path}`}
                    />
                    <div class="font-medium text-gray-700 text-5m">
                      {movie.title}
                    </div>
                  </td>
                  <td className="pl-6 py-4">{movie.vote_average}</td>
                  <td className="pl-6 py-4">{movie.popularity}</td>
                  <td className="py-4">{genreids[movie.genre_ids[0]]}</td>
                  <td>
                    <button className="text-red-600" onClick={() => del(movie)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
