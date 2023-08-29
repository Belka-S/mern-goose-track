import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { reset } from 'store/auth/authOps';
import { useisLoading } from 'store/selectors';
import ResetPwdForm from 'components/Forms/AuthForms/ResetPwdForm/ResetPwdForm';
import AuthNavigate from 'components/shared/AuthNavigate/AuthNavigate';
import Modal from 'components/shared/Modal/Modal';
import Loader from 'components/shared/Loader/Loader';
import { modalBackdropcolors } from 'styles/variables/themes';
import logo from 'images/others/desktop/rocket1x.png';
import logo2x from 'images/others/desktop/rocket2x.png';
import logo3x from 'images/others/desktop/rocket3x.png';

import { Container, ContentWrap, Wrap, StyledImg } from './ResetPwdPage.styled';

function ResetPwdPage() {
  const dispatch = useDispatch();
  const isLoading = useisLoading();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const id = searchParams.get('id');
  const pwdToken = searchParams.get('pwd_token');

  const callBack = (data) => {
    dispatch(reset({ ...data, id, pwdToken }));
    navigate('/login', { replace: true });
  };

  return (
    <Container>
      <ContentWrap>
        <StyledImg>
          <source media="(min-width: 1440px)" srcSet={`${logo} 1x, ${logo2x} 2x, ${logo3x} 3x`} />
          <img src={logo} alt="Logo goose" />
        </StyledImg>
        <Wrap>
          <ResetPwdForm onSubmitForm={callBack} />
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

export default ResetPwdPage;
