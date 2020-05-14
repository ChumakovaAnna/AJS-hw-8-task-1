import Daemon from "./types/daemon";
import Magician from "./types/magician";
import Undead from "./types/undead";
import Team from "./team";

console.log("worked");

const daemon = new Daemon("Olga");
const magician = new Magician("Vlad");
const undead = new Undead("Sunny");

const group = new Team();
group.addAll(magician, undead, daemon);
const arr = group.toArray();
console.log(arr);
