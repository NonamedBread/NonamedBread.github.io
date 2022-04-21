---
published: true
title:  "NFT 개발하기(Klaytn)"
excerpt: ""

categories:
  - Klaytn
tags:
  - [Klaytn]

toc: true
toc_sticky: true
 
date: 2022-02-08
last_modified_at: 2022-02-08
---

# 클레이튼 개발환경에서 NFT 개발
## 1. 컴파일

먼저 [Klayrn IDE](https://ide.klaytn.com/)에 접속하여 새로운 프로젝트를 만들고 파일을 생성한 후 컴파일 한다. 

![](https://images.velog.io/images/rbghks2102/post/b859e906-07fe-45a9-843d-db2042be06f1/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7,%202022-02-08%2018-47-29.png)
>프로젝트 이름은 BreadNFT라고 지었으며 파일이름은 Bread.sol로 만들었다.

그 후 KIP-17을 사용할 것이기 때문에 ERC721부분을 KIP17로 수정한다
```
contract MyNFTs is KIP17Full, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    // ERC721을 KIP17Full로 수정합니다.
    constructor() public KIP17Full("MyNFTs", "MNFT") {}

    function mintNFT(string memory tokenURI)
        public
        onlyOwner
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }
}
```

> 클레이튼 개발환경에서 NFT를 개발하기 위해서는 이더리움 개발환경에서 NFT를 개발할때 ERC-721을 이용하여 스마트 컨트렉트를 만들었던 것처럼 KIP-17을 사용해야 된다.

코드를 모두 작성하였으면 Solidity Compiler을 클릭하여 컴파일 진행한다.(Klaytn NFT Code 사용)

![](https://images.velog.io/images/rbghks2102/post/2d9bdbea-d800-41f0-aa31-a7f16ce11a18/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7,%202022-02-08%2018-57-05.png)

>컴파일러 버전은 0.5.6+commit.b259423e을 사용하고 언어는 솔리디티를 선택한다.

## 2. 배포

컴파일이 완료되면 Klaytn IDE 왼쪽창에 Deploy & run transactions를 클릭하여 배포를 진행 한다. 배포가 완료되면 콘솔창을 통해 확인할 수 있다.

![](https://images.velog.io/images/rbghks2102/post/7abd768d-cd51-454a-b7db-e237bc1f7f0d/ezgif.com-gif-maker%20(3).gif)
> 테스트 환경(Baobab)에서 배포를 할 것이기 때문에 환경을 Baobab으로 바꿔주고 ACCOUNT 부분에  배포할때 사용할 카이카스 계정의 공개키를 입력한다.

## 3. NFT확인
mintNFT에 임의의 수를 입력하고 함수 ownerOf를 실행하면 배포된 컨트랙트와 NFT 발행이 잘 이뤄졌는지 확인할 수 있다.

![](https://images.velog.io/images/rbghks2102/post/a8a3fbb1-cfd5-4d54-bb50-d148f3a1a450/ezgif.com-gif-maker%20(2).gif)

>- 클레이튼 NFT 배포 주소 : 0xbd6b1378203c5641b11be2a1e5d5b32322f310e8
- 클레이튼 스코프 주소 : https://baobab.scope.klaytn.com/account/0xbD6b1378203c5641b11BE2a1E5D5B32322F310E8?tabId=txList

## 4. 개발회고
 ### 목적
 이더리움 개발환경이 아닌 클레이튼 개발환경에서 NFT 개발
 ### Keep 
 클레이튼 개발환경에서 NFT를 개발하며 NFT가 무엇인지 다시 한번 상기시킬 수 있어서 좋았으며, 이더리움이 다른 플랫폼 블록체인을 사용하여 NFT를 개발한다는 것이 의미있었다.
 ### Problem
 배운 내용 거기서 멈춰 버렸다. 좀 더 나아가 다른것을 시도하지 못했으며 내가 알고 있는 다른것들과 같이 사용하지 못했다.
 
 ### Try
 단순히 NFT 발행이 아니라 디지털 아트나 음악 같은 디지털 파일에 소유권 증명을 할 수 있는 NFT발행을 해보고 싶다.