import{P as x,k as h,u as g,j as e,x as f,s as o,t as s,y as j,z as b,M as v,B as y,n as w,O as k}from"./index-2e95d358.js";import{C as S,T as $,e as F,F as C,I as P,A,B,b as T}from"./AuthNavigate-cc2086a0.js";import{l,a as E,b as R}from"./rocket3x-cffb2115.js";function d({onSubmitForm:n}){const[a,t]=h.useState(!1),{t:i}=g();return e.jsxs(S,{children:[e.jsx($,{children:i("Forgot Password")}),e.jsx(f,{validationSchema:F,initialValues:{email:""},validateOnBlur:!1,validateOnChange:a,validateOnMount:!1,onSubmit:async r=>{t(!0),n(r),t(!1)},children:r=>{const{errors:c,handleSubmit:m,submitCount:p,values:u}=r;return e.jsxs(C,{autoComplete:"off",children:[e.jsx(P,{children:e.jsx(A,{name:"email",title:"Email",type:"email",placeholder:"nadiia@gmail.com",id:"pwd_email",validateAfterSubmit:a,submitCount:p,errors:c,setValidateAfterSubmit:t,values:u.email})}),e.jsx(B,{type:"submit",onClick:m,children:i("Reset Password")})]})}})]})}d.propTypes={onSubmitForm:x.func.isRequired};const I=o.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${s.colors.backgroundAuth};
`,L=o.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${s.breakpoints.l};
  height: 100%;
`,O=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 18px;

  padding: 0 20px;

  font-size: ${s.fontSizes.xs};

  @media screen and (max-width: ${s.breakpoints.s}) {
    width: 100%;
  }

  @media screen and (min-width: ${s.breakpoints.m}) {
    gap: 24px;
  }
`,z=o.picture`
  display: none;

  position: absolute;
  width: 368px;
  bottom: 19px;
  right: 60px;

  @media screen and (min-width: ${s.breakpoints.l}) {
    display: block;
  }
`;function q(){const n=j(),a=b(),t=i=>{n(k(i))};return e.jsxs(I,{children:[e.jsxs(L,{children:[e.jsxs(z,{children:[e.jsx("source",{media:"(min-width: 1440px)",srcSet:`${l} 1x, ${E} 2x, ${R} 3x`}),e.jsx("img",{src:l,alt:"Logo goose"})]}),e.jsxs(O,{children:[e.jsx(d,{onSubmitForm:t}),e.jsx(T,{formType:"register"})]})]}),a&&e.jsx(v,{color:y.black,children:e.jsx(w,{})})]})}export{q as default};
