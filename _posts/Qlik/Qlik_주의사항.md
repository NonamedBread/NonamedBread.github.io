# 계획

실행 R00 계획A00


# Num 형태

퍼센트 '0.0%'
실수 '#,##0.00'


# GetCurrentSelections
=if(len(GetCurrentSelections())>0,'선택 조건('&GetCurrentSelections(repeat(chr(160),5))&')',)


# 데이터 처리

vSearchBtn
조회 버튼을 클릭하면 차트를 조회 할 수 있습니다.


# Num
Num((Sum({<손익계산서차원.전기년월={"$(=[기준일_From.기준년월_YYYYMM])"}>}[생산실적.실제생산금액]) / v억단위),'#,##0.00') & '억'


# Multi kpi css
& .statistic-0  .value {
    background-color: yellow;
    font-size: 50%;
    color: red !important;
    }


& .statistic-1 .value {
    font-size: 100%;
    }

# Pick

pick([FB_사업장별손익Dim3],
//매출
num(Sum({<손익계산서차원.전기년월={">=$(=[기준일_From.기준년월_YYYYMM])<=$(=[기준일_To.기준년월_YYYYMM])"},[계획버전 (CO-PA)]={'R00'}>}[손익계산서월계획.매출액 합계]) /v백만단위,'#,##0.00'),
)


# Chart gradation

=ColorMix2( (rank(Sum({<손익계산서차원.전기일={">=$(=[기준일_From.기준년월_시작일])<=$(=[기준일_From.기준년월_마지막일])"}>}[손익계산서실적.매출액 합계]))/(noofrows(TOTAL)/6))-1 ,rgb(0,112,200),rgb(142,180,227),rgb(198,217,241))

# 품목 선택
=GetSelectedCount([품목.품목군명])
=GetSelectedCount([품목.품목군명])

# 기준년 조건
=if(YEAR(date(date#(물류차량대수.기준일,'YYYYMMDD'),'YYYYMMDD')) <='$(=기준일_From.기준년)' , left(date#(물류차량대수.기준일,'YYYYMMDD'),4))
=if(기준년<='$(=기준일_From.기준년)' , 기준년)

# vNumFormat

=if(v백만단위=1,'''#,##0''','''#,##0.00''')

=$(vNumFormat)

# Container
아이콘

num(Above(column(1),2)/Above(column(1),1),'0.0%')

# pivot table row calculation 

pick([매입물류_재고회전율Dim2],
num(RangeSum(Column(1),Column(2),Column(3),Column(4),Column(5),Column(6)),$(vNumFormat)),
num(RangeSum(Column(1),Column(2),Column(3),Column(4),Column(5),Column(6)),$(vNumFormat)),
num(Above(column(7),2)/Above(column(7),1),'0.0%'))

# if match

If(Match(사업장.부문,'BB','SA'),품목.상세분류명)

# Dimention if 조건

If(품목.출시일자>='$(=기준일_From.기준년월_시작일)and<=$(=기준일_To.기준년월_마지막일)',품목.품목명)

# Dimention between date

=if(기준년<='$(=기준일_From.기준년)' , if(기준년>='$(=기준일_From.기준년_전년)' , 기준년))

# Create Dimention

식품유통_일매출속보_품목별Dim:
LOAD * INLINE [
식품유통_일매출속보_품목별Dim1, 식품유통_일매출속보_품목별Dim2, 식품유통_일매출속보_품목별Dim3
당일,실적,1
당월누계,실적,2
당월누계,전년,3
당월누계,신장,4
];

# Sum expression between value

```
Sum({<[물류재고현황_식품유통.기준일]={"$(=[기준일_From.기준일_YYYYMMDD_전주])"},[물류재고현황_식품유통.유통기한율]={">10<=30"}>}[물류재고현황_식품유통.재고수량])
```

# 계획
일계획X, 월계획만 조건


# mashup-css
```css
<style>
		/**
		* set padding to make room for bootstrap menu
		*
		*/
		body {
			padding-bottom: 30px;
		}

		/*
		* need to set the height for objects
		* set top padding to make room for selection toolbar
		*/
		#main{
		 display: grid;
		 width: 100%;
		 justify-content: space-between;
		 background-color: #d3d3d3;
		}
		
		div.qvobject, div.qvplaceholder {
			padding: 30px 10px 10px 10px;
			height: 30vh;
			width: 20vw;
		}
		
		div.qvobject1{
			padding: 15px 10px;
			height: 35vh;
			width: 50vw;
		}
		
		div.qvobject2{
			padding: 15px 10px;
			height: 35vh;
			width: 25vw;
		}
		
		div.qvobject3{
			padding: 15px 10px;
			height: 40vh;
			width: 100vw;
		}
		article.qv-object{
        background-color:#FFFFFF;
		}

		.qcmd {
			cursor: pointer;
		}

		#popup {
			background-color: #7f8c8d;
			color: #FFFFFF;
			position: fixed;
			padding: 10px;
			margin: 10px;
			bottom: 0;
			right: 0;
			display: none;
			border-radius: 5px;
		}

		/*
		 * Overrides Bootstrap navbar z-index to avoid conflict with selections bar
		 */
		.navbar-fixed-top {
			position: relative;
			z-index: 100;
		}

	</style>
```

# mashup-HTML
```HTML
<div class="container " id="main" role="main">
	<div class="alert alert-danger alert-dismissible" role="alert" style="display:none">
		<button type="button" class="close" id="closeerr" aria-label="Close"><span aria-hidden="true">×</span></button>
		<span id="errmsg"></span>
	</div>
	<div class="row">
		<div class="col-sm-3 qvobject" id="QV01">
		</div>
		<div class="col-sm-3 qvobject" id="QV02">
		</div>
		<div class="col-sm-3 qvobject" id="QV03">
		</div>
		<div class="col-sm-3 qvobject" id="QV04">
		</div>
		<div class="col-sm-3 qvobject" id="QV05">
		</div>
	</div>
	<div class="row">
		<div class="col-sm-7 qvobject1" id="QV06">
		</div>
		<div class="col-sm-3 qvobject2" id="QV07">
		</div>
		<div class="col-sm-3 qvobject2" id="QV08">
		</div>
	</div>
	<div class="row">
		<div class="col-sm-8 qvobject3" id="QV09">
		</div>
	</div>
	<!-- add more rows here if you want more visualizations -->
</div>
```

# 손익계산서월실적_상세

# 손익계산서실적_SD
매출액으로 변경

# sort index
aggr(rank(Sum({<손익계산서차원.전기년월={">=$(=[기준일_From.기준년월_YYYYMM])<=$(=[기준일_To.기준년월_YYYYMM])"}>}[손익계산서월실적.매출총이익]),4,1),사업장.사업장명) < 19

# sort extention
rank(Sum({<손익계산서차원.전기년월={">=$(=[기준일_From.기준년월_YYYYMM])<=$(=[기준일_To.기준년월_YYYYMM])"}>}[손익계산서월실적.매출총이익]),4,1)