# Desafío Magia

1. `/abracadabra/usuarios`: debe devolver un JSON con un arreglo de usuarios.
2. `/abracadabra/juego/:usuario`: debe devolver la página de juego.html, esta debe pasar antes por un middleware que verifique si el usuario existe en el arreglo de usuarios. En caso de no existir, debe redirigir a `/who.jpeg` (cambiar por ruta pública donde esté la imagen).
3. `/abracadabra/conejo/:n` el parámetro `n` debe ser un número entero, y debe coincidir con un número aleatorio entre 1 y 4. En caso de ser exitoso redirigir a `/conejito.jpg`, en caso contrario redirigir a `/voldemort.jpg`.
4. Crear una ruta 404.
