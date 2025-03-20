import styled, { css } from "styled-components";

const gridList = css`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  gap: 20px;
  text-align: ${(props) => props.$align || "center"};

  li {
    display: block;
    height: auto;
    font-size: ${(props) =>
      props.$fontSize ? `${props.$fontSize}px` : props.theme.fontSizeDefault};
    line-height: ${(props) =>
      props.$lineHeight ? `${props.$lineHeight}px` : "27px"};
  }
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  ${(props) => (props.$isGridList ? gridList : "")}
`;

export default Ul;
