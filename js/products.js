const PRODUCT_DATA = [
  {
    id: 'rice',
    name: 'Premium White Rice',
    category: 'Grains',
    shortDescription: 'Long-grain and parboiled rice varieties for wholesale, retail and export markets.',
    description: 'Premium white rice sourced for consistent grain length, milling quality and dependable availability across retail, food service and export channels.',
    image: 'https://images.pexels.com/photos/2641887/pexels-photo-2641887.jpeg?auto=compress&cs=tinysrgb&w=600',
    mediaType: 'video',
    mediaSrc: 'images/rice video.mp4',
    highlights: ['Consistent grain length and whiteness', 'Available in bulk shipments', 'Export-ready packaging options'],
    specifications: ['Quality: Long-grain, clean, well-milled', 'Moisture: Dry enough for safe storage (around 13% or less)', 'Broken grains: Small amount of broken rice mixed in (5% or less)', 'Cleanliness: Virtually free of stones, husks, or other impurities', 'Appearance: Minimal discolored or chalky grains', 'Packaging: 50kg bags, or custom packaging on request'],
    applications: ['Retail distribution', 'Food service procurement', 'Institutional supply'],
    tags: ['rice', 'grains', 'wholesale', 'export', 'long grain']
  },
  {
    id: 'maize',
    name: 'Premium Maize',
    category: 'Grains',
    shortDescription: 'Grade A yellow and white maize for food processing, animal feed and industrial use.',
    description: 'Grade A maize selected for food manufacturing, animal feed production and industrial processing with reliable sourcing consistency.',
    image: 'images/pexels-muhammad-shehu-1718177362-29746992.jpg',
    highlights: ['High milling and feed suitability', 'Clean and sorted lots', 'Flexible loading schedules'],
    specifications: ['Quality: Grade A, clean and well-dried', 'Moisture: Low moisture content, so it stores well without spoiling (around 12.5% or less)', 'Cleanliness: Free of dirt, stones, and other foreign material (less than 1%)', 'Damaged grains: Minimal broken or insect-damaged kernels (under 2%)', 'Safety: Tested and within safe limits for mold toxins (aflatoxin)', 'Packaging: 50kg bags'],
    applications: ['Animal feed production', 'Food manufacturing', 'Industrial processing'],
    tags: ['maize', 'grains', 'feed', 'industrial']
  },
  {
    id: 'soya',
    name: 'Vegetable Oil',
    category: 'Edible Oil',
    shortDescription: 'Premium cooking and sunflower oil for food processing, retail and export markets.',
    description: 'High-quality vegetable oil selected for cooking, food processing and bulk supply with dependable export readiness.',
    image: 'images/Oil/WhatsApp Image 2026-06-09 at 5.41.47 AM (1).jpeg',
    highlights: ['Refined / RBD grade available', 'Low FFA content', 'Flexible packaging for retail and bulk export'],
    specifications: ['Type: Refined, clean cooking oil (also called RBD — Refined, Bleached, Deodorized)', 'Purity: Low acidity, meaning it\'s fresh and won\'t taste sour or "off"', 'Clarity: Clear, free of moisture and sediment', 'Shelf life: Good freshness/shelf stability', 'Packaging: 5L, 10L, or 20L jerry cans, 200L drums, or bulk flexitanks for large orders'],
    applications: ['Edible oil extraction', 'Animal feed', 'Food ingredient supply'],
    tags: ['soya', 'oil seeds', 'protein', 'food processing']
  },
  {
    id: 'sugar',
    name: 'Brown Sugar & White Refined Sugar',
    category: 'Soft Commodities',
    shortDescription: 'ISO-grade sugar for food manufacturers, retailers and international export.',
    description: 'White refined sugar supplied in reliable volumes for food manufacturers, retail channels and export customers with strict quality consistency.',
    image: 'images/Sugar.jfif',
    highlights: ['High purity and crystal uniformity', 'Reliable bulk sourcing', 'Flexible shipment planning'],
    specifications: ['Quality: ISO-grade, suitable for food manufacturing and retail', 'Purity: High purity, clean crystals with no clumping', 'Moisture: Low moisture, so it stays dry and doesn\'t cake or spoil', 'Color: Consistent color grading (light brown or bright white, depending on type)', 'Grain size: Uniform crystal size for consistent packaging and use', 'Packaging: 50kg bags, or bulk/custom packaging for export orders'],
    applications: ['Food manufacturing', 'Retail distribution', 'Beverage production'],
    tags: ['sugar', 'soft commodities', 'refined', 'export']
  },
  {
    id: 'coffee',
    name: 'Premium Coffee Beans',
    category: 'Soft Commodities',
    shortDescription: 'Kenyan Arabica and Robusta coffee beans for export and roasting partners.',
    description: 'Premium coffee beans sourced for strong cup quality, roasting consistency and export-ready packaging for specialty and commercial buyers.',
    image: 'https://images.pexels.com/photos/12482129/pexels-photo-12482129.jpeg?cs=srgb&dl=pexels-aysin-12482129.jpg&fm=jpg',
    highlights: ['Authentic origin traceability', 'Consistent roast profiles', 'Flexible lot sizes'],
    specifications: ['Origin: Grown in Kenya\'s coffee-growing regions', 'Bean type: Arabica (smoother, more aromatic) and Robusta (stronger, higher caffeine) available', 'Processing: Washed/fully processed beans, sorted for size and quality', 'Moisture: Properly dried to preserve freshness during shipping', 'Defects: Minimal broken, discolored, or damaged beans', 'Packaging: Export-grade bags (typically 60kg jute bags, or as per buyer requirement)'],
    applications: ['Roasting operations', 'Export trading', 'Specialty coffee supply'],
    tags: ['coffee', 'soft commodities', 'roasting', 'export']
  },
  {
    id: 'fertilizers',
    name: 'Fertilizers',
    category: 'Agri Inputs',
    shortDescription: 'Balanced crop nutrition solutions for soil health, higher yields and dependable farm supply.',
    description: 'Agricultural input solutions tailored for crop nutrition, soil health and bulk farm supply with dependable delivery support.',
    image: 'images/pexels-leiliane-dutra-1841922-25974981.jpg',
    highlights: ['High nutrient value', 'Reliable agri input supply', 'Bulk logistics support'],
    specifications: ['Type: Balanced nutrient blend (NPK)', 'Purpose: Supports healthy soil and stronger crop yields', 'Form: Granular, easy to spread by hand or machine', 'Solubility: Dissolves well so nutrients reach the plant roots', 'Storage: Stays stable and doesn\'t clump when stored properly', 'Packaging: 50kg bags (standard for most farm supply orders)'],
    applications: ['Crop nutrition', 'Fertilizer blending', 'Farm supply'],
    tags: ['fertilizers', 'agri inputs', 'crop nutrition', 'farm supply']
  }
];

