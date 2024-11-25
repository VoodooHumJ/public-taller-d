document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtn = document.querySelector('.ampliar');
    const readLessBtn = document.querySelector('.contraer');
    const contentText = document.querySelector('.content-text');

    function expandPost(button) {
        contentText.classList.add('expanded');
        readMoreBtn.style.display = 'none';
        readLessBtn.style.display = 'block';
    }

    function collapsePost(button) {
        contentText.classList.remove('expanded');
        readMoreBtn.style.display = 'block';
        readLessBtn.style.display = 'none';
    }

    readMoreBtn.addEventListener('click', expandPost);
    readLessBtn.addEventListener('click', collapsePost);
});



