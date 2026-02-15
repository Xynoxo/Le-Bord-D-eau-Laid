document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.querySelector('.search-input');
    const validCode = 'A3K9ZQ1B';

    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Empêcher la soumission normale du formulaire
            
            const inputValue = searchInput.value.trim();
            
            // Vérifier si le code correspond au code valide
            if (inputValue === validCode) {
                // Code correct - aller vers search.html
                window.location.href = 'search.html';
            } else {
                // Code incorrect - aller vers articles.html (page normale)
                window.location.href = 'articles.html';
            }
        });
    }
});
