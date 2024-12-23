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
  return (
    <Grid>
      {posts?.map((post) => {
        const totalComments = post.comments.reduce((total, comment) => {
          return total + 1 + (comment.replies?.length || 0);
        }, 0);

        return (
          <PostGridItem 
            key={post.id} 
            onClick={() => onPostClick(post)}
          >
            <PostImage src={post.images[0]} alt="" />
            <PostOverlay className="overlay">
              <PostStat>
                <LikeIcon size={20} color="white" />
                <StatValue>{post.likes}</StatValue>
              </PostStat>
              <PostStat>
                <CommentIcon size={20} color="white" />
                <StatValue>{totalComments}</StatValue>
              </PostStat>
            </PostOverlay>
            {post.images.length > 1 && (
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