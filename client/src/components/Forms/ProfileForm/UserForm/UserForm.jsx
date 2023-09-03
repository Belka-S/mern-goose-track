import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { useTranslation } from 'react-i18next';

import { useUser } from 'store/selectors';
import UniversalInput from 'components/Forms/UniversalInput/UniversalInput';
import AccountAvatar from 'components/Forms/ProfileForm/UserAvatar/UserAvatar';

import { validationAvatarRules, validationUserFormRules } from '../accountValidationRules';

import { FormWrap, UserNameTitle, RoleTitle, FormInputContainer, FormBtn } from './UserForm.styled';

export default function UserForm({ callBack }) {
  const { t } = useTranslation();
  const user = useUser();

  useEffect(() => {}, [user.email]);

  const initialValues = {
    avatarUrl: user.avatarUrl || '',
    name: user.name,
    phone: user.phone || '',
    birthday: user.birthday || '',
    skype: user.skype || ''
  };

  const [imagePreview, setImagePreview] = useState(null);
  const [selectedAvatar, setSelectedAvatar] = useState(user.avatarUrl);

  const onSubmit = (data) => {
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      if (!data.avatarUrl.includes('cloudinary')) data.avatarUrl = 'dummy';

      if (typeof data[key] === 'string') {
        formData.append(key, data[key].trim());
      } else {
        formData.append(key, data[key]);
      }
    });

    callBack(formData);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={(validationUserFormRules, validationAvatarRules)}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {(formik) => {
          return (
            <Form encType="multipart/form-data">
              <FormWrap>
                <AccountAvatar
                  selectedAvatar={selectedAvatar}
                  formik={formik}
                  setSelectedAvatar={setSelectedAvatar}
                  setImagePreview={setImagePreview}
                />
                <RoleTitle>{t('User')}</RoleTitle>
                <UserNameTitle>{user.email}</UserNameTitle>
                <FormInputContainer>
                  <UniversalInput
                    label={t('UserName')}
                    type="text"
                    name="name"
                    placeholder={t('Enter your name')}
                  />
                  <UniversalInput
                    label={t('Birthday')}
                    type="date"
                    name="birthday"
                    placeholder="Pick a date of your birthday"
                  />
                  <UniversalInput
                    label={t('Phone')}
                    type="tel"
                    name="phone"
                    pattern="\(\d{3}\) \d{3}-\d{4}"
                    placeholder="+380971234567"
                  />
                  <UniversalInput
                    label={t('Skype')}
                    type="text"
                    name="skype"
                    placeholder={t('Add a skype number')}
                  />
                </FormInputContainer>
                <FormBtn
                  type="submit"
                  disabled={
                    !formik.isValid || !formik.touched || formik.isSubmitting
                    // || !formik.dirty
                  }
                >
                  {t('Save changes')}
                </FormBtn>
              </FormWrap>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

UserForm.propTypes = {
  callBack: PropTypes.func.isRequired
};
