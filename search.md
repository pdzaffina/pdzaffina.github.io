---
layout: default
title: Search
permalink: /search/
---

<div class="search-page">
  <h1 class="search-heading">Search</h1>
  <p class="search-subheading">Search across all posts and pages.</p>

  <div id="search" class="search-container"></div>
</div>

<link href="/pagefind/pagefind-ui.css" rel="stylesheet">
<script src="/pagefind/pagefind-ui.js"></script>

<script>
  window.addEventListener("DOMContentLoaded", function () {
    new PagefindUI({
      element: "#search",
      showSubResults: true,
      excerptLength: 30,
      highlightParam: "highlight"
    });
  });
</script>

<style>
  .search-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }

  .search-heading {
    color: #0A192F;
    font-size: 2rem;
    margin-bottom: 0.25rem;
  }

  .search-subheading {
    color: #708090;
    margin-bottom: 2rem;
    font-size: 1rem;
  }

  /* Pagefind UI overrides — True Blue palette */
  :root {
    --pagefind-ui-scale: 1;
    --pagefind-ui-primary: #006BB6;
    --pagefind-ui-text: #0A192F;
    --pagefind-ui-background: #F5F7FA;
    --pagefind-ui-border: #708090;
    --pagefind-ui-tag: #006BB6;
    --pagefind-ui-border-width: 1px;
    --pagefind-ui-border-radius: 4px;
    --pagefind-ui-font: inherit;
  }

  .pagefind-ui__search-input {
    background: #ffffff;
    color: #0A192F;
    border: 1px solid #708090;
    border-radius: 4px;
    font-size: 1rem;
    padding: 0.6rem 1rem;
  }

  .pagefind-ui__search-input:focus {
    outline: 2px solid #006BB6;
    border-color: #006BB6;
  }

  .pagefind-ui__result {
    border-bottom: 1px solid #e5e7eb;
    padding: 1.25rem 0;
  }

  .pagefind-ui__result-title a {
    color: #006BB6;
    font-weight: 600;
    text-decoration: none;
  }

  .pagefind-ui__result-title a:hover {
    text-decoration: underline;
    color: #0A192F;
  }

  .pagefind-ui__result-excerpt {
    color: #708090;
    font-size: 0.9rem;
    margin-top: 0.25rem;
  }

  .pagefind-ui__button {
    background: #006BB6;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1.25rem;
    cursor: pointer;
    font-size: 0.9rem;
    margin-top: 1rem;
  }

  .pagefind-ui__button:hover {
    background: #0A192F;
  }

  mark {
    background: rgba(0, 107, 182, 0.15);
    color: inherit;
    border-radius: 2px;
    padding: 0 2px;
  }
</style>
