# youtube

### Development environment
- React + Redux + node.js
- mongoDB + heroku

### Features
- Upload Video
- Subscribe / Unsubscribe
- Like / DisLike
- Comment / Reply a Comment

### Screenshots
<img width="1424" alt="Screen Shot 2020-03-13 at 5 05 20 PM" src="https://user-images.githubusercontent.com/33794732/76601945-47389880-654d-11ea-9424-8ec9b7f31bf7.png">
<img width="1429" alt="Screen Shot 2020-03-13 at 5 06 08 PM" src="https://user-images.githubusercontent.com/33794732/76601951-4b64b600-654d-11ea-8f08-9d0ad1a04c8a.png">
<img width="1411" alt="Screen Shot 2020-03-13 at 5 07 14 PM" src="https://user-images.githubusercontent.com/33794732/76601953-4c95e300-654d-11ea-8126-4be77eb202d1.png">
<img width="1427" alt="Screen Shot 2020-03-13 at 5 07 44 PM" src="https://user-images.githubusercontent.com/33794732/76601955-4dc71000-654d-11ea-8605-c1319dfe8e92.png">


### Todo 😎

#### Tips

vscode extention 설치! 

ES7 React/Redux/GraphQL/React-Native snippets

rfce, useState 등 template자동생성



리액트 컴포넌트에서 다루는 데이터는 두개로 나뉜다. 

바로  **props 와 state!**

props 는 부모 컴포넌트가 자식 컴포넌트에게 주는 값

자식 컴포넌트에서는 props 를 받아오기만하고, 받아온 props 를 직접 수정 할 수 없음

반면에 state 는 컴포넌트 내부에서 선언하며 내부에서 값을 변경 할 수 있음

**GET은 가져오는 것이고 POST는 수행하는 것!**



#### How to kill port number

npx kill-port 3000

npx kill-port 5000



#### local environment

yarn npm run dev

dev: local에서 개발 test

nodemon : 자동으로 수정 반영



#### multer 모듈사용

- 사용자가 앱에게 전달하는 정보는 크게 `텍스트`와 `파일` 2가지로 나눌 수 있다.
- 사용자가 `파일`을 앱에게 전달하는 방법에 대해서 알아본다.
- 동작 개요
  - 파일 선택 form
  - 파일 선택 후 submit 버튼을 눌르면 파일 전송
  - 루트 디렉토리 내 uploads 폴더에 전송된 파일이 저장
  - 전송된 파일명을 화면에 표시
- express는 사용자가 업로드한 파일을 받아서 저장하는 기본 기능을 제공하지 않는다.
- 따라서 모듈을 설치해서 (ex. multer) 사용자가 전송한 파일을 처리하는 작업을 해야한다.
- `multer 모듈` 설치코드 (터미널)


#### ffmpeg 썸네일 생성하기

brew install ffmpeg

npm install fluent-ffmpeg



#### 랜딩 페이지에 비디오들 나타나게 하기

1. 빈 랜딩 페이지 생성
2. 비디오카드 tamplate만들기
3. 몽고 db에서 모든 비디오 데이터 가져오기
4. 가져온 비디오 데이터 출력 (use map()methods)



#### 비디오 디테일 페이지

1. 비어있는 비디오 디테일 페이지 생성
2. 비디오 디테일 페이지를 위한 route 만들기
3. 비디오 디테일 페이지 tamplate만들기
4. 몽고db에서 비디오 데이터 가져오기
5. 가져온 데이터들 스크린에 출력



#### 사이드 비디오 페이지 만들기

1. side Video 부분 layout template 만들기
2. 한개의 카드 template 만들기
3. DB 에서 모든 비디어 데이터를 불러오기
4. 불러온 데이터 화면에 출력하기



#### 구독기능(1)

1. subscriber model 만들기
2. subscribe button ui만들기
3. 데이터베이스에서 얼마나 많은 사람이 비디오 업로드한 유저를 구독하는지 정보 가져오기
4. 내가 이 비디오 업로드한 유저를 구독하는지 정보 가져오기
5. 가져온 정보들 화면에 출력



