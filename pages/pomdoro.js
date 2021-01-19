import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link';

import styles from '../components/styles/Pomdoro.module.css';
import Canvas from '../components/Canvas';




function Pomdoro() {
  // var canvas = document.getElementById('canvas');
  // var ctx = canvas.getContext('2d');
  return (
    <div>
      <Head>
        <title>Pomdoro App</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <div id={styles.layout} >
        <div id={styles.main}>
          <h1 id={styles.title}>Pomdoro</h1>
          <div className={styles.states}>
            <div className={styles.statesBg}></div>
            <button className={styles.btn1}>pomdoro</button>
            <button className={styles.btn2}>short break</button>
            <button className={styles.btn3}>long break</button>
          </div>

          <div className={styles.canvasWrapper}>
          <Canvas />
            <div className={styles.timerWrapper}>
              <h2 id={styles.timer}>17:59</h2>
              <h3 className={styles.currentState}>PAUSE</h3>
            </div>
          </div>
        </div>

      </div>

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
            font-size: 15px;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export default Pomdoro;