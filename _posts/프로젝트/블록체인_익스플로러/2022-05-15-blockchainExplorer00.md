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
      <Header />
      <Routes >
        <Route path="/" element={<Front/>} />
        <Route path="/getBlock" element={<Getblock/>}/>
        <Route path="/getTransaction" element={<GetTransaction/>}/>
        <Route path="/address" element={<Address/>}/>
        <Route path="/blockHash" element={<BlockHash/>}/>
        <Route path="/transactionHash" element={<TransactionHash/>}/>
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
      <Searchbar/>
        <div className='front-container'>
          <div className='container'>
              <Block />
          </div>
          <div className='container'>
              <Transaction/>
          </div>
        </div>
      </>
    )
}

export default Front;
```
> 메인페이지 구성

### Latest page

Latest 페이지는 이더리움 블록체인에서 일어나고 있는 최신 정보를 확인할 수 있는 페이지 이다. Axios를 사용하여 API와 통신하였으며 useState를 사용하여 객체에 저장한 다음에 map을 이용하여 JSON 데이터를 UI상에서 보여주었다.
또한 블록넘버와 트랙잭션 해쉬를 클릭하면 해당 정보를 상세정보를 확인할 수 있도록 Link를 사용하였다.

Latest Tx 페이지 구현을 하는 도중에 slice 오류가 나서 문제를 핸들링 하는데 시간이 오래 거렸는데 API를 통해 들어오는 데이터를 확인해 보니 From 부분에 컨트렉트 지갑이 있어 Null값이 들어오고 있었다 이부분을 따로 처리해 줬더니 해결이 됐다.

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
            <Link to="/getBlock" state={e.Number}>{e.Number}</Link>
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