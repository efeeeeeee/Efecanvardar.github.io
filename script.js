let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 4000); // 4 saniye arayla geçiş
}

document.getElementById('readMoreBtn').addEventListener('click', function() {
    const moreContent = document.getElementById('moreContent');
    if (moreContent.classList.contains('hidden')) {
        moreContent.classList.remove('hidden');
        this.innerText = 'Daha Az Oku';
    } else {
        moreContent.classList.add('hidden');
        this.innerText = 'Daha Fazla Oku';
    }
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const notification = document.getElementById('notification');
    notification.innerText = 'Mesajınız gönderildi!';
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000); // 3 saniye sonra kaybolur

    this.reset();
});