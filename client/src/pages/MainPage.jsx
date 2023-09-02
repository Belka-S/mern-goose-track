import AuthSection from 'pages/MainPage/AuthSection/AuthSection';
import MPDescription from 'pages/MainPage/MPDescription/MPDescription';
import ReviewsSlider from 'pages/MainPage/ReviewsSlider/ReviewsSlider';
import { MainWrapper } from 'pages/MainPage/AuthSection/AuthSection.styled';
import BtnToTop from 'components/shared/BtnToTop/BtnToTop';

export default function MainPage() {
  return (
    <>
      <BtnToTop />
      <AuthSection />
      <MainWrapper>
        <MPDescription />
        <ReviewsSlider />
      </MainWrapper>
    </>
  );
}
