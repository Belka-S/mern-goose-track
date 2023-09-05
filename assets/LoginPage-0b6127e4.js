import{i as h,u as j,j as s,w as b,P as y,s as c,t as i,x as v,y as w,z as S,M as p,A as u,m as k,B as L,C as A}from"./index-27c35922.js";import{i as C,A as $,V as F}from"./VerifyForm-fa41a3a1.js";import{C as I,T as B,v as V,F as E,I as T,A as x,B as M,a as O,b as P}from"./AuthNavigate-11171a4c.js";import{l as g,a as R,b as W}from"./rocket3x-cffb2115.js";function f({onSubmitForm:n}){const[t,e]=h.useState(!1),{t:r}=j();return s.jsxs(I,{children:[s.jsx(B,{children:r("Log In")}),s.jsx(b,{validationSchema:V,initialValues:{email:"",password:""},validateOnBlur:!1,validateOnChange:t,validateOnMount:!1,onSubmit:async o=>{e(!0),n(o),e(!1)},children:o=>{const{errors:l,handleSubmit:d,submitCount:a,values:m}=o;return s.jsxs(E,{autoComplete:"off",children:[s.jsxs(T,{children:[s.jsx(x,{name:"email",title:"Email",type:"email",placeholder:"nadiia@gmail.com",id:"login_email",validateAfterSubmit:t,submitCount:a,errors:l,setValidateAfterSubmit:e,values:m.email}),s.jsx(x,{name:"password",title:"Password",type:"password",placeholder:"●●●●●●●",id:"login_password",validateAfterSubmit:t,submitCount:a,errors:l,setValidateAfterSubmit:e,values:m.password})]}),s.jsxs(M,{type:"submit",onClick:d,children:[r("Log in"),s.jsx(O,{src:C,alt:"LogIn SVG"})]})]})}}),s.jsx($,{title:"Log In With Google"})]})}f.propTypes={onSubmitForm:y.func.isRequired};const z=c.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${i.colors.backgroundAuth};
`,G=c.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${i.breakpoints.l};
  height: 100%;
`,q=c.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 18px;

  padding: 0 20px;

  font-size: ${i.fontSizes.xs};

  @media screen and (max-width: ${i.breakpoints.s}) {
    width: 100%;
  }

  @media screen and (min-width: ${i.breakpoints.m}) {
    gap: 24px;
  }
`,_=c.picture`
  display: none;

  position: absolute;
  width: 368px;
  bottom: 19px;
  right: 60px;

  @media screen and (min-width: ${i.breakpoints.l}) {
    display: block;
  }
`;function J(){const n=v(),t=w(),[,e]=h.useState(!1),r=S(),o=()=>{e(!1)},l=a=>{n(L(a))},d=a=>{n(A(a))};return s.jsxs(z,{children:[s.jsxs(G,{children:[s.jsxs(_,{children:[s.jsx("source",{media:"(min-width: 1440px)",srcSet:`${g} 1x, ${R} 2x, ${W} 3x`}),s.jsx("img",{src:g,alt:"Logo goose"})]}),s.jsxs(q,{children:[s.jsx(f,{onSubmitForm:l}),s.jsx(P,{formType:"login"})]})]}),t&&s.jsx(p,{color:u.black,children:s.jsx(k,{})}),r==="Action Required: Verify Your Email"&&s.jsx(p,{onClose:o,color:u.black,clickable:!1,children:s.jsx(F,{onSubmitForm:d})})]})}export{J as default};
