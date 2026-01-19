export default defineEventHandler(async (event) => {
  const params = event.context.params;

  console.log("PARAMS:", params);

  const { brand, limit } = params!;

  const query = getQuery(event);

  return await $fetch(
    `https://admindash.comcitybd.com/api/brands/${brand}/${limit}`,
    {
      query,
      headers: {
        Accept: "application/json",
      },
    },
  );
});
