const storageKey = "campus-compass-favorites";

const startPoints = [
  { id: "student-square", name: "Student Square" },
  { id: "main-gate", name: "Main Gate" },
  { id: "library", name: "Central Library" },
  { id: "hostels", name: "Student Hostels" },
  { id: "science-block", name: "Science Block" },
  { id: "engineering", name: "Engineering Block" }
];

const spots = [
  {
    id: "book-hub",
    name: "BookHub Student Store",
    category: "Shopping",
    zone: "Student Center",
    summary: "Fast place to buy stationery, chargers, notebooks, printing credit, and daily essentials.",
    rating: 4.4,
    budget: "Affordable",
    access: "Open to all students",
    openNow: true,
    accessible: true,
    crowdLevel: "Moderate",
    relativeDistance: { "student-square": 4, "main-gate": 6, library: 3, hostels: 8, "science-block": 5, engineering: 7 },
    mapPosition: { top: "63%", left: "53%" },
    tags: ["Stationery", "Printing", "Phone accessories", "Essentials"],
    bestFor: ["Quick shopping", "Low budget", "Near library"],
    directions: "Walk into the student center and take the left corridor beside the banking hall.",
    routeSteps: [
      "Start from your selected point and head toward the student center plaza.",
      "Pass the banking hall and look for the print-and-pay corridor.",
      "BookHub is the second shop on the left."
    ],
    services: ["Notebook and pen packs", "Phone charger and USB sales", "Print and photocopy support"],
    entryRule: "Student card is recommended for printing accounts, but the shop is open for walk-ins.",
    hours: "7:30 AM - 8:00 PM",
    supportNote: "Best time to avoid crowds is before 10:00 AM."
  },
  {
    id: "green-bowl",
    name: "Green Bowl Restaurant",
    category: "Restaurant",
    zone: "Arts Court",
    summary: "Balanced meals, fresh juice, and student combo plates with one of the best ratings on campus.",
    rating: 4.8,
    budget: "Mid-range",
    access: "Open to all students",
    openNow: true,
    accessible: true,
    crowdLevel: "Busy",
    relativeDistance: { "student-square": 6, "main-gate": 8, library: 5, hostels: 6, "science-block": 7, engineering: 9 },
    mapPosition: { top: "44%", left: "69%" },
    tags: ["Top rated", "Lunch", "Vegetarian options", "Wi-Fi"],
    bestFor: ["Healthy meals", "Group lunch", "High ratings"],
    directions: "Continue to the arts courtyard and look for the glass-front canteen next to the debate hall.",
    routeSteps: [
      "Move toward the arts court open square.",
      "Keep right at the amphitheater path.",
      "Green Bowl faces the debate hall with outdoor seating."
    ],
    services: ["Student combo meals", "Vegetarian and vegan dishes", "Fresh juice and coffee"],
    entryRule: "Free entry. Peak hours are from 12:30 PM to 2:00 PM.",
    hours: "8:00 AM - 9:00 PM",
    supportNote: "Use the pickup desk if you pre-order."
  },
  {
    id: "campus-bites",
    name: "Campus Bites Corner",
    category: "Restaurant",
    zone: "Science Block",
    summary: "Budget-friendly snacks and local dishes close to lecture halls for quick meal breaks.",
    rating: 4.1,
    budget: "Budget",
    access: "Open to all students",
    openNow: true,
    accessible: true,
    crowdLevel: "Light",
    relativeDistance: { "student-square": 3, "main-gate": 7, library: 4, hostels: 9, "science-block": 2, engineering: 4 },
    mapPosition: { top: "64%", left: "27%" },
    tags: ["Cheap eats", "Fast service", "Snacks"],
    bestFor: ["Short break", "Low budget", "Near lecture halls"],
    directions: "Walk behind the science block and look for the orange outdoor seating near the shuttle stop.",
    routeSteps: [
      "Head for the science block walkway.",
      "Turn behind the laboratory wing.",
      "Campus Bites sits beside the shuttle drop-off."
    ],
    services: ["Chapati and tea", "Quick rice meals", "Pack-away snacks"],
    entryRule: "Open campus access.",
    hours: "7:00 AM - 6:30 PM",
    supportNote: "Usually the fastest option between classes."
  },
  {
    id: "lost-found",
    name: "Lost & Found Help Desk",
    category: "Lost Items",
    zone: "Admin Block",
    summary: "Central reporting point for lost IDs, phones, bags, documents, and recovered valuables.",
    rating: 4.7,
    budget: "Free",
    access: "Students and staff only",
    openNow: true,
    accessible: true,
    crowdLevel: "Moderate",
    relativeDistance: { "student-square": 5, "main-gate": 3, library: 6, hostels: 10, "science-block": 7, engineering: 8 },
    mapPosition: { top: "23%", left: "59%" },
    tags: ["Lost ID", "Found phone", "Security help", "Desk support"],
    bestFor: ["Urgent help", "Reporting missing items", "Recovered property"],
    directions: "Go to the administration block reception and use the right-side help counter beside campus security.",
    routeSteps: [
      "Walk to the administration block front desk.",
      "Check in with reception if the item is sensitive or high value.",
      "Use the help counter beside campus security."
    ],
    services: ["Lost item reporting", "Verification before release", "Security escalation for valuable items"],
    entryRule: "Carry a student card or valid identification for claim verification.",
    hours: "8:00 AM - 5:00 PM",
    supportNote: "The desk can connect you to security after hours."
  },
  {
    id: "innovation-lab",
    name: "Innovation Lab",
    category: "Study & Tech",
    zone: "Engineering",
    summary: "Collaborative digital lab for coding, project work, startup meetings, and supervised maker sessions.",
    rating: 4.6,
    budget: "Free",
    access: "Restricted hours",
    openNow: false,
    accessible: false,
    crowdLevel: "Light",
    relativeDistance: { "student-square": 9, "main-gate": 12, library: 10, hostels: 6, "science-block": 5, engineering: 2 },
    mapPosition: { top: "74%", left: "73%" },
    tags: ["Projects", "Computers", "Makerspace", "Quiet collaboration"],
    bestFor: ["Tech projects", "Group work", "Mentor sessions"],
    directions: "Take the uphill path behind engineering and use the east wing staircase to the second floor.",
    routeSteps: [
      "Follow the uphill path to engineering.",
      "Use the east wing entrance during staffed hours.",
      "Climb to level two and check the booking board."
    ],
    services: ["Computer workstations", "Project tables", "Workshop events"],
    entryRule: "Open only during staffed hours. Some zones need prior booking.",
    hours: "10:00 AM - 6:00 PM",
    supportNote: "Check workshop notices before visiting."
  },
  {
    id: "wellness-center",
    name: "Student Wellness Center",
    category: "Support",
    zone: "Hostels",
    summary: "Guidance, counseling, first response support, and referral help in a calm and private setting.",
    rating: 4.9,
    budget: "Free",
    access: "Open to all students",
    openNow: true,
    accessible: true,
    crowdLevel: "Light",
    relativeDistance: { "student-square": 7, "main-gate": 10, library: 8, hostels: 3, "science-block": 8, engineering: 7 },
    mapPosition: { top: "80%", left: "28%" },
    tags: ["Counseling", "Health support", "Quiet", "Private"],
    bestFor: ["Personal support", "Calm environment", "Student care"],
    directions: "Follow the hostel road and turn right at the landscaped garden beside the chapel.",
    routeSteps: [
      "Walk toward the hostel road garden path.",
      "Pass the chapel lawn.",
      "The center is in the calm building beside the garden."
    ],
    services: ["Counseling sessions", "Well-being check-ins", "Referral to medical services"],
    entryRule: "Walk-ins are allowed, though booked sessions get faster service.",
    hours: "8:30 AM - 6:00 PM",
    supportNote: "A private waiting room is available."
  },
  {
    id: "archive-room",
    name: "Records & Archive Room",
    category: "Access Rules",
    zone: "Admin Block",
    summary: "Important office for document requests, but entrance is controlled and only certain users may enter.",
    rating: 4.0,
    budget: "Free",
    access: "Staff or approved students only",
    openNow: true,
    accessible: false,
    crowdLevel: "Moderate",
    relativeDistance: { "student-square": 8, "main-gate": 4, library: 8, hostels: 11, "science-block": 9, engineering: 10 },
    mapPosition: { top: "18%", left: "66%" },
    tags: ["Restricted area", "Documents", "Approval needed"],
    bestFor: ["Official paperwork", "Permission-based entry"],
    directions: "Use the admin staircase to level one and ask at registrar reception before entry.",
    routeSteps: [
      "Enter the administration block through reception.",
      "Ask the registrar desk to confirm your approval.",
      "Proceed to level one only after clearance."
    ],
    services: ["Academic record support", "Document verification", "Approval-based archive access"],
    entryRule: "Not open for free walk-in access. Students need approval or referral.",
    hours: "8:00 AM - 4:30 PM",
    supportNote: "Check approval first to avoid unnecessary queue time."
  },
  {
    id: "campus-mart",
    name: "Campus Mart",
    category: "Shopping",
    zone: "Main Gate",
    summary: "Convenient stop near the entrance for toiletries, drinks, snacks, umbrellas, and everyday supplies.",
    rating: 4.2,
    budget: "Budget",
    access: "Open to all students",
    openNow: true,
    accessible: true,
    crowdLevel: "Busy",
    relativeDistance: { "student-square": 6, "main-gate": 2, library: 7, hostels: 11, "science-block": 8, engineering: 10 },
    mapPosition: { top: "18%", left: "18%" },
    tags: ["Snacks", "Toiletries", "Umbrellas", "Top-up credit"],
    bestFor: ["Quick essentials", "Near entrance", "Budget supplies"],
    directions: "Find the entrance arcade just inside the main gate and look for the blue storefront.",
    routeSteps: [
      "Move toward the main gate arcade.",
      "Stay on the right-hand row of shops.",
      "Campus Mart is beside the mobile money booth."
    ],
    services: ["Snacks and drinks", "Toiletries", "Umbrellas and rainwear"],
    entryRule: "Open access for all students and visitors.",
    hours: "7:00 AM - 9:30 PM",
    supportNote: "Best for emergency essentials before class."
  }
];

