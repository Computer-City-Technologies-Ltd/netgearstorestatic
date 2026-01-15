<script setup>
const menus = [
  { name: "Home", url: "/" },
  {
    name: "Products",
    url: "/categories",
    children: [
      {
        name: "Ethernet Router",
        url: "ethernetrouter",
        thumbnail: "/assets/images/ethernetrouter.avif",
      },
      {
        name: "Wireless Router",
        url: "wirelessrouter",
        thumbnail: "/assets/images/wirelessrouter.avif",
      },
      {
        name: "Access Point",
        url: "accesspoint",
        thumbnail: "/assets/images/accesspoint.avif",
      },
      {
        name: "Switch",
        url: "switch",
        thumbnail: "/assets/images/switch.avif",
      },
      {
        name: "Accessories",
        url: "accessories",
        thumbnail: "/assets/images/accessories.jpg",
      },
    ],
  },

  { name: "Installation Service", url: "/installation" },
  { name: "Knowledge Base", url: "/knowledge" },
  { name: "Contact", url: "/contact" },
];

useSeoMeta({
  title: "Product Categories",
  ogTitle: "Contact Us",
  description:
    "Shop genuine Netgear routers and Orbi Mesh systems at the best prices in Bangladesh. Enjoy official warranty and fast delivery in Dhaka. Upgrade your WiFi today",
  ogDescription:
    "Shop genuine Netgear routers and Orbi Mesh systems at the best prices in Bangladesh. Enjoy official warranty and fast delivery in Dhaka. Upgrade your WiFi today",
  ogType: "website",
});
</script>

<template>
  <div class="container py-12 mx-auto p-4">
    <section>
      <Breadcrumb class="pb-6" />
      <div
        class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <NuxtLink
          v-for="product in menus[1].children"
          :to="`/products/${product.url}`"
          :aria-label="product.name"
          class="bg-gray-100 rounded-lg shadow transform duration-300 hover:-translate-y-2 cursor-pointer"
        >
          <div class="w-full h-80 overflow-hidden bg-white">
            <NuxtImg
              :src="product.thumbnail"
              :alt="product.name"
              class="w-full h-full"
            />
          </div>
          <div class="p-4 text-left">
            <h1 class="text-sm font-bold my-4">{{ product.name }}</h1>
          </div>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
