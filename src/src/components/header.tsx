import styled from "styled-components";
import {memo} from 'react'
type Props = {
    title: string
    subtitle: string
}

const Header = ({title,subtitle}:Props) => {
    return(
    <Head>
      <p>{title} </p>
      <p>{subtitle} </p>
    </Head>
    )
};

export default memo(Header);

const Head = styled.div`
  position: relative;
  margin-top: 1px;
  height: auto;
  font-size: 30px;
  font-weight: 600;
  background-color: rgba(80, 227, 194, 1);
  text-align: center;
  padding: 20px;
  @media (max-width: 640px) {
    font-size: 20px;
  }
`;