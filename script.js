// const item = document.getElementById("item");
const hourTag = document.getElementById("hour");
const minuteTag = document.getElementById("minute");
const text = document.getElementById("text");
const deleteBtn = document.getElementById("deleteButton");
const word = document.getElementById("todolist");
const wordEl = document.getElementById("word");
const hello = document.getElementById("hello");

// 시작할 때 localStorage에 "name" 키를 빈 문자열로 설정하는 함수
function start() {
  if (localStorage.getItem("name") === null) {
    localStorage.setItem("name", "");
  }
}
// 로컬 스토리지 비우기?
start();

// 이름을 받아오는 함수
const setName = () => {
  if (localStorage.getItem("name") === "") {
    const name = prompt("이름을 입력하세요");
    if (name !== null) {
      localStorage.setItem("name", name);
    }

    hello.innerHTML = `환영합니다. ${name}`;
  }
};

// 이름을 받아오는 함수 사용
setName();

// 로컬 스토리지의 값이 있을때 이름을 불러오는 함수
const loadName = () => {
  const name = localStorage.getItem("name");
  if (name) {
    hello.innerHTML = `환영합니다. ${name}`;
  } else {
    hello.innerHTML = "이름을 입력하세요.";
  }
};

// 이름과 인삿말 불러오기
loadName();

// 명언 출력 함수
function num() {
  let random = Math.floor(Math.random() * 7);
  let grade;
  switch (random) {
    case 1:
      grade = "잠은 죽어서 자면 된다";
      break;
    case 2:
      grade = "아무튼 못 해서 그런거다";
      break;
    case 3:
      grade = "빚이 생기면 일을 열심히 한다";
      break;
    case 4:
      grade = "책은 베개가 아니다";
      break;
    case 5:
      grade = "24시간은 아무튼 모자라다";
      break;
    case 6:
      grade = "앉아있으면 눕고싶고 누워있으면 자고 싶어진다";
      break;
    default:
      grade = "영진 직업 전문 대학교 파이팅!";
  }
  wordEl.innerHTML = grade;
  console.log(grade);
}

//명언 출력
num();

// 현재 시간을 보여주는 함수
function time() {
  let today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  if (minute < 10) {
    minuteTag.textContent = `0${minute}`;
  } else {
    minuteTag.textContent = minute;
  }
  if (hour < 10) {
    hourTag.textContent`0${hour}`;
  } else {
    hourTag.textContent = hour;
  }
}
// setinterval 로 계속 시간을 불러옴
setInterval(time, 5);

// 엔터키를 누르면 상호작용을 하는 함수
function show_name(e) {
  textVal = text.value;
  const code = e.code;

  if (code == "Enter") {
    if (textVal === "") {
      return;
    }
    word.innerHTML = "";
    word.innerHTML = textVal;
    text.value = "";
  }
}
// 삭제 버튼을 누르면 글자가 사라지게 함
deleteBtn.addEventListener("click", () => {
  word.innerHTML = "";

  console.log("mmmmm");
});
