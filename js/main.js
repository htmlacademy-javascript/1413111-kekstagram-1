import {
  getSimilarPosts
} from './data.js';

import {
  renderMiniPics
} from './pic-mini.js';

const similarPostsData = getSimilarPosts();
renderMiniPics(similarPostsData);
