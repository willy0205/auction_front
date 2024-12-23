import {
  ProfileHeader as Header,
  ProfileImage,
  ProfileInfo,
  ProfileHeader1,
  Username,
  Stats,
  StatItem,
  FullName,
} from '../../styles/profile.styles';

function ProfileHeader({ 
  username, 
  postsCount, 
  followersCount, 
  followingCount, 
  fullName 
}) {
  return (
    <Header>
      <ProfileImage 
        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`}
        alt="Profile"
      />
      <ProfileInfo>
        <ProfileHeader1>
          <Username>{username}</Username>
        </ProfileHeader1>
        <Stats>
          <StatItem>
            게시물 <strong>{postsCount}</strong>
          </StatItem>
          <StatItem>
            팔로워 <strong>{followersCount}</strong>
          </StatItem>
          <StatItem>
            팔로우 <strong>{followingCount}</strong>
          </StatItem>
        </Stats>
        <FullName>{fullName}</FullName>
      </ProfileInfo>
    </Header>
  );
}

export default ProfileHeader; 