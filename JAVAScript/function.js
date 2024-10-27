let cap = {
  name: "steve",
  sayHi: function () {
    console.log("binding Hi From", this.name);
    const imInner = () => {
      console.log("binding Hi From 53 ", this.name);
    };
    imInner();
  },
};

let cap1 = {
  name: "aby",
};

//cap.sayHi();
let sayHiadd = cap.sayHi.bind(cap1); //cap1 is pointing to cap
sayHiadd();

let calling = {
  name: "steve",
  sayHi: function (a, b) {
    console.log("calling Hi From", this.name, " params ", a, b);
    const imInner = () => {
      console.log("calling Hi From 53 ", this.name, " params ", this.a, this.b);
    };
    imInner();
  },
};

calling.sayHi.call(calling, 7, 6);

let applying = {
  name: "steve",
  sayHi: function (a, b) {
    console.log("applying Hi From", this.name, " params ", a, b);
    const imInner = () => {
      console.log(
        "applying Hi From 53 ",
        this.name,
        " params ",
        this.a,
        this.b
      );
    };
    imInner();
  },
};

applying.sayHi.apply(applying, [1, 2]);

function standaloneFuntion() {
  console.log("stand alone function ", this.name);
}

const standAlone = standaloneFuntion.bind(cap);
standAlone();
