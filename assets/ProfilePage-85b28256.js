import{j as e,s as n,t as r,I,Y as q,P as d,Q as y,_ as X,U as m,T as j,V as H,$ as Y,a0 as B,k as u,a1 as Q,u as b,x as $,H as v,a2 as S,y as C,M as E,a3 as M,a4 as T,D as Z,z as G,A as J,a5 as K,a6 as ee}from"./index-b0910c9a.js";import{S as te}from"./Plus-358e7b54.js";import{e as oe,a as re,i as ne,b as ie}from"./eye-off-fd98a0c4.js";const se=t=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 32 32",...t,children:e.jsx("path",{fill:"currentColor",d:"M14.667 20h2.667v2.667h-2.667V20zm0-10.667h2.667v8h-2.667v-8zm1.32-6.666C8.627 2.667 2.667 8.64 2.667 16s5.96 13.333 13.32 13.333c7.373 0 13.347-5.973 13.347-13.333S23.361 2.667 15.987 2.667zm.013 24c-5.893 0-10.667-4.773-10.667-10.667S10.106 5.333 16 5.333c5.893 0 10.667 4.773 10.667 10.667S21.894 26.667 16 26.667z"})}),ae=n.span`
  display: flex;
  margin-bottom: 8px;
  margin-top: 16px;
  color: ${({theme:t})=>t.colors.placeholder};
`,ce=n(I)`
  font-size: 14px;
  line-height: 1.29;
  font-weight: 600;
  letter-spacing: -0.02em;
  width: 199px;
  height: 36px;
  color: ${({theme:t})=>t.colors.textCancelBtn};
  border-width: 1px;
  border-style: solid;
  border-color: ${({theme:t})=>t.colors.borderInputUserForm};
  border-radius: 8px;
  padding: 0 18px;
  margin-bottom: 8px;
  background: transparent;

  &:hover {
    border: 1px solid black;
  }

  @media screen and (${r.breakpoints.s} <= width < ${r.breakpoints.m}) {
    width: 299px;
    height: 42px;
  }

  @media screen and (${r.breakpoints.m} <= width) {
    font-size: 16px;
    line-height: 1.13;
    width: 354px;
    height: 46px;
    border-radius: 8px;
    padding: 0 18px;
    margin-bottom: 8px;
  }

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({theme:t})=>t.colors.placeholder};
  }

  &:hover::placeholder {
    color: ${({theme:t})=>t.colors.placeholder};
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px ${({theme:t})=>t.colors.backgroundUserForm} inset !important;
  }

  &:-webkit-autofill::first-line {
    color: ${({theme:t})=>t.colors.textCancelBtn} !important;
  }
`,le=n(q)`
  font-size: ${r.fontSizes.xs};
  font-weight: ${r.fontWeight.r};
  line-height: 14px;
  padding-left: 14px;
  color: red;

  @media screen and (${r.breakpoints.l} <= width) {
    padding-left: 18px;
  }
`;function w({label:t,type:s,name:o,placeholder:a}){return e.jsxs("label",{htmlFor:o,children:[e.jsx(ae,{children:t}),e.jsx(ce,{id:o,type:s,name:o,placeholder:a}),e.jsx(le,{name:o,component:"div"})]})}w.propTypes={label:d.string.isRequired,type:d.string.isRequired,name:d.string.isRequired,placeholder:d.string.isRequired};const A=["image/apng","image/bmp","image/gif","image/jpeg","image/pjpeg","image/png","image/svg+xml","image/tiff","image/webp","image/x-icon"],de=/^[a-zA-Z0-9_]*$/,pe=/^\+380\d{9}$/,he=y().shape({avatar:X().test("fileType",m.t("formats"),t=>!t||t&&A.includes(t==null?void 0:t.type))}),me=y().shape({email:j(m.t("EnterEmail")).email(m.t("Error email")).required(m.t("EmailRequired"))}),xe=y().shape({newPassword:j().min(6,"The password is short - min 6 characters").required(m.t("Password Required")),confirmPassword:j().min(6,m.t("ShortPassword")).required(m.t("Password Required")).oneOf([H("newPassword"),null],m.t("Passwords must match"))});y().shape({name:j(m.t("Enter your name")).min(4,m.t("Name4")).max(16,m.t("TooLong16")).matches(de,m.t("Only letters")).required(m.t("NameRequired")),phone:j().matches(pe,m.t("InvalidPhone")),birthday:Y(),skype:j().max(16,m.t("TooLong16"))});const ue=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: -20px;
  top: -30px;

  @media screen and (${r.breakpoints.m} <= width) {
    top: 0;
    margin-bottom: 14px;
  }
`,be=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 14px;
  height: 14px;
  top: 85%;
  left: 60%;
  color: white;
  background-color: #3e85f3;
  border-radius: 50%;
  z-index: 1;

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: #2b78ef;
  }

  @media screen and (${r.breakpoints.m} <= width) {
    width: 24px;
    height: 24px;
  }
