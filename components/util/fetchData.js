//chnage functin to async
export default async function getUserDataByIP(ip, currentData, setIsLoaded, setFetchError, errorMessage, setErrorMessage) {
  try {
    const res = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=3b1508839e804a029b3a17b43fd96bf4&ip=${ip}`)
    const data = await res.json();
    console.log(data);
    // const data =  {
    //   "ip": "33.33.33.33", 
    // "location": { 
    //   "country": "NG", 
    //   "region": "Port Harcourt", 
    //   "city": "Port", 
    //   "lat": 37.38605, 
    //   "lng": -122.08385, 
    //   "postalCode": "94035", 
    //   "timezone": "01:00", 
    //   "geonameId": 5375480 }, 
    // "domains": [
    //   "0--9.ru", 
    //   "000.lyxhwy.xyz", 
    //   "000180.top", 
    //   "00049ok.com", 
    //   "001998.com.he2.aqb.so"
    //   ], 
    //   "as": { 
    //     "asn": 15169, 
    //     "name": "Google LLC", 
    //     "route": "8.8.8.0\/24", 
    //     "domain": "https:\/\/about.google\/intl\/en\/", 
    //     "type": "Content" 
    //   }, 
    //   "isp": "MTN Nigeria", 
    //   "proxy": { 
    //     "proxy": false, 
    //     "vpn": false, 
    //     "tor": false 
    //   } 
    // }

    if (!data.message && data) {
      setIsLoaded(true);
      setFetchError(false);
      console.log(data)
      return data;
    } else {
      setFetchError(true);
      setErrorMessage(['404', 'IP Not Found'])
      return currentData
    }


  } catch (error) {
    setFetchError(true);
    setErrorMessage(['Network', 'error'])
    console.log(error)
    return currentData;
  }

}