const filters = {
  start: "student-square",
  category: "All",
  budget: "Any",
  distance: "Any",
  access: "Any",
  open: "Any",
  search: "",
  accessibleOnly: false,
  favoritesOnly: false
};

const controls = {
  start: document.getElementById("startFilter"),
  category: document.getElementById("categoryFilter"),
  budget: document.getElementById("budgetFilter"),
  distance: document.getElementById("distanceFilter"),
  access: document.getElementById("accessFilter"),
  open: document.getElementById("openFilter"),
  search: document.getElementById("searchInput"),
  list: document.getElementById("spotList"),
  detail: document.getElementById("spotDetail"),
  route: document.getElementById("routePanel"),
  notices: document.getElementById("noticeBoard"),
  resultsTitle: document.getElementById("resultsTitle"),
  resultsCount: document.getElementById("resultsCount"),
  quickStats: document.getElementById("quickStats"),
  quickCategoryBar: document.getElementById("quickCategoryBar"),
  activeFilters: document.getElementById("activeFilters"),
  plannerSummary: document.getElementById("plannerSummary"),
  reset: document.getElementById("resetFilters"),
  bestMatch: document.getElementById("openBestMatch"),
  accessibilityToggle: document.getElementById("accessibilityToggle"),
  favoritesOnly: document.getElementById("showFavoritesOnly"),
  mapPins: document.getElementById("mapPins"),
  spotTemplate: document.getElementById("spotCardTemplate"),
  mapPinTemplate: document.getElementById("mapPinTemplate")
};

