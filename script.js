document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.getElementById('menu-toggle');
    var menuClose = document.getElementById('menu-close');
    var navigation = document.querySelector('.navigation');
  
    menuToggle.addEventListener('click', function () {
      navigation.classList.toggle('active');
    });
  
    menuClose.addEventListener('click', function () {
      navigation.classList.remove('active');
    });
  
    // Mostrar o menu ao passar o mouse por cima
    menuToggle.addEventListener('mouseover', function () {
      navigation.classList.add('active');
    });
  
    // Esconder o menu ao tirar o mouse de cima
    navigation.addEventListener('mouseleave', function () {
      navigation.classList.remove('active');
    });
  });
  