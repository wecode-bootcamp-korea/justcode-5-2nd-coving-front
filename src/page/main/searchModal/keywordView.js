import styled from 'styled-components';

function KeywordView() {
  const mockKeywords = [
    'Be the SMF',
    '뿅뿅 지구오락실',
    '이브',
    '나는 SOLO',
    '인사이더',
    '소시탐탐',
    '유 퀴즈 온 더 블럭',
    '환승연애',
    '동승글즈3',
    '유미의 세포들',
  ];

  return (
    <Container>
      <RecentKeyword>
        <Title>최근 검색어</Title>
      </RecentKeyword>
      <PopularKeyword>
        <Title>실시간 인기 검색어</Title>
        {mockKeywords.map((keyword, index) => {
          return (
            <KeywordGroup key={keyword.toString() + index.toString()}>
              <Num>{index + 1}</Num>
              <Keyword>{keyword}</Keyword>
            </KeywordGroup>
          );
        })}
        <UpdatedAt>2022.07.14 오전 03:18 기준</UpdatedAt>
      </PopularKeyword>
    </Container>
  );
}

export default KeywordView;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RecentKeyword = styled.div`
  width: 50%;
  border-right: 1px solid #4d4d4d;
`;

const PopularKeyword = styled.div`
  width: 50%;
  padding-left: 3%;
`;

const Title = styled.div`
  padding-bottom: 3%;
  opacity: 0.8;
  font-size: calc(10px + 0.8vw);
  font-weight: 600;
  color: #ffffff;
`;

const KeywordGroup = styled.div`
  margin: 2.5% 0;
  display: flex;
`;

const Num = styled.div`
  width: 6%;
  font-size: calc(7px + 0.8vw);
  font-weight: 500;
  color: #ff153c;
`;

const Keyword = styled.div`
  font-size: calc(7px + 0.8vw);
  font-weight: 600;
  color: #868686;

  :hover {
    color: #ffffff;
    cursor: pointer;
  }
`;

const UpdatedAt = styled.div`
  margin-top: 6%;
  color: #595858;
  font-weight: 500;
  font-size: calc(3px + 0.8vw);
`;
