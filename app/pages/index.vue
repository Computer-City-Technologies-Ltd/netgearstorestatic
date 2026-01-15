<script setup>
useSeoMeta({
  title: "Home",
  description:
    "Shop genuine Netgear routers, Orbi Mesh systems, and Nighthawk gaming routers at the best prices in Bangladesh. Official warranty, expert support, and fast delivery in Dhaka & across BD.",
  ogTitle: "Home - Netgear Store Bangladesh",
  ogDescription:
    "Shop genuine Netgear routers, Orbi Mesh systems, and Nighthawk gaming routers at the best prices in Bangladesh. Official warranty, expert support, and fast delivery in Dhaka & across BD.",
  ogType: "website",
});
</script>

<template>
  <!-- Hero Section -->
  <section class="text-gray-600 body-font">
    <div
      class="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0"
    >
      <div
        class="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0"
      >
        <svg
          class="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z"></path>
        </svg>
        <NuxtImg
          class="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://assets.netgear.com/transform/content-card-desktop/f12d805c-3677-4e75-a810-3f64dab360f7/NGEnterprise_desktop"
          alt="Netgear Enterprise"
        />
      </div>
      <div
        class="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl"
      >
        <div class="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <h2
            class="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none Outfit"
          >
            Netgear <br class="hidden md:block" />
            <span class="text-[#1cb9a0]">Store </span>
            <span class="inline-block text-[#1cb9a0]"> Bangladesh</span>
          </h2>
          <p
            class="pr-5 mb-5 text-base text-gray-900 dark:text-black md:text-lg"
          >
            At NETGEAR Enterprise, we deliver performance that goes beyond
            expectations. From enterprise-grade corporate networks to dynamic AV
            environments, our all-in-one solutions provide the reliability,
            scalability, and affordability professionals depend on.
          </p>
          <div class="flex items-center">
            <a
              href="/about"
              aria-label="About"
              class="inline-flex items-center font-semibold text-[#1cb9a0] transition-colors duration-200 hover:text-gray-800 p-4 border rounded-xl font-bold"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- brand part -->
  <section class="py-10 bg-white">
    <div class="flex flex-wrap justify-center items-center gap-8">
      <NuxtImg class="w-128" src="/assets/images/logo1.png" alt="Logo 1" />
      <NuxtImg class="w-128" src="/assets/images/logo2.png" alt="Logo 2" />
      <NuxtImg class="w-128" src="/assets/images/logo3.png" alt="Logo 3" />
      <NuxtImg class="w-128" src="/assets/images/logo4.png" alt="Logo 4" />
      <NuxtImg class="w-128" src="/assets/images/logo5.png" alt="Logo 5" />
    </div>
  </section>

  <!-- Show Case Section -->
  <section class="py-16 bg-gray-100">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Main 2 Columns -->
      <div class="grid md:grid-cols-2 gap-12">
        <!-- Left Column : Image -->
        <div>
          <NuxtImg
            src="/assets/images/Pasted_image.png"
            alt="Left Image"
            class="w-full h-[450px] object-cover rounded-xl"
          />
        </div>

        <!-- Right Column -->
        <div class="grid grid-rows-[auto_1fr] gap-8">
          <!-- Row 1 : Title + Button -->
          <div>
            <h2 class="text-4xl font-extrabold mb-4 text-[#1cb9a0]">
              Smarter Networking <br />
              <span class="text-gray-600"> for Small and Medium </span>
              <span class="text-[#1cb9a0]"> Enterprises </span>
            </h2>
            <p class="text-gray-600 text-sm leading-relaxed py-4">
              At NETGEAR Enterprise, we deliver performance that goes beyond
              expectations. From enterprise-grade corporate networks to dynamic
              AV environments, our all-in-one solutions provide the reliability,
              scalability, and affordability professionals depend on.
            </p>

            <NuxtLink
              to="/about"
              aria-label="About"
              class="bg-[#1e94fc] hover:bg-sky-500 text-white px-6 py-3 font-semibold rounded-xl transition"
            >
              Learn More
            </NuxtLink>
          </div>

          <!-- Row 2 : Text -->
          <div class="space-y-2">
            <div class="flex items-start gap-3 border-t border-gray-300 py-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 flex-shrink-0 text-[#1cb9a0]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                />
              </svg>
              <div>
                <h4 class="text-md font-semibold text-[#1cb9a0]">
                  NETGEAR Enterprise
                </h4>
                <ul class="pt-4 list-disc">
                  <li>Enterprise-grade networking at SME-friendly pricing</li>
                  <li>Easy deployment and remote management</li>
                  <li>Scalable solutions for growing businesses</li>
                </ul>
              </div>
            </div>
            <div class="flex items-start gap-3 border-t border-gray-300 py-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 flex-shrink-0 text-[#1cb9a0]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                />
              </svg>
              <div>
                <h4 class="text-md font-semibold text-[#1cb9a0]">NETGEAR AV</h4>

                <ul class="pt-4 list-disc">
                  <li>Purpose-built for AV over IP</li>
                  <li>Pre-configured for broadcast and AV applications</li>
                  <li>High performance and low latency</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Customer Service Chatbot -->
  <section class="pt-12 py-10 bg-gray-50 sm:pt-16">
    <div class="px-4 mx-auto max-w-7xl">
      <div class="text-center">
        <p
          class="max-w-4xl mx-auto mb-4 text-4xl font-bold leading-tight sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight"
        >
          Connected <span class="text-blue-600">Home</span>
        </p>
        <h1 class="max-w-2xl mx-auto px-6 text-lg text-gray-600 font-inter">
          Every day, millions trust NETGEAR to power their digital lives - for
          flawless streaming, faster gaming, smarter homes, and crystal-clear
          video calls. With exceptional WiFi performance, advanced security,
          privacy, and connectivity for homes of every shape and size, NETGEAR
          makes it easy to choose the right solution for your needs.
        </h1>
        <div
          class="px-8 sm:items-start sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9"
        >
          <NuxtLink
            to="/categories"
            role="button"
            class="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-gray-900 hover:text-white transition-all duration-200 bg-gray-100 border-2 border-gray-900 sm:w-auto rounded-xl hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          >
            Book a demo
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>

  <!-- Photo Section -->
  <section class="py-16 bg-gray-100">
    <div class="container mx-auto grid gap-6">
      <!-- Top Row: 2 large images -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-2">
        <div>
          <NuxtImg
            src="/assets/images/Wifi_ContentCard.webp"
            alt="Image 1"
            class="w-full h-64 object-cover rounded-lg"
          />
          <h3 class="text-center text-xl font-fold py-6">
            Experience the most powerful & advanced Orbi
          </h3>
          <p>
            Orbi mesh systems create a seamless WiFi network with consistent,
            high-speed performance for larger homes and spaces.
          </p>
        </div>
        <div>
          <NuxtImg
            src="/assets/images/RS-contentCard.webp"
            alt="Image 2"
            class="w-full h-64 object-cover rounded-lg"
          />
          <h3 class="text-center text-xl font-fold py-6">
            WiFi 7 power. Nighthawk performance.
          </h3>
          <p>
            Every home deserves legendary WiFi performance. Now there’s a
            Nighthawk router that’s just right for you.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Customer Service Chatbot -->
  <section class="pt-12 py-10 bg-gray-50 sm:pt-16">
    <div class="px-4 mx-auto max-w-7xl">
      <div class="text-center">
        <p
          class="max-w-4xl mx-auto mb-4 text-4xl font-bold leading-tight text-[#1cb9a0] sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight"
        >
          Netgear Store Bangladesh
        </p>
        <h1 class="max-w-5xl mx-auto px-6 text-lg text-gray-600 font-inter">
          Welcome to the Official NETGEAR Store in Bangladesh. FREE SHIPPING
          ACROSS BANGLADESH. Upgrade your online experience with latest products
          from NETGEAR. Get official NETGEAR warranty and professional
          installation service at a great price. Search for the latest home and
          business solutions products available in Bangladesh directly from
          NETGEAR, backed by NETGEAR’s highly acclaimed warranty policy. Get
          detailed information about products and professional assistance to
          choose the right product for you. Shop now!
        </h1>
      </div>
    </div>
  </section>

  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap w-full mb-20">
        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1
            class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
          >
            Thank you for your service
          </h1>
          <div class="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
        <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
          Thank you for choosing Netgear. We truly appreciate your trust in our
          products and the opportunity to be part of your connected world. At
          Netgear, we are committed to delivering reliable performance,
          innovative technology, and dependable support to keep you connected at
          home and at work. Your satisfaction and feedback drive us to
          continually improve and serve you better.
        </p>
      </div>
      <div class="flex flex-wrap -m-4">
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-100 p-6 rounded-lg">
            <NuxtImg
              class="h-40 rounded w-full object-cover object-center mb-6"
              src="/assets/images/f1.webp"
              alt="content"
            />

            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
              First Responders
            </h2>
            <p class="leading-relaxed text-base">
              Reliable, always-on connectivity for all emergencies
            </p>
          </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-100 p-6 rounded-lg">
            <NuxtImg
              class="h-40 rounded w-full object-cover object-center mb-6"
              src="/assets/images/f2.webp"
              alt="content"
            />
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
              Education
            </h2>
            <p class="leading-relaxed text-base">
              Netgear products support reliable education networks.
            </p>
          </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-100 p-6 rounded-lg">
            <NuxtImg
              class="h-40 rounded w-full object-cover object-center mb-6"
              src="/assets/images/f3.webp"
              alt="content"
            />
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
              Healthcare
            </h2>
            <p class="leading-relaxed text-base">
              Netgear products support reliable healthcare networks.
            </p>
          </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-100 p-6 rounded-lg">
            <NuxtImg
              class="h-40 rounded w-full object-cover object-center mb-6"
              src="/assets/images/f4.webp"
              alt="content"
            />
            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
              Gov/Military
            </h2>
            <p class="leading-relaxed text-base">
              We offer product discounts for military personnel.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
