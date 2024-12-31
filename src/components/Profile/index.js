import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { postApi } from '../../api/postApi';
import { profileApi } from '../../api/profileApi';
import PostDetail from '../PostDetail';
import PostGrid from './PostGrid';
import ProfileImageModal from './ProfileImageModal';
import CreatePostModal from './CreatePostModal';
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
  CreatePostButton,
} from '../../styles/profile.styles';

function Profile() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [showProfileImage, setShowProfileImage] = useState(false);
  const [showCreatePost, setShowCreatePost] = useState(false);

  // 프로필 정보 조회
  const { data: profileResponse, isLoading: profileLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: () => profileApi.getProfile(),
  });

  // 게시물 목록 조회
  const { data: posts, isLoading: postsLoading, error } = useQuery({
    queryKey: ['userPosts'],
    queryFn: postApi.getFeedPosts,
    enabled: !!profileResponse?.data,
  });

  const handleCreatePost = () => {
    setShowCreatePost(true);
  };

  if (profileLoading || postsLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러가 발생했습니다: {error.message}</div>;
  if (!profileResponse?.data) return <div>프로필을 찾을 수 없습니다.</div>;

  const profile = profileResponse.data;  // 프로필 데이터 추출

  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfileImage 
          src={profile.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${profile.username}`}
          alt={profile.username}
          onClick={() => setShowProfileImage(true)}
          style={{ cursor: 'pointer' }}
        />
        <ProfileInfo>
          <ProfileHeader1>
            <Username>{profile.username}</Username>
            <CreatePostButton onClick={handleCreatePost}>
              게시글 작성
            </CreatePostButton>
          </ProfileHeader1>
          <Stats>
            <StatItem>
              게시물 <strong>{posts?.length || 0}</strong>
            </StatItem>
            <StatItem>
              팔로워 <strong>{profile.followersCount}</strong>
            </StatItem>
            <StatItem>
              팔로우 <strong>{profile.followingCount}</strong>
            </StatItem>
          </Stats>
          <FullName>{profile.fullName}</FullName>
        </ProfileInfo>
      </ProfileHeader>

      <PostGrid 
        posts={posts} 
        onPostClick={setSelectedPost}
        profileData={profile}
      />

      {selectedPost && (
        <PostDetail 
          post={selectedPost} 
          onClose={() => setSelectedPost(null)} 
          profileData={profile}
        />
      )}

      {showProfileImage && (
        <ProfileImageModal 
          imageUrl={profile.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${profile.username}`}
          onClose={() => setShowProfileImage(false)}
        />
      )}

      {showCreatePost && (
        <CreatePostModal onClose={() => setShowCreatePost(false)} />
      )}
    </ProfileContainer>
  );
}

export default Profile; 