import styled from "styled-components";
import {MainButton} from "../../../styles/buttons";

export const LogoutButton = styled(MainButton)`
  background-color: ${props => props.theme.secondaryColor};
  font-size: 18px;
`