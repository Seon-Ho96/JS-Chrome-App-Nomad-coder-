//Object
const player = {
    name: "seonho",
    points: 10,
    fat: false,
};
console.log(player); //console -> object
console.log(player.name);
console.log(player["name"]);
player.fat = true;
player.lastName = "Lee"; //요소 추가
console.log(player);
