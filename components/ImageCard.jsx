
import Image from 'next/image';
import styled from "@emotion/styled";

import {CardDesktop, CardMbile} from './Card'

const ImageCardStyle = styled('div')`
  display: flex;
  width: 100%;
  flex-wrap:wrap;
  justify-content: space-between;
  align-items: center;
`

const ImageCard = () =>{
  return (
    <ImageCardStyle>
     <CardDesktop width={100} height={170} />
      <CardMbile width={20} height={5} />
    </ImageCardStyle>
  )
}

export default ImageCard;