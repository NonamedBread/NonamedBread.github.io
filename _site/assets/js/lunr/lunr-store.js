var store = [{
        "title": "NFT 개발하기(Klaytn)",
        "excerpt":"클레이튼 개발환경에서 NFT 개발 1. 컴파일 먼저 Klayrn IDE에 접속하여 새로운 프로젝트를 만들고 파일을 생성한 후 컴파일 한다. 프로젝트 이름은 BreadNFT라고 지었으며 파일이름은 Bread.sol로 만들었다. 그 후 KIP-17을 사용할 것이기 때문에 ERC721부분을 KIP17로 수정한다 contract MyNFTs is KIP17Full, Ownable { using Counters for Counters.Counter; Counters.Counter private _tokenIds; // ERC721을 KIP17Full로...","categories": ["Klaytn"],
        "tags": ["Klaytn"],
        "url": "/klaytn/Klaytn_NFT/",
        "teaser": null
      },{
        "title": "MySQL CLI",
        "excerpt":"SHOW DATABASES DATABASE를 조회 USE 데이터베이스명 현재 사용중인 DATABASE를 변경 SELECT DATABASE() 현재 사용중인 DATABASE를 확인 SHOW TABLES DATABASE에 추가 되어 있는 테이블을 확인 DESC 테이블명 테이블 scheme를 확인 테이블명 변경 단일 테이블 이름 변경 RENAME TABLE old_table TO new_table; 단일 테이블 이름 변경 (ALTER) ALTER TABLE old_table RENAME new_table;...","categories": ["MySQL"],
        "tags": ["MySQL"],
        "url": "/mysql/MYSQL_CLI/",
        "teaser": null
      },{
        "title": "MySQL 세팅",
        "excerpt":"MySQL 설치 Ubuntu sudo apt-get upadte sudo apt-get install mysql-server macOS brew install mysql brew info mysql MySQL 접속 비밀번호 비어있는 경우 mysql -u root 비밀번호 설정한 경우 mysql -u root -p 비밀번호 변경 ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'yourPassword'; 비밀번호 변경 참고 SQL GUI Support Tool MySQL...","categories": ["MySQL"],
        "tags": ["MySQL"],
        "url": "/mysql/MySQL%EC%84%B8%ED%8C%85/",
        "teaser": null
      },{
        "title": "1.요구사항 확인 1~5",
        "excerpt":"1. 소프트웨어 생명 주기 소프트웨어 생명 주기(Software Life Cycle) 소프트웨어를 개발하기 위한 과정을 각 단계별로 나눈 것 대표 모형 폭포수 모형 프로토타입 모형 나선형 모형 애자일 모형 폭포수 모형(Waterfall Model, 원형 모형) 각 단계를 확실히 매듭짓고 다음 단계를 진행하는 개발 방법론 전통적인 소프트웨어 생명 주기 모형 프로토타입 모형(Prototype Model, 원형...","categories": ["EIP_PS"],
        "tags": ["EIP_PS"],
        "url": "/eip_ps/%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD%ED%99%95%EC%9D%B800/",
        "teaser": null
      },{
        "title": "1.요구사항 확인 6~10",
        "excerpt":"6. 요구사항 정의 요구사항의 개념을 정리해 두는것이 좋음 요구사항 소프트웨어가 어떤 문제를 해결하기 위해 제공하는 서비스에 대한 설명과 운영되는데 필요한 제약 조건 요구사항의 유형 기능 요구사항(Functional requirements) 비기능 요구사항(Non-functional requirements) 사용자 요구사항(User requirements) 시스템 요구사항(System requirements) 기능 요구사항(Functional requirements) 기능이나 수행과 관련된 요구사항 비기능 요구사항(Non-functional requirements) 품질이나 제약사항과 관련된 요구사항...","categories": ["EIP_PS"],
        "tags": ["EIP_PS"],
        "url": "/eip_ps/%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD%ED%99%95%EC%9D%B801/",
        "teaser": null
      },{
        "title": "1.요구사항 확인 11~15",
        "excerpt":"11. UML - 관계(Relationship) 관계(Relationships) 사물과 사물 사이의 연관성을 표현하는 것 관계의 종류 연관 관계 집합 관계 포함 관계 일반화 관계 의존 관계 실체화 관계 개별적인 개념과 표현 방법을 확실히 숙지 연관(Association) 관계 2개 이상의 사물이 서로 관련되어 있는 관계 실선으로 연결하여 표현 방향성은 화살표로 표현 양방향 관게는 실선으로만 연결...","categories": ["EIP_PS"],
        "tags": ["EIP_PS"],
        "url": "/eip_ps/%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD%ED%99%95%EC%9D%B802/",
        "teaser": null
      },{
        "title": "1.요구사항 확인 16~20",
        "excerpt":"16. 시퀀스(Sequence) 다이어그램 구성 요소 액터(Actor) : 시스템으로부터 서비스를 요청하는 외부 요소로, 사람이나 외부 시스템을 의미 객체(Object) : 메시지를 주고받는 주체 생명선(Lifeline) : 객체가 메모리에 존재하는 기간으로, 객체 아래쪽에 점선을 그어 표현// 객체 소멸이 표시된 기간까지 존재 실행 상자(Active Box, 활성 상자) : 객체가 메시지를 주고 받으며 구동되고 있음을 표현...","categories": ["EIP_PS"],
        "tags": ["EIP_PS"],
        "url": "/eip_ps/%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD%ED%99%95%EC%9D%B803/",
        "teaser": null
      },{
        "title": "1.요구사항 확인 21~30",
        "excerpt":"21. S/W 공학의 발전적 추세 소프트웨어 재사용(Software Reuse) 이미 개발되어 인정받은 소프트웨어를 다른 소프트웨어 개발이나 유지에 사용 소프트웨어 재사용 방법 합성 중심(Composition-Based) : 전자 칩과 같은 소프트웨어 부품, 즉 블록을 만들어서 끼워 맞춰 소프트웨어를 완성시키는 방법, 블록 구성 방법이라고도 함 생성 중심(Generation-Based) : 추상화 형태로 써진 명세를 구체화하여 프로그램을 만드는...","categories": ["EIP_PS"],
        "tags": ["EIP_PS"],
        "url": "/eip_ps/%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD%ED%99%95%EC%9D%B804/",
        "teaser": null
      },{
        "title": "1.요구사항 확인 오답노트",
        "excerpt":"문제 1 프로토타입 모형(Prototype Model)에 대해 간략히 서술 2 소프트웨어 개발 방법론의 바탕이 되는 것으로, 소프트웨어를 개발하기 위한 설계, 운용, 유지보수 등의 과정을 단게별로 나눈것 3 고객의 요구사항 변화에 유연하게 대응할 수 있도록 일정한 주기를 반복하며 개발 4 수시로 발생하는 고객의 요구사항에 유연하게 대응하기 위해 고객의 참여와 개발 과정의 반복을...","categories": ["EIP_PS"],
        "tags": ["EIP_PS","정처기 오답노트"],
        "url": "/eip_ps/%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD%ED%99%95%EC%9D%B8_%EC%98%A4%EB%8B%B5%EB%85%B8%ED%8A%B8/",
        "teaser": null
      },{
        "title": "블록체인과 암호화폐",
        "excerpt":"암호화폐의 화페적 기능 화폐의 기능을 하기 위해서는 교환의 매개체, 가치척도의 기능, 가치 저장의 기능이 있어야 한다 그렇다면 암호화폐는 화페의 기능을 충족 하는가?? 비트코인으로 예를 들자면 엘살바도르에서 법정화폐로 쓰이거나 채굴을 통해 불안정하지만 기능을 한다고 생각한다 이러한 불안정한 암호화폐의 기능을 보안하기 위한 다양한 알트코인들이 다수 등장하고 있다. 자료구조로써의 블록체인 블록체인의 핵심은 인터넷상에...","categories": ["Blockchain_theory"],
        "tags": ["Blockchain_theory"],
        "url": "/blockchain_theory/%EB%B8%94%EB%A1%9D%EC%B2%B4%EC%9D%B8%EA%B3%BC%EC%95%94%ED%98%B8%ED%99%94%ED%8F%90/",
        "teaser": null
      },{
        "title": "2.데이터 입출력 구현 31~40",
        "excerpt":"31. 데이터 전환 데이터 전환 현재 운영 중인 시스템의 데이터를 추출하고 이를 변환한 후 새로운 개발 시스템에서 사용할 수 있도록 적재하는 과정 데이터 전환 계획서 데이터 전환에 필요한 모든 계획을 기록하는 문서 32. 데이터 검증 데이터 검증 원천 시스템의 데이터를 목적 시스템의 데이터로 전환하는 과정이 정상적으로 수행 되었는지 여르를 확인하는...","categories": ["EIP_PS"],
        "tags": ["EIP_PS"],
        "url": "/eip_ps/%EB%8D%B0%EC%9D%B4%ED%84%B0%EC%9E%85%EC%B6%9C%EB%A0%A5%EA%B5%AC%ED%98%8400/",
        "teaser": null
      },{
        "title": "2.데이터 입출력 구현 41~50",
        "excerpt":"41. 관계형 데이터베이스의 제약 조건 - 키(Key) 키의 종류를 기억, 각 키에 대한 개념 키(Key) 데이터베이스에서 조건에 만족하는 튜플을 찾거나 순서대로 정렬할 때 기준이 되는 속성 키의 종류 후보키(Candidate Key) 기본키(Primary Key) 대체키(Alternate Key) 슈퍼키(Super Key) 외래키(Foreign Key) 후보키(Candidate Key) 속성들 중에서 튜플을 유일하게 식별하기 위해 사용되는 속성들의 부분집합 유일성(Unique)과...","categories": ["EIP_PS"],
        "tags": ["EIP_PS"],
        "url": "/eip_ps/%EB%8D%B0%EC%9D%B4%ED%84%B0%EC%9E%85%EC%B6%9C%EB%A0%A5%EA%B5%AC%ED%98%8401/",
        "teaser": null
      },{
        "title": "노드 & API",
        "excerpt":"블록체인에서의 노드 전 세계적으로 존재하는 서버들을 노드(Node)라고 한다. 여기서 블록체인의 노드는 트리 구조로 구성되어 있다 기능과 필요에 따라 종류와 형태가 구별되며, 노드는 트랜잭션을 제안하고 검증을 할 수 있으며, 합의를 이루고, 블록체인을 보호하기 위해 채굴(Mining)을 수행 프라이빗 블록체인(Private blockchain) 또는 하이퍼레저 패브릭의 멤버쉽 서비스 같은 폐쇄형 블록체인 네트워크에서는 계정 역할의 노드(Node)가...","categories": ["Blockchain_theory"],
        "tags": ["Blockchain_theory"],
        "url": "/blockchain_theory/Node&API/",
        "teaser": null
      },{
        "title": "8.SQL응용 118~",
        "excerpt":"118. SQL - DDL DDL(Data Define Language, 데이터 정의어) DB를 구축하거나 수정할 목적 DDL의 3가지 유형 명령어 기능 CREATE SCHEMA, DOMAIN, TABLE, VIEW, INDEX를 정의 ALTER TABLE예 떄한 쩡의를 뼌꼉 DROP SCHEMA, DOMAIN, TABLE, VIEW, INDEX를 삭제 크알드 CREATE SCHEMA 스키마를 정의하는 명령문 표기 형식 CREATE SCHEMA 스키마명 AUTHORIZATION 사용자_id;...","categories": ["EIP_PS"],
        "tags": ["EIP_PS"],
        "url": "/eip_ps/SQL%EC%9D%91%EC%9A%A900/",
        "teaser": null
      },{
        "title": "수제비 실기 출제예상 문제 정리",
        "excerpt":"대체 불가능 토큰(Non-fungible token; NFT) : 블록체인 기술을 이용해서 디지털 자산의 소유주를 증명하는 가상의 토큰(token) 메타버스(Metaverse) : 초월을 의미하는 단어와 세계, 우주를 의미하는 단어를 합성한 신조어로 현실을 디지털 기반의 가상 세계로 확장해 가상 공간에서 모든 활동을 할 수 있게 만드는 시스템 OUI(Organic User Interface) Facade (pattern) : 복잡한 시스템에 대하여...","categories": ["EIP_PS"],
        "tags": ["EIP_PS"],
        "url": "/eip_ps/%EC%88%98%EC%A0%9C%EB%B9%84%EC%A0%95%EB%A6%AC/",
        "teaser": null
      },{
        "title": "삼각형 판별하기",
        "excerpt":"세 변의 길이를 가지고 삼각형이 될 수 있는지 판별하는 알고리즘 제일 긴 한변의 길이가 나머지 두 변의 길이의 합보다 작거나 같아야 한다. function solution(a, b, c){ let answer = 'YES', max; let sum = a + b + c; if(a&gt;b) max=a; else max = b; if(c&gt;max) max = c; if...","categories": ["ALGORITHM"],
        "tags": ["ALGORITHM","Inflearn"],
        "url": "/algorithm/%EC%82%BC%EA%B0%81%ED%98%95%ED%8C%90%EB%B3%84%ED%95%98%EA%B8%B0/",
        "teaser": null
      },{
        "title": "세 수 중 최솟값",
        "excerpt":"조건문을 이용해 세 변수의 크기를 비교하여 문제 풀이    function solution(a, b, c){                 let answer;                 if (a &lt; b) answer = a;                 else answer = b;                 if (c &lt; answer) answer = c;                 return answer;             }  ","categories": ["ALGORITHM"],
        "tags": ["ALGORITHM","Inflearn"],
        "url": "/algorithm/%EC%84%B8%EC%88%98%EC%A4%91%EC%B5%9C%EC%86%9F%EA%B0%92/",
        "teaser": null
      },{
        "title": "WSL2 Jekyll 세팅",
        "excerpt":"WSL2 Jekyll 세팅 WSL2 Ubuntu Installation via Bash on Windows 10를 확인해 보면 WSL 환경 설정 밥법이 나와있다. WSL2 Ubuntu 20.04 LTS에서는 Ruby 2.7을 설치한다 Jekll on Windows Ruby 사전준비 레포지토리 목록 및 패키지를 업데이트 sudo apt-get update -y &amp;&amp; sudo apt-get upgrade -y $ sudo apt -y install make...","categories": ["WSL2"],
        "tags": ["WSL2","Blog","Jekyll"],
        "url": "/wsl2/WSL2_Jekyll%EC%84%A4%EC%B9%98/",
        "teaser": null
      },{
        "title": "WSL2 Ubuntu 설치",
        "excerpt":"Windows에 WSL2설치 Windows에 버전 확인 Window에 WSL2를 설치할려면 20H1 이상 버전이어야 하기 때문에 Windows + S를 누른 후 PC정보를 검색하여 버전을 확인한다. 버전이 낮다면 최신 버전으로 업데이트후에 진행하면 된다. DISM으로 WSL 기능 활성화 Windows + S 키로 Windows Terminal 이나 PowerShell을 검색한후 관리자로 실행한다 DISM(배포 이미지 서비스 및 관리) 명령어로...","categories": ["WSL2"],
        "tags": ["WSL2","Ubuntu"],
        "url": "/wsl2/WSL2_Ubuntu%EC%84%A4%EC%B9%98/",
        "teaser": null
      },{
        "title": "WSL2 Git & VScode",
        "excerpt":"Git WSL_git_docs 참고 Ubuntu 터미널에서 sudo apt-get install git 입력후 설치 혹은 Windows Git에서 설치 git config --global user.name \"Your Name\" git config --global user.email \"youremail@domain.com\" 을 입력하여 네입과 이메일 입력 제대로 입력하지 않으면 잔디가 심어지지 않는다 VScode WSL_VScode_docs 참고 Ubuntu 업데이트 sudo apt-get update Wget wget(웹 서버에서 콘텐츠를 검색하기...","categories": ["WSL2"],
        "tags": ["WSL2","Blog","Git","VScode"],
        "url": "/wsl2/WSL2_git/",
        "teaser": null
      },{
        "title": "Blockchain Explorer",
        "excerpt":"결과 시연영상 깃헙 https://github.com/NonamedBread/BTC2nd-04 Etherscan 이번 프로젝트는 이더스캔이라는 이더리움 익스플로러를 벤치마킹 하여 진행하는 웹 프로젝트 이다. What is Etherscan? 이더리움 블록체인에서 일어나고 있는 모든 활동과 정보를 쉽게 검색할 수 있는 사이트이다. 이더스캔에서는 이더리움의 블록 생성 내역, 트랜잭션 조회, 지갑 정보 조회 등 블록체인에서 일어나고 있는 모든 활동과 정보를 쉽게 검색할...","categories": ["Project"],
        "tags": ["Project","Blockchain"],
        "url": "/project/blockchainExplorer00/",
        "teaser": null
      },{
        "title": "연필 개수",
        "excerpt":"        연필 1다스는 12자루 학생 1인당 1자루씩 나누어 준다고 할때 필요한 다스 수       Math.floor() : 소수점 이하를 버림   Math.ceil() : 소수점 이하를 올림   Math.round() : 소수점 이하를 반올림    function solution(a){                 let answer = Math.ceil(a/12);                                  return answer;             }  ","categories": ["ALGORITHM"],
        "tags": ["ALGORITHM","Inflearn"],
        "url": "/algorithm/%EC%97%B0%ED%95%84-%EA%B0%9C%EC%88%98/",
        "teaser": null
      },{
        "title": "최솟값 구하기",
        "excerpt":"7개의 수가 주어지면 그 숫자 중 가장 작은 수 자바스크립트에는 수의 최대 한도 이상으로 값을 저장해 값이 손실되는 것을 방지하기 위해서 두가지의 상수가 존재한다. 첫번째는 MAX_SAFE_INTEGER이고, 두번째로는 MAX_VALUE MAX_SAFE_INTEGER : 더 큰 수를 변수에 집어 넣어도 저장은 되지만 정확하게 보관할 수 없다 integer : 값의 실제 한도를 나타낸다. 그 한도를...","categories": ["ALGORITHM"],
        "tags": ["ALGORITHM","Inflearn"],
        "url": "/algorithm/%EC%B5%9C%EC%86%9F%EA%B0%92_%EA%B5%AC%ED%95%98%EA%B8%B0/",
        "teaser": null
      },{
        "title": "내장함수로 배열 최솟값, 최댓값",
        "excerpt":"Math.min 인자로 넘겨줘야지 객체로 넘겨주면 안됨 …같은 전개 연산자를 사용해야 된다 arr[0], arr[1] , … arr[6]이런 식으로 펼쳐줌 function solution(arr){ let answer = Math.min(...arr); // console.log(Math.max(...arr)); return answer; } let arr = {5, 7, 1, 3, 2, 9, 11}; console.log(solution(arr)); Math.min.apply 첫번째 인자로 객체(this) 두번째 인자로 배열을 넘긴다. function solution(arr){...","categories": ["ALGORITHM"],
        "tags": ["ALGORITHM","Inflearn"],
        "url": "/algorithm/Math.min/",
        "teaser": null
      },{
        "title": "암호화와 합의 알고리즘",
        "excerpt":"암호화 기술과 보안 블록체인은 분산처리와 동시에 암호화 기술을 적용하여 높은 보안성을 확보한 기술이다. 블록체인에 적용되는 암호화 기술에는 해시 함수, 전자 서명, 공개키 암호화 알고리즘 등이 있으며 블록체인 플랫폼에는 51% 공격, 이중 지불 문제(Double Spending) 등 블록체인의 취약점을 노리는 다양한 공격 방식이 있다. 기존 시스템과 블록체인 보안적 특징 기존 데이터베이스와 블록체인의...","categories": ["Blockchain_theory"],
        "tags": ["Blockchain_theory"],
        "url": "/blockchain_theory/%EC%95%94%ED%98%B8%ED%99%94%EC%99%80-%ED%95%A9%EC%9D%98-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98/",
        "teaser": null
      },{
        "title": "일곱 난쟁이",
        "excerpt":"일곱 난쟁이 전체 인덱스의 합에서 두개의 인덱스의 합을 뺏을떄 100이 되게 하는 두개의 인덱스를 찾는 문제 reduce 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다. MDN : reduce slice, spilice 차이 slice 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 원본 배열은 바뀌지...","categories": ["ALGORITHM"],
        "tags": ["ALGORITHM","Inflearn"],
        "url": "/algorithm/%EC%9D%BC%EA%B3%B1-%EB%82%9C%EC%9F%81%EC%9D%B4/",
        "teaser": null
      },{
        "title": "홀수",
        "excerpt":"홀수 배열로 주어진 자연수에서 홀수들의 합을 구하고 최솟값을 구하는 문제 for …of 명령문 반복가능한 객체에 대해서 반복하고 각 배렬 속성값에 대해 실행되는 문이 있는 사용자 정의 반복 후크롤 호출하는 루프를 생성 MDN : for…of function solution(arr) { let answer = []; let sum = 0; let min = Number.MAX_SAFE_INTEGER; for(let...","categories": ["ALGORITHM"],
        "tags": ["ALGORITHM","Inflearn"],
        "url": "/algorithm/%ED%99%80%EC%88%98/",
        "teaser": null
      },{
        "title": "A를 #으로",
        "excerpt":"A를 #으로 문자열에서 A를 찾아 #으로 바꾸는 문제 for문 빈 문자 객체에 for문을 이용하여 하나씩 추가하는 방법으로 풀이 function solution(str) { let answer = '' for(let i of str){ if(i==='A'){ answer += '#'; } else answer += i; } return answer; } let str = 'BANANA' console.log(\"sol\",solution(str)); replace 어떤 패턴에...","categories": ["ALGORITHM"],
        "tags": ["ALGORITHM","Inflearn"],
        "url": "/algorithm/A%EB%A5%BC-%EC%9C%BC%EB%A1%9C/",
        "teaser": null
      },{
        "title": "문자 찾기",
        "excerpt":"문자 찾기 for문 찾으려는 문자와 같으면 객체의 갯수를 증가 시켜 일치하는 문자의 갯수를 반환한다. function solution(str, str1) { let answer = 0; for (let i of str) { if (i === str1) { answer++; } } return answer; } let str = 'COMPUTERPROGRAMMING' console.log(\"sol\", solution(str, 'R')); split String 객체를 지정한...","categories": ["ALGORITHM"],
        "tags": ["ALGORITHM","Inflearn"],
        "url": "/algorithm/%EB%AC%B8%EC%9E%90%EC%B0%BE%EA%B8%B0/",
        "teaser": null
      },{
        "title": "가장 긴 문자열",
        "excerpt":"가장 긴 문자열 문자의 길이를 객체와 비교한 후 객체에 저장된 숫자보다 크다면 answer에 문자를 저장하고 반환. function solution(str) { let answer = '' let max = Number.MIN_SAFE_INTEGER; for (let i of str) { if (max &lt; i.length) { max = i.length; answer = i; } } return answer; } let...","categories": ["ALGORITHM"],
        "tags": ["ALGORITHM","Inflearn"],
        "url": "/algorithm/%EA%B0%80%EC%9E%A5-%EA%B8%B4-%EB%AC%B8%EC%9E%90%EC%97%B4/",
        "teaser": null
      },{
        "title": "대문자 찾기",
        "excerpt":"대문자 찾기 for문 원래 문자와 toUpperCase를 이용해 변환한 문자가 같으면 answer의 갯수를 증가시킨 뒤 반환한다. MDN : toUpperCase function solution(str) { let answer = 0 for(let i of str){ if(i === i.toUpperCase()) answer++; } return answer; } let str = 'KoreaTimeGood' console.log(\"sol\", solution(str)); ASCII코드 대문자 ASCII코드는 65~90, 소문자 ASCII코드는 97~122...","categories": ["ALGORITHM"],
        "tags": ["ALGORITHM","Inflearn"],
        "url": "/algorithm/%EB%8C%80%EB%AC%B8%EC%9E%90-%EC%B0%BE%EA%B8%B0/",
        "teaser": null
      },{
        "title": "대문자 통일",
        "excerpt":"대문자로 통일   toLowerCase를 사용한 객체와 비교하여 같을 경우 toUpperCase를 사용하여 객체에 저장하여 반환    function solution(str) {           let answer = ''           for(let i of str){               if(i === i.toLowerCase())              answer += i.toUpperCase();              else answer +=  i           }           return answer;         }         let str = 'itisTimeTostudy'         console.log(\"sol\", solution(str));  ","categories": ["ALGORITHM"],
        "tags": ["ALGORITHM","Inflearn"],
        "url": "/algorithm/%EB%8C%80%EB%AC%B8%EC%9E%90%EB%A1%9C-%ED%86%B5%EC%9D%BC/",
        "teaser": null
      },{
        "title": "대소문자 변환",
        "excerpt":"대소문자 변환  if문을 사용하여 대문자일 경우 소문자로 변환 그렇지 않을 경우 대문자로 변환   function solution(str) {         let answer = ''         for (let i of str){             if(i === i.toUpperCase()) answer += i.toLowerCase();             else answer += i.toUpperCase();         }          return answer;         }         let str = 'StuDY'         console.log(\"sol\", solution(str));  ","categories": ["ALGORITHM"],
        "tags": ["ALGORITHM","Inflearn"],
        "url": "/algorithm/%EB%8C%80%EC%86%8C%EB%AC%B8%EC%9E%90-%EB%B3%80%ED%99%98/",
        "teaser": null
      },{
        "title": "가운데 문자 출력",
        "excerpt":"가운데 문자 출력 문자열의 길이가 홀수일 경우와 짝수일 경우를 나눠서 푸는 문제이다. 처음 문제를 풀때 for문과 if문으로 문제를 해결할려고 했으나 어려워 substring으로 문제를 해결했다. for문으로도 문제를 해결할 수 있을것 같은데 좀 더 도전해 봐야 겠다. substring string 객체의 시작 인덱스로 부터 종료 인덱스 전 까지 문자열의 부분 문자열을 반환합니다. str.substring(indexStart[,...","categories": ["ALGORITHM"],
        "tags": ["ALGORITHM","Inflearn"],
        "url": "/algorithm/%EA%B0%80%EC%9A%B4%EB%8D%B0-%EB%AC%B8%EC%9E%90-%EC%B6%9C%EB%A0%A5/",
        "teaser": null
      },{
        "title": "Jekyll에서 Gatsby로",
        "excerpt":"Jekyll 에서 Gatsby로 직접 만드는 블로그에 대한 로망으로 아무것도 모른 체 사용자가 많다는 이유로 Github Page와 Jekyll로 블로그를 시작했다… 하지만 프론트엔드 공부와 프로젝트를 리액트로 진행하며 Gatsby로 만든 블로그에 공부한 부분을 직접 적용해 보면 좋겠다는 생각이 들었고 요새 코테공부와 이력서만 넣느라 우울감이 올라왔는데 환기 겸 가볍게 진행해 보려고 한다. 블로그 마이그레이션이...","categories": ["Project"],
        "tags": ["Project","Gatsby","Blog"],
        "url": "/project/GatsbyBlog00/",
        "teaser": null
      },{
        "title": "중복문자제거",
        "excerpt":"중복문자제거 indexOf를 사용하여 중복되는 문자를 제거하는 문제 indexOf 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환하는 메서드 MDN : indexOf function solution(str) { let answer = \"\"; console.log(str.indexOf(\"k\")); for (let i = 0; i &lt; str.length; i++) { //console.log(str[i], i, str.indexOf(str[i])) if (i ===...","categories": ["ALGORITHM"],
        "tags": ["ALGORITHM","Inflearn"],
        "url": "/algorithm/%EC%A4%91%EB%B3%B5%EB%AC%B8%EC%9E%90%EC%A0%9C%EA%B1%B0/",
        "teaser": null
      },{
        "title": "가위 바위 보",
        "excerpt":"가위 바위 보 두 사람(A, B)이 가위바위보 게임을 해서 이긴 사람을 출력하고 비기면 D를 출력하는 문제 경우를 따질때에는 기준을 잘잡아야 된다. function solution(str, str1) { let answer = \"\"; for (let i = 0; i &lt; str.length; i++) { console.log(str[i], str1[i]); if (str[i] === str1[i]) answer += \"D \"; else...","categories": ["ALGORITHM"],
        "tags": ["ALGORITHM","Inflearn"],
        "url": "/algorithm/%EA%B0%80%EC%9C%84-%EB%B0%94%EC%9C%84-%EB%B3%B4/",
        "teaser": null
      },{
        "title": "보이는 학생",
        "excerpt":"보이는 학생 학생들의 키를 입력 받아 맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수를 구하는 문제 function solution(str) { let sum = 1; let max = str[0]; for (let i = 1; i &lt; str.length; i++) { if (str[i] &gt; max) { max = str[i]; sum += 1;...","categories": ["ALGORITHM"],
        "tags": ["ALGORITHM","Inflearn"],
        "url": "/algorithm/%EB%B3%B4%EC%9D%B4%EB%8A%94-%ED%95%99%EC%83%9D/",
        "teaser": null
      },{
        "title": "점수계산",
        "excerpt":"점수계산 문제를 맞혔을 경우 1점으로 계산하고 연속으로 문제의 답이 맞는 경우 가산점 1점을 부여하는 문제 내풀이 function solution(str) { let answer = 0; let cnt = 0; for (let i = 0; i &lt; str.length; i++) { if (str[i] === 1) { answer++; if (str[i] === str[i - 1]) cnt++;...","categories": ["ALGORITHM"],
        "tags": ["ALGORITHM","Inflearn"],
        "url": "/algorithm/%EC%A0%90%EC%88%98%EA%B3%84%EC%82%B0/",
        "teaser": null
      },{
        "title": "중복단어제거",
        "excerpt":"중복단어제거 indexOf와 filter를 사용하여 중복되는 단어를 제거하는 문제 filter filter 함수는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다 문제에서 indexOf의 인덱스번호와 filter의 인덱스번호가 같으면 True를 반환 MDN : filter function solution(str) { let answer; // console.log(str.indexOf(\"good\")); answer = str.filter(function (v, i) { // console.log(v, i); return str.indexOf(v)...","categories": ["ALGORITHM"],
        "tags": ["ALGORITHM","Inflearn"],
        "url": "/algorithm/%EC%A4%91%EB%B3%B5%EB%8B%A8%EC%96%B4%EC%A0%9C%EA%B1%B0/",
        "teaser": null
      },{
        "title": "큰 수 출력하기",
        "excerpt":"큰 수 출력하기 수 배열에서 첫 수는 무조건 출력하고 바로 앞 수 보다 큰 수만 출력하는 문제 function solution(str) { let answer = []; answer.push(str[0]); for (let i = 1; i &lt; str.length; i++) { console.log(str[i], i); if (str[i] &gt; str[i - 1]) answer.push(str[i]); } return answer; } let str...","categories": ["ALGORITHM"],
        "tags": ["ALGORITHM","Inflearn"],
        "url": "/algorithm/%ED%81%B0-%EC%88%98-%EC%B6%9C%EB%A0%A5%ED%95%98%EA%B8%B0/",
        "teaser": null
      }]