`,ge=n.input`
  display: none;
`,z=n.img`
  width: 72px;
  height: 72px;
  border: 2px solid #3e85f3;
  border-radius: 50%;
  object-fit: cover;

  &:hover,
  &:focus {
    cursor: pointer;
  }

  @media screen and (${r.breakpoints.m} <= width) {
    width: 124px;
    height: 124px;
  }
`;function V({selectedAvatar:t,formik:s,setSelectedAvatar:o,setImagePreview:a}){const i=B(),c=u.useRef(null),l=()=>c.current.click();return e.jsxs(ue,{children:[e.jsx(be,{children:e.jsx(te,{width:"18px",height:"18px",onClick:l})}),e.jsxs("label",{children:[e.jsx(ge,{type:"file",name:"avatar",accept:"image/*",ref:c,onBlur:()=>s.setTouched({avatar:!0}),onChange:p=>{const x=p.target.files[0];x&&A.includes(x.type)&&(s.setFieldValue("avatar",x),o(URL.createObjectURL(x)),a(""))}}),t?e.jsx("div",{children:e.jsx(z,{src:t,alt:i.name})}):i.avatarUrl&&e.jsx(z,{alt:"username",src:i.avatarUrl,sx:{width:124,height:124,border:"2px solid #3E85F3"}})||e.jsx(Q,{alt:"username",src:"",sx:{fontSize:"72px",width:124,height:124,border:"2px solid #3E85F3"},children:i.name.split("")[0]})]})]})}V.propTypes={selectedAvatar:d.string.isRequired,formik:d.object.isRequired,setSelectedAvatar:d.func.isRequired,setImagePreview:d.func.isRequired};const fe=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,we=n.h3`
  margin: 0;
  margin-bottom: 4px;
  color: ${({theme:t})=>t.colors.textCancelBtn};

  @media screen and (${r.breakpoints.m} <= width) {
    margin-bottom: 6px;
  }
`,ke=n.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.17;
  letter-spacing: -0.02em;
  margin-bottom: 6px;
  color: ${({theme:t})=>t.colors.placeholder};

  @media screen and (${r.breakpoints.m} <= width) {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.29;
    letter-spacing: -0.02em;
  }

  @media screen and (${r.breakpoints.l} <= width) {
    margin-bottom: 8px;
  }
`,je=n.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (${r.breakpoints.m} <= width < ${r.breakpoints.l}) {
    gap: 12px;
  }

  @media screen and (${r.breakpoints.l} <= width) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px 50px;
    width: 758px;
    position: relative;
  }
`;n.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;const ye=n.button`
  width: 195px;
  height: 46px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  letter-spacing: -0.02em;
  margin-top: 20px;
  margin-bottom: 40px;
  border-radius: 16px;
  color: ${({theme:t})=>t.colors.white};
  background-color: ${({theme:t})=>t.colors.accent};
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    background-color: ${({theme:t})=>t.colors.hovered};
    transform: scale(1.02);
  }

  &:disabled {
    transform: none;
    background-color: #8fc2fc;
    cursor: not-allowed;
  }

  @media screen and (${r.breakpoints.m} <= width) {
    width: 262px;
    height: 48px;
    margin-top: 30px;
  }
