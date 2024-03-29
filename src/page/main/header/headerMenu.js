import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { switchSearchIcon } from '../../../store';

function HeaderMenu({ onOpen, onClose }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = localStorage.getItem('email');

  return (
    <Container onMouseOver={onOpen} onMouseOut={onClose}>
      <Profile>
        <ProfileImg />
        <UserName>{email ? email.split('@')[0] : 'JUSTCODE'}</UserName>
      </Profile>
      <MenuList>
        <Menu
          onClick={() => {
            navigate('/mypage');
            dispatch(switchSearchIcon(0));
            window.scrollTo(0, 0);
          }}
        >
          My
        </Menu>
        <Menu
          onClick={() => {
            localStorage.clear();
            window.location.replace('/');
          }}
        >
          로그아웃
        </Menu>
      </MenuList>
    </Container>
  );
}

export default HeaderMenu;

const Container = styled.div`
  width: 13%;
  min-width: 90px;
  margin-right: 4%;
  position: absolute;
  top: 100%;
  z-index: 2;
  background: #212121;
  border: 1px solid #4d4d4d;
  box-radius: 2px;
  box-shadwo: rgba(0, 0, 0, 0.5) 0px 5px 1ppx 0px;
`;

const Profile = styled.div`
  padding: 7%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #4d4d4d;
  cursor: pointer;
`;

const ProfileImg = styled.img.attrs(props => ({
  src: 'https://i.ibb.co/8sYR6ps/profile-image-default.png',
  alt: 'PropfileImg',
}))`
  width: 20%;
  margin-right: 5%;
`;

const UserName = styled.div`
  font-size: 1vw;
  font-weight: 600;
  color: #ffffff;
`;

const MenuList = styled.div`
  padding: 7% 0;
`;

const Menu = styled.div`
  padding: 5% 10%;
  font-size: 1vw;
  font-weight: 600;

  :hover {
    background: #8180803d;
    color: #ffffff;
    cursor: pointer;
  }
`;
