const express = require('express');

const { PostModel } = require('../model/post.model');
const { auth } = require('../middleware/auth.middleware');

const PostRouter = express.Router();


// GET all blogs
PostRouter.get('/blogs', auth, async (req, res) => {
  try {
    const blogs = await PostModel.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
});

// GET blogs by title
PostRouter.get('/blogs/title', auth, async (req, res) => {
  try {
    const titleQuery = req.query.title;
    const blogs = await PostModel.find({ title: { $regex: titleQuery, $options: 'i' } });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
});

// GET blogs by category
PostRouter.get('/blogs/category', auth, async (req, res) => {
  try {
    const categoryQuery = req.query.category;
    const blogs = await PostModel.find({ category: categoryQuery });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
});

// GET sorted blogs
PostRouter.get('/blogs/sort', auth, async (req, res) => {
  try {
    const sortBy = req.query.sort;
    const sortOrder = req.query.order === 'asc' ? 1 : -1;
    const blogs = await PostModel.find().sort({ [sortBy]: sortOrder });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
});


// POST create a new blog
PostRouter.post('/createblogs', auth, async (req, res) => {
  try {
    const { username, title, content, category } = req.body;
    const date = new Date();
    const newBlog = new PostModel({
      username,
      title,
      content,
      category,
      date,
      likes: 0,
      comments: [],
    });
    await newBlog.save();
    res.status(201).json({ message: 'Blog created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create blog' });
  }
});

// PUT update a blog
PostRouter.put('/blogs/:id', auth, async (req, res) => {
  try {
    const blogId = req.params.id;
    const { content } = req.body;
    await PostModel.findByIdAndUpdate(blogId, { content });
    res.status(200).json({ message: 'Blog updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update blog' });
  }
});

// DELETE delete a blog
PostRouter.delete('/blogs/:id', auth, async (req, res) => {
  try {
    const blogId = req.params.id;
    await PostModel.findByIdAndDelete(blogId);
    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete blog' });
  }
});

// PUT like a blog
PostRouter.put('/blogs/:id/like', auth, async (req, res) => {
  try {
    const blogId = req.params.id;
    await PostModel.findByIdAndUpdate(blogId, { $inc: { likes: 1 } });
    res.status(200).json({ message: 'Liked blog' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to like blog' });
  }
});

// PUT comment on a blog
PostRouter.put('/blogs/:id/comment', auth, async (req, res) => {
  try {
    const blogId = req.params.id;
    const { username, content } = req.body;
    const comment = { username, content };
    await PostModel.findByIdAndUpdate(blogId, { $push: { comments: comment } });
    res.status(200).json({ message: 'Comment added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add comment' });
  }
});




module.exports = { PostRouter };
