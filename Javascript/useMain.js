class User {
  constructor(city, firstName, dept) {
    this.city = city;
    this.firstName = firstName;
    this.dept = dept;
  }

  getUserInfo() {
    return [this.city, this.firstName, this.dept];
  }

  getDept() {
    if (this.dept === "IT") {
      return this.dept;
    } else {
      return "Not IT";
    }
  }
}
export default User;
