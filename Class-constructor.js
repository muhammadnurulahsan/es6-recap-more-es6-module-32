class SupportInstructor {
  name;
  designation = "support web dev";
  address = "BD";
  constructor(name,address) {
      this.name = name;
      this.address = address;
  }
  startSessions() {
    console.log(this.name, "start a support session");
  }
}

const nurul = new SupportInstructor("nurul","BD");
const ahsan = new SupportInstructor("Ahsan","BD");
const muhammad = new SupportInstructor("muhammad","BD");
const salman = new SupportInstructor("Salman","Dubai");
ahsan.startSessions();
salman.startSessions();
console.log(nurul,ahsan,muhammad,salman);
// console.log(salman);