`;function D({callBack:t}){const{t:s}=b(),o=B();u.useEffect(()=>{},[o.email]);const a={avatarUrl:o.avatarUrl||"",name:o.name,phone:o.phone||"",birthday:o.birthday||"",skype:o.skype||""},[i,c]=u.useState(null),[l,p]=u.useState(o.avatarUrl),x=h=>{const g=new FormData;Object.keys(h).forEach(f=>{h.avatarUrl.includes("cloudinary")||(h.avatarUrl="dummy"),typeof h[f]=="string"?g.append(f,h[f].trim()):g.append(f,h[f])}),t(g)};return e.jsx(e.Fragment,{children:e.jsx($,{initialValues:a,validationSchema:he,onSubmit:x,enableReinitialize:!0,children:h=>e.jsx(v,{encType:"multipart/form-data",children:e.jsxs(fe,{children:[e.jsx(V,{selectedAvatar:l,formik:h,setSelectedAvatar:p,setImagePreview:c}),e.jsx(ke,{children:s("User")}),e.jsx(we,{children:o.email}),e.jsxs(je,{children:[e.jsx(w,{label:s("UserName"),type:"text",name:"name",placeholder:s("Enter your name")}),e.jsx(w,{label:s("Birthday"),type:"date",name:"birthday",placeholder:"Pick a date of your birthday"}),e.jsx(w,{label:s("Phone"),type:"tel",name:"phone",pattern:"\\(\\d{3}\\) \\d{3}-\\d{4}",placeholder:"+380971234567"}),e.jsx(w,{label:s("Skype"),type:"text",name:"skype",placeholder:s("Add a skype number")})]}),e.jsx(ye,{type:"submit",disabled:!h.isValid||!h.touched||h.isSubmitting,children:s("Save changes")})]})})})})}D.propTypes={callBack:d.func.isRequired};const $e=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 10px;
  position: relative;
  background: ${({theme:t})=>t.colors.backgroundUserForm};
  box-shadow: rgb(0, 0, 0) 0px 0px 80px;

  @media screen and (${r.breakpoints.s} <= width < ${r.breakpoints.m}) {
  }

  @media screen and (${r.breakpoints.m} <= width) {
    width: 550px;
    height: 550px;
    border-radius: 16px;
  }
`,ve=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 10px;
  color: ${({theme:t})=>t.colors.placeholder};

  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    color: #cf0202;
  }
`,Ce=n.div`
  color: #cf0202;
  margin-bottom: 20px;
`,Pe=n.h1`
  margin-bottom: 30px;
  color: ${({theme:t})=>t.colors.placeholder};

  @media screen and (${r.breakpoints.m} <= width) {
    margin-bottom: 20px;
  }
`,Se=n.p`
  margin-bottom: 60px;
  color: ${({theme:t})=>t.colors.placeholder};

  @media screen and (${r.breakpoints.m} <= width) {
    margin-bottom: 20px;
  }
`,Ee=n.label`
  margin-bottom: 40px;
`,Fe=n.span`
  color: ${({theme:t})=>t.colors.placeholder};
`,ze=n.div`
  display: flex;
  gap: 20px;

  @media screen and (${r.breakpoints.m} <= width) {
    gap: 50px;
  }
`,Re=n.button`
  width: 100px;
  height: 48px;
  border-radius: 16px;
  color: white;
  background-color: #3e85f3;
  margin-bottom: 10px;

  transform: scale(1);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    color: white;
    background-color: #2b78ef;
    transform: scale(1.02);
  }
`,Ue=n.button`
  width: 152px;
  height: 48px;
  border-radius: 16px;
  color: white;
  background-color: #cf0202;
  margin-bottom: 10px;

  transform: scale(1);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    background-color: #bb0202;
    transform: scale(1.02);
  }

  &:disabled {
    transform: none;
    background-color: #8fc2fc;
    cursor: not-allowed;
  }
