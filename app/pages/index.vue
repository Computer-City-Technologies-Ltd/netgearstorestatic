<script setup>
useSeoMeta({
  title: "Home",
  description:
    "Shop genuine Netgear routers, Orbi Mesh systems, and Nighthawk gaming routers at the best prices in Bangladesh. Official warranty, expert support, and fast delivery in Dhaka & across BD.",
  ogTitle: "Home - Netgear Bangladesh",
  ogDescription:
    "Shop genuine Netgear routers, Orbi Mesh systems, and Nighthawk gaming routers at the best prices in Bangladesh. Official warranty, expert support, and fast delivery in Dhaka & across BD.",
  ogType: "website",
});

const photos = [
  {
    image: "/assets/images/enterprisae_image.webp",
    name: "Enterprise",
  },
  {
    image: "/assets/images/av_image.webp",
    name: "AV",
  },
  {
    image: "/assets/images/Wifi_image.webp",
    name: "WIFI",
  },
];
</script>

<template>
  <!-- hero section -->
  <section class="bg-gray-50 py-20 px-6 text-center">
    <!-- Hero Text -->
    <div class="max-w-4xl mx-auto mb-16 text-center">
      <h1 class="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
        <span class="block text-6xl md:text-7xl font-black text-gray-900"
          >Powering</span
        >
        <span class="text-4xl md:text-5xl font-extrabold text-[#1CB9A0] mt-2">
          Extraordinary Experiences,
          <span class="text-gray-900">Everywhere</span>
        </span>
      </h1>
    </div>

    <!-- banner image -->
    <div
      class="container mx-auto flex flex-col md:flex-row items-stretch justify-center gap-5 py-10"
    >
      <div
        v-for="data in photos"
        class="relative flex md:flex-1 aspect-[1.08/1] overflow-hidden sm:[clip-path:polygon(40%_0,_100%_0,_60%_100%,_0_100%)] md:[clip-path:polygon(40%_0,_100%_0,_60%_100%,_0%_100%)] [&:not(:first-child)]:ml-[-13%]"
      >
        <div data-dj="true" class="w-full h-full">
          <a
            class="flex-1 cursor-pointer text-inherit no-underline outline-none outline-2 outline-transparent outline-offset-2 transition duration-150 ease-out"
            href="#"
          >
            <img
              :alt="data.name"
              :src="data.image"
              class="block w-full h-full hover:scale-105 object-cover brightness-50 hover:brightness-100 transition-[filter,transform] duration-[200ms,750ms] ease-in-out origin-center will-change-[transform,filter] [backface-visibility:hidden] [transform:translateZ(0)]"
            />
            <div
              class="absolute left-[50%] top-[50%] z-[2] -translate-x-1/2 -translate-y-1/2"
            >
              <p class="chakra-text css-1vxj0b9">
                <span
                  class="text-white font-bold p-2 rounded-lg text-3xl css-1vxj0b9"
                >
                  {{ data.name }}
                </span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- two column section -->
  <section class="bg-gray-800 py-24 px-6 text-white">
    <!-- Section Title -->
    <div class="mx-auto mb-20 text-center">
      <h2 class="text-5xl sm:text-6xl font-extrabold mb-8">NETGEAR</h2>
      <h2 class="text-5xl sm:text-6xl font-extrabold mb-4">
        <span class="text-[#1CB9A0]">Smarter Networking</span> for Small and
        Medium <span class="text-[#1CB9A0]">Enterprises</span>
      </h2>
      <p class="text-white leading-[1.5rem] px-10 mx-auto tracking-[0.5px]">
        At NETGEAR Enterprise, we deliver performance that goes beyond
        expectations. From enterprise-grade corporate networks to dynamic AV
        environments, our all-in-one solutions provide the reliability,
        scalability, and affordability professionals depend on.
      </p>
    </div>

    <!-- Two Large Columns -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 px-10 mx-auto">
      <!-- Column 1 -->
      <div class="flex flex-col overflow-hidden group">
        <!-- Image -->
        <img
          src="/assets/images/NGEnterprise_desktop1.webp"
          alt="orbi"
          class="w-full"
        />

        <!-- Text & Button below image -->
        <div class="p-6 text-left">
          <h3 class="text-3xl font-bold mb-2">NETGEAR Enterprise</h3>
          <div class="text-gray-300 mb-10">
            <ul class="list-disc list-outside pl-6 space-y-2 text-gray-300">
              <li>Enterprise-grade networking at SME-friendly pricing</li>
              <li>Easy deployment and remote management</li>
              <li>Scalable solutions for growing businesses</li>
            </ul>
          </div>
          <NuxtLink
            to="/products/switch"
            class="bg-[#1CB9A0] hover:bg-[#1CA0A0] text-white font-bold py-4 px-6 rounded transition mt-10"
          >
            Learn More
          </NuxtLink>
        </div>
      </div>

      <!-- Column 2 -->
      <div class="flex flex-col overflow-hidden group">
        <!-- Image -->
        <img
          src="/assets/images/NGAV_desktop.webp"
          alt="Feature 1"
          class="w-full"
        />

        <!-- Text & Button below image -->
        <div class="p-6 text-left">
          <h3 class="text-3xl font-bold mb-2">NETGEAR AV</h3>
          <div class="text-gray-300 mb-10">
            <ul class="list-disc list-outside pl-6 space-y-2 text-gray-300">
              <li>Purpose-built for AV over IP</li>
              <li>Pre-configured for broadcast and AV applications</li>
              <li>High performance and low latency</li>
            </ul>
          </div>
          <NuxtLink
            to="/products/switch"
            class="bg-[#1CB9A0] hover:bg-[#1CA0A0] text-white font-bold py-4 px-6 rounded transition mt-10"
          >
            Learn More
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
