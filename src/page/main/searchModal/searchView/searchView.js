import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import Slide from './slide';
import { closeSearchModal, switchSearchIcon } from '../../../../store';
import BASE_URL from '../../../../config';

function SearchView({ instantResultList }) {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [programList, setProgramList] = useState([]);
  let inputKeyword = useSelector(state => state.inputKeyword);

  useEffect(() => {
    const HandleProgramList = () => {
      let dataLength = instantResultList?.length;
      if (window.innerWidth > 1460 && dataLength > 7)
        setProgramList(instantResultList.slice(7, dataLength));
      else if (
        window.innerWidth > 1200 &&
        window.innerWidth <= 1460 &&
        dataLength > 6
      )
        setProgramList(instantResultList.slice(6, dataLength));
      else if (
        window.innerWidth > 760 &&
        window.innerWidth <= 1200 &&
        dataLength > 5
      )
        setProgramList(instantResultList.slice(5, dataLength));
      else if (
        window.innerWidth > 0 &&
        window.innerWidth <= 760 &&
        dataLength > 3
      )
        setProgramList(instantResultList.slice(3, dataLength));
      else setProgramList([]);
    };

    HandleProgramList();
    window.addEventListener('resize', HandleProgramList);

    return () => {
      window.removeEventListener('resize', HandleProgramList);
    };
  }, [instantResultList]);

  const SearchLog = programId => {
    axios.post(`${BASE_URL}/searchlog/${programId}`);
  };

  return (
    <Container>
      <StyledSwiper
        breakpoints={{
          0: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          760: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
          1460: {
            slidesPerView: 7,
            spaceBetween: 10,
          },
        }}
      >
        {instantResultList &&
          instantResultList.map((data, idx) => {
            return (
              <SwiperSlide key={data.toString() + idx.toString()}>
                <Slide data={data} />
              </SwiperSlide>
            );
          })}
      </StyledSwiper>

      <ProgramList>
        {programList &&
          programList.map((data, index) => {
            return (
              <Keyword
                key={data.toString() + index.toString()}
                onClick={() => {
                  navigate(`/detail/${data.program_id}`);
                  dispatch(closeSearchModal());
                  dispatch(switchSearchIcon(0));
                  SearchLog(data.program_id);
                }}
              >
                {data.title.includes(inputKeyword) ? (
                  <>
                    {data.title.split(inputKeyword)[0]}
                    <Highlight>{inputKeyword}</Highlight>
                    {data.title.split(inputKeyword)[1]}
                  </>
                ) : (
                  data.title
                )}
              </Keyword>
            );
          })}
      </ProgramList>
    </Container>
  );
}

export default SearchView;
const Container = styled.div`
  width: 100%;
  margin-bottom: 2%;
`;

const StyledSwiper = styled(Swiper)`
  overfow: hidden;
`;

const ProgramList = styled.div`
  padding-top: 3%;
`;

const Keyword = styled.div`
  font-size: calc(7px + 0.6vw);
  font-weight: 600;
  color: #868686;
  padding-bottom: 1%;

  :hover {
    color: #ffffff;
    cursor: pointer;
  }
`;

const Highlight = styled.span`
  color: red;
`;
