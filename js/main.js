var map = L.map("map", { scrollWheelZoom: false }).setView(
  [42.37935631955693, 21.135963500000003],
  13
);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 30,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
var marker = L.marker([42.3793985817877, 21.135877760273704]).addTo(map);