window.PRODUCT_DATA = PRODUCT_DATA;

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderProductCatalog() {
  const grid = document.querySelector('[data-product-grid]');
  const searchInput = document.getElementById('searchInput');
  const categoryFilter = document.getElementById('categoryFilter');
  const sortFilter = document.getElementById('sortFilter');
  const catalogStat = document.getElementById('catalogStat');
  const categoryTabs = document.getElementById('categoryTabs');

  if (!grid || !searchInput || !categoryFilter || !sortFilter || !catalogStat) return;

  // Set initial category filter from URL parameter
  const params = new URLSearchParams(window.location.search);
  const catParam = params.get('cat');
  if (catParam) {
    const options = Array.from(categoryFilter.options);
    const matchingOption = options.find(opt => opt.value.toLowerCase() === catParam.toLowerCase());
    if (matchingOption) {
      categoryFilter.value = matchingOption.value;
      // Also highlight matching tab
      if (categoryTabs) {
        categoryTabs.querySelectorAll('.category-tab').forEach(tab => {
          tab.classList.toggle('active', tab.dataset.category.toLowerCase() === catParam.toLowerCase());
        });
      }
    }
  }

  const applyFilters = () => {
    const searchValue = searchInput.value.trim().toLowerCase();
    const categoryValue = categoryFilter.value;
    const sortValue = sortFilter.value;

    let filteredProducts = PRODUCT_DATA.filter((product) => {
      const searchableText = `${product.name} ${product.category} ${product.shortDescription} ${product.description} ${product.tags.join(' ')}`.toLowerCase();
      const matchesSearch = !searchValue || searchableText.includes(searchValue);
      const matchesCategory = categoryValue === 'all' || product.category === categoryValue;
      return matchesSearch && matchesCategory;
    });

    filteredProducts.sort((a, b) => {
      if (sortValue === 'name-desc') return b.name.localeCompare(a.name);
      if (sortValue === 'category-asc') return a.category.localeCompare(b.category);
      if (sortValue === 'category-desc') return b.category.localeCompare(a.category);
      return a.name.localeCompare(b.name);
    });

    if (!filteredProducts.length) {
      grid.innerHTML = '<div class="no-results">No products match your filters right now. Try a broader search.</div>';
      catalogStat.innerHTML = '<strong>0</strong> products found';
      return;
    }

    grid.innerHTML = filteredProducts.map((product) => {
      let imageHtml = '';

      if (product.mediaType === 'video' && product.mediaSrc) {
        imageHtml = `
          <video class="product-media" autoplay muted loop playsinline controls>
            <source src="${product.mediaSrc}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        `;
      } else if (product.id === 'soya') {
        imageHtml = `
          <div class="soya-slider" data-product-id="soya">
            <div class="soya-track">
              <div class="soya-slide slide-1"><img src="images/Oil/WhatsApp Image 2026-06-09 at 5.41.43 AM.jpeg" alt="Oil seed image 1"></div>
              <div class="soya-slide slide-2"><img src="images/Oil/WhatsApp Image 2026-06-09 at 5.41.46 AM.jpeg" alt="Oil seed image 2"></div>
              <div class="soya-slide slide-3"><img src="images/Oil/WhatsApp Image 2026-06-09 at 5.41.47 AM (1).jpeg" alt="Oil seed image 3"></div>
              <div class="soya-slide slide-4"><img src="images/Oil/WhatsApp Image 2026-06-09 at 5.41.47 AM.jpeg" alt="Oil seed image 4"></div>
            </div>
            <div class="soya-dots">
              <button class="soya-dot active" data-index="0" aria-label="Show slide 1"></button>
              <button class="soya-dot" data-index="1" aria-label="Show slide 2"></button>
              <button class="soya-dot" data-index="2" aria-label="Show slide 3"></button>
              <button class="soya-dot" data-index="3" aria-label="Show slide 4"></button>
            </div>
          </div>
        `;
      } else {
        imageHtml = `<img src="${product.image}" alt="${escapeHtml(product.name)}">`;
      }
      
      // Special handling for Soya Beans - show slider instead
      if (product.id === 'soya') {
        imageHtml = `
          <div class="soya-slider" data-product-id="soya">
            <div class="soya-track">
              <div class="soya-slide slide-1"><img src="images/Oil/WhatsApp Image 2026-06-09 at 5.41.43 AM.jpeg" alt="Oil seed image 1"></div>
              <div class="soya-slide slide-2"><img src="images/Oil/WhatsApp Image 2026-06-09 at 5.41.46 AM.jpeg" alt="Oil seed image 2"></div>
              <div class="soya-slide slide-3"><img src="images/Oil/WhatsApp Image 2026-06-09 at 5.41.47 AM (1).jpeg" alt="Oil seed image 3"></div>
              <div class="soya-slide slide-4"><img src="images/Oil/WhatsApp Image 2026-06-09 at 5.41.47 AM.jpeg" alt="Oil seed image 4"></div>
            </div>
            <div class="soya-dots">
              <button class="soya-dot active" data-index="0" aria-label="Show slide 1"></button>
              <button class="soya-dot" data-index="1" aria-label="Show slide 2"></button>
              <button class="soya-dot" data-index="2" aria-label="Show slide 3"></button>
              <button class="soya-dot" data-index="3" aria-label="Show slide 4"></button>
            </div>
          </div>
        `;
      }

      return `
      <article class="product-card">
        <div class="product-image">
          ${imageHtml}
        </div>
        <div class="product-body">
          <span class="product-badge">${escapeHtml(product.category)}</span>
          <h3 class="product-title">${escapeHtml(product.name)}</h3>
          <p class="product-text">${escapeHtml(product.shortDescription)}</p>
          <div class="product-action">
            <a href="product-details.html?product=${product.id}" class="btn-card">View Details</a>
            <a href="index.html#contact" class="btn-card" style="margin-top: 0.8rem;">Request Quote</a>
          </div>
        </div>
      </article>
    `}).join('');

    // Initialize soya slider if present
    const soyaSliders = document.querySelectorAll('[data-product-id="soya"]');
    soyaSliders.forEach(sliderContainer => {
      const track = sliderContainer.querySelector('.soya-track');
      const slides = Array.from(sliderContainer.querySelectorAll('.soya-slide'));
      const dots = Array.from(sliderContainer.querySelectorAll('.soya-dot'));
      
      let currentIndex = 0;
      let timer;

      function showSlide(index) {
        currentIndex = (index + slides.length) % slides.length;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, dotIndex) => {
          dot.classList.toggle('active', dotIndex === currentIndex);
        });
      }

      function startSlider() {
        if (timer) clearInterval(timer);
        timer = setInterval(() => {
          showSlide(currentIndex + 1);
        }, 4000);
      }

      dots.forEach((dot) => {
        dot.addEventListener('click', () => {
          showSlide(Number(dot.dataset.index));
          startSlider();
        });
      });

      showSlide(0);
      startSlider();
    });

    catalogStat.innerHTML = `<strong>${filteredProducts.length}</strong> ${filteredProducts.length === 1 ? 'product' : 'products'} found`;
  };

  // Wire up category tabs
  if (categoryTabs) {
    categoryTabs.addEventListener('click', (e) => {
      const tab = e.target.closest('.category-tab');
      if (!tab) return;
      categoryTabs.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      categoryFilter.value = tab.dataset.category;
      applyFilters();
    });
  }

  [searchInput, categoryFilter, sortFilter].forEach((control) => {
    control.addEventListener('input', applyFilters);
    control.addEventListener('change', applyFilters);
  });

  applyFilters();
}

