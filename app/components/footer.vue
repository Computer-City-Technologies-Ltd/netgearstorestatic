<script setup>
const cares = [
  { title: "Contact Us", link: "/contact" },
  { title: "Site Map", link: "/sitemap.xml" },
];

const companys = [
  { title: "About Netgear Store", link: "/about" },
  { title: "Privacy Policy", link: "/policy" },
  { title: "Terms & Conditions", link: "/terms" },
  { title: "Cookies Policy", link: "/cookie" },
];
</script>

<template>
  <footer class="bg-gray-900 text-gray-300">
    <div
      class="max-w-7xl mx-auto py-12 grid grid-cols-1 md:grid-cols-4 gap-8 px-6"
    >
      <div>
        <h3 class="text-xl font-bold text-white mb-4">Customer Care</h3>
        <ul class="space-y-2">
          <li v-for="menu in cares" :key="menu.title">
            <template v-if="menu.link != '/sitemap.xml'">
              <NuxtLink
                :to="menu.link"
                :aria-label="menu.title"
                class="hover:text-white transition"
              >
                {{ menu.title }}
              </NuxtLink>
            </template>
            <template v-else>
              <a
                :href="menu.link"
                aria-label="Site Maps"
                class="hover:text-white transition"
              >
                {{ menu.title }}
              </a>
            </template>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-bold text-white mb-4">COMPANY</h3>
        <ul class="space-y-2">
          <li v-for="menu in companys" :key="menu.title">
            <NuxtLink
              :to="menu.link"
              :aria-label="menu.title"
              class="hover:text-white transition"
            >
              {{ menu.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div>
        <div class="py-4 text-left text-sm text-gray-200">
          <p class="pb-6">
            <a href="mailto:info@netgearstore.com.bd" aria-label="Contact">
              info@netgearstore.com.bd
            </a>
          </p>
          <p class="text-gray-100 leading-7">
            Netgear Store Bangladesh, 75-76, Mirpur Road, Room-106, BS Bhavan,
            Fifth Floor. Dhaka
          </p>
          <div class="flex gap-2 pt-4">
            <svg
              class="bg-gray-100 w-8 h-8 rounded-full border"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="-337 273 123.5 256"
              xml:space="preserve"
            >
              <path
                d="M-260.9,327.8c0-10.3,9.2-14,19.5-14c10.3,0,21.3,3.2,21.3,3.2l6.6-39.2c0,0-14-4.8-47.4-4.8c-20.5,0-32.4,7.8-41.1,19.3
                  c-8.2,10.9-8.5,28.4-8.5,39.7v25.7H-337V396h26.5v133h49.6V396h39.3l2.9-38.3h-42.2V327.8z"
              />
            </svg>

            <svg
              class="bg-gray-100 w-8 h-8 rounded-full border"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="-143 145 512 512"
              xml:space="preserve"
            >
              <g>
                <polygon points="78.9,450.3 162.7,401.1 78.9,351.9 	" />
                <path
                  d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M241,446.8L241,446.8
                    c0,44.1-44.1,44.1-44.1,44.1H29.1c-44.1,0-44.1-44.1-44.1-44.1v-91.5c0-44.1,44.1-44.1,44.1-44.1h167.8c44.1,0,44.1,44.1,44.1,44.1
                    V446.8z"
                />
              </g>
            </svg>

            <svg
              class="bg-gray-900 w-8 h-8 rounded-full border"
              viewBox="0 0 1200 1227"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div
      class="border-t border-gray-600 mt-5 py-4 text-center text-sm text-gray-100"
    >
      Copyright © 2025 Netgear Bangladesh
    </div>
  </footer>
</template>
