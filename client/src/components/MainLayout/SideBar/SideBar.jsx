import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';

import AddFeedbackBtn from 'components/MainLayout/AddFeedbackBtn/AddFeedbackBtn';
import Modal from 'components/shared/Modal/Modal';
import FormWrapper from 'components/Forms/FeedbackForm/FormWrapper';
import { modalBackdropcolors } from 'styles/variables/themes';
import { WrapTogglers } from 'components/shared/Togglers/WrapTogglers.styled';
import LangToggler from 'components/shared/Togglers/LangToggler/LangToggler';
import ThemeToggler from 'components/shared/Togglers/ThemeToggler/ThemeToggler';

import UserNav from './UserNav/UserNav';
import SideBarLogo from './SideBarLogo/SideBarLogo';
import UserMenuBTNClose from './UserMenuBTNClose/UserMenuBTNClose';
import { SidebarBackdrop, SideBarContainer, SideBarHeading } from './SideBar.styled';

export default function SideBar({ open, callBackCls, isHomePage }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { t } = useTranslation();

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <SidebarBackdrop open={open} onClick={callBackCls} />
      <SideBarContainer open={open}>
        <UserMenuBTNClose callBackCls={callBackCls} />
        <SideBarLogo />
        <WrapTogglers>
          <SideBarHeading> {t('User Panel')}</SideBarHeading>
          <ThemeToggler />
          <LangToggler isHomePage={isHomePage} />
        </WrapTogglers>

        <UserNav callBackCls={callBackCls} />

        <AddFeedbackBtn openModal={openModal} />
      </SideBarContainer>
      <AnimatePresence>
        {modalIsOpen && (
          <Modal onClose={closeModal} color={modalBackdropcolors.grey} clickable>
            <FormWrapper onClose={closeModal} />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}

SideBar.propTypes = {
  open: PropTypes.bool.isRequired,
  callBackCls: PropTypes.func.isRequired,
  isHomePage: PropTypes.bool
};
