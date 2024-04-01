let authCheck = false;
let phone1Check = false;
let phone2Check = false;
let phone3Check = false;
let intervalId;
let time = 180;

const tokenAuthCheck = () => {
  clearInterval(intervalId);
  authCheck = true;
  document.getElementById('authButton2').disabled = true;
};

const tokenPublish = () => {
  time = 180;
  let phone1 = document.getElementById('phone1').value;
  let phone2 = document.getElementById('phone2').value;
  let phone3 = document.getElementById('phone3').value;
  let phone = `${phone1}${phone2}${phone3}`;
  if (!/^010\d{8}$/.test(phone)) {
    alert('휴대폰 번호를 확인해주세요');
  } else {
    const token = Math.floor(100000 + Math.random() * 900000);
    document.getElementById('phone1').readOnly = true;
    document.getElementById('phone2').readOnly = true;
    document.getElementById('phone3').readOnly = true;
    document.getElementById('token').innerText = token;
    document.getElementById('authButton1').disabled = true;
    document.getElementById('authButton2').disabled = false;

    intervalId = setInterval(() => {
      if (time >= 0) {
        let min = Math.floor(time / 60);
        let second = String(time % 60).padStart(2, '0');
        document.getElementById('timer').textContent = `${min} : ${second}`;
        time -= 1;
      } else {
        clearInterval(intervalId);
        document.getElementById('token').innerText = '000000';
        document.getElementById('authButton1').disabled = false;
        document.getElementById('authButton2').disabled = true;
        document.getElementById('phone1').readOnly = false;
        document.getElementById('phone2').readOnly = false;
        document.getElementById('phone3').readOnly = false;
      }
    }, 1000);
  }
};

const phoneNumberCheck = (input) => {
  if (input.value.length > input.maxLength) {
    input.value = input.value.slice(0, input.maxLength);
  }
  if (phone1Check && phone2Check && phone3Check) {
    document.getElementById('authButton1').disabled = false;
  }
};

const phoneFocusChange1 = () => {
  document.getElementById('authButton1').disabled = true;
  phone1Check = false;
  let phone1 = document.getElementById('phone1').value;
  console.log(phone1.length);
  if (phone1.length >= 3) {
    document.getElementById('phone2').focus();
    phone1Check = true;
  }
  phoneNumberCheck(document.getElementById('phone1'));
};

const phoneFocusChange2 = () => {
  document.getElementById('authButton1').disabled = true;
  phone2Check = false;
  let phone2 = document.getElementById('phone2').value;
  console.log(phone2.length);
  if (phone2.length >= 4) {
    document.getElementById('phone3').focus();
    phone2Check = true;
  }
  phoneNumberCheck(document.getElementById('phone2'));
};
const phoneFocusChange3 = () => {
  document.getElementById('authButton1').disabled = true;
  phone3Check = false;
  let phone3 = document.getElementById('phone3').value;
  console.log(phone3.length);
  if (phone3.length >= 4) {
    phone3Check = true;
  }
  phoneNumberCheck(document.getElementById('phone3'));
};

const submit = () => {
  const email = document.getElementById('email').value;
  const name = document.getElementById('name').value;
  const pw1 = document.getElementById('pw1').value;
  const pw2 = document.getElementById('pw2').value;
  const area = document.getElementById('area').value;
  const mail = document.getElementById('male').checked;
  const femail = document.getElementById('female').checked;
  let validationCnt = 0;

  if (!email || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
    document.getElementById('emailError').classList.add('active');
  } else {
    document.getElementById('emailError').classList.remove('active');
    validationCnt += 1;
  }
  // 이메일 체크
  if (!name) {
    document.getElementById('nameError').classList.add('active');
  } else {
    document.getElementById('nameError').classList.remove('active');
    validationCnt += 1;
  }
  // 이름 체크
  if (!pw1) {
    document.getElementById('pw1Error').classList.add('active');
  } else {
    document.getElementById('pw1Error').classList.remove('active');
    validationCnt += 1;
  }
  // 비밀번호 체크
  if (!pw2) {
    document.getElementById('pw2Error').classList.add('active');
  } else {
    document.getElementById('pw2Error').classList.remove('active');
    validationCnt += 1;
  }
  // 비밀번호 재입력 체크
  if (pw1 !== pw2 || !pw1) {
    document.getElementById('pw2Error').classList.add('active');
    document.getElementById('pw1Error').classList.add('active');
  } else {
    document.getElementById('pw2Error').classList.remove('active');
    document.getElementById('pw1Error').classList.remove('active');
    validationCnt += 1;
  }
  // 비밀번호 같은지 체크
  if (!mail && !femail) {
    document.getElementById('sexError').classList.add('active');
  } else {
    document.getElementById('sexError').classList.remove('active');
    validationCnt += 1;
  }
  // 성별 체크
  if (!area) {
    document.getElementById('areaError').classList.add('active');
  } else {
    document.getElementById('areaError').classList.remove('active');
    validationCnt += 1;
  }
  // 지역 체크
  if (validationCnt !== 7) {
    return false;
  }
  if (!authCheck) {
    alert('인증확인을 진행해주세요');
  } else {
    validationCnt += 1;
  }
  // 인증확인 클릭 여부 체크
  if (validationCnt === 8) {
    alert('코드캠프 가입을 축하합니다!');
    document.getElementById('submit').disabled = true;
  }
};
