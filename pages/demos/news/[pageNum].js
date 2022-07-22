import { html } from "htm/preact";
import { Fragment } from "preact";

import Script from "next/script";
import OnOffSideAreaWrapper from "/components/commons/OnOffSideAreaWrapper";

import { useRouter } from 'next/router';

const _URL = `https://content.guardianapis.com/search`;
const REQUEST_PARAM = `?q=japan&show-fields=headline,thumbnail,wordcount,isLive,bodyText,lastModified&order-by=relevance`;
const API_KEY_PARAM = `&api-key=${process.env.NEXT_PUBLIC_API_KEY}`;
// const REQUEST_PARAM = `?show-tags=contributor&show-fields=starRating,headline,thumbnail,short-url&show-refinements=all&order-by=relevance`;
// URL += `?show-fields=all&show-section=true&show-blocks=all&show-elements=all&show-related=true`;
// tags api is http
// const URL = `https://content.guardianapis.com/tag?api-key=${process.env.NEXT_PUBLIC_API_KEY}`;
export default function Index({data, error, cardsInfo, cardsInfoRaw}) {

    const router = useRouter();
    const pageNumClient = router.query.pageNum
    let URL = _URL + REQUEST_PARAM;
    URL += `&page=${pageNumClient}`;
    URL += API_KEY_PARAM;

    console.log("hello man");
    console.log(process.env.NEXT_PUBLIC_API_KEY);
    console.log(URL);
    console.log(data);
    console.log(cardsInfo);
    console.log(cardsInfoRaw);
    if (error) return `<div>failed to load</div>`;
    if (!data) return `<div>loading...</div>`;

    const refreshData = () => {
        router.replace(router.asPath);
      }

    return html`
    <${Fragment}>
        <head>

        </head>
        Hello World
    <//>
    `;
}




import fetch from 'node-fetch';
export async function getServerSideProps(context) {

    context.res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
      )
    const pageNumServer=context.query.pageNum;
    let URL = _URL + REQUEST_PARAM;
    URL += `&page=${pageNumServer}`;
    URL += API_KEY_PARAM;
    const resPrivate = await fetch(URL)
    const resPrivateBody = await resPrivate.json()
    const cardsInfoRaw = await resPrivateBody.response.results;
    const cardsInfo = [];
    cardsInfoRaw.map((element, index)=>{
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
      let cardInfo = {
        "headline": element.fields.headline,
        "bodyText": element.fields.bodyText,
        "isLive": element.fields.isLive,
        "thumbnail": element.fields.thumbnail,
        "wordcount": element.fields.wordcount,
        "fromNow": fromNow,
        "routeId": id,
      };
      cardsInfo.push(cardInfo);
    })
    return {
      props: {
        data: resPrivateBody,
        cardsInfo: cardsInfo,
        cardsInfoRaw: cardsInfoRaw,
      },
    }
  }

