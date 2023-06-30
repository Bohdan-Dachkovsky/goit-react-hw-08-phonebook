import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display:block;
  text-align: center;
  color: white;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  justifycontent: center;
  alignitems: center;
  fontsize: 40;
  color: rgb(0, 0, 0);
`;
const Header = styled.header`
  width: 1200px
  height: 80px;
  margin: 0px;
  border-bottom: 1px solid black;
  margin-bottom: -1px;
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  display: flex;
  flex-direction: row;
  textdecoration: none;
`
const Navigation = styled.nav`
  max-width: 100px;
  height: 80px;
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
}
`;
// const CarouselContainer = styled.div` — your styles `;
// const StyledComponent = styled.div` — your styles `;


export { Container, Header, Navigation, Link };