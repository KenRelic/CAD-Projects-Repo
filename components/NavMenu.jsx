import React, { useState } from 'react';

import styled from "@emotion/styled";
import Link from 'next/link';
import Image from 'next/image';

const logo = '/logo.svg';
const closeBtn = '/icon-close.svg';

const items = [
  {url:'/about', title: 'About'},  
  {url:'/careers', title: 'Careers'},  
  {url:'/events', title: 'Events'},  
  {url:'/products', title: 'Products'},
  {url:'/support', title: 'Support'}
]

const NavMenuStyle = styled('ul')`
  display: flex;
  align-items:center;
  justify-content: flex-end;

  li{
      font-size:1rem;
      text-align:start;
      margin: 0 1rem 0 0;
      list-style: none;
    }

  li a{
      text-decoration: none;
      color: #fff;
    }

    @media all and (max-width: 786px){
      display: none;
    }
`

const NavMenuDesktop = ()=>{
  return (
    <NavMenuStyle>
      {
        items.map((item) => (
          <Link key={item.title} href={item.url}>
            <li key={item.title}>{item.title}</li>
          </Link>
          
        ))
      }
    </NavMenuStyle>
  )
}

const NavStyleMobile = styled('div')`
  align-items:center;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  display: none;
  overflow: hidden;
  position: fixed;
  top: 0%;
  left: 0;
  


  li{
      font-size:1rem;
      text-align:start;
      margin: 2rem 0 0 0;
      list-style: none;
    }

    ::nth-child(1){
          margin-top: 3rem;
        }

  li a{
      text-decoration: none;
      color: #fff;
    }

    @media all and (max-width: 786px){
      display: flex;
      font-size: 2rem;
      width: 100%;
      height: 100%;
      background-color: #000000;
      /* position: absolute; */
      top: 0;
      left: 0;
      padding: 3rem 2rem 4rem 2rem;
      z-index: 1000;

      li{
        padding: 0.5rem 0;
        font-size: 2rem;
      }
    }

    .nav-control {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    .closeBtn{
      cursor: pointer;
      transition: all 1s;
      :hover {
        transform:rotateZ(180deg) scale(3);        
      }
    }

  
`

const NavMenuMobile = (props)=>{
  const [isOpen, setIsOpen] = props.useState;
  return (
    <NavStyleMobile>
      <div className="nav-control">
         <Image src={logo} width={192} height={32} alt="logo"/>
         <Image className="closeBtn"  src={closeBtn} width={32} height={32} alt="close button"
          onClick={()=> setIsOpen(!isOpen)} />        
      </div>    
      
        <ul>{
            items.map((item) => (
            <Link key={item.title} href={item.url}>
              <li key={item.title}>{item.title.toUpperCase()}</li>
            </Link>
          )) }
        </ul>
       
     
      <div></div>
    </NavStyleMobile>
  )
}



export {NavMenuDesktop, NavMenuMobile}