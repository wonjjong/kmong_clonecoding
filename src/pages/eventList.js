import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

    return (
    <div className="App">
      {/** 헤더 */}
      <div id={'header'}>
        <button onClick={() => navigate(-1)}>뒤로가기</button>
      </div>

      <div id={'event-list-content'}>
        <div className={'product-info-card'}>
          <div className={'product-thumbnail'}>
          </div>
          <div className={'product-name'}>
            [항공직송] 칠레산 생체리 300g (10row)
          </div>
          <div className={'product-price'}>
            12,900원 로켓배송!!
          </div>
        </div>
        <div className={'product-info-card'}>
          <div className={'product-thumbnail'}>
          </div>
          <div className={'product-name'}>
            [항공직송] 칠레산 생체리 300g (10row)
          </div>
          <div className={'product-price'}>
            12,900원 로켓배송!!
          </div>
        </div>
        <div className={'product-info-card'}>
          <div className={'product-thumbnail'}>
          </div>
          <div className={'product-name'}>
            [항공직송] 칠레산 생체리 300g (10row)
          </div>
          <div className={'product-price'}>
            12,900원 로켓배송!!
          </div>
        </div>
        <div className={'product-info-card'}>
          <div className={'product-thumbnail'}>
          </div>
          <div className={'product-name'}>
            [항공직송] 칠레산 생체리 300g (10row)
          </div>
          <div className={'product-price'}>
            12,900원 로켓배송!!
          </div>
        </div>
        <div className={'product-info-card'}>
          <div className={'product-thumbnail'}>
          </div>
          <div className={'product-name'}>
            [항공직송] 칠레산 생체리 300g (10row)
          </div>
          <div className={'product-price'}>
            12,900원 로켓배송!!
          </div>
        </div>
        <div className={'product-info-card'}>
          <div className={'product-thumbnail'}>
          </div>
          <div className={'product-name'}>
            [항공직송] 칠레산 생체리 300g (10row)
          </div>
          <div className={'product-price'}>
            12,900원 로켓배송!!
          </div>
        </div>
        <div className={'product-info-card'}>
          <div className={'product-thumbnail'}>
          </div>
          <div className={'product-name'}>
            [항공직송] 칠레산 생체리 300g (10row)
          </div>
          <div className={'product-price'}>
            12,900원 로켓배송!!
          </div>
        </div>
        <div className={'product-info-card'}>
          <div className={'product-thumbnail'}>
          </div>
          <div className={'product-name'}>
            [항공직송] 칠레산 생체리 300g (10row)
          </div>
          <div className={'product-price'}>
            12,900원 로켓배송!!
          </div>
        </div>
        
      </div>  
    </div>
  );
}

export default About;

