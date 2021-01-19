
import Image from 'next/image';
import styled from "@emotion/styled";
import NavMenu from './NavMenu';

const logo = '/logo.svg';
const fb = '/icon-facebook.svg';
const twitter = '/icon-twitter.svg';
const instagram = '/icon-instagram.svg';
const pinterest = '/icon-pinterest.svg';


const FooterNavStyle = styled('div')`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;

  .footer-logo{
    cursor:pointer;
  }

  .social, .footer-nav{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-direction: column;
    height: 80px;
  }

  .footer-nav{
    align-items: flex-start;
  }
  .social-media-icons {
    display: flex;
    width: 80%;
    justify-content: space-around;
  }
  .social-media-icons > div{
    cursor: pointer;
  }

  #footer-nav{
    flex-direction: column;
  }

  Ul{
    display: flex;
  align-items:center;
  justify-content: flex-end;

  li{
      font-size:1rem;
      text-align:start;
      margin: 0 1rem 0 0;
      list-style: none;
      cursor: pointer;
    }

    a{
      text-decoration: none;
      color: #fff;
    }

    @media all and (max-width:768px){
      flex-direction: column;

      li{
        margin: 1rem auto;
      }
        

      .footer-nav{
        align-items: center;
      }
    }
  }

  @media all and (max-width:768px){
    .social, .footer-nav{
        justify-content: center;
        align-items:center;
        flex-direction: column;
        height: fit-content;
        margin-bottom: 20px;
      }

      flex-direction: column;
      justify-content: center;
      align-items: center;

      Ul{
        width: 100%;
      }

      .social-media-icons {
        margin-bottom: 30px;
      }


     
  }

 
`

const FooterNav = () =>{
  return (
    <FooterNavStyle>
      <div className="footer-nav">
        <Image src={logo} width={192} height={32} className="footer-logo"/>
         <ul className="nav-menu">
           <li className="nav-item">About</li>
           <li className="nav-item">Careers</li>
           <li className="nav-item">Events</li>
           <li className="nav-item">Products</li>
           <li className="nav-item">Support</li>
         </ul>
      </div>
      <div className="social">
        <div className="social-media-icons">
            <Image src={fb} width={24} height={24}/>
            <Image src={twitter} width={24} height={20}/>
            <Image src={pinterest} width={24} height={24}/>
            <Image src={instagram} width={24} height={24}/>
          </div>
          <small className="copyright">&copy; 2021 Loopstudios. All rights reserved</small>
      </div>
     
    </FooterNavStyle>
  )
}

export default FooterNav;