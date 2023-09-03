import { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Modal from 'components/shared/Modal/Modal';

import ChangePasswordForm from 'components/forms/ProfileForm/ChangePasswordForm/ChangePasswordForm';

import { UpdatePasswordBtn } from './ChangePasswordModal.styled';

export default function ChangePasswordModal({ callbackPassword }) {
  const { t } = useTranslation();

  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);

  const openChangePasswordModal = () => {
    setShowChangePasswordModal(true);
  };

  const closeChangePasswordModal = () => {
    setShowChangePasswordModal(false);
  };

  return (
    <>
      {showChangePasswordModal && (
        <Modal isOpen={showChangePasswordModal} onClose={closeChangePasswordModal}>
          {
            <ChangePasswordForm
              onClose={closeChangePasswordModal}
              callbackPassword={callbackPassword}
            />
          }
        </Modal>
      )}
      <UpdatePasswordBtn type="button" onClick={openChangePasswordModal}>
        {t('ChangePassword')}
      </UpdatePasswordBtn>
    </>
  );
}

ChangePasswordModal.propTypes = {
  callbackPassword: PropTypes.func.isRequired
};