`;function N({onClose:t,callBack:s}){const{t:o}=b(),[a,i]=u.useState(!1),c=l=>{s(l)};return e.jsx(e.Fragment,{children:e.jsxs($e,{children:[e.jsx(ve,{onClick:t,children:e.jsx(S,{width:"24",height:"24"})}),e.jsx(Ce,{children:e.jsx(se,{width:"240",height:"240"})}),e.jsx(Pe,{children:o("AreYouSure")}),e.jsx(Se,{children:o("DeleteProfileConfirmation")}),e.jsxs(Ee,{children:[e.jsx("input",{type:"checkbox",checked:a,name:"agreement",onChange:()=>i(!a)})," ",e.jsx(Fe,{children:o("AgreeToDeleteProfile")})]}),e.jsxs(ze,{children:[e.jsx(Re,{onClick:t,children:o("Cancel")}),e.jsx(Ue,{type:"submit",disabled:!a,onClick:c,children:o("DeleteProfile")})]})]})})}N.propTypes={onClose:d.func.isRequired,callBack:d.func.isRequired};const Ie=n.button`
  width: 195px;
  height: 46px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  letter-spacing: -0.02em;
  border-radius: 16px;
  color: white; //  color: ${({theme:t})=>t.colors.white};
  background-color: #fad91b;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  transform: scale(1);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    background-color: #bb0202;
    transform: scale(1.02);
  }

  @media screen and (${r.breakpoints.m} <= width) {
    width: 262px;
    height: 48px;
  }
`;function qe(){const t=C(),s=p=>{t(M(p))},{t:o}=b(),[a,i]=u.useState(!1),c=()=>{i(!0)},l=()=>{i(!1)};return e.jsxs(e.Fragment,{children:[a&&e.jsx(E,{isOpen:a,onClose:l,children:e.jsx(N,{onClose:l,callBack:s})}),e.jsx(Ie,{type:"button",onClick:c,children:o("DeleteProfile")})]})}const Be=n(v)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  background: ${({theme:t})=>t.colors.backgroundUserForm};
  box-shadow: rgb(0, 0, 0) 0px 0px 80px;

  @media screen and (${r.breakpoints.m} <= width) {
    width: 600px;
    height: 350px;
    border-radius: 16px;
  }
`,Me=n.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 10px;
  color: ${({theme:t})=>t.colors.placeholder};

  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    color: #cf0202;
  }
`,Te=n.h1`
  margin-bottom: 30px;
  text-align: center;
  color: #3e85f3;
`,Ae=n.div`
  margin-bottom: 40px;
`,Ve=n.div`
  display: flex;
`,De=n.button`
  width: 152px;
  height: 48px;
  border: none;
  border-radius: 16px;
  color: white;
  background-color: ${({theme:t})=>t.colors.accent};
  margin-bottom: 10px;

  transform: scale(1);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    background-color: ${({theme:t})=>t.colors.accent};
    background-color: #2b78ef;
    transform: scale(1.02);
  }

  &:disabled {
    transform: none;
    background-color: #8fc2fc;
    cursor: not-allowed;
  }
`,Ne=n.button`
  width: 100px;
  height: 48px;
  border-radius: 16px;
  color: white;
  background-color: #3e85f3;
  margin-left: 30px;
  margin-bottom: 10px;

  transform: scale(1);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    transform: scale(1.02);
    background-color: #2b78ef;
  }
