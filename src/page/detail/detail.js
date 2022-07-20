import styled from 'styled-components';
import TopContainer from './topContainer/topContainer';
import BASE_URL from '../../config';
import EpListContainer from './epListContainer/epListContainer';
import Header from '../main/header/header';
import PosterContainer from './posterContainer/posterContainer';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Container = styled.section`
  max-width: 100%;
  height: auto;
`;

function Detail() {
  const dataInterface = {
    programInfo: [
      {
        id: null,
        title: '',
        title_img_url: '',
        poster_img_url: '',
        age_range: '',
        genres: [''],
        channel: '',
        participants: [
          {
            type: '크리에이터',
            name: '',
          },
          {
            type: '출연',
            name: '',
          },
        ],
        summary: '',
        episode_info: [
          {
            id: null,
            episode_num: null,
            img_url: '',
            video_url:
              'https://vpc-endpoint-check1993.s3.ap-northeast-2.amazonaws.com/coving/coving.mp4',
            summary: '',
            release_date: '',
            running_time: '',
          },
        ],
      },
    ],

    similar_program_list: [
      {
        id: null,
        title: '',
        poster_img_url: '',
      },
    ],

    with_program_list: [
      {
        id: null,
        title: '',
        poster_img_url: '',
      },
    ],
  };
  const [datas, setDatas] = useState(dataInterface);
  const { id } = useParams();
  const programId = Number(id);
  useEffect(() => {
    (async () => {
      const res = await fetch(`${BASE_URL}/program/${programId}`);
      const json = await res.json();

      setDatas(json.data);
    })();
  }, [id]);
  console.log(datas);
  const wish = [1, 2, 4, 6];

  const info = datas.programInfo[0];
  const episode = datas.programInfo[0].episode_info;
  const isTitle = datas.programInfo[0].title;
  const similarProgram = datas.similar_program_list;
  const withProgram = datas.with_program_list;

  const suggestion = [
    {
      name: '같이 보기 좋은 프로그램',
      poster: [...similarProgram],
    },
    {
      name: '유사한 프로그램',
      poster: [...withProgram],
    },
  ];

  return (
    <Container>
      <Header />
      <TopContainer data={info} wish={wish} />
      <EpListContainer data={episode} title={isTitle} />
      {suggestion.map(i => (
        <PosterContainer name={i.name} data={i.poster} />
      ))}
    </Container>
  );
}

export default Detail;
