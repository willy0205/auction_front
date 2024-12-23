import styled from 'styled-components';

export const PostContainer = styled.article`
  background: white;
  border-radius: 8px;
  border: 1px solid #dbdbdb;
  margin-bottom: 16px;
`;

export const PostHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 4px 14px 16px;
`;

export const PostHeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const PostImage = styled.img`
  width: 100%;
  height: auto;
`;

export const PostActions = styled.div`
  padding: 0 16px;
`;

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  margin: 4px 0 8px;
`;

export const ActionButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.7;
  }
`;

export const TimeStamp = styled.span`
  color: #8e8e8e;
  font-size: 12px;
  padding: 0 16px 16px;
  display: block;
`;

// ... 다른 Post 관련 스타일들 