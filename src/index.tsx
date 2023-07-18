// class Ride {
//   private static _activeRides: number = 0;
//   start() {
//     Ride._activeRides++;
//   }
//   stop() {
//     Ride._activeRides--;
//   }

//   static get activeRides() {
//     return Ride._activeRides;
//   }
// }

// let ride1 = new Ride();
// let ride2 = new Ride();
// ride1.start();
// ride2.start();

// console.log(Ride.activeRides);

class Person {
  constructor(public firstName: string, public lastName: string) {}

  walk() {
    console.log("Walk");
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Studen extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log("Taking a test");
  }
}

class Teacher extends Person {
  override get fullName(): string {
    return `Professor ${super.fullName}`;
  }
}

let teacher = new Teacher("Mahmoud", "Ansari");

console.log(teacher.fullName);
