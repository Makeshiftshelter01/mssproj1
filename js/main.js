// 이미지 컨테이너에 이미지 개수가 1개이면 가운데 정렬,
// 2개 이상이면 nx2 방식으로 정렬
var imgContainer = document.querySelectorAll(".img-container");

var images = document.querySelectorAll(".result-image");

// for (var i = 0; i < imgContainer.length; i++) {
//   if (images.length < 2) {
//     imgContainer[i].style.gridTemplateColumns = "1fr";
//   } else {
//     imgContainer[i].style.gridTemplateColumns = "repeat(2, 1fr)";
//   }
// }

for (var i = 0; i < images.length; i++) {
  console.log(images[i]);
}

imgContainer.forEach(cont => {
  console.log(cont.childNodes);
});

// // 결과창이 길어진다면 스크롤바

// var resultHeight = resultContainer.clientHeight;

// console.log(resultHeight);

// var resultContent = document.querySelector('.result-content');
// if (resultHeight > 680) {
//     resultContent.style.height = '680px';
//     resultContent.style.overflow = 'scroll';
// }

// 결과창
var resultContainer = document.getElementById("results");

// 결과창에 마우스를 대었을 때 화면 변경

// var leftBg = document.getElementById("left-bg");
// var leftBtn = document.getElementById("left-btn");

// var rightBg = document.getElementById("right-bg");
// var rightBtn = document.getElementById("right-btn");

// var resultMouseOver = resultContainer.addEventListener("mouseover", () => {
//   leftBg.style.opacity = "1";
//   leftBtn.style.opacity = "1";

//   rightBg.style.opacity = "1";
//   rightBtn.style.opacity = "1";
//   // resultContainer.style.transition='1s';
// });

// resultContainer.addEventListener("mouseleave", () => {
//   leftBg.style.opacity = "0";
//   leftBtn.style.opacity = "0";
//   rightBg.style.opacity = "0";
//   rightBtn.style.opacity = "0";

//   // resultContainer.style.display='none';
//   // resultContainer.style.transition='1s';
// });

// var resultPages = document.querySelectorAll(".result-content");
// var current = 0;
// function reset() {
//   for (var i = 0; i < resultPages.length; i++) {
//     resultPages[i].style.display = "none";
//     resultPages[i].style.opacity = "0";
//   }
// }

// function startSlide() {
//   reset();
//   resultPages[0].style.display = "block";
//   resultPages[0].style.opacity = "1";
//   resultPages[0].style.transition = "1s ease";
// }

// // show prev

// function slideLeft() {
//   reset();
//   resultPages[current - 1].style.display = "block";
//   resultPages[current - 1].style.opacity = "1";
//   resultPages[current - 1].style.transition = "1s ease";
//   current--;
// }

// //show next
// function slideRight() {
//   reset();
//   resultPages[current + 1].style.display = "block";
//   resultPages[current + 1].style.opacity = "1";
//   resultPages[current + 1].style.transition = "1s ease";
//   current++;
// }

// //prev click

// leftBtn.addEventListener("click", () => {
//   if (current == 0) {
//     current = resultPages.length;
//   }
//   slideLeft();
// });

// rightBtn.addEventListener("click", () => {
//   if (current == resultPages.length - 1) {
//     current = -1;
//   }
//   slideRight();
// });

// startSlide();



// 메인화면 띄우고 닫기

// 변수 목록
var commBtns = document.querySelectorAll(".commBtn");
var resultScreen = document.getElementById("comm-content");
var mainContent = document.querySelector(".main-content");
var topicIntro = document.querySelector(".topic-intro");


function fetchpage(name) {
    fetch(name)
    .then((res) => res.text())
    .then((data) => {
        resultScreen.innerHTML =data;
    })
}

//메인화면 띄우기
commBtns.forEach(btn => {
  btn.addEventListener("click", () => {
      console.log(btn.textContent);
    resultScreen.style.opacity = "1";
    resultScreen.style.transform = "translate(0%, 0%)";
    resultScreen.style.transitionDelay = "0.5s";
    
    // topicIntro.style.opacity = "0";
    // topicIntro.style.transition = "0.5s ease-in-out";
    // topicIntro.style.transitionDelay = "0s"; 

    mainContent.style.transform = "translate(-500%, 0%)";
  
    mainContent.style.transition = "0.5s ease-in-out";
    mainContent.style.transitionDelay = "0s";

  });


});

// 메인화면 닫기
var exitBtn = document.querySelector(".fa-times");

exitBtn.addEventListener("click", () => {
  resultScreen.style.transitionDelay = "0s";
  resultScreen.style.transform = "translate(-500%, 0%)";
  
  
//   topicIntro.style.opacity = "1";
//   topicIntro.style.transition = "0.5s ease-in-out";
//   topicIntro.style.transitionDelay = "0.5s";

  
  mainContent.style.transform = 'translateX(0%)';
  mainContent.style.transition = "0.5s ease-in-out";
  mainContent.style.transitionDelay = "0.5s";

});





resultScreen.addEventListener('mouseover', () =>{
    document.querySelector('.fa-times').style.opacity='1';
});

resultScreen.addEventListener('mouseleave', () =>{
    document.querySelector('.fa-times').style.opacity='0';
});