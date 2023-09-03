import{aa as C,s as o,t as e,N as M,a8 as W,ab as v,j as n,n as N,a7 as h,u as O}from"./index-b0910c9a.js";import{i as L,s as u,e as I,a as U,g as A,b as F,c as R,d as E}from"./index-81c2d933.js";import{s as H,a as f}from"./index-4e02b31a.js";function b(t){return C(1,arguments),L(t,Date.now())}const _=t=>{switch(t.priority){case"low":return`color: ${e.colors.accent}; background-color: ${e.colors.blueInNotes};`;case"medium":return`color: ${e.colors.mediumTask}; background-color: ${e.colors.yellowInNotes};`;case"high":return`color: ${e.colors.highTask}; background-color: ${e.colors.pinkInNotes};`;default:return`color: ${e.colors.accent}; background-color: ${e.colors.white}`}},B=o.ul`
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  /* height: 564px; */
  /* height: 470px; */
  gap: 0px;
  align-content: flex-start;

  @media screen and (min-width: ${e.breakpoints.m}) {
    /* height: 860px; */
    height: 720px;
  }
  @media screen and (min-width: ${e.breakpoints.l}) {
    /* height: 750px; */
    height: 625px;
  }
`,w=o(M)`
  position: relative;
  width: calc(100% / 7);
  height: 93px;
  text-align: right;
  border: 1px solid ${({theme:t})=>t.colors.borderTableAndInput};
  background-color: ${({theme:t})=>t.colors.backgroundUserForm};
  padding-top: 31px;
  padding-bottom: 1px;
  cursor: pointer;

  @media screen and (min-width: ${e.breakpoints.m}) {
    height: 144px;
    font-size: ${e.fontSizes.m};
    line-height: 1.12;
    padding-top: 41px;
  }

  @media screen and (min-width: ${e.breakpoints.l}) {
    height: 125px;
  }
`,G=o.div`
  display: flex;
  flex-direction: column;
`,P=o.div`
  position: absolute;
  top: 8px;
  right: 4px;
  padding: 4px 6px;
  border-radius: 6px;
  font-weight: ${e.fontWeight.b};
  font-family: Inter;
  color: ${({theme:t})=>t.colors.textCancelBtn};
  font-size: ${e.fontSizes.xs};
  line-height: 1.17;
  text-transform: uppercase;

  @media screen and (min-width: ${e.breakpoints.m}) {
    top: 14px;
    right: 14px;

    padding: 4px 8px;

    border-radius: 8px;

    font-size: ${e.fontSizes.m};
    line-height: 1.125;
  }
`,q=o.div`
  background: ${e.colors.accent};
  color: ${e.colors.white};
  position: absolute;
  top: 8px;
  right: 4px;
  padding: 4px 6px;
  width: 34px;
  border-radius: 8px;
  font-weight: ${e.fontWeight.b};
  font-family: Inter;
  font-size: ${e.fontSizes.xs};
  line-height: 1.17;
  text-transform: uppercase;

  @media screen and (min-width: ${e.breakpoints.m}) {
    top: 14px;
    right: 14px;

    padding: 4px 8px;

    border-radius: 8px;

    font-size: ${e.fontSizes.m};
    line-height: 1.125;
  }
`,Q=o.div``,J=o.ul`
  list-style-type: none;
  padding: 0 8px 0px 8px;
`,K=o.li`
  height: 22px;
  padding: 4px 4px 4px 8px;
  font-family: Inter;
  font-weight: ${e.fontWeight.b};
  font-size: ${e.fontSizes.micro};
  line-height: 1.4;
  border-radius: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 4px;
  ${t=>_(t)};

  @media screen and (min-width: ${e.breakpoints.m}) {
    min-width: 92px;
    height: 26px;
    padding: 4px 8px 4px 12px;
    font-size: ${e.fontSizes.micro};
    line-height: 1.29;
  }

  @media screen and (min-width: ${e.breakpoints.l}) {
    min-width: 114px;
  }
`,V=o.div`
  margin-top: auto;
  margin: auto;
  color: ${e.colors.accent};
  text-align: center;
  overflow: hidden;
  font-size: ${e.fontSizes.s};
`;function X(){const{currentDate:t}=W(),r=t.split("-")[0],D=t.split("-")[1],j={year:r,month:D},{data:c,isLoading:g}=v(j),l=[];(()=>{const a=u(new Date(t)),i=H(a,{weekStartsOn:1}),d=I(new Date(t)),p=u(new Date(U(new Date(t),1)));let s=i;for(;s<a;)l.push(null),s=f(s,1);for(;s<=d;)l.push(s),s=f(s,1);let m=A(p);for(;m<8;)l.push(null),m+=1})();const T=a=>F(new Date,a),z=(a,i)=>{if(i)return i.filter(d=>new Date(d.date).getTime()>=R(a).getTime()&&new Date(d.date).getTime()<E(a).getTime())},S=()=>{if(!g)return l.map((i,d)=>{if(!i)return n.jsx(w,{},d);const p=z(i,c==null?void 0:c.tasks);return n.jsx(w,{to:`/calendar/day/${h(i,"yyyy-MM-dd")}`,iscurrentmonth:T(i).toString(),istoday:b(i).toString(),children:n.jsxs(G,{children:[n.jsx(Q,{children:b(i)?n.jsx(q,{children:h(i,"d")}):n.jsx(P,{children:h(i,"d")})}),n.jsx(J,{children:p&&p.slice(0,2).map(s=>n.jsx(K,{priority:s.priority,children:s.title},s._id))}),p&&p.length>2&&n.jsx(V,{children:"..."})]})},d)})};return g?n.jsx(N,{}):n.jsx(B,{children:S()})}const Y=o.div``,Z=o.ul`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  padding: 16px 16px;
  margin-bottom: 14px;
  background-color: ${({theme:t})=>t.colors.backgroundUserForm};
  border: 1px solid ${({theme:t})=>t.colors.borderTableAndInput};
  border-radius: 8px;
  @media screen and (min-width: ${e.breakpoints.m}) {
    display: none;
  }
`,ee=o.ul`
  display: none;
  @media screen and (min-width: ${e.breakpoints.m}) {
    width: 100%;
    display: flex;
    justify-content: space-around;
    gap: 65px;
    padding: 14px 40px;
    margin-bottom: 18px;
    height: 46px;
    background-color: ${({theme:t})=>t.colors.backgroundUserForm};
    border: 1px solid ${({theme:t})=>t.colors.borderTableAndInput};
    border-radius: 8px;

    @media screen and (min-width: ${e.breakpoints.l}) {
      height: 46px;
      padding: 14px 60px;
      margin-bottom: 15px;
    }
  }
`,x=o.li`
  width: calc(100% / 7);
  color: ${({theme:t})=>t.colors.textCancelBtn};
  font-family: Inter;
  font-size: ${e.fontSizes.m};
  font-weight: ${e.fontWeight.sb};
  line-height: 18px;
  text-transform: uppercase;
`,$=o(x)`
  color: ${e.colors.accent};
`,y=["MON","TUE","WED","THU","FRI"],k=["SAT","SUN"];function te(){const{t}=O();return n.jsxs(Y,{children:[n.jsxs(ee,{children:[y.map(r=>n.jsx(x,{children:t(`days.${r}`)},r)),k.map(r=>n.jsx($,{children:t(`days.${r}`)},r))]}),n.jsxs(Z,{children:[y.map(r=>n.jsx(x,{children:t(`mob_${r}`)},r)),k.map(r=>n.jsx($,{children:t(`mob_${r}`)},r))]})]})}function se(){return n.jsxs(n.Fragment,{children:[n.jsx(te,{}),n.jsx(X,{})]})}export{se as default};
