import styled from 'styled-components';

export const Avatar = styled.img`
  width: ${props => props.size || '32px'};
  height: ${props => props.size || '32px'};
  border-radius: 50%;
  margin-right: 12px;
`;

export const Button = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.7;
  }
`;

// ... 공통으로 사용되는 스타일 컴포넌트들 