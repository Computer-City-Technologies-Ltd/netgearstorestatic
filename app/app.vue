<script setup>
useHead({
  link: [
    {
      rel: "icon",
      type: "image/ico",
      href: "/assets/images/favicon.ico",
    },
    { rel: "stylesheet", href: "/assets/css/site.css" },
  ],
});

useSeoMeta({
  title: "Netgear Bangladesh | Official Routers, Orbi Mesh & Switches",
  description:
    "Shop genuine Netgear routers, Orbi Mesh systems, and Nighthawk gaming routers at the best prices in Bangladesh. Official warranty, expert support, and fast delivery in Dhaka & across BD.",
  ogTitle: "Netgear Bangladesh",
  ogDescription:
    "Shop genuine Netgear routers, Orbi Mesh systems, and Nighthawk gaming routers at the best prices in Bangladesh. Official warranty, expert support, and fast delivery in Dhaka & across BD.",
  ogType: "website",
  ogImage: "/assets/images/cover.jpg",
  twitterCard: "summary_large_image",
  twitterTitle: "Netgear Bangladesh | Official Routers, Orbi Mesh & Switches",
  twitterDescription:
    "Shop genuine Netgear routers, Orbi Mesh systems, and Nighthawk gaming routers at the best prices in Bangladesh. Official warranty, expert support, and fast delivery in Dhaka & across BD.",
  twitterImage: "/assets/images/cover.jpg",
});
</script>
<template>
  <Navbar />
  <NuxtPage />
  <Footer />
</template>
