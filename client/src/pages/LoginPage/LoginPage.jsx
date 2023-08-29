import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { userlogin, verify } from 'store/auth/authOps';
import { useisLoading, useError } from 'store/selectors';
import LoginForm from 'components/Forms/AuthForms/LoginForm/LoginForm';
import VerifyForm from 'components/Forms/AuthForms/VerifyForm/VerifyForm';
import AuthNavigate from 'components/shared/AuthNavigate/AuthNavigate';
import Modal from 'components/shared/Modal/Modal';
import Loader from 'components/shared/Loader/Loader';
import { modalBackdropcolors } from 'styles/variables/themes';
import logo from 'images/others/desktop/rocket1x.png';
import logo2x from 'images/others/desktop/rocket2x.png';
import logo3x from 'images/others/desktop/rocket3x.png';

import { Container, ContentWrap, Wrap, StyledImg } from './LoginPage.styled';

export default function LoginPage() {
  const dispatch = useDispatch();
  const isLoading = useisLoading();
  const [, setOpenModal] = useState(false);

  const errorMessage = useError();

  const onClose = () => {
    setOpenModal(false);
  };
  const callBack = (data) => {
    dispatch(userlogin(data));
  };
  const onSubmitVerifyForm = (data) => {
    dispatch(verify(data));
  };

  return (
    <Container>
      <ContentWrap>
        <StyledImg>
          <source media="(min-width: 1440px)" srcSet={`${logo} 1x, ${logo2x} 2x, ${logo3x} 3x`} />
          <img src={logo} alt="Logo goose" />
        </StyledImg>
        <Wrap>
          <LoginForm onSubmitForm={callBack} />
          <AuthNavigate formType="login" />
        </Wrap>
      </ContentWrap>
      {isLoading && (
        <Modal color={modalBackdropcolors.black}>
          <Loader />
        </Modal>
      )}

      {errorMessage === 'Action Required: Verify Your Email' && (
        <Modal onClose={onClose} color={modalBackdropcolors.black} clickable={false}>
          <VerifyForm onSubmitForm={onSubmitVerifyForm} />
        </Modal>
      )}
    </Container>
  );
}
