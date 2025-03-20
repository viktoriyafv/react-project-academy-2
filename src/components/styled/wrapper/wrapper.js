import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
`;

export default Wrapper;
