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

