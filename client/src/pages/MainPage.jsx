import AuthSection from 'components/MainPage/AuthSection/AuthSection';
import MPDescription from 'components/MainPage/MPDescription/MPDescription';
import ReviewsSlider from 'components/MainPage/ReviewsSlider/ReviewsSlider';
import { MainWrapper } from 'components/MainPage/AuthSection/AuthSection.styled';
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
