const tendencias = [
  {
    titulo: "Dune: Parte Dos",
    imagen: "https://i.postimg.cc/9FkHPkXd/dune.jpg"
  },
  {
    titulo: "Barbie",
    imagen: "https://i.postimg.cc/J4rj3TYz/images.jpg"
  },
  {
    titulo: "Oppenheimer",
    imagen: "https://i.postimg.cc/dty4XNmm/oppenheimer.jpg"
  },
  {
    titulo: "The Batman",
    imagen: "https://i.postimg.cc/wv4wKSGF/thebatman.jpg"
  },
  {
    titulo: "The Flash",
    imagen: "https://i.postimg.cc/9QNPQGpF/theflash.jpg"
  },
  {
    titulo: "John Wick 4",
    imagen: "https://i.postimg.cc/j5TbwJxB/John-Wick-41.jpg"
  },
  {
    titulo: "Misión Imposible 7",
    imagen: "https://i.postimg.cc/3rnTNRPb/Misi-n-Imposible-71.jpg"
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
  scrollPos += 1;
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
    imagen: "https://i.postimg.cc/C5NkTD50/theflash1.jpg"
  },
  {
    titulo: "Dune: Parte Dos",
    imagen: "https://i.postimg.cc/9f53Kq7z/dune1.jpg"
  },
  {
    titulo: "Barbie",
    imagen: "https://upload.wikimedia.org/wikipedia/en/0/0b/Barbie_2023_poster.jpg"
  },
  {
    titulo: "Oppenheimer",
    imagen: "https://i.postimg.cc/8zgtVdZ8/oppenheimer1.jpg"
  },
  {
    titulo: "The Batman",
    imagen: "https://i.postimg.cc/GtZztvry/thebatman1.webp"
  },
  {
    titulo: "Matrix",
    imagen: "https://i.postimg.cc/Y9Cdspbh/matrix.jpg"
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
    imagen: "https://i.postimg.cc/3wmhxZTg/John-Wick-4.jpg"
  },
  {
    titulo: "Misión Imposible 7",
    imagen: "https://i.postimg.cc/yxYCn4SP/Misi-n-Imposible-7.jpg"
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

function renderPeliculas(lista) {
  contenedor.innerHTML = "";
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
      imagen: "https://i.postimg.cc/9Q3yHVgp/Deadpool.jpg"
    },
    {
      titulo: "Jumanji: Bienvenidos a la jungla",
      imagen: "https://i.postimg.cc/FKLrJ4jk/Jumanji-Bienvenidos-a-la-jungla.jpg"
    },
    {
      titulo: "Zombieland",
      imagen: "https://i.postimg.cc/zG95Nc9z/Zombieland.jpg"
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

const reproductor = document.getElementById("reproductor");
const videoPlayer = document.getElementById("video-player");

const enlacesPeliculas = {
  "John Wick 4": "https://be2719.rcr22.ams01.i8yz83pn.com/hls2/07/05369/zi3x2yfl5q5m_h/index-v1-a1.m3u8?t=j15KNBSBAYZr2IkNkJXCfe-WwjTRBeaVWBqR-IiOSbk&s=1753253485&e=10800&f=47700860&srv=1050&asn=6057&sp=4000&p="
};

document.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG" && e.target.title) {
    const titulo = e.target.title;
    const enlace = enlacesPeliculas[titulo];

    if (enlace) {
      // Limpia el video
      videoPlayer.pause();
      videoPlayer.src = "";

      // Si es compatible nativamente
      if (videoPlayer.canPlayType('application/vnd.apple.mpegurl')) {
        videoPlayer.src = enlace;
      } else if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(enlace);
        hls.attachMedia(videoPlayer);
      } else {
        alert("Tu navegador no soporta este video.");
        return;
      }

      videoPlayer.load();
      videoPlayer.play();
      reproductor.style.display = "block";
      window.scrollTo({ top: reproductor.offsetTop, behavior: "smooth" });
    }
  }
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => console.log('✅ Service Worker registrado:', reg))
      .catch(err => console.error('❌ Error registrando el Service Worker:', err));
  });
}
