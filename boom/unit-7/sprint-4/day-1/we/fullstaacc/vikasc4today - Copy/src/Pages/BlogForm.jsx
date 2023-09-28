import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBlogAction, editBlogAction } from '../Redux/BookReducer/action';

const BlogForm = ({ blogToEdit, onClose }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(blogToEdit ? blogToEdit.title : '');
  const [content, setContent] = useState(blogToEdit ? blogToEdit.content : '');
  const [category, setCategory] = useState(blogToEdit ? blogToEdit.category : '');

  const handleSubmit = (e) => {
    e.preventDefault();

    const blogData = {
      title,
      content,
      category,
    };

    if (blogToEdit) {
      dispatch(editBlogAction(blogToEdit.id, content));
    } else {
      dispatch(createBlogAction(blogData));
    }

    // Close the form
    onClose();
  };

  return (
    <div>
      <h2>{blogToEdit ? 'Edit Blog' : 'Create Blog'}</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <label>Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select category</option>
          <option value="Business">Business</option>
          <option value="Tech">Tech</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Entertainment">Entertainment</option>
        </select>

        <button type="submit">
          {blogToEdit ? 'Save Changes' : 'Create Blog'}
        </button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
