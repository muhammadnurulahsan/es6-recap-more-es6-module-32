class TeamMember {
  name;
  address = "BD";
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
}

class SupportInstructor extends TeamMember {
  groupSupportTime;
  designation = "support web dev";
  constructor(name, address, time) {
    super(name, address, time);
    this.groupSupportTime = time;
  }
  startSessions() {
    console.log(this.name, "start a support session");
  }
}

class StudentCare extends TeamMember {
  designation = "Student Care web dev";
  buildARouting(student) {
    console.log(this.name, "Build A Routing for", student);
  }
}

class NeptuneDev extends TeamMember {
  codeEditor;
  designation = "Neptune web dev";
  constructor(name, address, editor) {
    super(name, address);
    this.codeEditor = editor;
  }
  releaseApp(version) {
    console.log(this.name, "release neptune app", version);
  }
}

const nurul = new SupportInstructor("nurul", "BD", 11);
const ahsan = new SupportInstructor("Ahsan", "BD", 4);
const muhammad = new SupportInstructor("muhammad", "BD", 45);
const salman = new SupportInstructor("Salman", "Dubai", 9);
console.log(nurul, ahsan, muhammad, salman);
const alia = new StudentCare("Alia Bhatt", "Mumbai");
console.log(alia);
const Rifat = new NeptuneDev("Rifat", "Dhaka", "Android Studio");

console.log(salman);
ahsan.startSessions();
salman.startSessions();
Rifat.releaseApp("12.54");
console.log(Rifat);
