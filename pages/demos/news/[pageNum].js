import { html } from "htm/preact";
import { Fragment } from "preact";
import PreloaderDotwave from "/components/commons/PreloaderDotwave"

import OnOffSideAreaWrapper from "/components/commons/OnOffSideAreaWrapper";

import { useRouter } from 'next/router';
import { Image } from "@nextui-org/react";
const _URL = `https://content.guardianapis.com/search`;
const REQUEST_PARAM = `?q=japan&show-fields=headline,thumbnail,wordcount,isLive,bodyText,lastModified&order-by=relevance`;
const API_KEY_PARAM = `&api-key=${process.env.NEXT_PUBLIC_API_KEY}`;
// const REQUEST_PARAM = `?show-tags=contributor&show-fields=starRating,headline,thumbnail,short-url&show-refinements=all&order-by=relevance`;
// URL += `?show-fields=all&show-section=true&show-blocks=all&show-elements=all&show-related=true`;
// tags api is http
// const URL = `https://content.guardianapis.com/tag?api-key=${process.env.NEXT_PUBLIC_API_KEY}`;
import { useEffect } from "react";
export default function Index({pageNumServer, cardsInfo}) {
    useEffect(() => console.log("mounted"), []);
    const router = useRouter();
    const pageNumClient = router.query.pageNum
    let URL = _URL + REQUEST_PARAM;
    URL += `&page=${pageNumClient}`;
    URL += API_KEY_PARAM;

    console.log("hello man");
    console.log(cardsInfo);
    console.log(pageNumServer);
    if (pageNumClient != pageNumServer) return `<div>Something Went Wrong</div>`;
    if (!cardsInfo) return `<div>loading...</div>`;

    const refreshData = () => {
      console.log("refreshData")
        router.replace(router.asPath);
      }

    return html`
    <head>
      <style>
          .news--menu {
            display: flex;
            margin: var(--screen-cus-unit-nkq) auto var(--screen-cus-unit-nkq) auto;
            height: 5vh;
            max-width: 100%;
            border: 0 dashed green;
        }
        .news--card--wrapper {
            display: flex;
            margin: var(--screen-cus-unit-nkq) auto var(--screen-cus-unit-nkq) auto;
            max-width: 100%;
        }
        .news--card-items--fit {
          display: flex;
          height: 100%;
          width: 100%;
          border: 0 dashed blue;
        }
        .news--card--img {
          display: inline-block;
        }

        .news--card-items--text--container {
          height: 1000px;
          width: 100%;
          padding: 0 var(--screen-cus-unit-nkq) 0 var(--screen-cus-unit-nkq);
        }
        .news--card-items--text--wrapper {
          position: relative;
          height: 100%;
          width: 100%;
        }
        .news--card-items--text--headline {
          display: block;
        }
        .divider {
          margin: auto;
          height: 10px;
          background-color: currentColor;
          border-radius: 999em;
        }

        amp-fit-text {
          line-height: 1.25;
        }
        .ttt {
          line-height: 1.25;
        }
      </style>
    </head>
    <${Fragment}>
        <head>
          <meta name="description" content="SpeedWeb Landing Page Interactive Smart Responsive" />
        </head>
        <${OnOffSideAreaWrapper}>
          <div class="news--menu">
            For you
            Following
            U.S.
            World
            Local
            Business
            Technology
            Entertainment
            Sports
            Science
            Health
          </div>
        <//>
      <${OnOffSideAreaWrapper}>
        <div>
        <amp-img
        alt="A view of the sea"
        src=${cardsInfo[0].thumbnail}
        layout="responsive"
        width=500
        height=300
      >
      </amp-img>
        <div style="margin: calc(5*var(--screen-unit));">
          <h1>${cardsInfo[0].headline} </h1>
          <p> ${cardsInfo[0].bodyText}</p>

        </div>


        </div>
      <//>

    <//>
    `;
}

export async function getStaticPaths() {
  const base = [...Array(2).keys()].slice(1);
  var paths = [];
  base.map((element) => {
    let paramPath =  { params: { pageNum: element.toString() } };
    paths.push(paramPath);
  })
  return {
    paths: paths,
    fallback: true,
  };
}


import fetch from "node-fetch";


export async function getStaticProps(context) {

    // context.res.setHeader(
    //     'Cache-Control',
    //     'public, s-maxage=10, stale-while-revalidate=59'
    //   )


    // get country and device on request to alter user to optimal page from serverside
    const pageNumServer=context.params.pageNum;
    let URL = _URL + REQUEST_PARAM;
    URL += `&page=${pageNumServer}`;
    URL += API_KEY_PARAM;
    const resPrivate = await fetch(URL)
    const resPrivateBody = await resPrivate.json()
    const cardsInfoRaw = await resPrivateBody.response.results;
    const cardsInfo = [];
    cardsInfoRaw.map((element)=>{
      let __fromNow = (Date.now() - Date.parse(element.fields.lastModified));
      let _fromNow = Math.floor(__fromNow/1000/60/60)
      let fromNow = "";
      if (_fromNow >= 24) {
        _fromNow = Math.floor(_fromNow/24).toString();
          if (_fromNow >= 31) {
            _fromNow = Math.floor(_fromNow/31).toString();
            if (_fromNow >= 12) {
              fromNow = Math.floor(_fromNow/12).toString()+" year";
            } else fromNow = _fromNow.toString()+" month"
        } else fromNow = _fromNow.toString()+" day";
     } else {fromNow = _fromNow.toString()+" hour";}
      if (_fromNow > 1)  fromNow = fromNow + "s";
      fromNow = fromNow + " ago";
      let textLength = element.fields.bodyText.length;
      let bodyText = element.fields.bodyText.slice(0, Math.min(textLength, 1000)) + "...";
      let cardInfo = {
        "headline": element.fields.headline,
        "bodyText": bodyText,
        "isLive": element.fields.isLive,
        "thumbnail": element.fields.thumbnail,
        "wordcount": element.fields.wordcount,
        "fromNow": fromNow,
        "routeId": element.id,
      };
      cardsInfo.push(cardInfo);
    })
    return {
      props: {
        pageNumServer: pageNumServer,
        cardsInfo: cardsInfo,
      },
      revalidate: 3600,
    }
  }

//   <div class="news--card--wrapper m0 p0">
//   <div class="grd news--card-items--fit m0 p0">
//     <div class="grd-row news--card-items--fit m0 p0 adj-pos">
//       <div class="grd-row-col-1-6--sm news--card-items--fit">
//         <amp-img
//           alt="A view of the sea"
//           src=${cardsInfo[1].thumbnail}
//           layout="responsive"
//           width=500
//           height=300
//         >
//         </amp-img>
//       </div>
//       <div class="grd-row-col-5-6--sm news--card-items--fit">
//         <div class="news--card-items--text--container">
//           <div class="news--card-items--text--wrapper">
//             <amp-fit-text layout="fill" min-font-size="16"><div class='ttt' ><b class="news--card-items--text--headline">${cardsInfo[1].headline} </b>${cardsInfo[1].bodyText}</div></amp-fit-text>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>