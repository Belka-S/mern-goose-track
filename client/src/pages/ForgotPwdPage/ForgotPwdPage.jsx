import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { forgot } from 'store/auth/authOps';
import { useisLoading } from 'store/selectors';
import ForgotPwdForm from 'components/Forms/AuthForms/ForgotPwdForm/ForgotPwdForm';
import AuthNavigate from 'components/shared/AuthNavigate/AuthNavigate';
import Modal from 'components/shared/Modal/Modal';
import Loader from 'components/shared/Loader/Loader';
import { modalBackdropcolors } from 'styles/variables/themes';
import logo from 'images/others/desktop/rocket1x.png';
import logo2x from 'images/others/desktop/rocket2x.png';
import logo3x from 'images/others/desktop/rocket3x.png';

import { Container, ContentWrap, Wrap, StyledImg } from './ForgotPwdPage.styled';

function ForgotPwdPage() {
  const dispatch = useDispatch();
  const isLoading = useisLoading();

  const callBack = (data) => {
    dispatch(forgot(data));
  };

  return (
    <Container>
      <ContentWrap>
        <StyledImg>
          <source media="(min-width: 1440px)" srcSet={`${logo} 1x, ${logo2x} 2x, ${logo3x} 3x`} />
          <img src={logo} alt="Logo goose" />
        </StyledImg>
        <Wrap>
          <ForgotPwdForm onSubmitForm={callBack} />
          <AuthNavigate formType="register" />
        </Wrap>
      </ContentWrap>
      {isLoading && (
        <Modal color={modalBackdropcolors.black}>
          <Loader />
        </Modal>
      )}
    </Container>
  );
}

export default ForgotPwdPage;
