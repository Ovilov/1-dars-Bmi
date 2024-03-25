const title = document.querySelector("h2");

// title.textContent = "hello";

const boyi = Number(prompt("bo'yi"));
const vazin = Number(prompt("vazin"));
const ism = prompt("ism");

const BMI = vazin / (boyi / 100) ** 2;

if (BMI <= 18.5) {
  title.textContent = (`${ism} siz ozgin ekansiz! Ko'proq oqatlaning`);
} else if (BMI > 18.6 && BMI <= 29.9) {
  title.textContent = (`${ism} siz normal holatdasiz`);
} else {
  title.textContent(`${ism} siz semizsiz! Kam ovqatlaning yoki deyetada yuring`);
}
