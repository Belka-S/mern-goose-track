import{a2 as C,au as M,s as o,t as e,N as W,ab as v,at as N,j as n,m as O,av as u,an as L,aw as A,ax as I,ao as f,ay as U,ap as h,az as F,aA as R,aB as B,u as E}from"./index-76e3b134.js";function b(t){return C(1,arguments),M(t,Date.now())}const H=t=>{switch(t.priority){case"low":return`color: ${e.colors.accent}; background-color: ${e.colors.blueInNotes};`;case"medium":return`color: ${e.colors.mediumTask}; background-color: ${e.colors.yellowInNotes};`;case"high":return`color: ${e.colors.highTask}; background-color: ${e.colors.pinkInNotes};`;default:return`color: ${e.colors.accent}; background-color: ${e.colors.white}`}},_=o.ul`
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
`,w=o(W)`
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
    height: 100px;
    font-size: ${e.fontSizes.m};
    line-height: 1.12;
    padding-top: 41px;
  }

  @media screen and (min-width: ${e.breakpoints.l}) {
    height: 110px;
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
  ${t=>H(t)};

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
`;function X(){const{currentDate:t}=v(),r=t.split("-")[0],D=t.split("-")[1],j={year:r,month:D},{data:c,isLoading:g}=N(j),l=[];(()=>{const s=u(new Date(t)),i=L(s,{weekStartsOn:1}),d=A(new Date(t)),p=u(new Date(I(new Date(t),1)));let a=i;for(;a<s;)l.push(null),a=f(a,1);for(;a<=d;)l.push(a),a=f(a,1);let m=U(p);for(;m<8;)l.push(null),m+=1})();const T=s=>F(new Date,s),z=(s,i)=>{if(i)return i.filter(d=>new Date(d.date).getTime()>=R(s).getTime()&&new Date(d.date).getTime()<B(s).getTime())},S=()=>{if(!g)return l.map((i,d)=>{if(!i)return n.jsx(w,{},d);const p=z(i,c==null?void 0:c.tasks);return n.jsx(w,{to:`/calendar/day/${h(i,"yyyy-MM-dd")}`,iscurrentmonth:T(i).toString(),istoday:b(i).toString(),children:n.jsxs(G,{children:[n.jsx(Q,{children:b(i)?n.jsx(q,{children:h(i,"d")}):n.jsx(P,{children:h(i,"d")})}),n.jsx(J,{children:p&&p.slice(0,2).map(a=>n.jsx(K,{priority:a.priority,children:a.title},a._id))}),p&&p.length>2&&n.jsx(V,{children:"..."})]})},d)})};return g?n.jsx(O,{}):n.jsx(_,{children:S()})}const Y=o.div``,Z=o.ul`
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
`,y=["MON","TUE","WED","THU","FRI"],k=["SAT","SUN"];function te(){const{t}=E();return n.jsxs(Y,{children:[n.jsxs(ee,{children:[y.map(r=>n.jsx(x,{children:t(`days.${r}`)},r)),k.map(r=>n.jsx($,{children:t(`days.${r}`)},r))]}),n.jsxs(Z,{children:[y.map(r=>n.jsx(x,{children:t(`mob_${r}`)},r)),k.map(r=>n.jsx($,{children:t(`mob_${r}`)},r))]})]})}function re(){return n.jsxs(n.Fragment,{children:[n.jsx(te,{}),n.jsx(X,{})]})}export{re as default};
