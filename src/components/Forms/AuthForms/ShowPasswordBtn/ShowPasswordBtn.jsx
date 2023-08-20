import eyeOn from 'src/images/svg/eye-show.svg';
import eyeOff from 'src/images/svg/eye-off.svg';

import { SvgEye } from './ShowPasswordBtn.styled';

export default function ShowPasswordBtn({ togglePassword, passwordShown, status }) {
  return (
    <button type="button" onClick={() => togglePassword}>
      <SvgEye
        src={passwordShown ? eyeOff : eyeOn}
        alt="Success Icon"
        className={status !== '' ? 'right' : 'left'}
      />
    </button>
  );
}
