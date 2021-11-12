function Employee () {
    this.name = "";
    this.dept = "general";
    console.log(this,1)
  }

  function Manager() {
    Employee.call(this);
    this.reports = [];
    console.log(this,2)
  }
  Manager.prototype = Object.create(Employee.prototype);
  


  function WorkerBee() {
    Employee.call(this);
    this.projects = [];
    console.log(this,3)
  }
  WorkerBee.prototype = Object.create(Employee.prototype);
  function SalesPerson() {
    WorkerBee.call(this);
    this.dept = 'sales';
    this.quota = 100;
 }
 SalesPerson.prototype = Object.create(WorkerBee.prototype);
 
 function Engineer() {
    WorkerBee.call(this);
    this.dept = 'engineering';
    this.machine = '';
 }
 Engineer.prototype = Object.create(WorkerBee.prototype);

 console.log(SalesPerson.prototype.prototype=== Manager.prototype,0);
//   const a = new Employee();
//   const b = new WorkerBee();
//   const c = new Engineer();
//   b.dept = "asdw";
// console.log(a.dept)
// console.log(b.dept)
var chris = new Engineer("Pigman, Chris", ["jsd"], "fiji");
console.log(chris.__proto__ == Engineer.prototype,
  chris.__proto__.__proto__ == WorkerBee.prototype,
  chris.__proto__.__proto__.__proto__ == Employee.prototype,
  chris.__proto__.__proto__.__proto__.__proto__ == Object.prototype,
  chris.__proto__.__proto__.__proto__.__proto__.__proto__ == null
  )