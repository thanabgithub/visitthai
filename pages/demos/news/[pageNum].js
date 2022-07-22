import { html } from "htm/preact";
import { Fragment } from "preact";

import Script from "next/script";
import OnOffSideAreaWrapper from "/components/commons/OnOffSideAreaWrapper";

import { useRouter } from 'next/router';

const _URL = `https://content.guardianapis.com/search`;
const REQUEST_PARAM = `?show-tags=contributor&show-fields=starRating,headline,thumbnail,short-url&show-refinements=all&order-by=relevance`;
const API_KEY_PARAM = `&api-key=${process.env.NEXT_PUBLIC_API_KEY}`;
// URL += `?show-fields=all&show-section=true&show-blocks=all&show-elements=all&show-related=true`;
// tags api is http
// const URL = `https://content.guardianapis.com/tag?api-key=${process.env.NEXT_PUBLIC_API_KEY}`;
export default function Index({data, error, pageNumServer}) {

    const router = useRouter();
    const pageNumClient = router.query.pageNum
    let URL = _URL + REQUEST_PARAM;
    URL += `&page=${pageNumClient}`;
    URL += API_KEY_PARAM;

    console.log("hello man");
    console.log(process.env.NEXT_PUBLIC_API_KEY);
    console.log(URL);
    console.log(data);
    console.log(pageNumServer);
    console.log(pageNumClient);

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
    const json = await resPrivate.json()
    return {
      props: {
        data: json,
        pageNumServer: pageNumServer,
      },
    }
  }

