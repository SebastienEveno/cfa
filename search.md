---
layout: page
title: Search Study Materials
permalink: /search/
prev: /cfa/
next: /cfa/about/
---

<div id="search-container">
  <div class="search-input-wrapper">
    <input type="text" id="search-input" placeholder="Search study materials..." class="search-input">
    <div id="search-results" class="search-results"></div>
  </div>
</div>

<style>
.search-input-wrapper {
  position: relative;
  margin-bottom: 2rem;
}

.search-input {
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.search-input:focus {
  border-color: #0366d6;
  box-shadow: 0 0 0 3px rgba(3, 102, 214, 0.1);
}

.search-results {
  margin-top: 20px;
}

.search-result-item {
  padding: 16px;
  margin-bottom: 12px;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  transition: all 0.2s;
}

.search-result-item:hover {
  border-color: #0366d6;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.search-result-title {
  display: block;
  font-size: 18px;
  font-weight: 600;
  color: #0366d6;
  text-decoration: none;
  margin-bottom: 4px;
}

.search-result-title:hover {
  text-decoration: underline;
}

.search-result-excerpt {
  font-size: 14px;
  color: #586069;
  line-height: 1.5;
}

.search-no-results {
  text-align: center;
  padding: 40px 20px;
  color: #6a737d;
  font-size: 16px;
}

.search-highlight {
  background-color: #fff3cd;
  padding: 2px 4px;
  border-radius: 2px;
  font-weight: 600;
}
</style>

<script src="https://cdn.jsdelivr.net/npm/lunr@2.3.9/lunr.min.js"></script>
<script src="{{ '/assets/js/search.js' | relative_url }}"></script>
