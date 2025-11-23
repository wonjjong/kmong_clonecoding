import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <h1>홈 페이지</h1>
      <div style={{ padding: '20px' }}>
        <h2>페이지 목록</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px' }}>
            <Link to="/event-detail" style={{ 
              display: 'block',
              padding: '15px',
              backgroundColor: '#f0f0f0',
              textDecoration: 'none',
              color: '#333',
              borderRadius: '5px'
            }}>
              이벤트 상세 페이지로 이동
            </Link>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <Link to="/event-list" style={{ 
              display: 'block',
              padding: '15px',
              backgroundColor: '#f0f0f0',
              textDecoration: 'none',
              color: '#333',
              borderRadius: '5px'
            }}>
              이벤트 목록 페이지로 이동
            </Link>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <Link to="/winning-detail" style={{ 
              display: 'block',
              padding: '15px',
              backgroundColor: '#f0f0f0',
              textDecoration: 'none',
              color: '#333',
              borderRadius: '5px'
            }}>
              당첨 내역 페이지로 이동
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;

