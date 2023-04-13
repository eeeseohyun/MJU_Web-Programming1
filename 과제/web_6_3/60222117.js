//link 연결-home
const myHome = document.querySelector(".home");
myHome.addEventListener('click', function() {
  var result=confirm('home 페이지로 이동하시겠습니까?');
  if(result==true){
    alert('home 페이지로 이동합니다.');
    location.replace('./60222117.html');
  }else{
    alert('home 페이지로 이동하지 않습니다.');
  }
});

//link 연결-서플리
const myPli = document.querySelector(".playlist");
myPli.addEventListener('click', function() {
  var result=confirm('서플리 페이지로 이동하시겠습니까?');
  if(result==true){
    alert('서플리 페이지로 이동합니다.');
    location.replace('https://www.youtube.com/watch?v=75kySTFaBQQ');
  }else{
    alert('서플리 페이지로 이동하지 않습니다.');
  }
});

//link 연결-깃허브
const myGithub = document.querySelector(".github");
myGithub.addEventListener('click', function() {
  var result=confirm('서현이의 깃허브 페이지로 이동하시겠습니까?');
  if(result==true){
    alert('서현이의 깃허브 페이지로 이동합니다.');
    location.replace('https://github.com/eeeseohyun');
  }else{
    alert('서현이의 깃허브 페이지로 이동하지 않습니다.');
  }
});

//link 연결-밴드부 유튜브
const myBand = document.querySelector(".atc1 > h1");
myBand.addEventListener('click', function() {
  var result=confirm('서현이의 밴드부 유튜브 페이지로 이동하시겠습니까?');
  if(result==true){
    alert('서현이의 밴드부 유튜브 페이지로 이동합니다.');
    location.replace('https://www.youtube.com/@esd3686');
  }else{
    alert('서현이의 밴드부 유튜브 페이지로 이동하지 않습니다.');
  }
});

//link 연결-강아지 관련
const myDog = document.querySelector(".atc2 > h1");
myDog.addEventListener('click', function() {
  var result=confirm('서현이의 강아지 관련 페이지로 이동하시겠습니까?');
  if(result==true){
    alert('서현이의 강아지 관련 페이지로 이동합니다.');
    location.replace('https://www.youtube.com/watch?v=3sysIjGyxXE');
  }else{
    alert('서현이의 강아지 관련 페이지로 이동하지 않습니다.');
  }
});

//link 연결 - 인스타
const myInsta = document.querySelector(".atc3 > h1");
myInsta.addEventListener('click', function() {
  var result=confirm('서현이의 인스타 페이지로 이동하시겠습니까?');
  if(result==true){
    alert('서현이의 인스타 페이지로 이동합니다.');
    location.replace('https://www.instagram.com/seony_official/');
  }else{
    alert('서현이의 인스타 페이지로 이동하지 않습니다.');
  }
});

//좋아하는 노래 배열객체
const musics=[{
  name:'우리가 맞다는 대답을 할 거예요',
  singer:'데이먼스이어',
  favNum:1
},{
  name:'이름이 맘에 든다는 이유만으로',
  singer:'가을 방학',
  favNum:6
},{
  name:'편지',
  singer:'나디',
  favNum:7
},{
  name:'좋은 밤 좋은 꿈',
  singer:'너드커넥션',
  favNum:2
},{
  name:'cherry',
  singer:'데이먼스 이어',
  favNum:8
},{
  name:'민수는 혼란스럽다',
  singer:'민수',
  favNum:9
},{
  name:'내 인생은 영화가 아니니깐',
  singer:'SAGA',
  favNum:3
},{
  name:'사랑',
  singer:'최유리',
  favNum:4
},{
  name: 'Broken',
  singer:'결',
  favNum:5
},{
  name:'Boat',
  singer:'죠지',
  favNum:10
}]

//orderby로 좋아하는 순서에 맞게 정렬
const output = _.orderBy(musics,['favNum']);

// 숫자 입력받아 노래추천
const selNum = document.querySelector(".fav-music");
selNum.addEventListener('click', function() {
  const result=confirm('서현이가 좋아하는 노래를 확인하시겠습니까?');
  if(result==true){
    var num=prompt('몇번째로 좋아하는 노래를 확인하시겠습니까?');
    if(num<=10){
    const music=output[num-1].name;
    const singer=output[num-1].singer;
    // const Element = document.querySelector('.fav-music');
    selNum.textContent='제가 '+num+'번째로 좋아하는 노래는 '+music+'이고, 가수는 '+singer + '입니다.';
    }else{
      alert("10이하의 숫자를 입력해주세요.")
    }
  }else{
    alert('서현이가 좋아하는 노래를 확인하지 않습니다.');
  }
  
});
