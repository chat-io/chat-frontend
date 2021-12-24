import styled from "styled-components";
import { color } from "../../../../color";

console.log(color.bg_main);
const NavbarComponent = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  background-color: ${color.bg_main};
  padding: 0 10px;

  & h2 {
    display: flex;
    align-self: center;
    color: white;
  }

  & #profile-menu {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    position: relative;
    cursor: pointer;
  }

  & #profile-menu p {
    display: flex;
    align-self: center;
    color: white;
  }

  & #profile-img {
    width: 40px;
    height: 40px;
    padding-right: 1rem;
  }
`;

export default NavbarComponent;
