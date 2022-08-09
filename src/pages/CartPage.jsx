import React from 'react';
import {
  CartPageNotLogin,
  CartPageControl,
  CartPageParcel,
  CartPageFooter,
} from '../components/contents';

import {
  MobileHeader,
  CartPageTotal,
  CartPageParcelFootInfo,
  CartPageParcelToolBar,
  CartPageBtn,
} from '../components/ui';

function CartPage() {
  return (
    <div
      id="m_wrap"
      className="reveal-left-wrap reveal-right-wrap mcom_wrap sticky_mnodr_acdo ssg scr_up v3"
    >
      <div id="bannerList" />
      <div className="bnr_top_mmbrs">
        <a
          href="https://member.ssg.com/m/membership/gate.ssg"
          className="cartTracking"
          data-tracking-cd="00044_000000245_t00060"
          data-tracking-value="멤버십띠배너"
        >
          <i className="badge ty_s badge_mmbrs_white">
            <span className="blind">스마일클럽</span>
          </i>
          <span className="txt_mmbrs" />
          <span className="link_mmbrs">
            <i className="icon ty_xs icon_chevron_right" aria-hidden="true" />
            <span className="blind">스마일클럽 바로가기</span>
          </span>
        </a>
      </div>

      <MobileHeader title="장바구니" />

      <div
        id="m_container"
        className="reveal-left-contents reveal-right-contents mcom_container mnodr_container_step ty_headfix"
      >
        <div id="m_content">
          <div className="mnodr_info">
            <CartPageNotLogin />
            {/* Login됐을 때 component 추가 */}
          </div>

          <div
            className="mnodr_odrplus"
            id="divAddOrdInfo"
            style={{ display: 'none' }}
          />

          <div className="mnodr_control_wrap">
            <CartPageControl />
            <CartPageParcel />
          </div>

          <div className="mnodr_thickhr" />

          <CartPageTotal />

          <div className="mnodr_thickhr" />

          <div className="mnodr_buyoften v2" id="recommendationCartItem" />

          <div className="mnodr_thickhr" />

          <CartPageParcelFootInfo />

          <div className="mnodr_cartinfo">
            <div className="mnodr_form_sec">
              <h3 className="mnodr_form_tit">
                <strong>장바구니 상품안내</strong>
              </h3>
              <ul className="mnodr_bullst ty2">
                <li>장바구니에 담은 상품은 최대 150개까지 보관됩니다.</li>
                <li>
                  상품 우측 상단의 핀셋 아이콘으로 ‘계속 담아두기’를 설정해
                  두시면 시간이 지나도 상품이 삭제되지 않습니다.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mnodr_toolbar2">
          <div className="mnodr_toolbar_float">
            <div className="mnodr_toolbar_floatlt">
              <div className="mnodr_toolbar_fitem topbtn on">
                <a
                  // href="javascript:void(0);"
                  href="/"
                  id="cartTopBtn"
                  className="floating_btn topbtn on cartTracking"
                  data-tracking-cd="00044_000000210_t00060"
                  data-tracking-value="탑버튼"
                >
                  <span className="blind">TOP</span>
                  <i className="icon ty_sm icon_arrow_top" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <CartPageParcelToolBar />
          <CartPageBtn />
        </div>

        <div
          className="mnodr_modal ty_alert"
          role="dialog"
          tabIndex="-1"
          aria-hidden="true"
          id="_layerCloseSale"
        >
          <div
            className="mnodr_modal_wrap"
            role="document"
            // tabIndex="0"
          >
            <div className="mnodr_modal_cont">
              <h3 className="mnodr_tx_tit">마감세일 상품</h3>
              <p className="mnodr_tx_desc3">
                이마트몰 NE.O에서만 판매되는 한정수량 파격가 상품입니다.
                한정수량 재고소진 시 가격이 달라질 수 있으니 결제 시 다시
                확인해주시기 바랍니다.
              </p>
              <p className="mnodr_tx_desc">
                <span className="mnodr_tx_point">
                  ※ 유통기한이 다소 짧을 수 있습니다.
                </span>
              </p>
            </div>

            <footer className="mnodr_modal_foot">
              <div className="mnodr_btn_area">
                <button
                  className="mnodr_btn ty_gray ty_sm modal-close-btn"
                  type="button"
                >
                  닫기
                </button>
              </div>
            </footer>
          </div>
        </div>

        <div
          className="mnodr_modal ty_alert"
          role="dialog"
          tabIndex="-1"
          aria-hidden="true"
          id="_layerGoodByeSale"
        >
          <div
            className="mnodr_modal_wrap"
            role="document"
            // tabIndex="0"
          >
            <div className="mnodr_modal_cont">
              <h3 className="mnodr_tx_tit">굿바이세일 상품</h3>
              <p className="mnodr_tx_desc3">
                이마트몰 NE.O에서만 판매되는 재고처리 파격가 상품입니다.
              </p>
              <p className="mnodr_tx_desc">
                <span className="mnodr_tx_point">
                  ※ 유통기한이 다소 짧을 수 있습니다.
                </span>
              </p>
            </div>
            <footer className="mnodr_modal_foot">
              <div className="mnodr_btn_area">
                <button
                  className="mnodr_btn ty_gray ty_sm modal-close-btn"
                  type="button"
                >
                  닫기
                </button>
              </div>
            </footer>
          </div>
        </div>

        <div
          className="mnodr_modal ty_alert"
          role="dialog"
          tabIndex="-1"
          aria-hidden="true"
          id="_layerNotApply"
        >
          <div
            className="mnodr_modal_wrap"
            role="document"
            // tabIndex="0"
          >
            <div className="mnodr_modal_cont">
              <h3 className="mnodr_tx_tit">일부 혜택 적용 불가</h3>
              <p className="mnodr_tx_desc3">
                <span className="mnodr_tx_point">
                  ※ 본 상품은 아래의 혜택 적용이 불가합니다.
                </span>
              </p>
              <div className="mnodr_notapply">
                <dl className="mnodr_notapply_item">
                  <dt>카드 혜택</dt>
                  <dd>
                    <ul>
                      <li>청구할인</li>
                      <li>무이자할부</li>
                      <li>특별 카드 행사</li>
                    </ul>
                  </dd>
                </dl>
                <dl className="mnodr_notapply_item">
                  <dt>적립 혜택</dt>
                  <dd>
                    <ul>
                      <li>신세계포인트</li>
                      <li>SSG MONEY (적립 및 즉시할인)</li>
                    </ul>
                  </dd>
                </dl>
              </div>
            </div>
            <footer className="mnodr_modal_foot">
              <div className="mnodr_btn_area">
                <button
                  className="mnodr_btn ty_gray ty_sm modal-close-btn"
                  type="button"
                >
                  닫기
                </button>
              </div>
            </footer>
          </div>
        </div>

        <div
          className="mnodr_modal ty_alert"
          role="dialog"
          tabIndex="-1"
          aria-hidden="true"
          id="_layerWeightSystem"
        >
          <div
            className="mnodr_modal_wrap"
            role="document"
            // tabIndex="0"
          >
            <div className="mnodr_modal_cont">
              <h3 className="mnodr_tx_tit">중량관리상품 안내</h3>
              <p className="mnodr_tx_desc3">
                100g 중량단위로 판매되는 상품입니다. <br />
                주문하신 중량보다 적게 배송될 경우, 차액을 SSG MONEY으로
                환불해드립니다.
              </p>
            </div>
            <footer className="mnodr_modal_foot">
              <div className="mnodr_btn_area">
                <button
                  className="mnodr_btn ty_gray ty_sm modal-close-btn"
                  type="button"
                >
                  닫기
                </button>
              </div>
            </footer>
          </div>
        </div>

        <div
          className="mnodr_modal ty_alert"
          role="dialog"
          tabIndex="-1"
          aria-hidden="true"
          id="_layerAdultAuth"
        >
          <div
            className="mnodr_modal_wrap"
            role="document"
            // tabIndex="0"
          >
            <div className="mnodr_modal_cont">
              <h3 className="mnodr_tx_tit">신분증지참 안내</h3>
              <p className="mnodr_tx_desc3">
                신분증을 지참하여 매장에 방문하면 주류 매장픽업 상품을 수령하실
                수 있습니다.
              </p>
            </div>
            <footer className="mnodr_modal_foot">
              <div className="mnodr_btn_area">
                <button
                  className="mnodr_btn ty_gray ty_sm modal-close-btn"
                  type="button"
                >
                  닫기
                </button>
              </div>
            </footer>
          </div>
        </div>

        <div
          className="mnodr_modal ty_full"
          role="dialog"
          tabIndex="-1"
          aria-hidden="true"
          id="_layerMoveProduct"
        >
          <div
            className="mnodr_modal_wrap"
            role="document"
            // tabIndex="0"
          >
            <div className="mnodr_modal_head">
              <h3 className="mnodr_modal_tit">배송방법바꾸기</h3>
              <button
                type="button"
                className="mnodr_modal_close modal-close-btn"
                tabIndex="0"
              >
                <i className="mnodr_ic ic_close">
                  <span className="blind">팝업닫기</span>
                </i>
              </button>
            </div>
            <div className="mnodr_modal_cont">
              <div className="mnodr_modal_scroll">
                <div className="mnodr_prdmove">
                  <div className="mnodr_prdmove_header">
                    <h3
                      className="mnodr_prdmove_tit"
                      // tabIndex="0"
                      id="moveCartSeleteCnt"
                    >
                      ㅇㅅㅇ
                    </h3>
                  </div>

                  <div className="mnodr_prdmove_conts mnodr-tgleprt-group">
                    <ul role="presentation" className="mnodr_thmblst" />

                    <div
                      type="button"
                      className="mnodr_btn_area"
                      style={{ display: 'none' }}
                      id="moveCartMoreBtn"
                    >
                      <a
                        // href="javascript:void(0);"
                        href="/"
                        className="mnodr_btn ty_tgle mnodr-tgleprt-item"
                      >
                        <span
                          className="mnodr_btn_tx full"
                          // tabIndex="0"
                        >
                          선택상품 전체보기
                        </span>
                        <span
                          className="mnodr_btn_tx summary"
                          // tabIndex="0"
                        >
                          선택상품 간략보기
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mnodr_prdmove">
                  <div className="mnodr_prdmove_header">
                    <h3
                      className="mnodr_prdmove_tit"
                      // tabIndex="0"
                    >
                      <span className="mnodr_prdmove_cart">
                        <i className="mnodr_ic ic_cart" />
                      </span>
                      <span>배송방법 선택</span>
                    </h3>
                  </div>
                  <div className="mnodr_prdmove_conts">
                    <ul className="mnodr_prdmove_mvlst" id="shppChangeList">
                      <li className="mnodr_prdmove_mvitm">
                        <div className="mnodr_rdotab">
                          <input
                            type="radio"
                            className="blind mnodr_rdotab_inp"
                            name="cartTypeMove"
                            id="_ui_prdmove01_02"
                            value="early"
                            tabIndex="-1"
                          />
                          <label
                            htmlFor="_ui_prdmove01_02"
                            className="mnodr_rdotab_label"
                            // tabIndex="0"
                          >
                            <div className="mnodr_rdotab_ctn">
                              <div className="mnodr_rdotab_left">
                                <i className="mnodr_rdotab_btn" />
                              </div>
                              <div className="mnodr_rdotab_right ty2">
                                <div className="mnodr_rdotab_row">
                                  <strong className="mnodr_tx_primary">
                                    새벽배송
                                  </strong>
                                </div>
                                <p className="mnodr_tx_gray" />
                              </div>
                            </div>
                          </label>
                        </div>
                      </li>
                      <li className="mnodr_prdmove_mvitm">
                        <div className="mnodr_rdotab">
                          <input
                            type="radio"
                            className="blind mnodr_rdotab_inp"
                            name="cartTypeMove"
                            id="_ui_prdmove01_03"
                            value="ssg10"
                            tabIndex="-1"
                          />
                          <label
                            htmlFor="_ui_prdmove01_03"
                            className="mnodr_rdotab_label"
                            // tabIndex="0"
                          >
                            <div className="mnodr_rdotab_ctn">
                              <div className="mnodr_rdotab_left">
                                <i className="mnodr_rdotab_btn" />
                              </div>
                              <div className="mnodr_rdotab_right ty2">
                                <div className="mnodr_rdotab_row">
                                  <strong className="mnodr_tx_primary">
                                    이마트몰 쓱배송
                                  </strong>
                                </div>
                                <p className="mnodr_tx_gray" />
                              </div>
                            </div>
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <footer className="mnodr_modal_foot">
              <div className="mnodr_btn_area">
                <button
                  type="button"
                  className="mnodr_btn ty_point ty_lg"
                  id="moveConfirmBtn"
                >
                  <strong
                  // tabIndex="0"
                  >
                    <span className="mnodr_prdmove_cnt" />개 배송방법 바꾸기
                  </strong>
                </button>
              </div>
            </footer>
          </div>
        </div>

        <a
          // href="javascript:void(0);"
          href="/"
          className="blind modal-alert-open"
          id="_layerLoginBtn"
          data-layer-target="#_layerLogin"
          style={{ display: 'none' }}
        >
          ㅇㅅㅇ
        </a>
        <div
          className="mnodr_modal ty_alert"
          role="dialog"
          tabIndex="-1"
          aria-hidden="true"
          id="_layerLogin"
        >
          <div
            className="mnodr_modal_wrap"
            role="document"
            // tabIndex="0"
          >
            <div className="mnodr_modal_cont">
              <p className="mnodr_tx_tit">
                <strong>
                  로그인을 하시면 <br />
                  장바구니에 담아두신 상품을 <br />
                  나중에도 확인하실 수 있습니다.
                </strong>
              </p>
            </div>
            <footer className="mnodr_modal_foot">
              <div className="mnodr_btn_area">
                <button
                  className="mnodr_btn ty_gray ty_sm modal-close-btn"
                  type="button"
                >
                  닫기
                </button>
                <a
                  // href="javascript:void(0);"
                  href="/"
                  name="loginBtn"
                  className="mnodr_btn ty_point ty_sm modal-close-btn"
                >
                  로그인하기
                </a>
              </div>
            </footer>
            <button className="modal-close-btn blind" type="button">
              <span className="blind">팝업닫기</span>
            </button>
          </div>
        </div>
        <a
          // href="javascript:void(0)"
          href="/"
          className="blind modal-alert-open"
          id="_layerSmileBtn"
          data-layer-target="#_layerSmile"
        >
          ㅇㅅㅇ
        </a>
        <div
          className="mnodr_modal ty_alert"
          role="dialog"
          tabIndex="-1"
          aria-hidden="true"
          id="_layerSmile"
        >
          <div
            className="mnodr_modal_wrap"
            role="document"
            // tabIndex="0"
          >
            <div className="mnodr_modal_cont">
              <p className="mnodr_tx_tit" id="popup_smile_title" />
              <p
                className="mnodr_tx_desc mnodr_tx_gray2"
                id="popup_smile_sub_title"
              />
            </div>
            <footer className="mnodr_modal_foot">
              <div className="mnodr_btn_area">
                <a
                  // href="javascript:void(0)"
                  href="/"
                  className="mnodr_btn ty_gray modal-close-btn"
                  id="popup_smile_btn1"
                  data-exec-code=""
                  data-tracking-cd=""
                  data-tracking-value=""
                >
                  ㅇㅅㅇ
                </a>
                <a
                  href="https://member.ssg.com/m/membership/gate.ssg"
                  className="mnodr_btn ty_point modal-close-btn cartTracking"
                  id="popup_smile_btn2"
                  data-tracking-cd=""
                  data-tracking-value=""
                >
                  ㅇㅅㅇ
                </a>
              </div>
            </footer>
            <button className="modal-close-btn blind" type="button">
              <span className="blind">팝업닫기</span>
            </button>
          </div>
        </div>
        <CartPageFooter />
      </div>
    </div>
  );
}

export default CartPage;
