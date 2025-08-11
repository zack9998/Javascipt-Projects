const calculateButton = document.querySelector("button");
const buttonIcon = document.querySelector("img");
const inputs = document.querySelectorAll(".input--element ");
const resutls = document.querySelectorAll(".card__resultLabel");
const spans = document.querySelectorAll("span");
const inputsError = document.querySelectorAll(".card__input");

const calculeYears = (year, month, day) => {
  const currentYear = new Date().getFullYear();
  const resultYear = currentYear - year;
  return month > new Date().getMonth() + 1 ||
    (month === new Date().getMonth() + 1 && day > new Date().getDate())
    ? resultYear - 1
    : resultYear;
};

const calculeMonths = (month) => {
  const currentMonth = new Date().getMonth() + 1;
  const resultMonth = currentMonth - month;
  return resultMonth;
};

const calculeDays = (day) => {
  const currentDay = new Date().getDate();
  const resultDay = currentDay - day;
  return resultDay;
};

const finalAge = (day, month, year) => {
  const currentDate = new Date();

  let years = calculeYears(year, month, day);
  let months = currentDate.getMonth() + 1 - month;
  let days = currentDate.getDate() - day;

  if (days < 0) {
    months--;
    const prevMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    );
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return [years, months, days];
};

const displayAge = (day, month, year) => {
  const age = finalAge(day, month, year);
  for (let i = 0; i <= 2; i++) {
    resutls[i].innerText = age[i];
  }
};

const validDday = (day) => {
  if (day === "" || day === null || day === undefined) {
    spans[0].textContent = "This field is required!";
  } else if (day <= 0 || day > 31) {
    spans[0].textContent = "Must be a valid day";
  } else {
    spans[0].textContent = "";
    inputsError[0].classList.remove("card__input--error");
    inputs[0].style.color = "";
    inputs[0].style.borderColor = "";
    return true;
  }

  inputsError[0].classList.add("card__input--error");
  inputs[0].style.color = "hsl(0, 100%, 67%)";
  inputs[0].style.borderColor = "hsl(0, 100%, 67%)";
  return false;
};

const validMonth = (month) => {
  if (month === "" || month === null || month === undefined) {
    spans[1].textContent = "This field is required!";
  } else if (month <= 0 || month > 12) {
    spans[1].textContent = "Must be a valid month";
  } else {
    spans[1].textContent = "";
    inputsError[1].classList.remove("card__input--error");
    inputs[1].style.color = "";
    inputs[1].style.borderColor = "";
    return true;
  }

  inputsError[1].classList.add("card__input--error");
  inputs[1].style.color = "hsl(0, 100%, 67%)";
  inputs[1].style.borderColor = "hsl(0, 100%, 67%)";
  return false;
};

const validYear = (year) => {
  if (year === "" || year === null || year === undefined) {
    spans[2].textContent = "This field is required!";
  } else if (year <= 1900 || year >= new Date().getFullYear()) {
    spans[2].textContent = "Must be a valid year";
  } else {
    spans[2].textContent = "";
    inputsError[2].classList.remove("card__input--error");
    inputs[2].style.color = "";
    inputs[2].style.borderColor = "";
    return true;
  }

  inputsError[2].classList.add("card__input--error");
  inputs[2].style.color = "hsl(0, 100%, 67%)";
  inputs[2].style.borderColor = "hsl(0, 100%, 67%)";
  return false;
};

const buttonHandler = () => {
  buttonIcon.style.background = "black";
  if (
    !validDday(inputs[0].value) ||
    !validMonth(inputs[1].value) ||
    !validYear(inputs[2].value)
  ) {
    return (
      validDday(inputs[0].value),
      validMonth(inputs[1].value),
      validYear(inputs[2].value)
    );
  }
  displayAge(inputs[0].value, inputs[1].value, inputs[2].value);
};

calculateButton.addEventListener("click", buttonHandler);
