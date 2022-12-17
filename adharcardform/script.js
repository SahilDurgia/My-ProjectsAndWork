// first name - [a-zA-Z]{2,50}
// number - [0-9]{10}
// mail - ([a-z_.0-9]{2,30})([@]{1})([a-zA-Z0-9]{2,30})([.{1}])([a-z.]{2,10})
// landline - ([0-3]{3})([-]{1})([0-9]{8})
//
// pin code - [0-9]{6}
// PAN CARD - ([A-Z]{5})([0-9]{4})([A-Z]{1})

// full name - ([A-Z]{1})([a-z]{2,50})([ ]{1})([A-Z]{1})([a-z]{2,50})
// address  - ([a-zA-Z0-9\.\s\\\/\-\(\)\[\]\{\}\,\?\>\<]{20,300})

// all regexs

const nameRegex = /^[a-zA-Z]{2,50}$/;
const ageRegex = /^[0-9]{1,3}$/;
const panCardRegex = /^([A-Z]{5})([0-9]{4})([A-Z]{1})$/;
const addreshRegex = /^([a-zA-Z0-9\.\s\\\/\-\(\)\[\]\{\}\,\?\>\<]{20,300})$/;
const pincodeRegex = /^[0-9]{6}$/;
const countryRegex = /^[a-zA-Z]{2,20}$/;
const BanknameRegex = /^[a-z\sA-Z]{2,50}$/;
const BankAccNoRegex = /^[0-9]{9,18}$/;
const dateRegex = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/;
const drlNoRegex = /^([A-Z]{2})([0-9]{2})([\s]{1})([0-9]{11})$/;
// MH04 20180029777
// DOM
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const fathersName = document.getElementById("fathersName");
const mothersName = document.getElementById("mothersName");
const age = document.getElementById("age");
const dOB = document.getElementById("dOB");
const panCard = document.getElementById("panCard");
const dlNO = document.getElementById("dlNO");
const addresh = document.getElementById("addresh");
const district = document.getElementById("district");
const city = document.getElementById("city");
const pinCode = document.getElementById("pinCode");
const state = document.getElementById("state");
const country = document.getElementById("country");
const bankName = document.getElementById("bankName");
const bankAccNo = document.getElementById("bankAccNo");
const tnc = document.getElementById("tnc");

// Taking Wrong Divs in a dom
const wrongdiv = document.querySelectorAll(".wrongdiv");
// console.log(wrongdiv);

// form divs for background color changing
const firname = document.querySelector(".fname");
const lasname = document.querySelector(".lname");
const fathersNameDiv = document.querySelector(".fathersName");
const mothersNameDiv = document.querySelector(".mothersName");
const genderDiv = document.querySelector(".gender");
const ageDiv = document.querySelector(".age");
const dOBDiv = document.querySelector(".dOB");
const panCardDiv = document.querySelector(".panCard");
const dlNODiv = document.querySelector(".dlNO");
const addreshDiv = document.querySelector(".addresh");
const districtDiv = document.querySelector(".district");
const cityDiv = document.querySelector(".city");
const pinCodeDiv = document.querySelector(".pinCode");
const stateDiv = document.querySelector(".state");
const countryDiv = document.querySelector(".country");
const bankNameDiv = document.querySelector(".bankName");
const bankAccNoDiv = document.querySelector(".bankAccNo");
const tncDiv = document.querySelector(".tnc");

// loop for adding opcity to wrong div
for (let i = 0; i < wrongdiv.length; i++) {
  wrongdiv[i].classList.add("opacity");
}

