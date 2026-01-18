<script setup>
const router = useRouter();
const { data } = await useFetch("/api/menus");

const mobileOpen = ref(false);

const open = () => {
  mobileOpen.value = true;
};

const close = () => {
  mobileOpen.value = false;
};
const searchdata = {
  search: "",
};
const submitForm = async () => {
  console.log(searchdata.search);
  router.push({
    path: "/search",
    query: { q: searchdata.search },
  });
};
</script>

<template>
  <nav class="relative">
    <!-- Main Navbar Content -->
    <div class="relative px-4 sm:px-8 py-4 bg-white font-bold border-b-2">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center space-x-3 group">
          <div class="relative">
            <NuxtLink to="/" aria-label="Home">
              <svg
                width="165"
                height="24"
                viewBox="0 0 165 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M162.486 7.68346C162.486 2.89146 158.947 0.768005 154.288 0.768005H144.737V23.2423H150.87V14.5989H151.308L156.901 23.2423H164.363L157.325 14.0343C158.8 13.8271 160.146 13.0612 161.1 11.8866C162.055 10.712 162.549 9.21326 162.486 7.68346ZM152.448 10.8411H150.871V5.24108H152.628C154.642 5.24108 156.349 5.59428 156.349 8.04228C156.349 10.4903 154.462 10.8389 152.449 10.8389"
                  fill="black"
                />
                <path
                  d="M125.563 0.770325L117.315 23.2447H123.658L125.004 19.1075H133.199L134.548 23.2447H140.885L132.642 0.770325H125.563ZM126.46 14.6378L129.014 6.79209H129.186L131.74 14.6378H126.46Z"
                  fill="black"
                />
                <path
                  d="M98.8898 23.2448H113.849V18.3007H105.029V14.415H113.476V9.47104H105.029V5.71908H113.848V0.768188H98.8887L98.8898 23.2448Z"
                  fill="black"
                />
                <path
                  d="M81.6135 15.2881H86.4457C86.1947 17.8858 84.3353 19.2001 81.6699 19.2001C77.6318 19.2001 75.6176 15.6435 75.6176 12.1567C75.6176 8.7281 77.3534 5.05497 81.4004 5.05497C82.5071 5.02904 83.5938 5.35995 84.5087 6.0014C85.4236 6.64284 86.1206 7.5627 86.5021 8.63212L92.3272 6.30748C90.2915 2.09948 86.5334 0 81.6835 0C74.0738 0 69.2448 4.81604 69.2448 12.1235C69.2448 19.1989 74.2257 24 81.6455 24C85.5981 24 88.892 22.6674 91.2031 19.584C93.3043 16.7806 93.5486 13.9841 93.613 10.6938H81.6189L81.6135 15.2881Z"
                  fill="black"
                />
                <path
                  d="M48.6724 5.72012H54.6093V23.2436H60.8443V5.72012H66.7871V0.769226H48.6724V5.72012Z"
                  fill="black"
                />
                <path
                  d="M29.6158 23.2448H44.5755V18.3007H35.7576V14.415H44.2057V9.47104H35.7554V5.71908H44.5733V0.768188H29.6136L29.6158 23.2448Z"
                  fill="black"
                />
                <path
                  d="M16.3599 14.512H16.2932L6.13476 0.770264H0V23.2457H6.13476V9.47436H6.20363L16.3599 23.2457H22.4936V0.770264H16.3599V14.512Z"
                  fill="black"
                />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <div
            v-for="item in data.menus"
            :key="item.name"
            class="relative group"
          >
            <NuxtLink
              :aria-label="item.name"
              :to="item.url"
              class="flex items-center gap-1 text-md text-gray-900 hover:text-gray-600"
            >
              {{ item.name }}
              <svg
                v-if="item.children"
                class="w-4 h-4 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </NuxtLink>

            <!-- Dropdown -->
            <div
              v-if="item.children"
              class="text-black absolute left-0 top-full mt-3 w-56 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10"
            >
              <NuxtLink
                v-for="child in item.children"
                :key="child.url"
                :aria-label="child.name"
                :to="`/products/${child.url}`"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 z-10"
              >
                {{ child.name }}
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Right Side Buttons -->
        <div class="flex items-center space-x-4">
          <!-- CTA Button (Hidden on smallest screens) -->
          <div class="hidden sm:flex relative group">
            <div class="absolute -inset-0.5"></div>
            <div class="relative flex items-center">
              <form @submit.prevent="submitForm" class="flex items-center ml-4">
                <input
                  v-model="searchdata.search"
                  type="search"
                  placeholder="Search"
                  class="w-45 px-2 py-1 rounded-l-md border border-gray-300 text-sm"
                />
                <button
                  type="submit"
                  class="hidden md:block bg-gray-100 text-white px-2 py-1 rounded-r-md hover:bg-gray-200 transition text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6 text-gray-800"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>

          <!-- Mobile Menu Button -->
          <button
            class="md:hidden relative group"
            aria-label="Toggle mobile menu"
          >
            <div class="absolute -inset-0.5 rounded"></div>
            <div class="relative p-2 bg-gray-900 rounded leading-none">
              <svg
                @click="open"
                v-if="!mobileOpen"
                class="w-6 h-6 text-gray-100 group-hover:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                @click="close"
                v-if="mobileOpen"
                class="w-6 h-6 text-gray-100 group-hover:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>

      <!-- Mobile Menu Dropdown -->
      <div class="relative mt-4 md:hidden" v-if="mobileOpen">
        <div class="px-2 pt-2 pb-3 space-y-1 bg-gray-900 rounded-lg border">
          <NuxtLink
            v-for="item in data.menus"
            :key="item.name"
            :to="item.url"
            :aria-label="item.name"
            @click="close"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-100"
          >
            {{ item.name }}
          </NuxtLink>

          <div class="px-3 py-2">
            <form class="flex items-center">
              <input
                type="text"
                placeholder="Search"
                class="w-45 px-2 py-1 rounded-l-md border border-gray-300 text-sm"
              />
              <button
                type="submit"
                class="bg-gray-100 text-white px-2 py-1 rounded-r-md hover:bg-gray-200 transition text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 text-gray-800"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
