---
published: true
title:  "Blockchain Explorer"
excerpt: ""

categories:
  - Project
tags:
  - [Project,Blockchain]

toc: true
toc_sticky: true
 
date: 2022-05-15
last_modified_at: 2022-05-15
---

# 결과

## 시연영상
<image src = "https://user-images.githubusercontent.com/93482597/168478733-f6457155-2107-4a45-900b-fe63be2df64f.gif" />

## 깃헙

<https://github.com/NonamedBread/BTC2nd-04>

# Etherscan

<image src = "https://user-images.githubusercontent.com/93482597/170171146-2d8e5e4f-cc79-49d5-b992-9a7f5142beac.png"/>

이번 프로젝트는 이더스캔이라는 이더리움 익스플로러를 벤치마킹 하여 진행하는 웹 프로젝트 이다. 

## What is Etherscan?

이더리움 블록체인에서 일어나고 있는 모든 활동과 정보를 쉽게 검색할 수 있는 사이트이다. 이더스캔에서는 이더리움의 블록 생성 내역, 트랜잭션 조회, 지갑 정보 조회 등 블록체인에서 일어나고 있는 모든 활동과 정보를 쉽게 검색할 수 있다.

# Ye Seuli`s Explorer 프로젝트 소개

## Main page

<image src = "https://user-images.githubusercontent.com/93482597/170177010-e23144de-cd1b-4f72-8a88-cfb3f6a1789c.png"/>

```Javascript
function App() {

  return (
    <BrowserRouter>
      <Header />  // 헤더 컴포넌트
      <Routes >
        <Route path="/" element={<Front/>} />  // 메인화면
        <Route path="/getBlock" element={<Getblock/>}/>  // 블럭정보
        <Route path="/getTransaction" element={<GetTransaction/>}/>  // 트랜잭션 정보
        <Route path="/address" element={<Address/>}/> // 지갑주소 검색
        <Route path="/blockHash" element={<BlockHash/>}/>  // 블록 해쉬 검색
        <Route path="/transactionHash" element={<TransactionHash/>}/> // 트랜잭션 해쉬 검색
      </Routes>
    </BrowserRouter>
  );
}
```

> 컴포넌트 구성 

메인페이지 화면 구성은 헤더부분과 검색창과 최신 정보를 보여주는 두개의 컴포넌트로 구성하였다 여기서 검색창, 최신 블록정보와 트랜잭션을 확인하는 컴포넌트를 각각 구성하여 하나의 컴포넌트로 구성하였다.

```Javascript
function Front(){

    return(
      <>
      <Searchbar/>  // 서치바 컴포넌트
        <div className='front-container'>
          <div className='container'>
              <Block />  //LatestBlock 컴포넌트
          </div>
          <div className='container'>
              <Transaction/>  // LatestTransaction 컴포넌트
          </div>
        </div>
      </>
    )
}

export default Front;
```
> 메인페이지 구성

### Latest page

Latest 페이지는 이더리움 블록체인에서 일어나고 있는 최신 정보를 확인할 수 있는 페이지 이다. Axios를 사용하여 API와 통신하였으며 useState를 사용하여 객체에 저장한 다음 map을 이용하여 JSON 데이터를 UI상에서 보여주었다.
또한 블록넘버와 트랙잭션 해쉬를 클릭하면 해당 정보를 상세정보를 확인할 수 있도록 Link를 사용하였다.

>Latest Tx 페이지 구현을 하는 도중에 slice 오류가 나서 문제를 핸들링 하는데 시간이 오래 거렸는데 API를 통해 들어오는 데이터를 확인해 보니 From 부분에 컨트렉트 지갑이 있어 Null값이 들어오고 있었다 이부분을 따로 처리해 줬더니 해결이 됐다.

```Javascript
function Block() {

  const [latestBlocks, setLatestBlocks] = useState([]);

  useEffect(() => {
    axios
      .get("http://218.147.82.106:20000/getLastestBlocks?count=7")
      .then((response) => {
        setLatestBlocks(response.data);
      });
  }, []);

                    ...
 {latestBlocks.map((e) => (
        <div className="block-category">
          <div className="blockNumber">
            <Link to="/getBlock" state={e.Number}>{e.Number}</Link>//링크를 사용하여 블록넘버 객체를 넘김
          </div>
          <div className="blockMiner">
            {e.Miner.slice(0, 7) + "..." + e.Miner.slice(-3)}
          </div>

                ...

```

