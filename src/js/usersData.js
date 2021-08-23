import InNeed from "./modules/InNeed";
import Helper from "./modules/Helper";

let description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
    esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

let usersInNeed = [];
let helpers = [];

//Add samples for each category of users
usersInNeed.push(new InNeed("Lucca", "Williamson", 65,
    {
        city: "Košice",
        street: "Jedlíkova",
        buildingNumber: "13",
        position: undefined
    }, description)
);

usersInNeed.push(new InNeed("John", "Doe", 59,
    {
        city: "Košice",
        street: "Grešákova",
        buildingNumber: "1",
        position: undefined
    }, description)
);

usersInNeed.push(new InNeed("Anais", "Fernandez", 78,
    {
        city: "Košice",
        street: "Letná",
        buildingNumber: "9",
        position: undefined
    }, description)
);

helpers.push(new Helper("John", "Doe", 59, 6,
{
    city: "Košice",
    street: "Grešákova",
    buildingNumber: "19",
    position: undefined
}, 4.6, description));

helpers.push(new Helper("Lucca", "Williamson", 65, 6,
{
    city: "Košice",
    street: "Palackého",
    buildingNumber: "1428/14",
    position: undefined
}, 4.2, description));

helpers.push(new Helper("Anais", "Fernandez", 78, 9,
{
    city: "Košice",
    street: "Letná",
    buildingNumber: "25",
    position: undefined
}, 3.5, description));

export {usersInNeed, helpers};