let favorites = loadFavorites();
let selectedSpotId = spots[0].id;

const uniqueCategories = ["All", ...new Set(spots.map((spot) => spot.category))];
const budgetOptions = ["Any", "Free", "Budget", "Affordable", "Mid-range"];
const distanceOptions = ["Any", "0-5 min walk", "6-10 min walk", "10+ min walk"];
const accessOptions = ["Any", "Open to all students", "Students and staff only", "Restricted hours", "Staff or approved students only"];
const openOptions = ["Any", "Open now", "Show closed too"];

function loadFavorites() {
  try {
    const raw = localStorage.getItem(storageKey);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    return [];
  }
}

function saveFavorites() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(favorites));
  } catch (error) {
    return;
  }
}

function populateSelect(select, options, labelMapper = (value) => value) {
  select.innerHTML = "";
  options.forEach((option) => {
    const item = document.createElement("option");
    item.value = option;
    item.textContent = labelMapper(option);
    select.appendChild(item);
  });
}

function getDistance(spot) {
  return spot.relativeDistance[filters.start];
}

function passesDistanceFilter(spot) {
  const distance = getDistance(spot);
  if (filters.distance === "Any") return true;
  if (filters.distance === "0-5 min walk") return distance <= 5;
  if (filters.distance === "6-10 min walk") return distance >= 6 && distance <= 10;
  return distance > 10;
}