//
const form = document.getElementById("myform");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // fname

  let firstNameInput = fname.value;
  if (nameRegex.test(firstNameInput)) {
    fname.classList.add("bckcolorRight");
    wrongdiv[0].classList.add("opacity");
    firname.classList.add("bckcolorRight");
    fname.classList.remove("bckcolorWrong");
    firname.classList.remove("bckcolorWrong");
  } else {
    fname.classList.add("bckcolorWrong");
    wrongdiv[0].classList.remove("opacity");
    firname.classList.add("bckcolorWrong");
    fname.classList.remove("bckcolorRight");
    firname.classList.remove("bckcolorRight");
  }

  //lname

  let lastNameInput = lname.value;
  if (nameRegex.test(lastNameInput)) {
    lname.classList.add("bckcolorRight");
    wrongdiv[1].classList.add("opacity");
    lasname.classList.add("bckcolorRight");
    lname.classList.remove("bckcolorWrong");
    lasname.classList.remove("bckcolorWrong");
  } else {
    lname.classList.add("bckcolorWrong");
    wrongdiv[1].classList.remove("opacity");
    lasname.classList.add("bckcolorWrong");
    lname.classList.remove("bckcolorRight");
    lasname.classList.remove("bckcolorRight");
  }

  // fathers name
  let fathersNameInput = fathersName.value;
  if (nameRegex.test(fathersNameInput)) {
    fathersName.classList.add("bckcolorRight");
    wrongdiv[2].classList.add("opacity");
    fathersName.classList.remove("bckcolorWrong");
    fathersNameDiv.classList.add("bckcolorRight");
    fathersNameDiv.classList.remove("bckcolorWrong");
  } else {
    fathersName.classList.add("bckcolorWrong");
    fathersName.classList.remove("bckcolorRight");
    wrongdiv[2].classList.remove("opacity");
    fathersNameDiv.classList.remove("bckcolorRight");
    fathersNameDiv.classList.add("bckcolorWrong");
  }

  // mother name
  let mothersnameInput = mothersName.value;
  if (nameRegex.test(mothersnameInput)) {
    mothersName.classList.add("bckcolorRight");
    mothersName.classList.remove("bckcolorWrong");
    wrongdiv[3].classList.add("opacity");
    mothersNameDiv.classList.add("bckcolorRight");
    mothersNameDiv.classList.remove("bckcolorWrong");
  } else {
    mothersName.classList.add("bckcolorWrong");
    mothersName.classList.remove("bckcolorRight");
    wrongdiv[3].classList.remove("opacity");
    mothersNameDiv.classList.add("bckcolorWrong");
    mothersNameDiv.classList.remove("bckcolorRight");
  }

  // gender
  let genderMale = document.getElementById("genderMale");
  let genderFemale = document.getElementById("genderFemale");
  let genderOther = document.getElementById("genderOther");
  //   let gender = document.getElementsByClassName("gender");
  if (
    genderMale.checked == true ||
    genderFemale.checked == true ||
    genderOther.checked == true
  ) {
    genderDiv.classList.add("bckcolorRight");
    genderDiv.classList.remove("bckcolorWrong");
    wrongdiv[4].classList.add("opacity");
  } else {
    // console.log("please select one option");
    genderDiv.classList.add("bckcolorWrong");
    genderDiv.classList.remove("bckcolorRight");
    wrongdiv[4].classList.remove("opacity");
  }

  //age
  let ageInput = age.value;
  if (ageRegex.test(ageInput)) {
    age.classList.add("bckcolorRight");
    age.classList.remove("bckcolorWrong");
    wrongdiv[5].classList.add("opacity");
    ageDiv.classList.add("bckcolorRight");
    ageDiv.classList.remove("bckcolorWrong");
  } else {
    age.classList.add("bckcolorWrong");
    age.classList.remove("bckcolorRight");
    wrongdiv[5].classList.remove("opacity");
    ageDiv.classList.add("bckcolorWrong");
    ageDiv.classList.remove("bckcolorRight");
  }
  // dob
  let dobInput = dOB.value;
  //   console.log(dobInput);
  if (dateRegex.test(dobInput)) {
    dOB.classList.add("bckcolorRight");
    dOB.classList.remove("bckcolorWrong");
    wrongdiv[6].classList.add("opacity");
    dOBDiv.classList.add("bckcolorRight");
    dOBDiv.classList.remove("bckcolorWrong");
  } else {
    dOB.classList.add("bckcolorWrong");
    dOB.classList.remove("bckcolorRight");
    wrongdiv[6].classList.remove("opacity");
    dOBDiv.classList.add("bckcolorWrong");
    dOBDiv.classList.remove("bckcolorRight");
  }
  // pancard
  let panCardInput = panCard.value;
  if (panCardRegex.test(panCardInput)) {
    panCard.classList.add("bckcolorRight");
    panCard.classList.remove("bckcolorWrong");
    wrongdiv[7].classList.add("opacity");
    panCardDiv.classList.add("bckcolorRight");
    panCardDiv.classList.remove("bckcolorWrong");
  } else {
    panCard.classList.add("bckcolorWrong");
    panCard.classList.remove("bckcolorRight");
    wrongdiv[7].classList.remove("opacity");
    panCardDiv.classList.add("bckcolorWrong");
    panCardDiv.classList.remove("bckcolorRight");
  }
  //   Driving Licience
  let drlNoInput = dlNO.value;
  if (drlNoRegex.test(drlNoInput)) {
    dlNO.classList.add("bckcolorRight");
    dlNO.classList.remove("bckcolorWrong");
    wrongdiv[8].classList.add("opacity");
    dlNODiv.classList.add("bckcolorRight");
    dlNODiv.classList.remove("bckcolorWrong");
  } else {
    dlNO.classList.add("bckcolorWrong");
    dlNO.classList.remove("bckcolorRight");
    wrongdiv[8].classList.remove("opacity");
    dlNODiv.classList.remove("bckcolorRight");
    dlNODiv.classList.add("bckcolorWrong");
  }
  // addresh

  let addressInput = addresh.value;
  if (addreshRegex.test(addressInput)) {
    addresh.classList.add("bckcolorRight");
    addresh.classList.remove("bckcolorWrong");
    wrongdiv[9].classList.add("opacity");
    addreshDiv.classList.add("bckcolorRight");
    addreshDiv.classList.remove("bckcolorWrong");
  } else {
    addresh.classList.add("bckcolorWrong");
    addresh.classList.remove("bckcolorRight");
    wrongdiv[9].classList.remove("opacity");
    addreshDiv.classList.add("bckcolorWrong");
    addreshDiv.classList.remove("bckcolorRight");
  }

  // district

  let districtInput = district.value;
  if (districtInput == "selectDistrict") {
    // console.log("plese selectone option");
    district.classList.add("bckcolorWrong");
    district.classList.remove("bckcolorRight");
    wrongdiv[10].classList.remove("opacity");
    districtDiv.classList.add("bckcolorWrong");
    districtDiv.classList.remove("bckcolorRight");
  } else {
    district.classList.remove("bckcolorWrong");
    district.classList.add("bckcolorRight");
    wrongdiv[10].classList.add("opacity");
    districtDiv.classList.add("bckcolorRight");
    districtDiv.classList.remove("bckcolorWrong");
  }

  //   city
  let cityInput = city.value;
  if (cityInput == "selectCity") {
    city.classList.add("bckcolorWrong");
    city.classList.remove("bckcolorRight");
    wrongdiv[11].classList.remove("opacity");
    cityDiv.classList.add("bckcolorWrong");
    cityDiv.classList.remove("bckcolorRight");
  } else {
    city.classList.remove("bckcolorWrong");
    city.classList.add("bckcolorRight");
    wrongdiv[11].classList.add("opacity");
    cityDiv.classList.remove("bckcolorWrong");
    cityDiv.classList.add("bckcolorRight");
  }
  // pincode
  let pinCodeInput = pinCode.value;
  if (pincodeRegex.test(pinCodeInput)) {
    pinCode.classList.add("bckcolorRight");
    pinCode.classList.remove("bckcolorWrong");
    wrongdiv[12].classList.add("opacity");
    pinCodeDiv.classList.add("bckcolorRight");
    pinCodeDiv.classList.remove("bckcolorWrong");
  } else {
    pinCode.classList.add("bckcolorWrong");
    pinCode.classList.remove("bckcolorRight");
    wrongdiv[12].classList.remove("opacity");
    pinCodeDiv.classList.add("bckcolorWrong");
    pinCodeDiv.classList.remove("bckcolorRight");
  }
  // state
  let stateInput = state.value;
  console.log(stateInput);
  if (stateInput == "selectState") {
    state.classList.add("bckcolorWrong");
    state.classList.remove("bckcolorRight");
    wrongdiv[13].classList.remove("opacity");
    stateDiv.classList.add("bckcolorWrong");
    stateDiv.classList.remove("bckcolorRight");
  } else {
    state.classList.remove("bckcolorWrong");
    state.classList.add("bckcolorRight");
    wrongdiv[13].classList.add("opacity");
    stateDiv.classList.remove("bckcolorWrong");
    stateDiv.classList.add("bckcolorRight");
  }
  // Country

  let countryInput = country.value;
  if (countryRegex.test(countryInput)) {
    country.classList.add("bckcolorRight");
    country.classList.remove("bckcolorWrong");
    wrongdiv[14].classList.add("opacity");
    countryDiv.classList.add("bckcolorRight");
    countryDiv.classList.remove("bckcolorWrong");
  } else {
    country.classList.add("bckcolorWrong");
    country.classList.remove("bckcolorRight");
    wrongdiv[14].classList.remove("opacity");
    countryDiv.classList.add("bckcolorWrong");
    countryDiv.classList.remove("bckcolorRight");
  }

  // bank Name
  let bankNameInput = bankName.value;
  if (BanknameRegex.test(bankNameInput)) {
    bankName.classList.add("bckcolorRight");
    bankName.classList.remove("bckcolorWrong");
    wrongdiv[15].classList.add("opacity");
    bankNameDiv.classList.add("bckcolorRight");
    bankNameDiv.classList.remove("bckcolorWrong");
  } else {
    bankName.classList.add("bckcolorWrong");
    bankName.classList.remove("bckcolorRight");
    wrongdiv[15].classList.remove("opacity");
    bankNameDiv.classList.add("bckcolorWrong");
    bankNameDiv.classList.remove("bckcolorRight");
  }

  // bank Account number
  let BankAccNoInput = bankAccNo.value;
  if (BankAccNoRegex.test(BankAccNoInput)) {
    bankAccNo.classList.add("bckcolorRight");
    bankAccNo.classList.remove("bckcolorWrong");
    wrongdiv[16].classList.add("opacity");
    bankAccNoDiv.classList.add("bckcolorRight");
    bankAccNoDiv.classList.remove("bckcolorWrong");
  } else {
    bankAccNo.classList.add("bckcolorWrong");
    bankAccNo.classList.remove("bckcolorRight");
    wrongdiv[16].classList.remove("opacity");
    bankAccNoDiv.classList.add("bckcolorWrong");
    bankAccNoDiv.classList.remove("bckcolorRight");
  }
  // check box
  //   console.dir(tnc);
  if (tnc.checked == true) {
    tnc.classList.add("bckcolorRight");
    tnc.classList.remove("bckcolorWrong");
    wrongdiv[17].classList.add("opacity");
    tncDiv.classList.add("bckcolorRight");
    tncDiv.classList.remove("bckcolorWrong");
    form.submit();
  } else {
    tnc.classList.add("bckcolorWrong");
    tnc.classList.remove("bckcolorRight");
    wrongdiv[17].classList.remove("opacity");
    tncDiv.classList.add("bckcolorWrong");
    tncDiv.classList.remove("bckcolorRight");
  }
  if (
    (tnc.checked == true &&
      nameRegex.test(firstNameInput) &&
      nameRegex.test(lastNameInput) &&
      nameRegex.test(fathersNameInput) &&
      nameRegex.test(mothersnameInput) &&
      genderMale.checked == true) ||
    genderFemale.checked == true ||
    (genderOther.checked == true &&
      ageRegex.test(ageInput) &&
      dateRegex.test(dobInput) &&
      panCardRegex.test(panCardInput) &&
      drlNoRegex.test(drlNoInput) &&
      addreshRegex.test(addressInput) &&
      districtInput != "selectDistrict" &&
      cityInput != "selectCity" &&
      pincodeRegex.test(pinCodeInput) &&
      stateInput != "selectState" &&
      countryRegex.test(countryInput) &&
      BanknameRegex.test(bankNameInput) &&
      BankAccNoRegex.test(BankAccNoInput) &&
      tnc.checked)
  ) {
    form.submit();
  } else {
    alert("fill form");
  }
});
