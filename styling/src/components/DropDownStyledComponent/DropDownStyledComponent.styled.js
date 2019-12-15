// Функция
import styled from 'styled-components';

// Возвращает реакт компонент с применёнными стилями
export const StyledContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const StyledBurgerButton = styled.button`
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 40px;
  width: 50px;
  background-color: #fff;
  color: #333;
  cursor: pointer;

  :hover {
    background-color: #686de0;
    color: #fff;
  }
`;

export const StyledDropdownContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 300px;
  z-index: 2;
  border: 1px rgba(0, 0, 0, 0.4);
  box-shadow: 0 16px 24px 2 rgba(0, 0, 0, 0.14);
`;

export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledListItem = styled.li`
  padding: 8px 12px;

  :hover {
    background-color: #686de0;
    color: #fff;
    cursor: pointer;
  }
`;
