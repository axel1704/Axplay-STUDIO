const tendencias = [
  {
    titulo: "Dune: Parte Dos",
    imagen: "dune.png"
  },
  {
    titulo: "Barbie",
    imagen: "https://upload.wikimedia.org/wikipedia/en/0/0b/Barbie_2023_poster.jpg"
  },
  {
    titulo: "Oppenheimer",
    imagen: "oppenheimer.png"
  },
  {
    titulo: "The Batman",
    imagen: "thebatman.png"
  },
  {
    titulo: "The Flash",
    imagen: "theflash.png"
  },
  {
    titulo: "John Wick 4",
    imagen: "John Wick 41.png"
  },
  {
    titulo: "Misión Imposible 7",
    imagen: "Misión Imposible 71.png"
  },
  
];
const carrusel = document.getElementById("carrusel-tendencias");

tendencias.forEach(pelicula => {
  const div = document.createElement("div");
  div.classList.add("carrusel-item");
  div.innerHTML = `
    <img src="${pelicula.imagen}" alt="${pelicula.titulo}" title="${pelicula.titulo}">
  `;
  carrusel.appendChild(div);
});

let scrollPos = 0;

function autoScroll() {
  if (!carrusel) return;

  scrollPos += 5; // velocidad, bajá a 1 si querés más lento

  if (scrollPos >= carrusel.scrollWidth - carrusel.clientWidth) {
    scrollPos = 1;
  }

  carrusel.scrollLeft = scrollPos;

  requestAnimationFrame(autoScroll);
}

requestAnimationFrame(autoScroll);

const peliculas = [
  {
    titulo: "The Flash",
    imagen: "theflash1.png"
  },
  {
    titulo: "Dune: Parte Dos",
    imagen: "dune1.png"
  },
  {
    titulo: "Barbie",
    imagen: "https://upload.wikimedia.org/wikipedia/en/0/0b/Barbie_2023_poster.jpg"
  },
  {
    titulo: "Oppenheimer",
    imagen: "oppenheimer1.png"
  },

  {
    titulo: "The Batman",
    imagen: "thebatman1.png"
  },
  
  {
    titulo: "Matrix",
    imagen: "matrix.png"
  },
  
  {
    titulo: "Dune: Parte Dos",
    imagen: "dune.png"
  },
  
  {
    titulo: "Avengers: Endgame",
    imagen: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg"
  },
  {
    titulo: "Interstellar",
    imagen: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"
  },
  {
    titulo: "El Padrino",
    imagen: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg"
  },
  {
    titulo: "Spider-Man: No Way Home",
    imagen: "https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg"
  },
];

const accion = [
  {
    titulo: "John Wick 4",
    imagen: "John Wick 4.png"
  },
  {
    titulo: "Misión Imposible 7",
    imagen: "Misión Imposible 7.png"
  }
];

const contenedorAccion = document.getElementById("pelis-accion");

accion.forEach(pelicula => {
  const div = document.createElement("div");
  div.classList.add("pelicula");
  div.innerHTML = `<img src="${pelicula.imagen}" alt="${pelicula.titulo}" title="${pelicula.titulo}">`;
  contenedorAccion.appendChild(div);
});

const contenedor = document.getElementById("pelis-recomendadas");
const buscador = document.getElementById("buscador");

// Función para renderizar las pelis filtradas
function renderPeliculas(lista) {
  contenedor.innerHTML = ""; // Limpiar
  lista.forEach(pelicula => {
    const div = document.createElement("div");
    div.classList.add("pelicula");
    div.innerHTML = `<img src="${pelicula.imagen}" alt="${pelicula.titulo}" title="${pelicula.titulo}">`;
    contenedor.appendChild(div);
  });

  const comedia = [
    {
      titulo: "Superbad",
      imagen: "https://upload.wikimedia.org/wikipedia/en/8/8b/Superbad_Poster.png"
    },
    {
      titulo: "The Hangover",
      imagen: "https://upload.wikimedia.org/wikipedia/en/b/b9/Hangoverposter09.jpg"
    },
    {
      titulo: "Deadpool",
      imagen: "Deadpool.png"
    },
    {
      titulo: "Jumanji: Bienvenidos a la jungla",
      imagen: "Jumanji Bienvenidos a la jungla.png"
    },
    {
      titulo: "Zombieland",
      imagen: "Zombieland.png"
    }
  ];

  const contenedorComedia = document.getElementById("pelis-comedia");

  comedia.forEach(pelicula => {
    const div = document.createElement("div");
    div.classList.add("pelicula");
    div.innerHTML = `<img src="${pelicula.imagen}" alt="${pelicula.titulo}" title="${pelicula.titulo}">`;
    contenedorComedia.appendChild(div);
  });

  const terror = [
    {
      titulo: "El Conjuro",
      imagen: "https://upload.wikimedia.org/wikipedia/en/1/1f/Conjuring_poster.jpg"
    },
    {
      titulo: "IT (Eso)",
      imagen: "https://upload.wikimedia.org/wikipedia/en/5/5a/It_%282017%29_poster.jpg"
    },
    {
      titulo: "Actividad Paranormal",
      imagen: "https://upload.wikimedia.org/wikipedia/en/d/df/Paranormal_Activity_poster.jpg"
    },
    {
      titulo: "La Monja",
      imagen: "https://upload.wikimedia.org/wikipedia/en/3/32/TheNunPoster.jpg"
    },
    {
      titulo: "Hereditary",
      imagen: "https://upload.wikimedia.org/wikipedia/en/d/d2/Hereditary.png"
    }
  ];

  const contenedorTerror = document.getElementById("pelis-terror");

  terror.forEach(pelicula => {
    const div = document.createElement("div");
    div.classList.add("pelicula");
    div.innerHTML = `<img src="${pelicula.imagen}" alt="${pelicula.titulo}" title="${pelicula.titulo}">`;
    contenedorTerror.appendChild(div);
  });
}

// Mostrar todas al inicio
renderPeliculas(peliculas);

// Filtrar al escribir
buscador.addEventListener("input", () => {
  const texto = buscador.value.toLowerCase();
  const filtradas = peliculas.filter(p =>
    p.titulo.toLowerCase().includes(texto)
  );
  renderPeliculas(filtradas);
});
