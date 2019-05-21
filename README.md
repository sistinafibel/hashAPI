HashSimpleAPI
==================
해시값을 json타입으로 retrun합니다.
상세 파라미터는 하단 내용을 참조하여 사용해주세요.

바로사용하기
-----------
WEB API (GET) :: 


실행방법
--------
<pre><code>#node 설치후
> npm install
> node src/index.js
</code></pre>

로컬 호출예제
--------
JSON : http://127.0.0.1:3081/{hashtype}/{text}/{encodingtype}

요청변수
--------
| RetrunName | 설명 | 파라미터 | 필수 유무 |
| ------ | ------ | ------ | ------ |
| hashtype | hash타입 선택 | md5 , sha1 , sha256 등 crypto에서 지원하는 모든것을 지원 | 필수 |
| text | 스트링 형태의 평문값 | ex) test  | 필수 |
| encodingtype | 인코딩 변환 타입 | base64 , hex | 필수아님 (기본값 hex)|


변환타입
--------
| Type | 설명 | 수치 |
| ------ | ------ |  ------ |
| hashvalue | 변환된 해시값을 표출합니다. | 172,212 |
| generalvalue | 변환되기전 유저가 입력한 평문값을 표출합니다 | 170,000 |
| type | 인코딩 변환 타입입니다. | 300억 |


출력결과
--------  
| RetrunName | 설명 | 결과 |
| ------ | ------ | ------ |
| ubd | UDB수치를 리턴합니다. | ex) 1복동 |
| tickets | 사용자가 보낸 티켓수치를 리턴합니다. | 사용자 price 값 |
| type | 이용자가 요청한 타입을 리턴합니다. | 사용자 Type값 |


여담
--------
![IMAGE ALT TEXT](https://user-images.githubusercontent.com/36251104/57471764-dbe7bf80-72c6-11e9-8c86-ac3f5224757c.png)<br>
술 한잔 마셨습니다.. 코딩이 잘 안되도 좋습니다. 하지만 UBD 계산기 하나만 <br>
기억해주세요. 진심을 다해 전합니다. 개발이 별로 일수있습니다.<br>
밤낮으로 고민하고 개발했습니다..최선을 다했고 열심히 했습니다.<br>
진심이 느껴지길 바랍니다. 고맙습니다..

