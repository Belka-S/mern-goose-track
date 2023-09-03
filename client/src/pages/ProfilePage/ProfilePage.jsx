import { useDispatch } from 'react-redux';
import { updUser, changeEM, changePW, delUser } from 'store/auth/authOps';

import UserForm from '../../components/Forms/ProfileForm/UserForm/UserForm';

import DeleteProfileModal from '../../components/DeleteProfileModal/DeleteProfileModal';
import ChangeEmailModal from '../../components/ChangeEmailModal/ChangeEmailModal';
import ChangePasswordModal from '../../components/ChangePasswordModal/ChangePasswordModal';

import { AccountPageWrap, BtnWrapper, ChangeValueBtnWrap } from './ProfilePage.styled';

export default function AccountPage() {
  const dispatch = useDispatch();
  const callBack = (data) => {
    dispatch(updUser(data));
  };
  const callbackEmail = (data) => {
    dispatch(changeEM(data));
  };
  const callbackPassword = (data) => {
    dispatch(changePW(data));
  };
  const callbackDeleteUser = (data) => {
    dispatch(delUser(data));
  };

  return (
    <AccountPageWrap>
      <UserForm
        callBack={callBack}
        callbackEmail={callbackEmail}
        callbackPassword={callbackPassword}
        callbackDeleteUser={callbackDeleteUser}
      />
      <BtnWrapper>
        <ChangeEmailModal callbackEmail={callbackEmail} />
        <ChangePasswordModal callbackPassword={callbackPassword} />
        <DeleteProfileModal callbackDeleteUser={callbackDeleteUser} />
      </BtnWrapper>
    </AccountPageWrap>
  );
}
