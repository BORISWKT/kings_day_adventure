document.addEventListener('DOMContentLoaded', function() {
    // Create overlay element
    const overlay = document.createElement('div');
    overlay.className = 'photo-overlay';
    document.body.appendChild(overlay);

    // Add click event to main photo, group photos, and profile photos
    const photos = document.querySelectorAll('.main-photo, .group-photo, .profile-photo');
    photos.forEach(photo => {
        photo.addEventListener('click', function() {
            const img = document.createElement('img');
            img.src = this.src;
            overlay.innerHTML = '';
            overlay.appendChild(img);
            overlay.style.display = 'block';
        });
    });

    // Close overlay when clicked
    overlay.addEventListener('click', function() {
        this.style.display = 'none';
    });
}); 