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
        "title": "암호화 & 합의 알고리즘",
        "excerpt":"암호화 기술과 보안 블록체인은 분산처리와 동시에 암호화 기술을 적용하여 높은 보안성을 확보한 기술이다. 보안성으로 인해 현재 금융업에서 다양한 분야에 빠르게 적용되고 있다 블록체인 보안적 특징 기존 데이터베이스와 차이점 무결성 기존 데이터 베이스와 다르게 블록체인은 분산 시스템이기 때문에 각 노드들이 가지고 있는 사본을 통해 다른 노드에 문제가 발생해도 전체 블록체인 네트워크의...","categories": ["Blockchain_theory"],
        "tags": ["Blockchain_theory"],
        "url": "/blockchain_theory/Encryption_consensus_algorithm/",
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
      }]
