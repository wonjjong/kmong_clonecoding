import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
          헤더헤더헤더
      </header>

      <main className="bg-gray pl-20 pr-20 pb-40 pt-40">
        <section>
          <div className="main-section-1" style={{background:'white'}}>
              <div className="mt-20">
                <span> 맥도날드 </span>
                <h2 className="mt-10"> 치즈버거 세트</h2>
                <div className="badge mt-20"> 사용완료 </div>
                <img className="mt-40" src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg" 
                  style={{width:'200px', height:'200px'}} alt="노트북 작업" />
              </div>
          </div>
        </section>

        <section className="main-section-2 mt-40">
            <div className="title">
              상품 유의사항을 확인해 주세요!
            </div>

            <div className="description mt-8">
              <span>
                [상품설명] <br/>
                스타벅스의 깔끔한 맛을 자랑하는 커피로, 스타벅스 파트너들이 가장 좋아하는 커피입니다.
              </span>
              <span>
                [유의사항] <br/>
                해당 쿠폰은 일부 점포에서는 취급하지 않는 상품일 수 있습니다. <br/>
                상기 이미지는 연출된 것으로 실제와 다를 수 있습니다. <br/>
                본 상품은 매장 재고 상황에 따라 동일 상품으로 교환이 불가능 할 수 있습니다.
              </span>

            </div>
        </section>

        <section className="main-section-3 mt-40">
            <div style={{display:'flex', justifyContent:'space-between'}}>
              <span>교환처</span>
              <span></span>
              <span>맥도날드</span>
            </div>
            <div style={{display:'flex', justifyContent:'space-between'}}>
              <span>공급자</span>
              <span></span>
              <span>주식회사 케이티알파</span>
            </div>
            <div style={{display:'flex', justifyContent:'space-between'}}>
              <span>문의처</span>
              <span></span>
              <span>기프티쇼 비즈 1588-0108</span>
            </div>
            <div style={{display:'flex', justifyContent:'space-between'}}>
              <span>사업자</span>
              <span></span>
              <span>(주)노티플러스</span>
            </div>
        </section>
      </main>
      
      <footer style={{backgroundColor:'red', marginTop: '10px'}}>
        푸터푸터푸터
      </footer>
    </div>
  );
}

export default App;