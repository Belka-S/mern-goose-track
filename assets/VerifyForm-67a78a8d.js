import{j as o,s as n,t,u as s,P as r,E as c,H as p,w as f}from"./index-2796746f.js";const m=e=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"1em",height:"1em",...e,children:[o.jsx("path",{fill:"#FFC107",d:"M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"}),o.jsx("path",{fill:"#FF3D00",d:"m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"}),o.jsx("path",{fill:"#4CAF50",d:"M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"}),o.jsx("path",{fill:"#1976D2",d:"M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"})]}),x="/mern-goosetrack/assets/login-b4e329da.svg",h=n.a`
  display: flex;
  width: 100%;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border-radius: 16px;
  border: 1px solid ${t.colors.placegolderAuth};
  background: ${t.colors.backgroundUserForm};

  transform: scale(1);
  transition-property: transform;
  transition-duration: ${t.animations.duration};
  transition-timing-function: ${t.animations.cubicBezier};

  color: ${t.colors.black};
  font-family: Inter;
  font-size: ${t.fontSizes.s};
  font-style: normal;
  font-weight: ${t.fontWeight.sb};
  line-height: 18px;
  letter-spacing: -0.28px;

  @media screen and (min-width: ${t.breakpoints.m}) {
    padding: 13px;
    font-size: 18px;
  }

  &:hover,
  &:focus {
    transform: scale(1.02);
    border-color: ${t.colors.textAndIconTodo};
  }
  &.disabled {
    background: ${t.colors.black};
  }
`,{DEV:g,VITE_BACK_URL_DEV:u,VITE_BACK_URL_PROD:$}={VITE_BACK_URL_PROD:"https://mern-goosetrack.onrender.com",BASE_URL:"/mern-goosetrack/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},b=g?u:$,a=({title:e})=>{const{t:i}=s();return o.jsxs(h,{href:`${b}/api/users/google`,children:[o.jsx(m,{width:"24px",height:"24px"}),i(e)]})};a.propTypes={title:r.string};const F=a,w=n.div`
  display: flex;
  width: 100%;

  padding: 40px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;

  border-radius: 8px;
  background: ${t.colors.backgroundUserForm};

  @media screen and (min-width: ${t.breakpoints.s}) {
    width: 335px;
  }

  @media screen and (min-width: ${t.breakpoints.m}) {
    width: 480px;
    gap: 40px;
    padding: 40px 40px;
  }
`,y=n.h1`
  color: ${t.colors.accent};
  text-shadow: ${t.shadows.authHeading};
  font-family: Inter;
  font-size: ${t.fontSizes.l};
  font-style: normal;
  font-weight: ${t.fontWeight.sb};
  line-height: 24px;

  @media screen and (min-width: ${t.breakpoints.m}) {
    font-size: ${t.fontSizes.xxl};
  }
`,k=n(c)`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;

  @media screen and (min-width: ${t.breakpoints.m}) {
    gap: 48px;
  }
`,z=n.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  @media screen and (min-width: ${t.breakpoints.m}) {
    gap: 18px;
  }
`,j=n.label`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;

  color: ${t.colors.textAndIconTodo};
  font-family: Inter;
  font-size: ${t.fontSizes.xs};
  font-style: normal;
  font-weight: ${t.fontWeight.sb};
  line-height: normal;

  @media screen and (min-width: ${t.breakpoints.m}) {
    font-size: ${t.fontSizes.s};
  }
`,v=n(p)`
  width: 100%;
  padding: 14px;

  border-radius: 8px;
  border: 1px solid ${t.colors.placegolderAuth};
  background: ${t.colors.backgroundUserForm};

  color: ${t.colors.textAndIconTodo};
  font-family: Inter;
  font-size: ${t.fontSizes.s};
  font-style: normal;
  font-weight: ${t.fontWeight.r};
  line-height: 18px;

  &:hover,
  &:focus {
    border: 1px solid ${t.colors.textAndIconTodo};
  }

  @media screen and (min-width: ${t.breakpoints.m}) {
    padding: 18px;
    font-size: ${t.fontSizes.l};
  }
`,C=n.button`
  display: flex;
  width: 100%;
  padding: 14px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border-radius: 16px;
  background: ${t.colors.accent};
  box-shadow: ${t.shadows.authButton};

  transform: scale(1);
  transition-property: transform;
  transition-duration: ${t.animations.duration};
  transition-timing-function: ${t.animations.cubicBezier};

  color: ${t.colors.white};
  font-family: Inter;
  font-size: ${t.fontSizes.s};
  font-style: normal;
  font-weight: ${t.fontWeight.sb};
  line-height: 18px;
  letter-spacing: -0.28px;

  @media screen and (min-width: ${t.breakpoints.m}) {
    padding: 16px;
    font-size: 18px;
  }

  &:hover,
  &:focus {
    transform: scale(1.02);
  }
`,I=n.img`
  display: inline;
  width: 18px;
  stroke: red;
  fill: red;

  @media screen and (min-width: ${t.breakpoints.m}) {
    width: 20px;
  }
`;function S({onSubmitForm:e}){const{t:i}=s(),d=l=>{e(l)};return o.jsxs(w,{children:[o.jsx(y,{children:i("Verification")}),o.jsx(f,{initialValues:{verificationCode:""},onSubmit:d,children:()=>o.jsxs(k,{autoComplete:"off",children:[o.jsxs(z,{children:[o.jsx(j,{htmlFor:"verificationCode",children:i("Verification code")}),o.jsx(v,{type:"text",name:"verificationCode",placeholder:"Enter your code"})]}),o.jsxs(C,{type:"submit",children:[i("Confirm"),o.jsx(I,{src:x,alt:"LogIn SVG"})]})]})})]})}S.propTypes={onSubmitForm:r.func.isRequired};export{F as A,S as V,x as i};
