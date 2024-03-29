// brands

$(".brands").owlCarousel({
  loop: true,
  margin: 16,
  dots: false,
  nav: true,
  navText: [
    "<i class='fas fa-chevron-left'></i>",
    "<i class='fas fa-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 3,
    },
    1440: {
      items: 4,
    },
  },
});

// brands dropdown

$(".brands-dropdown").owlCarousel({
  loop: true,
  margin: 16,
  dots: false,
  nav: true,
  navText: [
    "<i class='fas fa-chevron-left'></i>",
    "<i class='fas fa-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1440: {
      items: 3,
    },
  },
});

// prodcuts

$(".products").owlCarousel({
  loop: true,
  margin: 20,
  dots: false,
  nav: true,
  navText: [
    "<i class='fas fa-chevron-left'></i>",
    "<i class='fas fa-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 3,
    },
    992: {
      items: 4,
    },
    1440: {
      items: 6,
    },
  },
});

// dropdown products

$(".dropdown-products").owlCarousel({
  loop: true,
  margin: 20,
  dots: false,
  nav: true,
  navText: [
    "<i class='fas fa-chevron-left'></i>",
    "<i class='fas fa-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1440: {
      items: 3,
    },
  },
});

// news
$(".news").owlCarousel({
  loop: true,
  // margin: 20,
  nav: true,
  autoHeight: true,
  navText: [
    "<i class='fas fa-chevron-left'></i>",
    "<i class='fas fa-chevron-right'></i>",
  ],
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1440: {
      items: 3,
    },
  },
});

// categories

$(".categories").owlCarousel({
  // loop: true,
  margin: 10,
  nav: true,
  dots: false,
  navText: [
    "<i class='fas fa-chevron-left'></i>",
    "<i class='fas fa-chevron-right'></i>",
  ],
  responsive: {
    0: {
      items: 3,
    },
    576: {
      items: 4,
    },
    768: {
      items: 5,
    },
    900: {
      items: 6,
    },
    1325: {
      items: 11,
    },
  },
});
