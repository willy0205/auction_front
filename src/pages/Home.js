import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import Post from '../components/Post';
import { mockPosts } from '../mocks/feedData';
import { postApi } from '../api/postApi';

const HomeContainer = styled.div`
  background-color: #fafafa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 32px;
`;

const FeedContainer = styled.div`
  width: 100%;
  max-width: 630px;
  margin: 0 auto;
  
  @media (max-width: 660px) {
    width: calc(100% - 32px);
  }
`;

function Home() {
  const { data: posts, isLoading } = useQuery({
    queryKey: ['feed'],
    queryFn: () => Promise.resolve(mockPosts),
  });

  if (isLoading) return <div>로딩 중...</div>;

  return (
    <HomeContainer>
      <FeedContainer>
        {posts?.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </FeedContainer>
    </HomeContainer>
  );
}

export default Home; 