export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(char) {
    if (this.members.has(char)) {
      throw new Error("Этот персонаж уже выбран");
    }
    this.members.add(char);
  }

  addAll(...rest) {
    rest.forEach((ele) => {
      this.members.add(ele);
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}
