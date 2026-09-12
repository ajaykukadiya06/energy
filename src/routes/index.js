export const routes = {
  home: "/",
  product: "/product",
  benefits: "/benefits",
  projects: "/projects",
  order: "/order",
  contact: "/contact",
  dashboard: "/dashboard",
  dashboardMatrix: "/dashboard/matrix",
  dashboardMicrogrid: "/dashboard/microgrid",
  dashboardWeather: "/dashboard/weather",
  dashboardAnalytics: "/dashboard/analytics",
  dashboardControls: "/dashboard/controls",
};

export const navigationRoutes = [
  { href: routes.home, label: "Home" },
  { href: routes.product, label: "Product" },
  { href: routes.benefits, label: "Benefits" },
  { href: routes.projects, label: "Projects" },
  { href: routes.order, label: "Order" },
  { href: routes.contact, label: "Contact" },
];
