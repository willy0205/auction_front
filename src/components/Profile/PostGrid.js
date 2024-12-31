import { LikeIcon, CommentIcon, MultipleImagesIcon } from '../icons';
import {
  PostGrid as Grid,
  PostGridItem,
  PostImage,
  PostOverlay,
  PostStat,
  StatValue,
  MultipleImagesWrapper,
} from '../../styles/profile.styles';

function PostGrid({ posts, onPostClick }) {
  if (!posts) return null;

  return (
    <Grid>
      {posts.map((post) => {
        const firstImage = post.images?.[0] || 'https://via.placeholder.com/400';
        const hasMultipleImages = post.images?.length > 1;

        return (
          <PostGridItem 
            key={post.id} 
            onClick={() => onPostClick(post)}
          >
            <PostImage src={firstImage} alt="" />
            <PostOverlay className="overlay">
              <PostStat>
                <LikeIcon size={20} color="white" />
                <StatValue>{post.likes || 0}</StatValue>
              </PostStat>
              <PostStat>
                <CommentIcon size={20} color="white" />
                <StatValue>{post.commentsCount || 0}</StatValue>
              </PostStat>
            </PostOverlay>
            {hasMultipleImages && (
              <MultipleImagesWrapper>
                <MultipleImagesIcon />
              </MultipleImagesWrapper>
            )}
          </PostGridItem>
        );
      })}
    </Grid>
  );
}

export default PostGrid; 