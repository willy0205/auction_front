import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';
import { CommentIcon, LikeIcon, BookmarkIcon, ShareIcon } from '../icons';
import { Avatar } from '../../styles/common.styles';
import {
  Overlay,
  Modal,
  CloseButton,
  ImageSection,
  PostImage,
  SlideButton,
  ImageCounter,
  ContentSection,
  CommentsSection,
  Comment,
  PostActions,
  Likes,
  PostTime,
} from '../../styles/postDetail.styles';

function PostDetail({ post, onClose }) {
  // ... 컴포넌트 로직
}

export default PostDetail; 