function scoreSpot(spot) {
  let score = spot.rating * 12;
  if (filters.category !== "All" && spot.category === filters.category) score += 22;
  if (filters.budget !== "Any" && spot.budget === filters.budget) score += 12;
  if (filters.open === "Open now" && spot.openNow) score += 10;
  if (filters.access !== "Any" && spot.access === filters.access) score += 14;
  if (filters.accessibleOnly && spot.accessible) score += 14;
  if (favorites.includes(spot.id)) score += 8;
  score += Math.max(0, 12 - getDistance(spot));

  const search = filters.search.trim().toLowerCase();
  if (!search) return score;

  const haystack = [spot.name, spot.category, spot.summary, spot.tags.join(" "), spot.services.join(" "), spot.zone].join(" ").toLowerCase();
  if (haystack.includes(search)) score += 18;
  return score;
}

function getFilteredSpots() {
  return spots
    .filter((spot) => {
      const haystack = [spot.name, spot.category, spot.summary, spot.tags.join(" "), spot.services.join(" "), spot.zone].join(" ").toLowerCase();
      const matchesSearch = !filters.search || haystack.includes(filters.search.toLowerCase());
      const matchesCategory = filters.category === "All" || spot.category === filters.category;
      const matchesBudget = filters.budget === "Any" || spot.budget === filters.budget;
      const matchesDistance = passesDistanceFilter(spot);
      const matchesAccess = filters.access === "Any" || spot.access === filters.access;
      const matchesOpen = filters.open !== "Open now" || spot.openNow;
      const matchesAccessibility = !filters.accessibleOnly || spot.accessible;
      const matchesFavorites = !filters.favoritesOnly || favorites.includes(spot.id);

      return matchesSearch && matchesCategory && matchesBudget && matchesDistance && matchesAccess && matchesOpen && matchesAccessibility && matchesFavorites;
    })
    .sort((a, b) => scoreSpot(b) - scoreSpot(a));
}

function getSelectedSpot(filteredSpots = getFilteredSpots()) {
  return filteredSpots.find((spot) => spot.id === selectedSpotId) || filteredSpots[0] || null;
}

function formatCategoryTitle(category) {
  return category === "All" ? "Recommended places" : `${category} spots`;
}

function renderQuickCategories() {
  controls.quickCategoryBar.innerHTML = "";
  uniqueCategories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quick-chip";
    button.textContent = category === "All" ? "Explore all" : category;
    button.classList.toggle("active", filters.category === category);
    button.addEventListener("click", () => {
      filters.category = category;
      controls.category.value = category;
      renderApp();
    });
    controls.quickCategoryBar.appendChild(button);
  });
}