function renderProductDetails() {
  const title = document.getElementById('productTitle');
  const category = document.getElementById('productCategory');
  const description = document.getElementById('productDescription');
  let image = document.getElementById('productImage');
  const specificationsList = document.getElementById('specificationsList');
  const breadcrumb = document.getElementById('breadcrumb');
  const relatedGrid = document.getElementById('relatedProductsGrid');
  const pageTitle = document.getElementById('pageTitle');
  const pageDescription = document.getElementById('pageDescription');
  const requestQuoteLink = document.getElementById('requestQuoteLink');
  const requestPriceQuoteLink = document.getElementById('requestPriceQuoteLink');
  const specSheetLink = document.getElementById('specSheetLink');

  if (!title || !category || !description || !image || !breadcrumb || !relatedGrid || !requestQuoteLink || !specSheetLink) return;

  const params = new URLSearchParams(window.location.search);
  const productId = params.get('product') || 'rice';
  const product = PRODUCT_DATA.find((entry) => entry.id === productId) || PRODUCT_DATA[0];

  if (pageTitle) pageTitle.textContent = product.name;
  if (pageDescription) pageDescription.textContent = `Learn more about ${product.name} and its supply profile.`;

  title.textContent = product.name;
  category.textContent = product.category;
  description.textContent = product.description;

  if (product.mediaType === 'video' && product.mediaSrc) {
    image.outerHTML = `
      <video id="productImage" class="product-media" autoplay muted loop playsinline controls>
        <source src="${product.mediaSrc}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    `;
    image = document.getElementById('productImage');
  } else {
    image.src = product.image;
    image.alt = product.name;
  }

  breadcrumb.innerHTML = `
    <a href="index.html">Home</a>
    <span>/</span>
    <a href="products.html">Products</a>
    <span>/</span>
    <span>${escapeHtml(product.name)}</span>
  `;

requestQuoteLink.href = `index.html#contact`;
      if (requestPriceQuoteLink) {
        requestPriceQuoteLink.href = `index.html#contact`;
      }
      specSheetLink.href = 'index.html#contact';

  const renderList = (listElement, items) => {
    listElement.innerHTML = '';
    items.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      listElement.appendChild(li);
    });
  };

  // Render specifications on detail page
  if (specificationsList) {
    renderList(specificationsList, product.specifications);
  }

  // Highlights and applications are not shown on this detail page.
  // renderList(highlightsList, product.highlights);
  // renderList(applicationsList, product.applications);

  const relatedProducts = PRODUCT_DATA.filter((entry) => entry.id !== product.id && entry.category === product.category).slice(0, 3);
  if (!relatedProducts.length) {
    relatedGrid.innerHTML = '<p class="detail-copy">No related products available right now.</p>';
    return;
  }

  relatedGrid.innerHTML = relatedProducts.map((relatedProduct) => `
    <article class="related-card">
      <div class="related-image">
        <img src="${relatedProduct.image}" alt="${escapeHtml(relatedProduct.name)}">
      </div>
      <div class="related-body">
        <span class="product-badge">${escapeHtml(relatedProduct.category)}</span>
        <h3>${escapeHtml(relatedProduct.name)}</h3>
        <p>${escapeHtml(relatedProduct.shortDescription)}</p>
        <a href="product-details.html?product=${relatedProduct.id}" class="btn-card">View Details</a>
      </div>
    </article>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('[data-product-grid]')) {
    renderProductCatalog();
  }

  if (document.querySelector('[data-product-detail]')) {
    renderProductDetails();
  }
});
