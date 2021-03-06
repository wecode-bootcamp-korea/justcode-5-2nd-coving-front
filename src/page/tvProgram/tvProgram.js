import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ButtonGroup from './buttonGroup/buttonGroup';
import Slide from './slide';
import BASE_URL from '../../config';

function TvProgram() {
  const [programAll, setProgramAll] = useState();
  const location = useLocation();
  useEffect(() => {
    axios.get(`${BASE_URL}/tvseries${location.search}`).then(result => {
      setProgramAll(result.data.data);
    });
  }, [location.search]);

  return (
    <Container>
      <ButtonGroup />
      <SlideContainer>
        {programAll &&
          programAll.map((program, idx) => {
            return (
              <Slide
                key={program.title.toString() + idx.toString()}
                program={program}
              />
            );
          })}
      </SlideContainer>
    </Container>
  );
}

export default TvProgram;

const Container = styled.div`
  padding: 5% 0;
  background: black;
`;

const SlideContainer = styled.div`
  height: 100%;
  padding: 0 3.5%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  @media screen and (max-width: 1460px) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media screen and (max-width: 760px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