function renderQuickStats() {
  const openCount = spots.filter((spot) => spot.openNow).length;
  const restrictedCount = spots.filter((spot) => spot.access !== "Open to all students").length;
  const favoriteCount = favorites.length;
  const topRestaurant = [...spots.filter((spot) => spot.category === "Restaurant")].sort((a, b) => b.rating - a.rating)[0];

  const stats = [
    { label: "Top food rating", value: `${topRestaurant.name} | ${topRestaurant.rating.toFixed(1)} / 5` },
    { label: "Open spots now", value: `${openCount} locations are currently active` },
    { label: "Restricted areas", value: `${restrictedCount} places need extra access checks` },
    { label: "Saved favorites", value: `${favoriteCount} favorite place${favoriteCount === 1 ? "" : "s"}` }
  ];

  controls.quickStats.innerHTML = stats.map((stat) => `
      <article class="mini-stat">
        <p class="mini-label">${stat.label}</p>
        <div class="mini-value">${stat.value}</div>
      </article>
    `).join("");
}

function renderPlannerSummary() {
  const startLabel = startPoints.find((point) => point.id === filters.start)?.name || "Student Square";
  controls.plannerSummary.textContent = `Starting from ${startLabel}`;
}

function renderActiveFilters() {
  const applied = [];
  if (filters.category !== "All") applied.push(filters.category);
  if (filters.budget !== "Any") applied.push(filters.budget);
  if (filters.distance !== "Any") applied.push(filters.distance);
  if (filters.access !== "Any") applied.push(filters.access);
  if (filters.open === "Open now") applied.push("Open now");
  if (filters.accessibleOnly) applied.push("Accessibility");
  if (filters.favoritesOnly) applied.push("Favorites");
  if (filters.search) applied.push(`Search: ${filters.search}`);

  controls.activeFilters.innerHTML = applied.length
    ? applied.map((item) => `<span class="filter-pill">${item}</span>`).join("")
    : `<span class="filter-pill">No extra filters</span>`;
}

function renderMap(filteredSpots) {
  controls.mapPins.innerHTML = "";
  filteredSpots.forEach((spot) => {
    const pin = controls.mapPinTemplate.content.firstElementChild.cloneNode(true);
    pin.style.top = spot.mapPosition.top;
    pin.style.left = spot.mapPosition.left;
    pin.classList.toggle("active", spot.id === selectedSpotId);
    pin.classList.toggle("open", spot.openNow);
    pin.classList.toggle("restricted", spot.access !== "Open to all students");
    pin.querySelector(".map-pin-label").textContent = spot.name;
    pin.addEventListener("click", () => {
      selectedSpotId = spot.id;
      renderApp();
    });
    controls.mapPins.appendChild(pin);
  });
}

function renderDetail(spot) {
  if (!spot) {
    controls.detail.innerHTML = `
      <div class="empty-state">
        <h3>No spot selected</h3>
        <p>Choose a place from the list and its full information will appear here.</p>
      </div>
    `;
    return;
  }

  controls.detail.innerHTML = `
    <section class="detail-hero">
      <p class="spot-category">${spot.category}</p>
      <h3 class="detail-name">${spot.name}</h3>
      <p class="detail-copy">${spot.summary}</p>
      <div class="detail-chip-row">${spot.tags.map((tag) => `<span class="detail-chip">${tag}</span>`).join("")}</div>
    </section>
    <section class="detail-grid">
      <article class="detail-box"><strong>Walking time</strong><span>${getDistance(spot)} min from your starting point</span></article>
      <article class="detail-box"><strong>Zone</strong><span>${spot.zone}</span></article>
      <article class="detail-box"><strong>Open status</strong><span>${spot.openNow ? "Open now" : "Currently closed"}</span></article>
      <article class="detail-box"><strong>Accessibility</strong><span>${spot.accessible ? "Accessibility friendly" : "Check stairs or assistance"}</span></article>
      <article class="detail-box"><strong>Rating</strong><span>${spot.rating.toFixed(1)} / 5</span></article>
      <article class="detail-box"><strong>Crowd level</strong><span>${spot.crowdLevel}</span></article>
    </section>
    <section class="detail-box">
      <strong>Entry guidance</strong>
      <p class="detail-copy">${spot.entryRule}</p>
    </section>
    <section class="detail-box">
      <strong>Services available</strong>
      <ul class="detail-list">${spot.services.map((service) => `<li>${service}</li>`).join("")}</ul>
    </section>
    <section class="detail-box">
      <strong>Extra help</strong>
      <div class="info-row">
        <span class="detail-chip">${spot.hours}</span>
        <span class="detail-chip">${spot.supportNote}</span>
      </div>
    </section>
  `;
}

