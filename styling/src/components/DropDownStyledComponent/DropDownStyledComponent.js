import React from 'react';
import PropTypes from 'prop-types';
// Стили
import {
  StyledContainer,
  StyledButton,
  StyledList,
  StyledListItem,
} from './DropDownStyledComponent.styles';

const DropdownStyled = ({ isOpen = false }) => (
  <StyledContainer>
    <StyledButton>&#9776;</StyledButton>
    {isOpen && (
      <StyledList>
        <StyledListItem>option</StyledListItem>
        <StyledListItem>option2</StyledListItem>
        <StyledListItem>option3</StyledListItem>
        <StyledListItem>option4</StyledListItem>
        <StyledListItem>option5</StyledListItem>
      </StyledList>
    )}
  </StyledContainer>
);

DropdownStyled.propTypes = {
  isOpen: PropTypes.bool,
};

export default DropdownStyled;
