import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  display: flex;
  background: white;
  width: 90%;
  max-width: 935px;
  height: 90vh;
  max-height: 600px;
  position: relative;
`;

export const CloseButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 30px;
  cursor: pointer;
  z-index: 1001;
`;

export const ImageSection = styled.div`
  width: 50%;
  background: black;
  display: flex;
  align-items: center;
  position: relative;
`;

export const PostImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const SlideButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s;
  z-index: 2;

  &:hover {
    opacity: 1;
  }

  &:disabled {
    display: none;
  }

  ${props => props.direction === 'prev' ? 'left: 16px;' : 'right: 16px;'}
`;

export const ImageCounter = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 6px 10px;
  border-radius: 12px;
  font-size: 12px;
  z-index: 2;
`;

export const ContentSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #dbdbdb;
`;

export const PostContent = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid #dbdbdb;
  margin-bottom: 8px;
`;

export const CommentsSection = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 16px;
  min-height: 0;
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: #c7c7c7;
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
`;

export const Comment = styled.div`
  margin-bottom: 16px;
  
  strong {
    font-weight: 600;
    margin-right: 8px;
  }
`;

export const PostActions = styled.div`
  padding: 8px 16px;
  border-top: 1px solid #dbdbdb;
`;

export const Likes = styled.div`
  font-weight: 600;
  margin-bottom: 8px;
`;

export const PostTime = styled.div`
  color: #8e8e8e;
  font-size: 12px;
  margin-top: 16px;
`;

export const PostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 16px;
  border-bottom: 1px solid #dbdbdb;
`;

export const Username = styled.span`
  font-weight: 600;
  color: #262626;
`;

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
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

export const CommentForm = styled.form`
  display: flex;
  padding: 16px;
  border-top: 1px solid #dbdbdb;
`;

export const CommentInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;
  padding: 8px;
  
  &::placeholder {
    color: #8e8e8e;
  }
`;

export const PostButton = styled.button`
  border: none;
  background: none;
  color: #0095f6;
  font-weight: 600;
  font-size: 14px;
  padding: 8px;
  cursor: pointer;
  opacity: ${props => props.disabled ? 0.3 : 1};
  
  &:disabled {
    cursor: default;
  }
`;

export const CommentContainer = styled.div`
  margin-bottom: 16px;
  padding: 0 0;
`;

export const CommentContent = styled.div`
  margin-left: ${props => props.isReply ? '40px' : '0'};
`;

export const CommentHeader = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;
`;

export const CommentText = styled.span`
  word-break: break-word;
`;

export const CommentActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 4px;
  margin-bottom: 4px;
  font-size: 12px;
  color: #8e8e8e;
  height: 24px;
`;

export const CommentTime = styled.span`
  color: #8e8e8e;
  display: flex;
  align-items: center;
  height: 24px;
`;

export const LikeCount = styled.span`
  color: #8e8e8e;
  display: flex;
  align-items: center;
  height: 24px;
`;

export const ViewReplies = styled.button`
  background: none;
  border: none;
  color: #8e8e8e;
  font-size: 12px;
  padding: 4px 0;
  margin: 8px 0 8px 24px;
  cursor: pointer;
  display: block;
  
  &:hover {
    color: #262626;
  }
`;

export const RepliesContainer = styled.div`
  margin-left: 40px;
  margin-top: 4px;
  padding-right: 16px;
`;

export const Reply = styled.div`
  margin-bottom: 12px;
`;

export const ReplyActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 4px;
  font-size: 12px;
  color: #8e8e8e;
  margin-left: 48px;
  height: 24px;
  padding-right: 16px;
`;

export const ReplyActionButton = styled(ActionButton)`
  padding: 0;
  font-size: 12px;
  color: #8e8e8e;
  height: 24px;
  transition: color 0.2s ease;
  
  &:hover {
    color: #262626;
    opacity: 1;
  }
  
  &.liked {
    color: #ed4956;
  }
`;

export const ReplyForm = styled.form`
  display: flex;
  margin-top: 8px;
  margin-left: 40px;
`;

export const ReplyInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;
  padding: 8px;
  
  &::placeholder {
    color: #8e8e8e;
  }
`;

export const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  
  &:after {
    content: "";
    width: 20px;
    height: 20px;
    border: 2px solid #dbdbdb;
    border-top-color: #262626;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`; 