function renderRoute(spot) {
  if (!spot) {
    controls.route.innerHTML = `
      <div class="empty-state">
        <h3>No route available</h3>
        <p>Select a spot to get route steps and travel information.</p>
      </div>
    `;
    return;
  }

  const startLabel = startPoints.find((point) => point.id === filters.start)?.name || "Student Square";
  controls.route.innerHTML = `
    <section class="route-box">
      <strong>Overview</strong>
      <p class="route-meta">${startLabel} to ${spot.name} takes about ${getDistance(spot)} minutes on foot.</p>
    </section>
    <section class="route-box">
      <strong>Directions</strong>
      <p class="detail-copy">${spot.directions}</p>
      <ol class="route-list">${spot.routeSteps.map((step) => `<li>${step}</li>`).join("")}</ol>
    </section>
  `;
}

function renderNotices(filteredSpots) {
  const selected = getSelectedSpot(filteredSpots);
  const lostItemSpot = spots.find((spot) => spot.category === "Lost Items");
  const restricted = filteredSpots.filter((spot) => spot.access !== "Open to all students");

  const notices = [
    selected ? { title: `Access note for ${selected.name}`, tag: selected.access, body: selected.entryRule } : null,
    { title: "Lost item support", tag: "Support desk", body: `If you misplaced an ID, phone, or bag, head to ${lostItemSpot.name} during ${lostItemSpot.hours}.` },
    restricted.length ? { title: "Restricted places in your results", tag: `${restricted.length} notice${restricted.length === 1 ? "" : "s"}`, body: "Some locations need approval, staffed hours, or identity checks before entry." } : null
  ].filter(Boolean);

  controls.notices.innerHTML = notices.map((notice) => `
      <article class="notice-item">
        <span class="notice-tag">${notice.tag}</span>
        <h3>${notice.title}</h3>
        <p>${notice.body}</p>
      </article>
    `).join("");
}

function renderList(filteredSpots) {
  controls.resultsTitle.textContent = formatCategoryTitle(filters.category);
  controls.resultsCount.textContent = `${filteredSpots.length} place${filteredSpots.length === 1 ? "" : "s"} found`;

  if (!filteredSpots.length) {
    controls.list.innerHTML = `
      <div class="empty-state">
        <h3>No matching campus spots</h3>
        <p>Try removing some filters or search terms to see more results.</p>
      </div>
    `;
    return;
  }

  controls.list.innerHTML = "";
  filteredSpots.forEach((spot) => {
    const node = controls.spotTemplate.content.firstElementChild.cloneNode(true);
    const favoriteButton = node.querySelector(".favorite-button");
    const routeButton = node.querySelector(".primary-button");

    node.classList.toggle("active", spot.id === selectedSpotId);
    node.querySelector(".spot-category").textContent = `${spot.category} | ${spot.zone}`;
    node.querySelector(".spot-name").textContent = spot.name;
    node.querySelector(".spot-summary").textContent = spot.summary;
    node.querySelector(".rating-badge").textContent = `${spot.rating.toFixed(1)} / 5`;
    node.querySelector(".spot-distance").textContent = `${getDistance(spot)} min walk`;
    node.querySelector(".spot-access").textContent = spot.access;
    node.querySelector(".chip-row").innerHTML = spot.bestFor.map((item) => `<span class="chip">${item}</span>`).join("");

    favoriteButton.textContent = favorites.includes(spot.id) ? "♥" : "♡";
    favoriteButton.classList.toggle("active", favorites.includes(spot.id));
    favoriteButton.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleFavorite(spot.id);
    });

    routeButton.addEventListener("click", (event) => {
      event.stopPropagation();
      selectedSpotId = spot.id;
      renderApp();
      controls.route.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    node.addEventListener("click", () => {
      selectedSpotId = spot.id;
      renderApp();
    });

    controls.list.appendChild(node);
  });
}

