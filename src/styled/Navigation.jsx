import styled from 'styled-components'

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  & > a {
    font-size: 3rem;
    color: lightblue;
  }
  & > ul {
    display: flex;
    align-items: center;
    height: 100%;
    list-style-type: none;
    & > li {
      & > a {
        border: 1px solid white;
        display: inline-block;
        margin: 0 0.5rem;
        padding: 0.75rem 1rem;
        border-radius: 0.5rem;
      }
    }
  }
`;

export default Navigation;