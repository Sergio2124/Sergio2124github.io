# Sergio2124github.io
web de Sergio<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" 
        content="width=device-width, initial-scale=1.0">
         <!-- Agrega librerioa bootstrap -->
         <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
         <!-- Asegúrate de que el archivo Popper.js esté incluido si es necesario para tu versión de Bootstrap -->
         <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></script>
         <!-- Luego, agrega Bootstrap -->
         <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
         <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
         


  <!-- Agrega libreria swipper -->
  <!-- Estilos de Swiper CSS (asegúrate de incluir la última versión) -->
<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
  <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"
/>

<script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>

 <script src="https://kit.fontawesome.com/a88046734e.js" crossorigin="anonymous"></script>      

        <link rel="stylesheet" href="stylos.css">
        <script type="module" src="pagina.js"></script>
       
        <title>Escuelas_futsal_Pinto</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />



</head>
<header>
  <nav id="nav" class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src="logos/Logo.jpeg" alt=""></a>
          <h4>Escuelas Futsal Pinto</h4>
          <!-- Agrega el botón de hamburguesa para pantallas pequeñas -->
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
              <span> <i class="fa-solid fa-bars" style="color: #ffffff;"></i></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll">
              <ul class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                  <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="Escuelas.html">Inicio</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="formulario.html">Inscripciones</a>
                  </li>
                  <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Equipos
                      </a>
                      <ul id="submenuequipos" class="dropdown-menu">
                          <li><a class="dropdown-item " href="equipo_alevin.html">Benjamin</a></li>
                          <li><a class="dropdown-item" href="equipo_alevin.html">Alevin</a></li>
                      </ul>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="equipo_alevin.html">E-Comerce</a>
                  </li>
              </ul>
              <form class="d-flex" role="search">
                <button id="botonfa" class="btn bg-transparent" type="submit"><i class="fab fa-twitter" style="font-size: 24px; color: dodgerblue;"></i></button>
                <button id="botontw" class="btn bg-transparent" type="submit"><i class="fab fa-facebook" style="font-size: 24px; color: dodgerblue;"></i></button>
                  <button id="botonins" class="btn bg-transparent" type="submit">
                      <i class="fab fa-instagram" style="font-size: 24px; color: #E1306C;"></i>
                  </button>
              </form>
          </div>
      </div>
  </nav>
</header>

<body>
<!-- Swiper -->

<div id="fondoslider" class="container">
  <div class="row">
      <div id="textoizquierda" class="col-md-6">
          <h3 id="bienvenido">Bienvenido a la escuela Sergio Gonzalez <br> donde crecemos y soñamos juntos<br><br></h3>
          <h3 id="texto_futsal" class="animate__animated animate__backInDown">#Futsal Pinto</h3>
      </div>
      <div class="col-md-6">
          <div class="swiper mySwiper animate__animated animate__backInUp animate__delay-4s">
              <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <img src="logos/inscripcion.PNG" />
                  </div>
                
                  <div class="swiper-slide">
                       <img src="logos/foto_puertas abiertas.JPG" />
                  </div>
                  <div class="swiper-slide">
                      <img src="logos/dbd67b3b-fe3a-45d0-82d1-d1ee9e6ecdd7.JPG" />
                  </div>
                  <div class="swiper-slide">
                    <img src="logos/Campus_warner.JPG" />
                </div>
              </div>
              <div class="swiper-pagination"></div>
          </div>
      </div>
    
  </div>
</div>


  <!-- Swiper JS -->
  <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>



<!-- Contenedor debajo del Swiper div>
Contenedor debajo del Swiper con 4 contenedores en flex -->
<div  class="container mt-4 animate__animated animate__backInDown d" >
    <div id="enlaces" class="row ">
        <div class="col-md-4">
            <div class="contenedor-flex">
                <a href="https://www.femafusa.com/pnfg/NPcd/NFG_CmpJornada?cod_primaria=1000120" target="_blank" class="text-black  resultado"> <h4 class="text-decoration-underline" style="box-shadow: 1px 3px 5px;">resultados</h4></a>
            </div>
        </div>
        <div class="col-md-4">
            <div class="contenedor-flex">
                <a href="tecnificacion.html" class="text-black tecnificacion"><h4 class="text-decoration-underline" style="box-shadow: 1px 3px 5px;">tecnificacion</h4></a>
            </div>
        </div>
        <div class="col-md-4">
            <div class="contenedor-flex">
                <a href="entrenadores.html" class="text-black  entrenadores"><h4 class="text-decoration-underline" style="box-shadow: 1px 3px 5px;">entrenadores</h4></a>
            </div>
        </div>
      
    </div>
</div>
 <!-- boton washap -->
<div id="whatsapp-container" class="container mt-2 animate__animated animate__backInDown d">
    <div id="enlaces" class="row">
        <!-- ... Otros enlaces ... -->
        <div class="col-md-12">
            <div class="contenedor-flex">
                <a href="https://wa.me/687444036" target="_blank" class="text-black">
                   
                    <!-- Agrega el icono de WhatsApp dentro del enlace -->
                    <div id="whatsapp-icon">
                        <i class="fa-brands fa-whatsapp"> 687444036</i>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>

