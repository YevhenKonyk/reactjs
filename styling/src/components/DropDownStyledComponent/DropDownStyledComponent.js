import React from 'react';
import PropTypes from 'prop-types';
// Стили
import {
  StyledContainer,
  StyledDropdownContainer,
  StyledBurgerButton,
  StyledList,
  StyledListItem,
} from './DropDownStyledComponent.styles';

const DropdownStyled = ({ isOpen = false }) => (
  <StyledContainer>
    <StyledBurgerButton>&#9776;</StyledBurgerButton>
    {isOpen && (
      <StyledDropdownContainer>
        <StyledList>
          <StyledListItem>option</StyledListItem>
          <StyledListItem>option2</StyledListItem>
          <StyledListItem>option3</StyledListItem>
          <StyledListItem>option4</StyledListItem>
          <StyledListItem>option5</StyledListItem>
        </StyledList>
      </StyledDropdownContainer>
    )}
  </StyledContainer>
);

DropdownStyled.propTypes = {
  isOpen: PropTypes.bool,
};

export default DropdownStyled;
