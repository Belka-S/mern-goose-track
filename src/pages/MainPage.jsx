import AuthSection from 'src/components/MainPage/AuthSection/AuthSection';
import MPDescription from 'src/components/MainPage/MPDescription/MPDescription';
import ReviewsSlider from 'src/components/MainPage/ReviewsSlider/ReviewsSlider';
export default function MainPage() {
  return (
    <>
      <h1>Welcome!</h1>
      <p>Please Register or Login</p>
      <AuthSection />
      <MPDescription />
      <ReviewsSlider />
    </>
  );
}
