const userWeight = document.getElementById("weight");
const userHeight = document.getElementById("height");
const buttonIMC = document.getElementById("btnCalculateIMC");
const alertError = document.getElementById("alert-error");
const modalImc = document.getElementById("modal-wrapper");
const titleImc = document.getElementById("titleImc");
const closeModal = document.getElementById("close-modal");

const handleImcButtonClick = (e) => {
  const userWeightValue = Number(userWeight.value);
  const userHeightValue = Number(userHeight.value);
  e.preventDefault();
  calculateIMC(userWeightValue, userHeightValue);
};

buttonIMC.addEventListener("click", handleImcButtonClick);

const calculateIMC = (weight, height) => {
  const heightInMeters = height / 100;
  let imc = weight / (heightInMeters * heightInMeters);
  imc = imc.toFixed(2);
  showIMC(imc);
};

const showIMC = (imc) => {
  modalImc.classList.add("open");
  titleImc.innerText = `Seu IMC é de ${imc}`;
};

const closeModalImc = () => {
  modalImc.classList.remove("open");
};

closeModal.addEventListener("click", closeModalImc);

const keypressCloseModal = (e) => {
  if (e.key === "Escape" && modalImc.classList.contains("open")) {
    modalImc.classList.remove("open");
  }
};

document.addEventListener("keydown", keypressCloseModal);

userWeight.addEventListener("input", () => {
  if (userWeight.value.length > 3) {
    userWeight.value = userWeight.value.slice(0, 3);
  }
});

userHeight.addEventListener("keypress", (e) => {
  let tecla = e.key;
  if (/[.]/.test(tecla)) {
    e.preventDefault();
    alert("Digite a sua altura em centímetros, exemplo: 172");
  }
});

userWeight.addEventListener("keypress", (e) => {
  let tecla = e.key;
  if (/[.]/.test(tecla)) {
    e.preventDefault();
  }
});

userWeight.addEventListener("input", () => {
  const userWeightValue = Number(userWeight.value);
  if (isNaN(userWeightValue)) {
    alertError.classList.add("open");
  } else {
    alertError.classList.remove("open");
  }
});

userHeight.addEventListener("input", () => {
  if (userHeight.value.length > 3) {
    userHeight.value = userHeight.value.slice(0, 3);
  }
});

userHeight.addEventListener("input", () => {
  const userHeightValue = Number(userHeight.value);
  if (isNaN(userHeightValue)) {
    alertError.classList.add("open");
  } else {
    alertError.classList.remove("open");
  }
});
