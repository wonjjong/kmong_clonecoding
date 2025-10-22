import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize:'15px', paddingTop:'10px' }} >

        <div style={{display: 'flex', alignItems: 'center'}}>
          <span>이미지 영역</span>
          <span style={{marginLeft:'20px'}}>
            크몽 Biz
          </span>
          <button className="black-btn" style={{height:'25px', marginLeft:'10px'}}>토글버튼</button>
        </div>

        <div style={{display: 'flex', alignItems: 'center'}}>
          <p>엔터프라이즈</p>
          <div className="badge">기업용</div>
          <span style={{marginLeft:'20px'}}>전문가 등록</span>
          <button className="black-btn" style={{marginLeft:'20px'}}>회원가입</button>
        </div>
      </header>

      <ul style={{display: 'flex', gap: '10px'}}>
        <li className='list'></li>
        <li className='list'></li>
        <li className='list'></li>
      </ul>
    </div>
  );
}

export default App;
