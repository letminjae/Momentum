# Momentum

## 바닐라 JS 기본적인 문법들을 이용해 `Chrome의 Momentum 데스크톱 앱` 구현

<img src = "https://user-images.githubusercontent.com/96935557/194744551-e9850148-022a-4316-8d64-7a9b8f9a6cd9.gif">

### clock.js

    - new Date()와 setInterval 타이머 이용하여 간단한 시계 기능 구현.
    - String.padStart()를 통해 Date 시간 정제.

    ```js
    function getClock(){
        const date = new Date();
        const hours = String(date.getHours()).padStart(2,"0");
        const minutes = String(date.getMinutes()).padStart(2,"0");
        const seconds = String(date.getSeconds()).padStart(2,"0");
        clock.innerText = `${hours}:${minutes}:${seconds}`;
    }
    ```

### greeting.js

    - LocalStorage에 username 저장. 새로고침 후에도 username 정보 유지
    - `element.classList.add/remove()`를 통해 LocalStorage에 유저 정보 있을 시 HTML 화면 전환

### todo.js

    - CRUD 구현하여 할일 리스트 배열 LocalStorage에 저장. 새로고침 후에도 할일 정보 유지.
    
    ```js
    //toDo 리스트 명세서
    todos = [
      {
        text: '할일'(string),
        id: 'Date.now()'(string),
      }
    ];
    ```

### weather.js

    - `https://api.openweathermap.org`의 날씨 OPEN API를 통해 현재 위치 날씨 구현
    - JS에서 기본 제공하는 geolocation API 사용

    ```js
    // 사용자의 현재위치 가져오기
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
    ```
