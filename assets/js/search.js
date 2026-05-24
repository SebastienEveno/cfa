let searchIndex = null;
let searchData = null;

// Initialize search when page loads
document.addEventListener('DOMContentLoaded', function () {
    initSearch();

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', performSearch);
    }
});

// Fetch and initialize Lunr index
function initSearch() {
    const searchUrl = '/cfa/search.liquid';
    console.log('Fetching search index from:', searchUrl);
    fetch(searchUrl)
        .then(response => {
            console.log('Fetch response status:', response.status);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.json();
        })
        .then(data => {
            console.log('Search data loaded:', data);
            searchData = data.results;

            // Build Lunr index
            searchIndex = lunr(function () {
                this.ref('url');
                this.field('title', { boost: 10 });
                this.field('content');

                searchData.forEach(item => {
                    this.add(item);
                });
            });
            console.log('Search index built successfully');
        })
        .catch(error => {
            console.error('Error loading search index:', error);
            console.error('Make sure search.liquid exists and contains valid JSON');
        });
}

// Perform search
function performSearch(event) {
    const query = event.target.value.trim();
    const resultsContainer = document.getElementById('search-results');

    if (!resultsContainer) return;

    // Clear results if query is empty
    if (query.length === 0) {
        resultsContainer.innerHTML = '';
        return;
    }

    if (!searchIndex) {
        resultsContainer.innerHTML = '<div class="search-no-results">Search index is still loading...</div>';
        return;
    }

    // Perform search
    const results = searchIndex.search(query);

    if (results.length === 0) {
        resultsContainer.innerHTML = '<div class="search-no-results">No results found for "' + escapeHtml(query) + '"</div>';
        return;
    }

    // Display results
    const resultsHtml = results.slice(0, 20).map(result => {
        const item = searchData.find(d => d.url === result.ref);
        if (!item) return '';

        const excerpt = createExcerpt(item.content, query, 150);
        return `
      <div class="search-result-item">
        <a href="${escapeHtml(item.url)}" class="search-result-title">
          ${escapeHtml(item.title)}
        </a>
        <div class="search-result-excerpt">
          ${excerpt}
        </div>
      </div>
    `;
    }).join('');

    resultsContainer.innerHTML = resultsHtml;
}

// Create excerpt with context around search term
function createExcerpt(text, query, length) {
    if (!text) return '';

    // Remove HTML tags
    text = text.replace(/<[^>]*>/g, '');

    // Find the position of the query term (case-insensitive)
    const lowerText = text.toLowerCase();
    const lowerQuery = query.toLowerCase();
    const index = lowerText.indexOf(lowerQuery);

    let start = Math.max(0, index - 50);
    let end = Math.min(text.length, start + length);

    // Adjust start if we're at the beginning
    if (index === -1) {
        end = Math.min(text.length, length);
    }

    let excerpt = text.substring(start, end);

    // Add ellipsis if truncated
    if (start > 0) excerpt = '...' + excerpt;
    if (end < text.length) excerpt = excerpt + '...';

    // Highlight search term
    const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
    excerpt = excerpt.replace(regex, '<span class="search-highlight">$1</span>');

    return excerpt;
}

// Escape HTML special characters
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Escape regex special characters
function escapeRegex(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
