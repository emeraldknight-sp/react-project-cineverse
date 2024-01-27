import styled from "@emotion/styled";
import { Button } from "../Button";

export const StyledIconButton = styled(Button)<StyledIconButtonProps>`
  background-color: ${(props) =>
    props.color === "transparent" ? "transparent" : props.color};
  border-radius: 100%;
`;
