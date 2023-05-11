const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/red-envelpoe",
    component: () => import("pages/RedEnvelope.vue"),
  },
  {
    path: "/dialog",
    component: () => import("pages/DialogDemo.vue"),
  },
  {
    path: "/bottom-sheet",
    component: () => import("pages/BottomSheet.vue"),
  },
  {
    path: "/listItem",
    component: () => import("pages/ListItem.vue"),
  },
  {
    path: "/fromcomponents",
    component: () => import("pages/FromComponents.vue"),
  },
  {
    path: "/mai",
    component: () => import("pages/MaiPage.vue"),
  },
  {
    path: "/vant",
    component: () => import("pages/VantBar.vue"),
  },
  {
    path: "/setting",
    component: () => import("pages/SettingPage.vue"),
  },
  {
    path: "/home",
    component: () => import("pages/HomePage.vue"),
  },
  {
    path: "/jiangl",
    component: () => import("pages/JianglPage.vue"),
  },
  {
    path: "/shop",
    component: () => import("pages/ShopPage.vue"),
  },
  {
    path: "/my",
    component: () => import("pages/MyPage.vue"),
  },
  {
    path: "/mcdonald",
    component: () => import("pages/McDonald.vue"),
  },
  {
    path: "/Echart",
    component: () => import("pages/EchartList.vue"),
  },
  {
    path: "/Web",
    component: () => import("pages/MakeWeb.vue"),
  },
  {
    path: "/J",
    component: () => import("pages/JeepPlus.vue"),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
