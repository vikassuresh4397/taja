// import { PostModel } from "../model/post.model";
const { PostModel } = require("../model/post.model");
export const getBlogs = async (req, res) => {
  try {
    const blogs = await PostModel.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
};

export const getBlogsByTitle = async (req, res) => {
  try {
    const titleQuery = req.query.title;
    const blogs = await PostModel.find({ title: { $regex: titleQuery, $options: 'i' } });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
};

export const getBlogsByCategory = async (req, res) => {
  try {
    const categoryQuery = req.query.category;
    const blogs = await PostModel.find({ category: categoryQuery });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
};

export const getSortedBlogs = async (req, res) => {
  try {
    const sortBy = req.query.sort;
    const sortOrder = req.query.order === 'asc' ? 1 : -1;
    const blogs = await PostModel.find().sort({ [sortBy]: sortOrder });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
};

export const createBlog = async (req, res) => {
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
};

export const updateBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const { content } = req.body;
    await PostModel.findByIdAndUpdate(blogId, { content });
    res.status(200).json({ message: 'Blog updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update blog' });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    await PostModel.findByIdAndDelete(blogId);
    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete blog' });
  }
};

export const likeBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    await PostModel.findByIdAndUpdate(blogId, { $inc: { likes: 1 } });
    res.status(200).json({ message: 'Liked blog' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to like blog' });
  }
};

export const commentOnBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const { username, content } = req.body;
    const comment = { username, content };
    await PostModel.findByIdAndUpdate(blogId, { $push: { comments: comment } });
    res.status(200).json({ message: 'Comment added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add comment' });
  }
};
