import { Link } from "@chakra-ui/react";
import styled from "@emotion/styled";

interface INavProps {
  isOpen: boolean;
}

export const Nav = styled.div<INavProps>`
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #0a0d6f 0%, #09004e 100%);
  position: relative;
  width: ${(props) => (props.isOpen ? "320px" : "72px")};
  transition: width 0.3s ease-in-out, padding 0.3s ease-in-out;
  gap: 16px;
  :before {
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    transition: opacity 0.3s ease-in-out;
    opacity: ${(props) => (props.isOpen ? "1" : "0")};
    background: linear-gradient(180deg, #09014e 0%, #0a0d6f 100%);
    pointer-events: none;
  }
`;

export const NavigationLink = styled(Link)`
  color: var(--chakra-colors-main-0);
  white-space: nowrap;
  margin-top: 0;
  width: 100%;
  padding: 0 24px;
  :hover {
    background-color: var(--chakra-colors-main-0);
    color: #090251;
  }
`;
