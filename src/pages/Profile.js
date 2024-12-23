import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { mockPosts } from '../mocks/feedData';
import PostDetail from '../components/PostDetail';
import PostGrid from '../components/Profile/PostGrid';
import ProfileImageModal from '../components/Profile/ProfileImageModal';
import {
  ProfileContainer,
  ProfileHeader,
  ProfileImage,
  ProfileInfo,
  ProfileHeader1,
  Username,
  Stats,
  StatItem,
  FullName,
} from '../styles/profile.styles';

function Profile() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [showProfileImage, setShowProfileImage] = useState(false);
  const { data: posts, isLoading } = useQuery({
    queryKey: ['userPosts'],
    queryFn: () => Promise.resolve(mockPosts),
  });

  if (isLoading) return <div>로딩 중...</div>;

  const profileImageUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=willy950205`;

  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfileImage 
          src={profileImageUrl}
          alt="Profile"
          onClick={() => setShowProfileImage(true)}
          style={{ cursor: 'pointer' }}
        />
        <ProfileInfo>
          <ProfileHeader1>
            <Username>willy950205</Username>
          </ProfileHeader1>
          <Stats>
            <StatItem>
              게시물 <strong>{posts?.length || 0}</strong>
            </StatItem>
            <StatItem>
              팔로워 <strong>203</strong>
            </StatItem>
            <StatItem>
              팔로우 <strong>564</strong>
            </StatItem>
          </Stats>
          <FullName>CHOI WOO SEOK</FullName>
        </ProfileInfo>
      </ProfileHeader>

      <PostGrid 
        posts={posts} 
        onPostClick={setSelectedPost}
      />

      {selectedPost && (
        <PostDetail 
          post={selectedPost} 
          onClose={() => setSelectedPost(null)} 
        />
      )}

      {showProfileImage && (
        <ProfileImageModal 
          imageUrl={profileImageUrl}
          onClose={() => setShowProfileImage(false)}
        />
      )}
    </ProfileContainer>
  );
}

export default Profile; 