document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', function () {
        document.getElementById('lightbox-img').src = this.dataset.large;
        document.getElementById('lightbox').style.display = 'flex';
    });
});

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}