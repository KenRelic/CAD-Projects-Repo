import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link';

// import styles from '../components/styles/Home.module.css';
import PageLayout from '../components/PageLayout';
import Container from '../components/Container';
import Grid from '../components/Grid';
import ImageCard from '../components/ImageCard';
import Nav from '../components/Nav';
import FooterNav from '../components/FooterNav';
import Banner from '../components/Banner';

import {HeaderStyle} from '../components/styles/header.style';
import {FooterStyle} from '../components/styles/footer.style';



function Home() {
  return (
    <div>
      <Head>
        <title>Loopstudios</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <PageLayout>
        <Banner>
          <Container>
         <Nav />
         <h1 className="headline">IMMERSIVE <br/>EXPERIENCE <br/>THAT DELIVER</h1>
       </Container>
      </Banner>
       
       <Container>
         <Grid />
         {/* <Grid right={true} /> */}
       </Container>
       <Container>
         <HeaderStyle>
           <h2>OUR CREATIONS</h2>
           <button>SEE ALL</button>
         </HeaderStyle>
         <ImageCard />
       </Container>
       <FooterStyle>
         <Container>
           <FooterNav />
         </Container>
       </FooterStyle>
      </PageLayout>

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
            background-color:#fff;
            font-size: 15px;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export default Home;