async function getRandomPost() {
  const randomId = Math.floor((Math.random() * 100) + 1);
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${randomId}`);
  return post.json();
}

export default {
  getRandomPost,
};
