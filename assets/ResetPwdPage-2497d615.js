import{P as h,i as w,u as f,j as s,w as g,s as d,t as a,x as j,y as b,q as v,I as P,M as y,A as k,m as S,J as $}from"./index-3da3d14c.js";import{C,T as R,d as A,F as T,I as F,A as m,B,b as I}from"./AuthNavigate-9373b8f7.js";import{l as u,a as L,b as E}from"./rocket3x-cffb2115.js";function x({onSubmitForm:l}){const[t,e]=w.useState(!1),{t:i}=f();return s.jsxs(C,{children:[s.jsx(R,{children:i("Reset Password")}),s.jsx(g,{validationSchema:A,initialValues:{newPassword:"",confirmPassword:""},validateOnBlur:!1,validateOnChange:t,validateOnMount:!1,onSubmit:async o=>{e(!0),l(o),e(!1)},children:o=>{const{errors:n,handleSubmit:c,submitCount:r,values:p}=o;return s.jsxs(T,{autoComplete:"off",children:[s.jsxs(F,{children:[s.jsx(m,{name:"newPassword",title:"New password",type:"password",placeholder:"●●●●●●●",id:"newPassword",validateAfterSubmit:t,submitCount:r,errors:n,setValidateAfterSubmit:e,values:p.newPassword}),s.jsx(m,{name:"confirmPassword",title:"Confirm password",type:"password",placeholder:"●●●●●●●",id:"confirmPassword",validateAfterSubmit:t,submitCount:r,errors:n,setValidateAfterSubmit:e,values:p.confirmPassword})]}),s.jsx(B,{type:"submit",onClick:c,children:i("Reset Password")})]})}})]})}x.propTypes={onSubmitForm:h.func.isRequired};const M=d.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${a.colors.backgroundAuth};
`,N=d.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${a.breakpoints.l};
  height: 100%;
`,O=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 18px;

  padding: 0 20px;

  font-size: ${a.fontSizes.xs};

  @media screen and (max-width: ${a.breakpoints.s}) {
    width: 100%;
  }

  @media screen and (min-width: ${a.breakpoints.m}) {
    gap: 24px;
  }
`,W=d.picture`
  display: none;

  position: absolute;
  width: 368px;
  bottom: 19px;
  right: 60px;

  @media screen and (min-width: ${a.breakpoints.l}) {
    display: block;
  }
`;function D(){const l=j(),t=b(),e=v(),[i]=P(),o=i.get("id"),n=i.get("pwd_token"),c=r=>{l($({...r,id:o,pwdToken:n})),e("/login",{replace:!0})};return s.jsxs(M,{children:[s.jsxs(N,{children:[s.jsxs(W,{children:[s.jsx("source",{media:"(min-width: 1440px)",srcSet:`${u} 1x, ${L} 2x, ${E} 3x`}),s.jsx("img",{src:u,alt:"Logo goose"})]}),s.jsxs(O,{children:[s.jsx(x,{onSubmitForm:c}),s.jsx(I,{formType:"register"})]})]}),t&&s.jsx(y,{color:k.black,children:s.jsx(S,{})})]})}export{D as default};
