import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function EventDetail() {
  const navigate = useNavigate();

  return (
    <div className="App">
      {/** 헤더 */}
      <div id={'header'}>
        <button onClick={() => navigate(-1)}>뒤로가기</button>
      </div>

      <div className={'content-wrap'}>
        <div id={'event-section'}>
          <div id={'event-box'}>
           <div id={'event-title-wrap'}>
            <div id={'event-store'}>맥도날드</div>
            <div id={'event-product'}>치즈버거 세트</div>
           </div>

           <div id={'event-tag'}>사용 완료</div>

           <div id={'event-img-wrap'}>맥도날드 이미지</div>
          </div>
        </div>
      </div>

      <div id={'caution-section'}>
         <div id={'caution-title'}>💬 상품 유의사항을 확인해 주세요!</div>
         <div id={'caution-content'}>
            [상품설명] <br />
            스타벅스의 깔끔한 맛을 자랑하는 커피로, 스타벅스 
            파트너들이 가장 좋아하는 커피입니다.<br />
            [유의사항]<br />
            해당 쿠폰은 일부 점포에서는 취급하지 않는 상품일 수 
            있습니다.<br />
            상기 이미지는 연출된 것으로 실제와 다를 수 있습니다.
            본 상품은 매장 재고 상황에 따라 동일 상품으로 교환이
            불가능 할 수 있습니다.
          </div>
        </div>

        <div id={'info-section'}>
          <div className={'info-list-wrap'}>
            <div className={'info-title'}>교환처</div>
            <div className={'info-value'}>맥도날드</div>
          </div>

          <div className={'info-list-wrap'}>
            <div className={'info-title'}>공급자</div>
            <div className={'info-value'}>케이티 알파</div>
          </div>

          <div className={'info-list-wrap'}>
            <div className={'info-title'}>문의처</div>
            <div className={'info-value'}>기프티쇼 비즈 <span>1588-0108</span></div>
          </div>

          <div className={'info-list-wrap'}>
            <div className={'info-title'}>사업자</div>
            <div className={'info-value'}>(주)노티플러스</div>
          </div>
        </div>
    </div>
  );
}

export default EventDetail;

