import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LoadingSpinner } from '../../../components/common/LoadingSpinner';
import useAxios from '../../../lib/useAxios';
import useScroll from '../../../lib/useScroll';
import './style/MainSlider.scss';

function MainSlider() {
  const [mainSlider, setMainSlider] = useState([]);
  const [imgIdx, setImgIdx] = useState(0);
  const DELAY = 2500;
  const timeoutRef = useRef(null);
  const { response, loading } = useAxios({
    method: 'get',
    url: '/comm-users/main-banner',
  });

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setImgIdx((prevIdx) =>
        prevIdx === mainSlider.length - 1 ? 0 : prevIdx + 1,
      );
    }, DELAY);
    return () => resetTimeout();
  }, [imgIdx]);

  const { y } = useScroll();
  let cal = 1 - y / 400;
  if (cal < 0) {
    cal = 0;
  } else if (cal > 1) {
    cal = 1;
  }

  useEffect(() => {
    if (response !== null) {
      setMainSlider(response);
    }
  }, [response]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="smhero_banner_wrap">
      <div
        id="smhero_banner"
        className="smhero_banner"
        style={{ opacity: cal }}
      >
        <div className="smhero_swiper">
          <div className="swiper-container swiper-container-horizontal swiper-container-autoheight">
            <Swiper
              style={{
                transform: `translate3d(${-imgIdx * 100}%, 0, 0)`,
                transition: 'all 0.3s ease-in-out',
              }}
            >
              {mainSlider &&
                mainSlider.map((m, index) => (
                  <SwiperSlide key={m.mainBannerId}>
                    <li className="swiper-slide swiper-slide-duplicate">
                      <div className="smhero_bn gate_unit">
                        <div className="cmitem_tt_adinfo ssg-tooltip-wrap">
                          <Link
                            // to="#"
                            to="/"
                            className="cmitem_btn_tt_adinfo ssg-tooltip"
                          >
                            <span className="blind">?????? ?????? ??????</span>
                          </Link>
                          <div className="cmitem_tt_adinfo_layer ssg-tooltip-layer">
                            ???????????? ????????? ???????????? ?????????????????? ???????????????.
                            <button
                              type="button"
                              className="cmitem_close_tt_adinfo ssg-tooltip-close"
                            >
                              <span className="blind">?????? ?????? ?????? ??????</span>
                            </button>
                          </div>
                        </div>
                        <Link to="/" className="smhero_bnlink">
                          <div className="smhero_thumb">
                            <img src={m.imgUrl} alt={m.originName} />
                          </div>
                          <div className="smhero_tit">
                            <h3 className="smhero_titmain">
                              <span className="smhero_titmain_tx">
                                {m.title}
                              </span>
                              <span className="smhero_titmain_tx" />
                            </h3>
                            <div className="smhero_titsub">
                              <span className="csmhero_titsub_tx">
                                {m.content}
                              </span>
                              <span className="csmhero_titsub_tx" />
                            </div>
                          </div>
                        </Link>
                      </div>
                    </li>
                    <div className="swiper-pagination swiper-pagination-custom">
                      <span className="blind">?????? ??????</span>
                      <span className="swiper-pagination-current">
                        {index + 1}
                      </span>
                      <span className="swiper-pagination-separator">-</span>
                      <span className="blind">?????? ??????</span>
                      <span className="swiper-pagination-total">
                        {mainSlider.length}
                      </span>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>

          <div className="swiper-ctrls">
            <div className="swiper_autoplay">
              {/* <button
                  onClick={handleAutoBtn}
                  type="button"
                  className="btn_autoplay pause"
                >
                  <span className="label_pause">
                    <span className="blind">?????? ?????? ?????? ?????? ??????</span>
                  </span>
                  <span className="label_play">
                    <span className="blind">?????? ?????? ?????? ?????? ??????</span>
                  </span>
                </button> */}
            </div>
            <div className="swiper_moreview">
              <button type="button" className="btn_moreview">
                <span className="blind">?????? ????????????</span>
              </button>
            </div>
          </div>
        </div>

        {/* ???????????? ???????????? */}
        <div
          className="smhero_viewer"
          role="dialog"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="smhero_wrap" role="document">
            <div className="smhero_scroll">
              <div className="smhero_head">
                <h3 className="smhero_head_tit">????????????</h3>
                <button type="button" className="smhero_close">
                  <span className="blind">?????? ???????????? ??????</span>
                </button>
              </div>
              <div className="smhero_cont">
                <ul className="smhero_bnlist">
                  <li>
                    <div className="smhero_bn gate_unit">
                      <div className="cmitem_tt_adinfo ssg-tooltip-wrap">
                        <Link
                          to="/"
                          className="cmitem_btn_tt_adinfo ssg-tooltip"
                        >
                          <span className="blind">?????? ?????? ??????</span>
                        </Link>
                        <div className="cmitem_tt_adinfo_layer ssg-tooltip-layer">
                          ???????????? ????????? ???????????? ?????????????????? ???????????????.
                          <button
                            type="button"
                            className="cmitem_close_tt_adinfo ssg-tooltip-close"
                          >
                            <span className="blind">?????? ?????? ?????? ??????</span>
                          </button>
                        </div>
                      </div>
                      <Link to="/" className="smhero_bnlink">
                        <div className="smhero_thumb">
                          <img
                            className="ssg_lazy"
                            src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                            alt="?????? ?????? ????????????"
                          />
                        </div>
                        <div className="smhero_tit">
                          <h3 className="smhero_titmain">
                            <span className="smhero_titmain_tx">
                              ?????? ?????? ????????????
                            </span>
                            <span className="smhero_titmain_tx" />
                          </h3>
                          <div className="smhero_titsub">
                            <span className="csmhero_titsub_tx">
                              ????????? ???????????????
                            </span>
                            <span className="csmhero_titsub_tx" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="smhero_bn gate_unit">
                      <Link className="smhero_bnlink" to="/">
                        <div className="smhero_thumb">
                          <img
                            className="ssg_lazy"
                            src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                            alt="???????????? ????????? ?????? ??????"
                          />
                        </div>
                        <div className="smhero_tit">
                          <h3 className="smhero_titmain">
                            <span className="smhero_titmain_tx">
                              ???????????? ????????? ?????? ??????
                            </span>
                            <span className="smhero_titmain_tx" />
                          </h3>
                          <div className="smhero_titsub">
                            <span className="csmhero_titsub_tx">
                              ???????????? ???????????????? ????????? ?????? S?????? ??????!
                            </span>
                            <span className="csmhero_titsub_tx" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="smhero_bn gate_unit">
                      <Link className="smhero_bnlink" to="/">
                        <div className="smhero_thumb">
                          <img
                            className="ssg_lazy"
                            src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                            alt="2022 ?????? ???????????? ????????????"
                          />
                        </div>
                        <div className="smhero_tit">
                          <h3 className="smhero_titmain">
                            <span className="smhero_titmain_tx">
                              2022 ?????? ???????????? ????????????
                            </span>
                            <span className="smhero_titmain_tx" />
                          </h3>
                          <div className="smhero_titsub">
                            <span className="csmhero_titsub_tx">
                              ?????? 150?????? ?????? ???????????? ?????????
                            </span>
                            <span className="csmhero_titsub_tx" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="smhero_bn gate_unit">
                      <Link className="smhero_bnlink" to="/">
                        <div className="smhero_thumb">
                          <img
                            className="ssg_lazy"
                            src="//sui.ssgcdn.com/ui/m_ssg/img/common/b.gif"
                            alt="?????? ??????????????? ????????? 10%??????"
                          />
                        </div>
                        <div className="smhero_tit">
                          <h3 className="smhero_titmain">
                            <span className="smhero_titmain_tx">
                              ?????? ??????????????? ????????? 10%??????
                            </span>
                            <span className="smhero_titmain_tx" />
                          </h3>
                          <div className="smhero_titsub">
                            <span className="csmhero_titsub_tx">
                              ?????? 50% ?????? ????????? ????????????!
                            </span>
                            <span className="csmhero_titsub_tx" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSlider;
