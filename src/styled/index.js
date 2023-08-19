import styled from 'styled-components'
import FullPageCenter from "./FullPageCenter";
import { LockedBtn, UnlockedBtn } from './LockButtons';
import StyledSpinner from "./StyledSpinner";
import Navigation from "./Navigation";
import Gallery from "./Gallery";

const CentralTitle = styled.h2`
  text-align: center;
  padding: 1rem;
  font-size: 3rem;
`;

export { CentralTitle, Gallery, FullPageCenter, LockedBtn, UnlockedBtn, StyledSpinner, Navigation };