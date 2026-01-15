export default defineEventHandler(async (event) => {
  const rawPath = event.context.params?.path;

  const path = Array.isArray(rawPath) ? rawPath.join("/") : rawPath;

  const query = getQuery(event);

  return await $fetch(`https://admindash.comcitybd.com/api/brands/${path}`, {
    query,
    headers: {
      Accept: "application/json",
      "User-Agent": "NuxtServer",
    },
  });
});
