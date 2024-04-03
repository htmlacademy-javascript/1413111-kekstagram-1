const LIKE_MIN = 15;
const LIKE_MAX = 200;
const PICTURE_COUNT = 25;
const COMMENT_COUNT = 5;
const DESCS = [
  'Это я в Москве у мавзолея Ленина.',
  'Это на Тверской у чужого Мерина.',
  'Это я на пляже летом в Таганроге.'];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const NAMES = ['Игорь', 'Владимир', 'Оксана', 'Виктория', 'Диана', 'Алиса', 'Матвей'];


const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrElem = (elem) => elem[getRandomInteger(0, elem.length - 1)];

const createMessage = function () {
  return Array.from({length: getRandomInteger(1, 2)}, () => getRandomArrElem(MESSAGES)).join(' ');
};

const createComment = function (j) {
  return {
    id: j,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: createMessage(),
    name: getRandomArrElem(NAMES),
  };
};

const createPost = function (i) {
  return {
    id: i,
    url: `photos/${i}.jpg`,
    description: getRandomArrElem(DESCS),
    likes: getRandomInteger(LIKE_MIN, LIKE_MAX),
    comments: Array.from({
      length: getRandomInteger(1, COMMENT_COUNT)
    }, (_, j) => createComment(j)),
  };
};

const similarPost = Array.from({length: PICTURE_COUNT}, (_, i) => createPost(i + 1));
similarPost();