`;function W({onClose:t,openChangeEmailVerifyModal:s}){const o=C(),a={email:""},{t:i}=b(),c=l=>{o(T(l)),s()};return e.jsx(e.Fragment,{children:e.jsx($,{initialValues:a,validationSchema:me,onSubmit:c,children:l=>e.jsx(e.Fragment,{children:e.jsxs(Be,{children:[e.jsx(Me,{onClick:t,children:e.jsx(S,{width:"24",height:"24"})}),e.jsx(Te,{children:i("ChangeEmail")}),e.jsx(Ae,{children:e.jsx(w,{label:i("NewEmail"),type:"email",name:"email",placeholder:i("EnterNewEmail")})}),e.jsxs(Ve,{children:[e.jsx(De,{type:"submit",disabled:!l.isValid||!l.touched||l.isSubmitting||!l.dirty,children:i("UpdateEmail")}),e.jsx(Ne,{type:"button",onClick:t,children:i("Cancel")})]})]})})})})}W.propTypes={onClose:d.func.isRequired,openChangeEmailVerifyModal:d.func.isRequired};const We=n(v)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 10px;
  background: ${({theme:t})=>t.colors.backgroundUserForm};
  box-shadow: rgb(0, 0, 0) 0px 0px 80px;

  @media screen and (${r.breakpoints.m} <= width) {
    width: 550px;
    height: 350px;
    border-radius: 16px;
  }
`,Oe=n.div`
  margin-bottom: 30px;
`,Le=n.div`
  display: flex;
`,_e=n.button`
  width: 152px;
  height: 48px;
  border: none;
  border-radius: 16px;
  color: white;
  background-color: #3e85f3;
  margin-bottom: 10px;

  transform: scale(1);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    background-color: #2b78ef;
    transform: scale(1.02);
  }

  &:disabled {
    transform: none;
    background-color: #8fc2fc;
    cursor: not-allowed;
  }
`,Xe=n.button`
  width: 100px;
  height: 48px;
  border-radius: 16px;
  color: white;
  background-color: #3e85f3;
  margin-left: 100px;
  margin-bottom: 10px;

  transform: scale(1);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    transform: scale(1.02);
    background-color: #2b78ef;
  }
`;function O({onClose:t}){const s={verificationCode:""},{t:o}=b(),a=C(),i=c=>{a(Z(c)),t()};return e.jsx(e.Fragment,{children:e.jsx($,{initialValues:s,onSubmit:i,children:c=>e.jsx(e.Fragment,{children:e.jsxs(We,{children:[e.jsx(Oe,{children:e.jsx(w,{label:o("VerifyCode"),type:"text",name:"verificationCode",placeholder:o("EnterVerifyCode")})}),e.jsxs(Le,{children:[e.jsx(_e,{type:"submit",children:o("Verify")}),e.jsx(Xe,{type:"button",onClick:t,children:o("Cancel")})]})]})})})})}O.propTypes={onClose:d.func.isRequired};const He=n.button`
  width: 195px;
  height: 46px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  letter-spacing: -0.02em;
  border-radius: 16px;
  color: white; //  color: ${({theme:t})=>t.colors.white};
  background-color: #3e85f3; //  background-color: ${({theme:t})=>t.colors.activeUserNavIcon};
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  transform: scale(1);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    background-color: #2b78ef;
    transform: scale(1.02);
  }

  /* @media screen and (${r.breakpoints.m} <= width < ${r.breakpoints.l}) {
    margin-bottom: 20px;
  } */

  @media screen and (${r.breakpoints.m} <= width) {
    width: 262px;
    height: 48px;
  }
`;function Ye(){const t=G(),s=J(),[o,a]=u.useState(!1),[i,c]=u.useState(!1),[l,p]=u.useState(!1),{t:x}=b(),h=()=>{p(!0),a(!0)},g=()=>{c(!0),a(!1)};return e.jsxs(e.Fragment,{children:[l&&e.jsxs(E,{onClose:()=>p(!1),children:[o&&e.jsx(W,{onClose:()=>p(!1),openChangeEmailVerifyModal:g}),!t&&!s&&i&&!o&&e.jsx(O,{onClose:()=>p(!1)})]}),e.jsx(He,{type:"button",onClick:h,children:x("ChangeEmail")})]})}const Qe=n.span`
  display: flex;
  margin-bottom: 8px;
  margin-top: 16px;
  color: ${({theme:t})=>t.colors.placeholder};
`,Ze=n.div`
  position: relative;
  width: 100%;
`,Ge=n(I)`
  font-size: 14px;
  line-height: 1.29;
  font-weight: 600;
  letter-spacing: -0.02em;
  border-width: 1px;
  border-style: solid;
  color: ${({theme:t})=>t.colors.textCancelBtn};
  border-color: ${({theme:t})=>t.colors.borderInputUserForm};
  border-radius: 8px;
  padding: 0 18px;
  margin-bottom: 8px;
  background: ${({theme:t})=>t.colors.backgroundUserForm};

  &:hover {
    border: 1px solid black;
  }

  &.input-error {
    border: 1px solid ${r.colors.failed};
  }

  &.input-correct {
    border: 1px solid ${r.colors.saccess};
  }

  @media screen and (${r.breakpoints.s} <= width < ${r.breakpoints.m}) {
    width: 299px;
    height: 42px;
  }

  @media screen and (${r.breakpoints.m} <= width) {
    font-size: 16px;
    line-height: 1.13;
    width: 354px;
    height: 46px;
    border-radius: 8px;
    padding: 0 18px;
    margin-bottom: 8px;
  }
`,Je=n(q)`
  color: #da1414;
  font-size: ${r.fontSizes.xs};
  font-weight: ${r.fontWeight.r};
  line-height: 14px;

  left: 14px;
  bottom: -18px;

  @media screen and (${r.breakpoints.m} <= width) {
    /* font-size: ${r.fontSizes.s}; */
    left: 18px;
  }
`,Ke=n.p`
  color: ${r.colors.saccess};
  font-size: ${r.fontSizes.xs};
  font-weight: ${r.fontWeight.r};
  line-height: 14px;

  left: 14px;
  bottom: -18px;

  @media screen and (min-width: ${r.breakpoints.m}) {
    font-size: ${r.fontSizes.s};
    left: 18px;
  }
`,R=n.img`
  position: absolute;
  right: 18px;
  bottom: 11px;
  width: 24px;

  @media screen and (min-width: ${r.breakpoints.m}) {
    bottom: 18px;
  }
`,et=n.img`
  position: absolute;
  right: 46px;
  bottom: 17px;
  width: 24px;

  &.left {
    right: 18px;
  }

  @media screen and (min-width: ${r.breakpoints.m}) {
    bottom: 18px;
  }
`;function P({formik:t,label:s,name:o,placeholder:a,validateAfterSubmit:i,setValidateAfterSubmit:c}){const[l,p]=u.useState(!1),{t:x}=b(),h=()=>{p(!l)};{const{errors:g,submitCount:f}=t,k=F=>(i||f>0)&&g[F]?(c(!0),"input-error"):f>0&&!g[F]?"input-correct":"";return e.jsxs("div",{htmlFor:o,className:k(o),children:[e.jsx(Qe,{children:s}),e.jsxs(Ze,{children:[" ",e.jsx(Ge,{type:l?"text":"password",name:o,placeholder:a,className:k(o)}),e.jsx("button",{type:"button",onClick:h,children:e.jsx(et,{src:l?oe:re,alt:"Success Icon",className:k({name:o})!==""?"right":"left"})}),k(o)==="input-correct"&&e.jsx(R,{src:ne,alt:"Success Icon"}),k(o)==="input-error"&&e.jsx(R,{src:ie,alt:"Error Icon"})]}),k(o)==="input-correct"&&e.jsx(Ke,{children:x("Correct password")}),e.jsx(Je,{name:o,component:"p"})]})}}P.propTypes={formik:d.func.isRequired,label:d.string.isRequired,name:d.string.isRequired,placeholder:d.string.isRequired,validateAfterSubmit:d.bool.isRequired,setValidateAfterSubmit:d.bool.isRequired};const tt=n(v)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 10px;
  background: ${({theme:t})=>t.colors.backgroundUserForm};
  box-shadow: rgb(0, 0, 0) 0px 0px 80px;

  @media screen and (${r.breakpoints.m} <= width) {
    width: 550px;
    height: 500px;
    border-radius: 16px;
  }
