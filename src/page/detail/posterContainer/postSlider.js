import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const PosterSlider = styled.div`
display: flex;
overflow-x: scroll;
max-width: 100%;
height 100%;
scroll-behavior: smooth;


::-webkit-scrollbar {
    width: 5px;
    height: 4px;
}

::-webkit-scrollbar-thumb {
    
    background: #5c5c5c;
    border-radius: 10px;
}
::-webkit-scrollbar-track {
    background: #212121;
}
  div {
    
    min-width: ${prop => prop.contentsBoxWidth}px;
    height ${prop => prop.contentsBoxheight}px;
    margin-right: 15px;
    margin-top: 15px;
    border: 1px solid white;
    border-radius: 3px;
    :hover {
      transform: translateY(-15px);
      transition: all 0.2s;
    }
    transition: all 0.2s;
  }
`;

const Button = styled.button`
  position: absolute;
  right: ${prop => prop.right}%;
  left: ${prop => prop.left}%;
  width: 50px;
  height: 300px;
  border: none;
  background: linear-gradient(
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  );

  span {
    color: white;
  }
`;

function PostSlider({ width, height, data }) {
  const [value, setValue] = useState();
  const els = useRef();

  const scroll = scrollOffset => {
    els.current.scrollLeft += scrollOffset;
  };

  const onRightClick = () => {
    scroll(1000);
  };
  const onLeftClick = () => {
    scroll(-1000);
  };

  const onOver = () => {
    setValue(true);
  };

  const onLeave = () => {
    setValue(false);
  };

  return (
    <>
      <PosterSlider
        ref={els}
        onMouseEnter={onOver}
        onMouseLeave={onLeave}
        contentsBoxWidth={width}
        contentsBoxheight={height}
      >
        {value ? (
          <Button left={0} right={0} onClick={onLeftClick}>
            <span>
              <BiChevronLeft size={40} />
            </span>
          </Button>
        ) : null}
        {data.map((i, inx) => (
          <div
            id={inx + 1}
            style={{ backgroundImage: `url(${i})`, backgroundSize: `cover` }}
          ></div>
        ))}
        {value ? (
          <Button left={96.7} right={0} onClick={onRightClick}>
            <span>
              <BiChevronRight size={40} />
            </span>
          </Button>
        ) : null}
      </PosterSlider>
    </>
  );
}

export default PostSlider;