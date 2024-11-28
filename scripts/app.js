document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    function fetchArticles() {
        // Fetch the list of articles
        fetch('../data/articles.json')
            .then(response => response.json())
            .then(articles => {
                displayArticleList(articles);
            })
            .catch(error => {
                console.error('Error fetching articles:', error);
            });
    }

    function displayArticleList(articles) {
        const articleList = document.createElement('div');
        articleList.className = 'article-list';

        articles.forEach(article => {
            const articleCard = document.createElement('div');
            articleCard.className = 'article-card';
            articleCard.innerHTML = `
                <h3>${article.title}</h3>
                <p>${article.summary}</p>
                <button onclick="viewArticle('${article.id}')">Read More</button>
                <img data-src="${article.image}" alt="${article.title}" class="lazy-load">
            `;
            articleList.appendChild(articleCard);
        });

        app.innerHTML = '';
        app.appendChild(articleList);
        lazyLoadImages();
    }

    function viewArticle(articleId) {
        // Fetch the details of the selected article
        fetch(`../data/articles/${articleId}.json`)
            .then(response => response.json())
            .then(article => {
                displayArticleDetails(article);
            })
            .catch(error => {
                console.error('Error fetching article details:', error);
            });
    }

    function displayArticleDetails(article) {
        const articleDetails = document.createElement('div');
        articleDetails.className = 'article-details';
        articleDetails.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.content}</p>
            <a href="#" class="back-button" onclick="fetchArticles()">Back to Articles</a>
        `;

        app.innerHTML = '';
        app.appendChild(articleDetails);
    }

    function lazyLoadImages() {
        const lazyImages = document.querySelectorAll('.lazy-load');
        const config = {
            rootMargin: '0px 0px 50px 0px',
            threshold: 0.01
        };

        let observer;
        if ('IntersectionObserver' in window) {
            observer = new IntersectionObserver(onIntersection, config);
            lazyImages.forEach(image => {
                observer.observe(image);
            });
        } else {
            lazyImages.forEach(image => {
                loadImage(image);
            });
        }

        function onIntersection(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    loadImage(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }

        function loadImage(image) {
            image.src = image.dataset.src;
            image.classList.add('loaded');
        }
    }

    fetchArticles();
});