#### 구독기능(2)

1. 구독하기 기능 만들기(0 Subscribe)
2. 구독취소하기 기능 만들기(1 Subscribed)
   1. 아직 구독중이 아니라면 -> 구독
   2. 이미 구독중이라면 -> 구독해제



#### 구독 비디오 페이지 만들기

1. 빈 Subscription페이지 생성
2. Subscription페이지 라우터 만들기
3. 템플릿 만들기
4. 내가 구독한 유저의 비디오들만 서버에서 가져오기
5. 가져온 비디오를 화면에 출력하기



#### 댓글(1)

1. 댓글 부분 구조 설명
2. Comment model 생성
3. 디테일 비디오 페이지에 Comment Component 만들기



#### 댓글(2)

1. Comment.js을 위한 template 만들기
2. handleChange func 만들기
3. onSubmit func만들기 -> 
4. 저장된 댓글 데이터를 parent component로 업데이트 하기
5. 콘솔창에서 댓글 리스트 확인



#### 댓글(3)

1. Comment.js에다가 SingleComment Component를 생성
2. Single Comment 를 위한 Template 생성
3. Open Reply func 와 handleChange func 만들기
4. OnSubmit func 만들기
5. 모든 Comment 정보들을 데이터 베이스에서 가져오기
6. 저장된 댓글을 Parent Component에다가 업데이트



- SingleComment.js (props.refreshFunction)

- Comment.js (props.refreshFunction)

- DetailVideoPage.js(loadComments)



#### 댓글 (4)

1. ReplyComment Component를 Comment.js에 만들기
2. Replay Comment 템플릿을 만들기
3. Calculate Child Comment Number. 자식 코멘트가 얼마나 달려있는지 ?!
4. Complete Comment System



#### Like & Dislike Frature

1. Like & dislike model 만들기
2. 구조



클릭 - > like

case1. 아무것도 클릭되어 있지 않다면, 좋아요 1 올리기

case2. 좋아요 버튼이 이미 클릭되어 있다면, 좋아요 1 내리기

case3. 싫어요 버튼이 이미 클릭되어 있다면, 좋아요 1올리고 / 싫어요 1 내리기

클릭 - > dislike

case1. 아무것도 클릭되어 있지 않다면, 싫어요 1 올리기

case2. 좋아요 버튼이 이미 클릭되어 있다면, 싫어요 1 내리기

case3. 싫어요 버튼이 이미 클릭되어 있다면, 싫어요 1올리고 / 좋아요 1 내리기



#### Like & Dislike Feature (2) Template, Fetch Data



1. andtd 을 이용하여 like & dislike 버튼 만들기
2. 현재 좋아요 싫어요에 대한 정보를 db에서 가져오기 -> 좋아요 싫어요 숫자 / 내가 좋아요나 싫어요 둘 중 하나를 이미 눌렀는지...
   - Request  보낼 때 변수는 Video 에 것과 Comment에 것이 달라야 한다



#### Like & Dislike Feature

1. onLikefunc 만들기
2. onDislike func 만들기





client -> npm install -> npm run build

index.js

"heroku-postbuild": "npm install --prefix client"먼저 클라이언트 가서

디팬던시 다 다운받아야 한다. 그 다음에



NPM_CONFIG_PRODUCTION=false

헤로쿠는

  "devDependencies": {

​    "http-proxy-middleware": "^0.19.1"

  } 

이부분 무시하게 됨.





####  Deploy Fix Bugs



1. 파일 삭제

```
git rm yarn.lock
git rm package-lock.json
```

- 이 명령어 들을 치셔서  우선은 yarn 파일은 삭제

-  heroku logs --tail 했는데  서버가 죽어있으면  heroku restart

2. Procfile  file root directory에 만들기  

```
web: node server/index.js
```

3. ffmpeg 를  헤로쿠 서버에 적용

```
heroku buildpacks:add https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git
```

4. 다시  heroku를 deploy

```
git add .git commit -am " redeploy"
git push heroku master
```





