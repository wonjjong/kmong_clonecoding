import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import '../WinningDetail.css'

function EventDetail() {
  const navigate = useNavigate();

  /**
   * 1. 탭 어떻게 구현하는지
   * 2. content-wrap에 black 줬는데 상단에 바뀌지 않은 부분은 머지
   * 3. divider 어떻게 주지
   * 4. coupon-ticket layout 구조 어떻게 하지
   */
  return (
    <div className="App">
      {/** 헤더 */}
      <div id={'header'}>
        <button style={{flex:1}} onClick={() => navigate(-1)}>뒤로가기</button>
        <div style={{flex:1}}> 당첨 내역 </div>
        <div style={{flex:1}}> </div>
      </div>

       <div style={{backgroundColor:'black'}} className={'content-wrap'} >
            <div className={'winning-detail-content-wrap'}>
                <ul id={'winning-detail-tab-container'}>
                    <li> 사용 가능 </li>
                    <li> 사용 완료 </li>
                </ul>

                <div id={'winning-detail-description'}>
                    사용 가능한 경품의 바코드는 상세 페이지에서 확인할 수 있어요. 경품의 사용 조회는 상세 페이지의 상태 조회
                    버튼을 이용해 보세요.
                </div>
            </div>

            <div className={'coupon-tickect'}>
                <div className={'coupon-ticket-thumbnail'}>
                     <img src='/assets/snowball_1.jpg' className={'coupon-ticket-thumbnail-img'} ></img> 
                </div>
                <div className={'coupon-ticket-info'}>
                    상품정보
                </div>
                <div className={'coupon-ticket-status'}>
                    상태값
                </div>
            </div>
        </div>
    </div>
  );
}

export default EventDetail;

