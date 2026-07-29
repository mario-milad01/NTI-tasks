import express from 'express';

const app = express();
const PORT = 8000;
app.use(express.json());

app.get('/posts', async (req, res) => {
  try {
    const data = await fetch('https://dummyjson.com/posts');
    const posts = await data.json();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get any posts' });
  }
});

app.post('/posts', async (req, res) => {
  try {
    const response = await fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });
    const newPost = await response.json();
    res.status(201).json(newPost);
  } catch (error) {
    console.error('Express POST Error:', error);
    res.status(500).json({ error: 'Failed to create post' });
  }
});

app.put('/posts/:id', async (req, res) => {
  try {
    const response = await fetch(`https://dummyjson.com/posts/${req.params.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });
    const updatedPost = await response.json();
    res.status(200).json(updatedPost);
  } catch (error) {
    console.error('Express PUT Error:', error);
    res.status(500).json({ error: 'Failed to replace post' });
  }
});

app.patch('/posts/:id', async (req, res) => {
  try {
    const response = await fetch(`https://dummyjson.com/posts/${req.params.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });
    const patchedPost = await response.json();
    res.status(200).json(patchedPost);
  } catch (error) {
    console.error('Express PATCH Error:', error);
    res.status(500).json({ error: 'Failed to patch post' });
  }
});

app.delete('/posts/:id', async (req, res) => {
  try {
    const response = await fetch(`https://dummyjson.com/posts/${req.params.id}`, {
      method: 'DELETE',
    });
    const deletedData = await response.json();
    res.status(200).json(deletedData);
  } catch (error) {
    console.error('Express DELETE Error:', error);
    res.status(500).json({ error: 'Failed to delete post' });
  }
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});