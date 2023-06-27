import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justifycontent: center;
  alignitems: center;
  fontsize: 40;
  color: rgb(0, 0, 0);
`;
const Navigation = styled.nav`
  width: auto;
  margin: 0px;
  font-size: bold;
  font-weight: 700;
  text-align: center;
  display: flex;
  flex-direction: row;
  textdecoration: none;
  &.linkStyle {

      margin: 0px;
      padding: 0px;
    }
`;
const Link = styled(NavLink)`
padding: 0px 25px;
text-decoration: none;
font-weight: 500;

&.active {
  color: black;
  text-decoration: underline;
}
`;
// const CarouselContainer = styled.div` — your styles `;
// const StyledComponent = styled.div` — your styles `;


export { Container, Navigation, Link };