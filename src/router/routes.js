const routes = [
  {
    path: "/",
    component: () => import("layouts/LoginLayout.vue"),
    children: [{ path: "", component: () => import("pages/LoginPage.vue") }],
  },
  {
    path: "/register",
    component: () => import("layouts/LoginLayout.vue"),
    children: [{ path: "", component: () => import("pages/RegisterPage.vue") }],
  },
  {
    path: "/dashboard-user",
    component: () => import("layouts/UserLayout.vue"),
    children: [
      { path: "", component: () => import("pages/UserPage.vue") },
    ],
  },
  {
    path: "/form-laporan",
    component: () => import("layouts/UserLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/CreateLaporan.vue") },
    ],
  },
  {
    path: "/laporan-user",
    component: () => import("layouts/UserLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/LaporanUser.vue") },
    ],
  },
  {
    path: "/dashboard-admin",
    component: () => import("layouts/AdminLayout.vue"),
    children: [
      { path: "", component: () => import("pages/AdminPage.vue") },
    ],
  },
  {
    path: "/akun-admin",
    component: () => import("layouts/AdminLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/AdminAkun.vue"),
      },
    ],
  },
  {
    path: "/user-active",
    component: () => import("layouts/AdminLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/UserActive.vue"),
      },
    ],
  },
  {
    path: "/user-pending",
    component: () => import("layouts/AdminLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/UserPend.vue"),
      },
    ],
  },
  {
    path: "/skpd",
    component: () => import("layouts/AdminLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/SkpdPage.vue"),
      },
    ],
  },
  {
    path: "/jenis-laporan",
    component: () => import("layouts/AdminLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/JenisLaporan.vue"),
      },
    ],
  },
  {
    path: "/laporan-admin",
    component: () => import("layouts/AdminLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/LaporanAdmin.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
