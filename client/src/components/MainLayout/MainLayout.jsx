import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Suspense, useEffect, useState } from 'react';
import { modalBackdropcolors } from 'styles/variables/themes';
import Loader from 'components/shared/Loader/Loader';
import Modal from 'components/shared/Modal/Modal';

import { useToken, useisLoading, useisRefreshing } from 'store/selectors';

import { getCurrent } from 'store/auth/authOps';

import SideBar from './SideBar/SideBar';
import AppHeader from './AppHeader/AppHeader';
import 'react-toastify/dist/ReactToastify.css';
import {
  ChildrenContainer,
  MainLayOutContainer,
  MainLayOutSubContainer
} from './MainLayout.styled';

const Layout = () => {
  const [open, setOpen] = useState(false);
  const [, setOpenModal] = useState(false);
  const isRefreshing = useisRefreshing();
  const token = useToken();
  const dispatch = useDispatch();
  const toggleModal = (openModal) => setOpenModal(!openModal);
  const callBack = () => setOpen(true);
  const callBackCls = () => setOpen(false);

  useEffect(() => {
    if (token) {
      dispatch(getCurrent());
    }
  }, [dispatch, token]);
  const isLoading = useisLoading();
  return (
    <>
      <MainLayOutContainer>
        <SideBar open={open} callBackCls={callBackCls} />
        <MainLayOutSubContainer>
          <AppHeader callBack={callBack} onGiveFeedBack={toggleModal} />
          <ChildrenContainer>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </ChildrenContainer>
        </MainLayOutSubContainer>
      </MainLayOutContainer>

      {isRefreshing && (
        <Modal color={modalBackdropcolors.black}>
          <Loader />
        </Modal>
      )}
      {isLoading && (
        <Modal color={modalBackdropcolors.black}>
          <Loader />
        </Modal>
      )}
    </>
  );
};

export default Layout;
