(function() {
  var tabs = document.querySelectorAll('.category-tab');
  var sections = document.querySelectorAll('[data-category-section]');
  var params = new URLSearchParams(location.search);
  var active = params.get('category') || 'all';

  function filter(cat) {
    tabs.forEach(function(t) {
      var isActive = t.dataset.category === cat;
      if (isActive) {
        t.classList.add('bg-primary', 'text-white', 'border-primary');
        t.classList.remove('text-text-secondary', 'border-border');
      } else {
        t.classList.remove('bg-primary', 'text-white', 'border-primary');
        t.classList.add('text-text-secondary', 'border-border');
      }
    });
    sections.forEach(function(s) {
      var sectionCat = s.dataset.categorySection;
      s.style.display = (cat === 'all' || cat === sectionCat) ? '' : 'none';
    });
    var url = new URL(location.href);
    if (cat === 'all') url.searchParams.delete('category');
    else url.searchParams.set('category', cat);
    history.replaceState(null, '', url.toString());
  }

  tabs.forEach(function(t) {
    t.addEventListener('click', function(e) {
      e.preventDefault();
      filter(t.dataset.category || 'all');
    });
  });

  filter(active);
})();
