import styled from 'styled-components'

const LockedBtn = styled.button`
  padding: 1rem 2.5rem;
  background-color: green;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 250ms ease;
  &:hover { background-color: darkgreen; color: #ddd; }
  &:focus { outline: none; }
`;

const UnlockedBtn = styled.button`
  padding: 1rem 2.5rem;
  background-color: red;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 250ms ease;
  &:hover { background-color: darkred; color: #ddd; }
  &:focus { outline: none; }
`;

export { LockedBtn, UnlockedBtn };