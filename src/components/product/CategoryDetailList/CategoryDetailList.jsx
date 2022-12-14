import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './CategoryDetailList.scss';
import { ProductList } from '../ProductList';

function CategoryDetailList({
  mediumCategoryList,
  datas,
  handleProductList,
  isWishChange,
  setIsWishChange,
}) {
  const { lgId, mdId, smId } = useParams();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [smallCategoryList, setSmallCategoryList] = useState();
  const [hasMId, setHasMid] = useState(false);
  const TEMP_LINK = `/products/${lgId}${
    mdId !== undefined ? `/${mdId}` : '/0'
  }${smId !== undefined ? `/${smId}` : ''}`;

  const handleNavOpen = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    if (Number(mdId) === 0) {
      setHasMid(false);
    } else {
      setHasMid(true);
      axios
        .get(`http://13.209.26.150:9000/comm-users/category/small/${mdId}`)
        .then((res) => {
          setSmallCategoryList(res.data.result.smallCategoryList);
        });
    }
  }, [hasMId, mdId]);

  return (
    <>
      <div id="m_top_catelist" className="m_catelst_wrap_v2">
        <div className={`cmgrid_full_box ${isNavOpen ? 'nav-modal' : ''}`}>
          <div className={`cmctg_nav ${isNavOpen ? 'is_open' : ''}`}>
            <div className="cmctg_top">
              <h3>전체메뉴</h3>
              <span className="cmctg_toggle">
                <button
                  type="button"
                  aria-expanded="false"
                  onClick={handleNavOpen}
                >
                  <span className="btn_label ty_off">
                    <span className="blind">메뉴 펼치기</span>
                  </span>
                  <span className="btn_label ty_on">
                    <span className="blind">메뉴 접기</span>
                  </span>
                </button>
              </span>
            </div>
            <div className="cmctg_scroll">
              <ul className="cmctg_menu">
                {mediumCategoryList &&
                  mediumCategoryList.map((data) => (
                    <li
                      key={data.mediumCategoryId}
                      className="cmctg_item"
                      role="menuitem"
                      onClick={() =>
                        isNavOpen ? handleNavOpen() : setIsNavOpen(false)
                      }
                      onKeyDown={() =>
                        isNavOpen ? handleNavOpen() : setIsNavOpen(false)
                      }
                    >
                      <Link
                        to={`/products/${lgId}/${data.mediumCategoryId}`}
                        className={`clickable cmctg_lnk ${
                          Number(mdId) === data.mediumCategoryId ? 'on' : ''
                        }`}
                        onClick={() => {
                          handleProductList(lgId, data.mediumCategoryId);
                        }}
                      >
                        <span className="cmctg_txt">
                          {data.mediumCategoryTitle}
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        {hasMId && smallCategoryList && (
          <div className="m_catelst">
            <ul className="lst_cate">
              {smallCategoryList.map((data) => (
                <li key={data.smallCategoryId}>
                  <Link
                    to={`/products/${lgId}/${mdId}/${data.smallCategoryId}`}
                    className={`clickable smallCate ${
                      Number(smId) === data.smallCategoryId ? 'on' : ''
                    }`}
                    onClick={() => {
                      handleProductList(lgId, mdId, data.smallCategoryId);
                    }}
                  >
                    <span>{data.smallCategoryTitle}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div id="m_dimmed" className={`${isNavOpen ? 'mcom_dimmed' : ''}`} />
      </div>

      {/* 필터 */}
      <div className="cmft_sort v2">
        <div className="cmft_sort_opts">
          <ul className="cmft_sort_lst">
            <li className="cmft_cell cmft_sort_ship" id="filter_shpp">
              <div className="cmft_sel_wrap">
                <span
                  className="cmft_inp_chk clickable"
                  data-react-tarea="카테고리|바닥필터|배송_필터_선택|매장픽업"
                >
                  <input
                    type="checkbox"
                    id="ui_ship_view"
                    value="picku"
                    // checked
                  />
                </span>
                <Link
                  to={TEMP_LINK}
                  className="clickable"
                  data-react-tarea="카테고리|바닥필터|배송_필터_선택|매장픽업"
                >
                  <label
                    htmlFor="ui_ship_view"
                    className="cmft_sort_tit cmft_label_curent"
                  >
                    <span className="cmft_txt">매장픽업</span>
                  </label>
                </Link>
              </div>
            </li>
            <li className="cmft_cell cmft_sort_rank">
              <div className="cmft_sel_wrap">
                <Link to={TEMP_LINK} className="cmft_sort_tit cmft_sel_curent">
                  <span className="cmft_txt">추천순</span>
                </Link>
                <ul className="cmft_sel_lst">
                  <li
                    className="clickable on"
                    data-react-tarea="카테고리|바닥필터|정렬_필터_선택|추천순"
                  >
                    <Link to={TEMP_LINK}>
                      <span className="cmft_txt">추천순</span>
                    </Link>
                  </li>
                  <li
                    className="clickable "
                    data-react-tarea="카테고리|바닥필터|정렬_필터_선택|판매순"
                  >
                    <Link to={TEMP_LINK}>
                      <span className="cmft_txt">판매순</span>
                    </Link>
                  </li>
                  <li
                    className="clickable "
                    data-react-tarea="카테고리|바닥필터|정렬_필터_선택|낮은가격순"
                  >
                    <Link to={TEMP_LINK}>
                      <span className="cmft_txt">낮은가격순</span>
                    </Link>
                  </li>
                  <li
                    className="clickable "
                    data-react-tarea="카테고리|바닥필터|정렬_필터_선택|높은가격순"
                  >
                    <Link to={TEMP_LINK}>
                      <span className="cmft_txt">높은가격순</span>
                    </Link>
                  </li>
                  <li
                    className="clickable "
                    data-react-tarea="카테고리|바닥필터|정렬_필터_선택|할인율순"
                  >
                    <Link to={TEMP_LINK}>
                      <span className="cmft_txt">할인율순</span>
                    </Link>
                  </li>
                  <li
                    className="clickable "
                    data-react-tarea="카테고리|바닥필터|정렬_필터_선택|신상품순"
                  >
                    <Link to={TEMP_LINK}>
                      <span className="cmft_txt">신상품순</span>
                    </Link>
                  </li>
                  <li
                    className="clickable "
                    data-react-tarea="카테고리|바닥필터|정렬_필터_선택|리뷰많은순"
                  >
                    <Link to={TEMP_LINK}>
                      <span className="cmft_txt">리뷰많은순</span>
                    </Link>
                  </li>
                  <input type="hidden" name="sortType" id="sortType" value="" />
                </ul>
              </div>
            </li>
            <li className="cmft_cell cmft_sort_srch ">
              <Link
                to={TEMP_LINK}
                className="cmft_sort_tit clickable sort-filter"
                data-react-tarea="카테고리|바닥필터|필터더보기_선택"
              >
                <span className="cmft_txt">필터</span>
                <span className="cmft_num">
                  <strong />
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="cmft_allstore_lst" style={{ display: 'none' }}>
          <div className="cmft_allstore_parent">
            <ul className="cmft_allstore_round" />
          </div>
          <div className="cmft_dtstore_lst ">
            <ul>
              <li
                className="clickable "
                data-react-tarea="카테고리|바닥필터|백화점픽업_필터_선택|전체"
              >
                <Link to={TEMP_LINK}>전체</Link>
              </li>
              <li
                className="clickable "
                data-react-tarea="카테고리|바닥필터|백화점픽업_필터_선택|본점"
              >
                <Link to={TEMP_LINK}>본점</Link>
              </li>
              <li
                className="clickable "
                data-react-tarea="카테고리|바닥필터|백화점픽업_필터_선택|강남점"
              >
                <Link to={TEMP_LINK}>강남점</Link>
              </li>
              <li
                className="clickable "
                data-react-tarea="카테고리|바닥필터|백화점픽업_필터_선택|경기점"
              >
                <Link to={TEMP_LINK}>경기점</Link>
              </li>
              <li
                className="clickable "
                data-react-tarea="카테고리|바닥필터|백화점픽업_필터_선택|센텀시티점"
              >
                <Link to={TEMP_LINK}>센텀시티점</Link>
              </li>
              <li
                className="clickable "
                data-react-tarea="카테고리|바닥필터|백화점픽업_필터_선택|타임스퀘어점패션관"
              >
                <Link to={TEMP_LINK}>타임스퀘어점패션관</Link>
              </li>
              <li
                className="clickable "
                data-react-tarea="카테고리|바닥필터|백화점픽업_필터_선택|타임스퀘어점리빙관"
              >
                <Link to={TEMP_LINK}>타임스퀘어점리빙관</Link>
              </li>
              <li
                className="clickable "
                data-react-tarea="카테고리|바닥필터|백화점픽업_필터_선택|의정부점"
              >
                <Link to={TEMP_LINK}>의정부점</Link>
              </li>
              <li
                className="clickable "
                data-react-tarea="카테고리|바닥필터|백화점픽업_필터_선택|광주신세계"
              >
                <Link to={TEMP_LINK}>광주신세계</Link>
              </li>
              <li
                className="clickable "
                data-react-tarea="카테고리|바닥필터|백화점픽업_필터_선택|마산점"
              >
                <Link to={TEMP_LINK}>마산점</Link>
              </li>
              <li
                className="clickable "
                data-react-tarea="카테고리|바닥필터|백화점픽업_필터_선택|천안아산점"
              >
                <Link to={TEMP_LINK}>천안아산점</Link>
              </li>
              <li
                className="clickable "
                data-react-tarea="카테고리|바닥필터|백화점픽업_필터_선택|김해점"
              >
                <Link to={TEMP_LINK}>김해점</Link>
              </li>
              <li
                className="clickable "
                data-react-tarea="카테고리|바닥필터|백화점픽업_필터_선택|하남점"
              >
                <Link to={TEMP_LINK}>하남점</Link>
              </li>
              <li
                className="clickable "
                data-react-tarea="카테고리|바닥필터|백화점픽업_필터_선택|대구신세계"
              >
                <Link to={TEMP_LINK}>대구신세계</Link>
              </li>
              <li
                className="clickable "
                data-react-tarea="카테고리|바닥필터|백화점픽업_필터_선택|대전신세계"
              >
                <Link to={TEMP_LINK}>대전신세계</Link>
              </li>
              <input
                type="hidden"
                name="pickuSalestr"
                id="pickuSalestr"
                value=""
              />
            </ul>
          </div>
        </div>

        <div className="cmft_store_lst" style={{ display: 'none' }}>
          <ul>
            <li
              className="clickable "
              data-react-tarea="카테고리|바닥필터|백화점상품_필터_선택|전체"
            >
              <Link to={TEMP_LINK}>전체</Link>
            </li>
            <li
              className="clickable "
              data-react-tarea="카테고리|바닥필터|백화점상품_필터_선택|본점"
            >
              <Link to={TEMP_LINK}>본점</Link>
            </li>
            <li
              className="clickable "
              data-react-tarea="카테고리|바닥필터|백화점상품_필터_선택|강남점"
            >
              <Link to={TEMP_LINK}>강남점</Link>
            </li>
            <li
              className="clickable "
              data-react-tarea="카테고리|바닥필터|백화점상품_필터_선택|경기점"
            >
              <Link to={TEMP_LINK}>경기점</Link>
            </li>
            <li
              className="clickable "
              data-react-tarea="카테고리|바닥필터|백화점상품_필터_선택|센텀시티점"
            >
              <Link to={TEMP_LINK}>센텀시티점</Link>
            </li>
            <li
              className="clickable "
              data-react-tarea="카테고리|바닥필터|백화점상품_필터_선택|타임스퀘어점패션관"
            >
              <Link to={TEMP_LINK}>타임스퀘어점패션관</Link>
            </li>
            <li
              className="clickable "
              data-react-tarea="카테고리|바닥필터|백화점상품_필터_선택|타임스퀘어점리빙관"
            >
              <Link to={TEMP_LINK}>타임스퀘어점리빙관</Link>
            </li>
            <li
              className="clickable "
              data-react-tarea="카테고리|바닥필터|백화점상품_필터_선택|의정부점"
            >
              <Link to={TEMP_LINK}>의정부점</Link>
            </li>
            <li
              className="clickable "
              data-react-tarea="카테고리|바닥필터|백화점상품_필터_선택|광주신세계"
            >
              <Link to={TEMP_LINK}>광주신세계</Link>
            </li>
            <li
              className="clickable "
              data-react-tarea="카테고리|바닥필터|백화점상품_필터_선택|마산점"
            >
              <Link to={TEMP_LINK}>마산점</Link>
            </li>
            <li
              className="clickable "
              data-react-tarea="카테고리|바닥필터|백화점상품_필터_선택|천안아산점"
            >
              <Link to={TEMP_LINK}>천안아산점</Link>
            </li>
            <li
              className="clickable "
              data-react-tarea="카테고리|바닥필터|백화점상품_필터_선택|김해점"
            >
              <Link to={TEMP_LINK}>김해점</Link>
            </li>
            <li
              className="clickable "
              data-react-tarea="카테고리|바닥필터|백화점상품_필터_선택|하남점"
            >
              <Link to={TEMP_LINK}>하남점</Link>
            </li>
            <li
              className="clickable "
              data-react-tarea="카테고리|바닥필터|백화점상품_필터_선택|대구신세계"
            >
              <Link to={TEMP_LINK}>대구신세계</Link>
            </li>
            <li
              className="clickable "
              data-react-tarea="카테고리|바닥필터|백화점상품_필터_선택|대전신세계"
            >
              <Link to={TEMP_LINK}>대전신세계</Link>
            </li>
            <input type="hidden" name="salestr" id="salestr" value="" />
          </ul>
        </div>
      </div>

      {datas && (
        <ProductList
          datas={datas}
          isWishChange={isWishChange}
          setIsWishChange={setIsWishChange}
        />
      )}
    </>
  );
}

export default CategoryDetailList;
