small_images = document.querySelectorAll('.small_img img');
main_image = document.querySelector('.main_img img');

for(let i = 0; i < small_images.length; i++) {
    small_images[i].addEventListener('mouseover', function(event) {
        var str = event.target.src;
        str = str.substring(str.indexOf("images"), str.length)
        main_image.src = str;
        event.target.style.transform = 'scale(' + 1.2 + ')';
    });

    small_images[i].addEventListener('mouseout', function(event) {
        event.target.style.transform = '';
    });
}