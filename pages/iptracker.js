import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link';

import dynamic from 'next/dynamic'
import React from 'react';


import IPTracker from '../components/iptracker/IPTtacker';
// import {getStaticProps} from '../components/util/fetchData';




function Tracker(locationData) {

  const [data, setData] = React.useState(locationData.data);
  const [input, setInput] = React.useState('');
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [hasFetchError, setHasFetchError] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    console.log(data) //save to local storage when data loads again

    //render map.
    setIsMounted(true);
  }, [])


  // const Map = React.useMemo(() => dynamic(
  //   () => import('../components/iptracker/Map'), // replace '@components/map' with your component's location
  //   {
  //     loading: () => <p>A map is loading</p>,
  //     ssr: false // This line is important. It's what prevents server-side render
  //   }
  // ), [/* list variables which should trigger a re-render here */])

  return (
    <div>
      <Head>
        <title>IP Tracker</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <IPTracker
        data={data}
        input={input}
        setData={setData}
        setInput={setInput}
        isLoaded={isLoaded}
        setIsLoaded={setIsLoaded}
        isMounted={isMounted}
        hasFetchError={hasFetchError}
        setHasFetchError={setHasFetchError} />

      <style jsx global>{`
     @import url('https://fonts.googleapis.com/css2?family=Alata&family=Josefin+Sans:wght@300&display=swap');

        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Josefin Sans', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
            color: #000;
            background-color:#1e2140;
            background-color:#fff;
            font-size: 15px;
        }

        * {
          box-sizing: border-box;
          padding:0;
          margin:0;
        }
      `}</style>

    </div>
  )
}

export async function getStaticProps() {

  // const res = await fetch('https://api.ipgeolocation.io/ipgeo?apiKey=3b1508839e804a029b3a17b43fd96bf4')
  // const data = await res.json();
  // console.log(data);
  const data = {
    "ip": "8.8.8.8",
    "location": {
      "country": "US",
      "region": "California",
      "city": "Mountain View",
      "lat": 37.38605,
      "lng": -122.08385,
      "postalCode": "94035",
      "timezone": "-08:00",
      "geonameId": 5375480
    },
    "domains": [
      "0--9.ru",
      "000.lyxhwy.xyz",
      "000180.top",
      "00049ok.com",
      "001998.com.he2.aqb.so"
    ],
    "as": {
      "asn": 15169,
      "name": "Google LLC",
      "route": "8.8.8.0\/24",
      "domain": "https:\/\/about.google\/intl\/en\/",
      "type": "Content"
    },
    "isp": "Google LLC",
    "proxy": {
      "proxy": false,
      "vpn": false,
      "tor": false
    }
  }

  return {
    props: {
      data
    }
  }

}

export default Tracker;