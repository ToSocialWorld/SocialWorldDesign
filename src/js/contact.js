import GMap from "./modules/GMap";

let map = new GMap("Michalovce, Jana Holleho 107", 14, null, "#map");
map.updateMarkers([{address: {
    city: "Michalovce",
    street: "Jana Holleho",
    buildingNumber: 107
}}]);