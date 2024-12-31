import styled from 'styled-components';

export const ProfileContainer = styled.div`
  max-width: 935px;
  margin: 0 auto;
  padding: 30px 20px;
`;

export const ProfileHeader = styled.header`
  display: flex;
  margin-bottom: 44px;
  gap: 30px;
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 30px;
`;

export const ProfileInfo = styled.section`
  flex: 1;
`;

export const ProfileHeader1 = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Username = styled.h2`
  font-size: 28px;
  font-weight: 300;
  margin-right: 20px;
`;

export const Stats = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  gap: 40px;
`;

export const StatItem = styled.li`
  font-size: 16px;
  
  strong {
    font-weight: 600;
    margin-left: 5px;
  }
`;

export const FullName = styled.h1`
  font-size: 16px;
  font-weight: 600;
`;

// 게시물 그리드 관련 스타일
export const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  margin-top: 44px;
`;

export const PostGridItem = styled.div`
  position: relative;
  aspect-ratio: 1;
  cursor: pointer;

  &:hover .overlay {
    opacity: 1;
  }
`;

export const PostImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PostOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  opacity: 0;
  transition: opacity 0.2s ease;
`;

export const PostStat = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  color: white;
`;

export const StatValue = styled.span`
  font-weight: 600;
  font-size: 16px;
`;

export const MultipleImagesIcon = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;

export const MultipleImagesWrapper = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;

export const CreatePostButton = styled.button`
  background-color: #0095f6;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-left: 20px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0081d6;
  }

  &:active {
    transform: scale(0.98);
  }
`;

// ... 다른 Profile 관련 스타일들 