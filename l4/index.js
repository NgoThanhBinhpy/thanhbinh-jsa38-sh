let HocSinh = ["AN", "Binh", "Chau"];

HocSinh.splice(1, 1, "long", "tai");
console.log(HocSinh);

let fruit = ["apple", "banana", "orange", "apple"];
console.log(fruit.indexOf("apple"));
console.log(fruit.indexOf("banana"));
console.log(fruit.indexOf("grape"));

let person = {
  name: "Alice",
  age: 25,
  gender: "female",
};

if ("age" in person) {
  console.log(true);
}

if (person.hasOwnProperty("gender")) {
  console.log(true);
}

let hocSinh = [
  { ten: "An", tuoi: 15, lop: "10A1" },
  { ten: "Binh", tuoi: 16, lop: "11A2" },
  { ten: "Chau", tuoi: 15, lop: "10A1" },
];

hocSinh.push({ ten: "Dung", tuoi: 17, lop: "11A3" });
console.log(hocSinh);

hocSinh.forEach((hs) => {
  console.log(`ten:${hs["ten"]},tuoi:${hs["tuoi"]},lop:${hs["lop"]}`);
});

hocSinh[1]["tuoi"] = 17;
console.log(hocSinh);

hocSinh.splice(2, 1);
console.log(hocSinh);
