import styled from "styled-components";

export const AboutStyle = styled.div`
  h2 {
    text-decoration: underline;
  }
  li {
    color: red;

    &.active {
      color: blue;
    }
    &:hover {
      color: pink;
    }
    &::after {
      content: "aaa";
    }
  }
`;
