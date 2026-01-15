export default defineEventHandler((event) => {
  return {
    menus: [
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
    ],
  };
});