`,ot=n.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 10px;
  color: ${({theme:t})=>t.colors.placeholder};

  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    color: #cf0202;
  }
`,rt=n.h1`
  text-align: center;
  color: #3e85f3;

  @media screen and (${r.breakpoints.m} <= width) {
    margin-bottom: 30px;
  }
`,nt=n.div`
  @media screen and (${r.breakpoints.m} <= width) {
    margin-bottom: 40px;
  }
`,U=n.div`
  margin-bottom: 30px;

  @media screen and (${r.breakpoints.m} <= width) {
    margin-bottom: 0px;
  }
`,it=n.div`
  display: flex;
`,st=n.button`
  width: 152px;
  height: 48px;
  border: none;
  border-radius: 16px;
  color: white;
  background-color: #3e85f3;
  margin-bottom: 10px;

  transform: scale(1);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    background-color: #2b78ef;
    transform: scale(1.02);
  }

  &:disabled {
    transform: none;
    background-color: #8fc2fc;
    cursor: not-allowed;
  }
`,at=n.button`
  width: 100px;
  height: 48px;
  border-radius: 16px;
  color: white;
  background-color: #3e85f3;
  margin-left: 30px;
  margin-bottom: 10px;

  transform: scale(1);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    color: white;
    background-color: #2b78ef;
    transform: scale(1.02);
  }
`;function L({onClose:t,callbackPassword:s}){const{t:o}=b(),[a,i]=u.useState(!1),c={newPassword:"",confirmPassword:""},l=p=>{i(!0),s(p),i(!1)};return e.jsx(e.Fragment,{children:e.jsx($,{initialValues:c,validationSchema:xe,onSubmit:l,validateOnBlur:!1,validateOnChange:a,validateOnMount:!1,children:p=>{const{handleSubmit:x}=p;return e.jsx(e.Fragment,{children:e.jsxs(tt,{children:[e.jsx(ot,{onClick:t,children:e.jsx(S,{width:"24",height:"24"})}),e.jsx(rt,{children:o("ChangePassword")}),e.jsxs(nt,{children:[e.jsx(U,{children:e.jsx(P,{formik:p,validateAfterSubmit:a,setValidateAfterSubmit:i,label:o("NewPassword"),name:"newPassword",id:"newPassword",placeholder:o("Password")})}),e.jsx(U,{children:e.jsx(P,{formik:p,validateAfterSubmit:a,setValidateAfterSubmit:i,label:o("ConfirmNewPassword"),name:"confirmPassword",id:"confirmPassword",placeholder:o("Confirm")})})]}),e.jsxs(it,{children:[e.jsx(st,{type:"submit",onClick:()=>x(),disabled:!p.isValid||!p.touched||p.isSubmitting||!p.dirty,children:o("UpdatePassword")}),e.jsx(at,{type:"button",onClick:t,children:o("Cancel")})]})]})})}})})}L.propTypes={onClose:d.func.isRequired,callbackPassword:d.func.isRequired};const ct=n.button`
  width: 195px;
  height: 46px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  letter-spacing: -0.02em;
  border-radius: 16px;
  color: white; //  color: ${({theme:t})=>t.colors.white};
  background-color: #3e85f3; //  background-color: ${({theme:t})=>t.colors.activeUserNavIcon};
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  transform: scale(1);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    background-color: #2b78ef;
    transform: scale(1.02);
  }

  /* @media screen and (${r.breakpoints.m} <= width < ${r.breakpoints.l}) {
    margin-bottom: 20px;
  } */

  @media screen and (${r.breakpoints.m} <= width) {
    width: 262px;
    height: 48px;
  }
`;function _({callbackPassword:t}){const{t:s}=b(),[o,a]=u.useState(!1),i=()=>{a(!0)},c=()=>{a(!1)};return e.jsxs(e.Fragment,{children:[o&&e.jsx(E,{isOpen:o,onClose:c,children:e.jsx(L,{onClose:c,callbackPassword:t})}),e.jsx(ct,{type:"button",onClick:i,children:s("ChangePassword")})]})}_.propTypes={callbackPassword:d.func.isRequired};const lt=n.div`
  padding: 0 18px 40px 18px;
  background-color: white;
  border-radius: 16px;
  position: relative;
  background: ${({theme:t})=>t.colors.backgroundUserForm};

  @media screen and (${r.breakpoints.m} <= width < ${r.breakpoints.l}) {
    padding: 20px 80px 20px 80px;
  }

  @media screen and (${r.breakpoints.l} <= width) {
    padding: 30px 100px 30px 100px;
  }
`,dt=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media screen and (${r.breakpoints.l} <= width) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: nowrap;
  }
`;function xt(){const t=C(),s=c=>{t(K(c))},o=c=>{t(T(c))},a=c=>{t(ee(c))},i=c=>{t(M(c))};return e.jsxs(lt,{children:[e.jsx(D,{callBack:s,callbackEmail:o,callbackPassword:a,callbackDeleteUser:i}),e.jsxs(dt,{children:[e.jsx(Ye,{callbackEmail:o}),e.jsx(_,{callbackPassword:a}),e.jsx(qe,{callbackDeleteUser:i})]})]})}export{xt as default};
