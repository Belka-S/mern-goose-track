import{P as h,k as w,u as f,j as s,x as g,s as d,t as a,y as j,z as b,v,J as P,M as y,B as k,n as S,K as $}from"./index-c6108a81.js";import{C,T as R,d as T,F as A,I as B,A as m,B as F,b as I}from"./AuthNavigate-d2310218.js";import{l as u,a as L,b as z}from"./rocket3x-cffb2115.js";function x({onSubmitForm:l}){const[t,e]=w.useState(!1),{t:o}=f();return s.jsxs(C,{children:[s.jsx(R,{children:o("Reset Password")}),s.jsx(g,{validationSchema:T,initialValues:{newPassword:"",confirmPassword:""},validateOnBlur:!1,validateOnChange:t,validateOnMount:!1,onSubmit:async i=>{e(!0),l(i),e(!1)},children:i=>{const{errors:n,handleSubmit:c,submitCount:r,values:p}=i;return s.jsxs(A,{autoComplete:"off",children:[s.jsxs(B,{children:[s.jsx(m,{name:"newPassword",title:"New password",type:"password",placeholder:"●●●●●●●",id:"newPassword",validateAfterSubmit:t,submitCount:r,errors:n,setValidateAfterSubmit:e,values:p.newPassword}),s.jsx(m,{name:"confirmPassword",title:"Confirm password",type:"password",placeholder:"●●●●●●●",id:"confirmPassword",validateAfterSubmit:t,submitCount:r,errors:n,setValidateAfterSubmit:e,values:p.confirmPassword})]}),s.jsx(F,{type:"submit",onClick:c,children:o("Reset Password")})]})}})]})}x.propTypes={onSubmitForm:h.func.isRequired};const E=d.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${a.colors.backgroundAuth};
`,M=d.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${a.breakpoints.l};
  height: 100%;
`,N=d.div`
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
`,O=d.picture`
  display: none;

  position: absolute;
  width: 368px;
  bottom: 19px;
  right: 60px;

  @media screen and (min-width: ${a.breakpoints.l}) {
    display: block;
  }
`;function D(){const l=j(),t=b(),e=v(),[o]=P(),i=o.get("id"),n=o.get("pwd_token"),c=r=>{l($({...r,id:i,pwdToken:n})),e("/login",{replace:!0})};return s.jsxs(E,{children:[s.jsxs(M,{children:[s.jsxs(O,{children:[s.jsx("source",{media:"(min-width: 1440px)",srcSet:`${u} 1x, ${L} 2x, ${z} 3x`}),s.jsx("img",{src:u,alt:"Logo goose"})]}),s.jsxs(N,{children:[s.jsx(x,{onSubmitForm:c}),s.jsx(I,{formType:"register"})]})]}),t&&s.jsx(y,{color:k.black,children:s.jsx(S,{})})]})}export{D as default};
