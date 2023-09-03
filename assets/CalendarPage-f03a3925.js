import{s as l,N as f,P as d,a7 as i,u as g,j as a,k as p,Z as y,a8 as b,v as w,n as j,a9 as D}from"./index-b0910c9a.js";import{P as M,s as k,a as v}from"./PeriodPaginator-6795f9e7.js";import{a as $}from"./index-4e02b31a.js";import{a as T}from"./index-81c2d933.js";import"./index-485afc5f.js";const P=l.ul`
  display: flex;
  margin-top: 18px;
  /* margin-bottom: 24px; */

  @media screen and (min-width: 768px) {
    margin-top: 0;
    margin-bottom: 0;
  }
`,m=l.li`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  display: flex;
`,x=l(f)`
  width: 82px;
  padding: 8px 0;

  color: #3e85f3;
  background: ${({theme:e})=>e.colors.ligthBlue};

  text-align: center;

  &.active {
    color: ${({theme:e})=>e.colors.textMonthDayBtn};
    background: ${({theme:e})=>e.colors.darkBlue};
  }

  &.month {
    border-radius: 8px 0 0 8px;
    border-right: 1px solid rgba(62, 133, 243, 0.2);
  }
  &.day {
    border-radius: 0 8px 8px 0;
  }

  transition: background 100ms linear, color 100ms linear;

  &:hover,
  &:focus {
    background: ${({theme:e})=>e.colors.darkBlue};
    color: ${({theme:e})=>e.colors.textMonthDayBtn};
  }

  @media screen and (min-width: 768px) {
    &.day {
      padding: 8px 26px;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,u=({today:e,onChangeType:n})=>{const t=i(new Date(e),"yyyy-MM-dd"),{t:o}=g();return a.jsxs(P,{children:[a.jsx(m,{children:a.jsx(x,{className:"month",to:`/calendar/month/${t}`,onClick:()=>n("month"),children:o("Month")})}),a.jsx(m,{children:a.jsx(x,{className:"day",to:`/calendar/day/${t}`,onClick:()=>n("day"),children:o("Day")})})]})};u.propTypes={today:d.string.isRequired,onChangeType:d.func.isRequired};const N=l.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 40px;
  }
`,h=({today:e,prevHandler:n,nextHandler:t})=>{const[o,r]=p.useState("month"),s=y().pathname.slice(0,-11);return p.useEffect(()=>{if(s.endsWith("/calendar/day")){r("day");return}r("month")},[s]),a.jsxs(N,{children:[a.jsx(M,{prevHandler:n,nextHandler:t,type:o,date:e}),a.jsx(u,{today:e,onChangeType:r})]})};h.propTypes={prevHandler:d.func.isRequired,nextHandler:d.func.isRequired,today:d.string.isRequired};function H(){const{currentDate:e}=b(),n=w(),{pathname:t}=y(),o=()=>{if(t.includes("day")){const s=k(new Date(e),1);n(`/calendar/day/${i(s,"yyyy-MM-dd")}`);return}const c=v(new Date(e),1);n(`/calendar/month/${i(c,"yyyy-MM-dd")}`)},r=()=>{if(t.includes("day")){const s=$(new Date(e),1);n(`/calendar/day/${i(s,"yyyy-MM-dd")}`);return}const c=T(new Date(e),1);n(`/calendar/month/${i(c,"yyyy-MM-dd")}`)};return a.jsxs(a.Fragment,{children:[a.jsx(h,{prevHandler:o,nextHandler:r,today:e}),a.jsx(p.Suspense,{fallback:a.jsx(j,{}),children:a.jsx(D,{})})]})}export{H as default};
