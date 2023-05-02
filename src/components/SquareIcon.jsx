import styled from "styled-components";
import PropTypes from "prop-types";

const StyledSquareIcon = styled.div`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background-color: ${({ color }) => color};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default function SquareIcon({ color, size, icon }) {
  return (
    <StyledSquareIcon color={color} size={size}>
      <img src={icon.img} alt={icon.name}></img>
    </StyledSquareIcon>
  );
}

SquareIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.object,
};
