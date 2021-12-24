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
    display: flex;
    color: white;
    align-self: center;
    width: 40px;
    height: 40px;
    padding-right: 1rem;
  }

  & .dropdown-btn {
    font-size: 1.5rem;
    color: white;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  & #profile-options {
    position: absolute;
    top: 50px;
    right: 5px;
    padding: 0 5px;
    background-color: white;
    border: 1px solid #d9d9d9;
    z-index: 9999;
    border-radius: 5px;
  }

  & #profile-options p {
    margin: 10px 5px;
    color: black;
  }
`;

export default NavbarComponent;
