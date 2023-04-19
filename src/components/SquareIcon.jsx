import styled from "styled-components";

const StyledSquareIcon = styled.div`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background-color: ${({ color }) => color};
  border-radius: 6px;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
  }
`;
export default function SquareIcon({ color, size, icon }) {
  return (
    <StyledSquareIcon color={color} size={size}>
      <img src={icon.img} alt={icon.name}></img>
    </StyledSquareIcon>
  );
}
