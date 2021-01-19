import React, { useState } from 'react';

import {NavMenuDesktop, NavMenuMobile} from './NavMenu';
import {useWindowSize, ShowWindowDimensions } from './util/getWidth';
import Image from 'next/image';
import styled from "@emotion/styled";
const logo = '/logo.svg';
const menuBtn = '/icon-hamburger.svg';



const NavStyle = styled('div')`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  margin: 1rem 0 10rem 0;
  z-index: 1000;

  .menuBtn{
      cursor: pointer;
      display: none;
      transition: all 1s;
      :hover {
        transform:rotateZ(180deg);     
      }

      @media all and (max-width: 768px){
        /* display: block; */
      }
    }
`

const Nav = () =>{
  const [isOpen, setIsOpen] = useState(false);
  const [width, height] = useWindowSize();

  return (
    <NavStyle>
      <Image src={logo} width={192} height={32} alt="logo"/>
      <NavMenuDesktop />
       {!(width > 768)  && <Image className="menuBtn"  src={menuBtn} width={30} height={20} alt="menu icon" 
       onClick={()=>setIsOpen(!isOpen)}/>}
      {isOpen && <NavMenuMobile useState = {[isOpen, setIsOpen]} />}
    </NavStyle>
  )
}

export default Nav;