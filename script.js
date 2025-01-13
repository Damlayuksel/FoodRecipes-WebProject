document.addEventListener("DOMContentLoaded", function(){
    // Tüm dropdown öğelerini seçer
    var dropdownElements = document.querySelectorAll('.dropdown');

    // Her bir dropdown öğesi için olay dinleyici ekledim
 dropdownElements.forEach(function(dropdownElement) {
        dropdownElement.addEventListener('mouseover', function(){
            // Üzerine gelindiğinde dropdownmeenuyü gösterir
            this.querySelector('.dropdown-menu').classList.add('show');
        });
        dropdownElement.addEventListener('mouseout', function(){
            // Fare üzerinden çıktığında dropdownmenüyü gizler
            this.querySelector('.dropdown-menu').classList.remove('show');
        });
    });
});
    let slideIndex = 0;
     showSlides();

 document.addEventListener("DOMContentLoaded", function() {
  // Dropdown menü öğelerini seçer
  var dropdownItems = document.querySelectorAll('.dropdown-item');

  // Her bir dropdown menü öğesi için event listener ekledim
  dropdownItems.forEach(function(item) {
      item.addEventListener('click', function(event) {
          
          event.preventDefault();
          
            var targetUrl = item.getAttribute('href');
          
         
    window.location.href = targetUrl;
      });
  });
});
