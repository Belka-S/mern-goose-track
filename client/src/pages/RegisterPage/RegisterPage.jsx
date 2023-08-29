import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useisLoading, useError } from 'store/selectors';
import logo from 'images/others/desktop/goose-quote1x.png';
import logo2x from 'images/others/desktop/goose-quote2x.png';
import logo3x from 'images/others/desktop/goose-quote3x.png';

import { register, verify } from 'store/auth/authOps';
import RegisterForm from 'components/Forms/AuthForms/RegisterForm/RegisterForm';
import VerifyForm from 'components/Forms/AuthForms/VerifyForm/VerifyForm';
import AuthNavigate from 'components/shared/AuthNavigate/AuthNavigate';
import Modal from 'components/shared/Modal/Modal';
import Loader from 'components/shared/Loader/Loader';
import { modalBackdropcolors } from 'styles/variables/themes';

import { Container, ContentWrap, Wrap, StyledImg } from './RegisterPage.styled';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const isLoading = useisLoading();
  const registerError = useError();

  const [openModal, setOpenModal] = useState(false);
  const onClose = () => {
    setOpenModal(false);
  };
  const callBack = (data) => {
    dispatch(register(data));
    setOpenModal(true);
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
          <RegisterForm callBack={callBack} />
          <AuthNavigate formType="register" />
        </Wrap>
      </ContentWrap>
      {openModal && (
        <Modal onClose={onClose} color={modalBackdropcolors.black}>
          {isLoading ? <Loader /> : <VerifyForm onSubmitForm={onSubmitVerifyForm} />}
          {registerError && onClose()}
        </Modal>
      )}
    </Container>
  );
}
