"use strict"

const iconMenu = document.querySelector('.menu__icon');
const menuMobile = document.querySelector('.menu__mobile');
if (iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('lock');
      iconMenu.classList.toggle('active');
      menuMobile.classList.toggle('active');
   });
}

$('.slider').slick({
   arrows: false,
   dots: true,
   infinite: false,
   slidesToShow: 1
});

function openCity(evt, cityName) {
   // Объявить все переменные
   var i, tabcontent, tablinks;

   // Получить все элементы с помощью class="tabcontent" и спрятать их
   tabcontent = document.getElementsByClassName("tabcontent");
   for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
   }

   // Получить все элементы с помощью class="tablinks" и удалить class "active"
   tablinks = document.getElementsByClassName("tablinks");
   for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
   }

   // Показать текущую вкладку и добавить "active" класс для кнопки, которая открыла вкладку
   document.getElementById(cityName).style.display = "flex";
   evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();



