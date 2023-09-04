import{s as o,p as n,q as i,u as x,v as p,w as c,j as e,X as l}from"./index-05e398b1.js";const d="/mern-goose-track/assets/gooseRocketMobile-3165b02a.svg",s="/mern-goose-track/assets/gooseRocketTablet-0236e75b.svg",g=o.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${({theme:t})=>t.colors.background};
`,h=o.h1`
  position: relative;

  margin-bottom: 28px;

  display: flex;
  gap: 60px;

  color: ${n.blue1};

  font-size: 100px;
  font-style: normal;
  font-weight: 700;
  line-height: 150px;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);

  @media screen and (min-width: 768px) {
    font-size: 200px;
    line-height: 250px;
    gap: 110px;
  }
`,m=o.span`
  picture {
    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.4);

    @media screen and (min-width: 768px) {
    }
  }
`,u=o.p`
  width: 281px;
  margin-bottom: 24px;

  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;

  color: ${({theme:t})=>t.colors.textAndIconTodo};

  @media screen and (min-width: 768px) {
    width: 387px;
  }
`,b=o.button`
  padding: 14px 32px;
  border-radius: 16px;

  color: ${n.white};
  background-color: ${i.primaryBlue};
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

  @media screen and (min-width: 768px) {
    padding: 16px 48px;
  }
`;function f(){const{t}=x(),r=p(),a=c().theme;return e.jsx(l,{theme:a,children:e.jsxs(g,{children:[e.jsxs(h,{children:["4",e.jsx(m,{children:e.jsxs("picture",{children:[e.jsx("source",{type:"image/svg",srcSet:`${d} 375w, ${s} 768w, 1440w`,sizes:"(max-width: 767px) 375px, (max-width: 1439px) 768px, 1440px",alt:"🦆"}),e.jsx("img",{src:`${s}`,alt:""})]})}),"4"]}),e.jsx(u,{children:t("404")}),e.jsx(b,{onClick:()=>r("/"),children:t("BackHome")})]})})}export{f as default};
