const quotes = [
  { quotes: "늦었다고 생각할 때가 진짜 너무 늦었다", author: "박명수" },
  { quotes: "결혼과 죽음은 뒤로 미룰수록 좋다", author: "박명수" },
  { quotes: "잠을 자도 피로가 안 풀리냐", author: "박명수" },
  { quotes: "조금만 더 돈 벌고 뜬다 이 바닥", author: "박명수" },
  { quotes: "꿈은 없고요 그냥 놀고 싶습니다", author: "박명수" },
  { quotes: "정신차려 이 각박한 세상 속에서", author: "하하" },
  { quotes: "웃지마 민병관", author: "정준하" },
  { quotes: "보통 돈 많은 친구들이 정이 많더라고요", author: "정형돈" },
  { quotes: "자 이게 클릭이야", author: "노홍철" },
  { quotes: "우리 나이 때에 3분은 인생의 30년과도 같다고 생각합니다", author: "노홍철" },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;
