const similarMiniPicElems = document.querySelector('.pictures');
const miniPicTemplate = document.querySelector('#picture').content.querySelector('.picture');


// const similarPostsData = getSimilarPosts();
const similarListFragment = document.createDocumentFragment();

function renderMiniPics(similarPostsData) {
  similarPostsData.forEach(({
    url,
    likes,
    comments
  }) => {
    const miniPicElem = miniPicTemplate.cloneNode(true);

    miniPicElem.querySelector('.picture__img').src = url;
    miniPicElem.querySelector('.picture__likes').textContent = likes;
    miniPicElem.querySelector('.picture__comments').textContent = comments.length;

    similarListFragment.append(miniPicElem);

  });
  similarMiniPicElems.append(similarListFragment);
}

export {
  renderMiniPics
};
