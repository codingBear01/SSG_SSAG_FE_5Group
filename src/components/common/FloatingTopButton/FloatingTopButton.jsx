import React from 'react';
import './FloatingTopButton.scss';

function FloatingTopButton() {
  return (
    <div className="floating_top is_visible">
      <a
        // href="javascript:window.scrollTo(0,0)"
        href="/"
        className="floating_btn ty_top clickable"
        data-react-tarea="웹공통_N|버튼_영역|위로"
      >
        <span className="blind">TOP</span>
        <i className="icon ty_sm icon_arrow_top" aria-hidden="true" />
      </a>
    </div>
  );
}

export default FloatingTopButton;