> Latest Block 컴포넌트

### Search bar

Search bar에서는 Block Hash, Tx Hash, Address를 입력하여 검색하면 해당 상세내용과 지갑 정보를 조회할 수 있도록 구현 하였다.

```Javascript
// 해당 값을 입력하고 버튼을 선택하면 해당 컴포넌트로 바뀌게 구현
              ...
<MenuItem>
  <Link to="/address" state={searchText}>
    Address   
  </Link>
</MenuItem>

<MenuItem>
  <Link to="/blockHash" state={searchText}>
    Block Hash
  </Link>
</MenuItem>

<MenuItem>
  <Link to="/transactionHash" state={searchText}>
    Tx Hash
  </Link>
</MenuItem>

             ...
          
```

# Get page

getBlock, getTransaction page는 메인 페이지에서 Block Number와 Tx Hash값을 클릭하면 해당 상세내용을 알려주는 페이지 이다.

## getBlock

<image src = "https://user-images.githubusercontent.com/93482597/170237971-c948bc12-e435-4142-ba0d-12773ea955c8.png"/>


getBlock 컴포넌트는 메인 화면에서 Block Number를 클릭하면 해당 객체를 useLocation을 사용하여 전달받고 그 값을 엔드포인트로 사용하여 API에서 해당 값을 가져오는 페이지 이다.

> getTransaction 컴포넌트도 같은 방식을 사용하였다.

```Javascript

              ...

function Getblock() {
  const blockNum = useLocation();  // 블록넘버 객체를 받음

  const [getBlock, setGetBlock] = useState([]);
  const [getDifficulty, setGetDifficulty] = useState("");

   // 객체를 사용하요 엔드포인트 지정
  const url = "http://218.147.82.106:20000/getBlock?number=" + blockNum.state; 
  // const url = "http://218.147.82.106:20000/getBlock?number=12259937"
  useEffect(() => {
    axios.get(url).then((response) => {
      setGetBlock(response.data[0]);
    });
  }, []);

              ...


  ```

# Search page

## address

Address 컴포넌트는 지갑에 있는 모든 내역을 보여주기 때문에 보여줘야 할 정보가 많기 때문에 react-js-pagination라이브러리를 사용하여 pagination을 구현하였다.

```Javascript
  const [postPerPage] = useState(13) //페이지당 리스트 수 (한 페이지에 13개씩 보여줌)
  const indexOfLastPost = page * postPerPage ; // 마지막 리스트 = 현재 페이지 * 페이지당 리스트
  const indexOfFirstPost = indexOfLastPost - postPerPage ; // 첫번째 리스트 = 마지막 리스트 - 페이지당 리스트
  const currentPosts = getAddress.slice(indexOfFirstPost, indexOfLastPost) // 현재 페이지에 보여줄 리스트
  const totalcount = getAddress.length / postPerPage ; // 페이지 수 = 총 리스트 수 / 페이지당 리스트 

  ...

    <Pagination
            activePage={page}  // 현재 페이지
            itemsCountPerPage={1}
            totalItemsCount={totalcount}
            pageRangeDisplayed={10}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={handlePageChange}
    />

  ...
```

blockHash, transactionHash 컴포넌트 들은 위에서 설명한 다른 컴포넌트와 구조가 비슷하다. 

# 회고

- 글을 쓰면서 코드를 둘러보니 컴포넌트간 객체를 넘겨주는 부분에서 엔드포인트를 객체로 넘겨 주었으면 환경에 따라서 엔드포인트를 변경 할 때(Swagger, Local) 좀 더 편하게 개발할 수 있었을것 같다는 생각이 들었다. 
- API통신할 때 JSON 배열에 null 값이 있으면 slice 할때 오류가 발생하는 부분과 Pagination 부분은 잘 기억해 둬야 겠다
- 메인 페이지에서 최신 정보를 더 볼 수 있는 버튼과 서치바를 버튼으로 구현 했는데 이부분은 리팩토링을 통해 다시 구현해 보면 좋을것 같다.
- 프로젝트가 시작하자 마자 한분이 하차 하셔서 혼자 프론트를 진행하여 백엔드 부분을 해보지 못한것은 아쉬웠다 후에 API제작하여 연동하여 보면 좋을것 같다.
  