// Функция
import styled from 'styled-components';

// Возвращает реакт компонент с применёнными стилями
export const StyledContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const StyledButton = styled.button`
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
