import styled from 'styled-components';
import { css } from 'styled-components';
import { useRef } from 'react';
import { Navigation, EffectFade, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import SLIDER_LIST from './data';
import Slide from './slide';

function Banner() {
  const swiperNavPreRef = useRef(null);
  const swiperNavNextRef = useRef(null);
  return (
    <Container>
      <Swiper
        modules={[Navigation, EffectFade, Pagination, Autoplay]}
        navigation={{
          prevEl: swiperNavPreRef.current,
          nextEl: swiperNavNextRef.current,
        }}
        onBeforeInit={swiper => {
          swiper.params.navigation.prevEl = swiperNavPreRef.current;
          swiper.params.navigation.nextEl = swiperNavNextRef.current;
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        speed={1000}
        loop
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
      >
        {SLIDER_LIST.map((slider, index) => {
          return (
            <SwiperSlide key={index}>
              <Slide
                title={slider.title}
                subTitle={slider.subTitle}
                img={slider.img}
                programId={slider.programId}
              />
            </SwiperSlide>
          );
        })}
        <SwiperNavPrev ref={swiperNavPreRef} />
        <SwiperNavNext ref={swiperNavNextRef} />
      </Swiper>
    </Container>
  );
}

export default Banner;

const Container = styled.div`
  width: 100%;
  .swiper-pagination {
    height: 10px;
    position: absolute;
    top: 77%;
    display: flex;
    justify-content: start;
    margin-left: 3%;
    z-index: 1;
  }

  .swiper-pagination-bullet-active,
  .swiper-pagination-bullet {
    width: 0.5vw;
    height: 0.5vw;
    border-radius: 0.5rem;
    background-color: #dad9d9 !important;
  }
`;

const Nav = css`
  width: 3%;
  height: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-55%);
  z-index: 1;
  opacity: 50%;
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: 70%;
  background-position: center center;

  :hover {
    opacity: 100%;
  }
`;

const SwiperNavPrev = styled.div`
  background-image: url('./image/prev-arrow.png');
  left: 0px;
  ${Nav}
`;

const SwiperNavNext = styled.div`
  background-image: url('./image/next-prev.png');
  right: 0px;
  ${Nav}
`;