function toggleFavorite(spotId) {
  favorites = favorites.includes(spotId) ? favorites.filter((id) => id !== spotId) : [...favorites, spotId];
  saveFavorites();
  renderApp();
}

function applyBestMatch() {
  const filteredSpots = getFilteredSpots();
  if (!filteredSpots.length) return;
  selectedSpotId = filteredSpots[0].id;
  renderApp();
  controls.detail.scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetFilters() {
  filters.start = "student-square";
  filters.category = "All";
  filters.budget = "Any";
  filters.distance = "Any";
  filters.access = "Any";
  filters.open = "Any";
  filters.search = "";
  filters.accessibleOnly = false;
  filters.favoritesOnly = false;

  controls.start.value = filters.start;
  controls.category.value = filters.category;
  controls.budget.value = filters.budget;
  controls.distance.value = filters.distance;
  controls.access.value = filters.access;
  controls.open.value = filters.open;
  controls.search.value = filters.search;
  controls.accessibilityToggle.classList.remove("active");
  controls.accessibilityToggle.textContent = "Off";
  controls.accessibilityToggle.setAttribute("aria-pressed", "false");
  controls.favoritesOnly.classList.remove("active");
  selectedSpotId = spots[0].id;
  renderApp();
}

function bindControls() {
  const bindingMap = [
    [controls.start, "start"],
    [controls.category, "category"],
    [controls.budget, "budget"],
    [controls.distance, "distance"],
    [controls.access, "access"],
    [controls.open, "open"]
  ];

  bindingMap.forEach(([control, key]) => {
    control.addEventListener("change", (event) => {
      filters[key] = event.target.value;
      renderApp();
    });
  });

  controls.search.addEventListener("input", (event) => {
    filters.search = event.target.value.trim();
    renderApp();
  });

  controls.accessibilityToggle.addEventListener("click", () => {
    filters.accessibleOnly = !filters.accessibleOnly;
    controls.accessibilityToggle.classList.toggle("active", filters.accessibleOnly);
    controls.accessibilityToggle.textContent = filters.accessibleOnly ? "On" : "Off";
    controls.accessibilityToggle.setAttribute("aria-pressed", String(filters.accessibleOnly));
    renderApp();
  });

  controls.favoritesOnly.addEventListener("click", () => {
    filters.favoritesOnly = !filters.favoritesOnly;
    controls.favoritesOnly.classList.toggle("active", filters.favoritesOnly);
    renderApp();
  });

  controls.reset.addEventListener("click", resetFilters);
  controls.bestMatch.addEventListener("click", applyBestMatch);
}

function renderApp() {
  const filteredSpots = getFilteredSpots();
  const selected = getSelectedSpot(filteredSpots);
  if (selected) selectedSpotId = selected.id;

  renderQuickCategories();
  renderQuickStats();
  renderPlannerSummary();
  renderActiveFilters();
  renderMap(filteredSpots);
  renderList(filteredSpots);
  renderDetail(selected);
  renderRoute(selected);
  renderNotices(filteredSpots);
}

function initialise() {
  populateSelect(controls.start, startPoints.map((point) => point.id), (id) => startPoints.find((point) => point.id === id)?.name || id);
  populateSelect(controls.category, uniqueCategories);
  populateSelect(controls.budget, budgetOptions);
  populateSelect(controls.distance, distanceOptions);
  populateSelect(controls.access, accessOptions);
  populateSelect(controls.open, openOptions);

  controls.start.value = filters.start;
  controls.category.value = filters.category;
  controls.budget.value = filters.budget;
  controls.distance.value = filters.distance;
  controls.access.value = filters.access;
  controls.open.value = filters.open;

  bindControls();
  renderApp();
}

initialise();
