import{k as x,u as h,j as e,x as f,P as j,s as d,t as n,y as b,z as y,A as v,M as k,B as w,n as S,E,D as $}from"./index-2e95d358.js";import{i as A,A as C,V as B}from"./VerifyForm-d2e939d2.js";import{C as F,T as I,c as R,F as T,I as V,A as m,B as L,a as M,b as q}from"./AuthNavigate-cc2086a0.js";const u="/mern-goose-track/assets/goose-quote1x-93cfbfaf.png",O="/mern-goose-track/assets/goose-quote2x-dc81c1f1.png",P="/mern-goose-track/assets/goose-quote3x-c25ae5e3.png";function g({callBack:l}){const[a,s]=x.useState(!1),{t:c}=h();return e.jsxs(F,{children:[e.jsx(I,{children:c("Sign Up")}),e.jsx(f,{validationSchema:R,initialValues:{name:"",email:"",password:""},validateOnBlur:!1,validateOnChange:a,validateOnMount:!1,onSubmit:o=>{s(!0),l(o),s(!1)},children:o=>{const{errors:i,handleSubmit:p,submitCount:r,values:t}=o;return e.jsxs(T,{autoComplete:"off",children:[e.jsxs(V,{children:[e.jsx(m,{name:"name",title:"Name",type:"text",placeholder:"Enter your name",id:"signup_name",validateAfterSubmit:a,submitCount:r,errors:i,setValidateAfterSubmit:s,values:t.name}),e.jsx(m,{name:"email",title:"Email",type:"email",placeholder:"Enter email",id:"signup_email",validateAfterSubmit:a,submitCount:r,errors:i,setValidateAfterSubmit:s,values:t.email}),e.jsx(m,{name:"password",title:"Password",type:"password",placeholder:"Enter password",id:"signup_password",validateAfterSubmit:a,submitCount:r,errors:i,setValidateAfterSubmit:s,values:t.password})]}),e.jsxs(L,{type:"submit",onClick:p,children:[c("Sign Up")," ",e.jsx(M,{src:A,alt:"LogIn SVG"})]})]})}}),e.jsx(C,{title:"Sign Up With Google"})]})}g.propTypes={callBack:j.func.isRequired};const W=d.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${n.colors.backgroundAuth};
`,z=d.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${n.breakpoints.l};
  height: 100%;
`,G=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 18px;

  padding: 0 20px;

  font-size: ${n.fontSizes.xs};

  @media screen and (max-width: ${n.breakpoints.s}) {
    width: 100%;
  }

  @media screen and (min-width: ${n.breakpoints.m}) {
    gap: 24px;
  }
`,U=d.picture`
  display: none;

  position: absolute;
  width: 400px;
  bottom: 0;
  left: 49px;

  @media screen and (min-width: ${n.breakpoints.l}) {
    display: block;
  }
`;function H(){const l=b(),a=y(),s=v(),[c,o]=x.useState(!1),i=()=>{o(!1)},p=t=>{l(E(t)),o(!0)},r=t=>{l($(t))};return e.jsxs(W,{children:[e.jsxs(z,{children:[e.jsxs(U,{children:[e.jsx("source",{media:"(min-width: 1440px)",srcSet:`${u} 1x, ${O} 2x, ${P} 3x`}),e.jsx("img",{src:u,alt:"Logo goose"})]}),e.jsxs(G,{children:[e.jsx(g,{callBack:p}),e.jsx(q,{formType:"register"})]})]}),c&&e.jsxs(k,{onClose:i,color:w.black,children:[a?e.jsx(S,{}):e.jsx(B,{onSubmitForm:r}),s&&i()]})]})}export{H as default};
