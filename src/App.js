import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <div>
          <div id={'logo'}>이미지 영역</div>
          
          <div id={'biz-wrap'}>
            <div>크몽 Biz</div>
            <div id={'toggle'}>토글버튼</div>
          </div>
        </div>

        <ul>
          <li className={'flex-y-center'}>
            <div>엔터프라이즈</div>
            <div className="header-badge">기업용</div>
          </li>
          <li>전문가 등록</li>
          <li>로그인</li>
          <li>
            <button id="signup-btn">회원가입</button>
          </li>
        </ul>
      </header>

      <section>
        <div className="section-1">
          <div className="section-1-left">
            <span> 성공이 필요한 순간, <br/> 딱 맞는 전문가를 찾아보세요 </span>
            <div className="search">
              <input 
                type="text" 
                id="search-input" 
                placeholder='검색하세용 검색!'/> 
            </div>
            <div className="category mt-20">
              <div className="border-denim background-denim"><p>카페24</p></div>
              <div className="border-denim background-denim"><p>퍼블리싱</p></div>
              <div className="ml-10"><p>홈페이지제작</p></div>
              <div><p>카페24</p></div>
              <div><p>홈페이지</p></div>
              <div><p>워드프레스</p></div>
            </div>
          </div>

          <div className="section-1-right" style={{backgroundColor:'black'}}></div>          
        </div>
      </section>

      <footer style={{backgroundColor:'pink', marginTop: '10px'}}>
        푸터푸터푸터
      </footer>
    </div>
  );
}

export default App;
