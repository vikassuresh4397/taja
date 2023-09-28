import axios from 'axios';

const API_BASE_URL = 'https://busy-underwear-duck.cyclic.cloud';


export const FETCH_BLOGS_SUCCESS = 'FETCH_BLOGS_SUCCESS';
export const FETCH_BLOGS_FAILURE = 'FETCH_BLOGS_FAILURE';
export const CREATE_BLOG_SUCCESS = 'CREATE_BLOG_SUCCESS';
export const CREATE_BLOG_FAILURE = 'CREATE_BLOG_FAILURE';
export const EDIT_BLOG_SUCCESS = 'EDIT_BLOG_SUCCESS';
export const EDIT_BLOG_FAILURE = 'EDIT_BLOG_FAILURE';
export const DELETE_BLOG_SUCCESS = 'DELETE_BLOG_SUCCESS';
export const DELETE_BLOG_FAILURE = 'DELETE_BLOG_FAILURE';
export const LIKE_BLOG_SUCCESS = 'LIKE_BLOG_SUCCESS';
export const LIKE_BLOG_FAILURE = 'LIKE_BLOG_FAILURE';
export const COMMENT_BLOG_SUCCESS = 'COMMENT_BLOG_SUCCESS';
export const COMMENT_BLOG_FAILURE = 'COMMENT_BLOG_FAILURE';


export const fetchBlogsSuccess = (blogs) => ({
  type: FETCH_BLOGS_SUCCESS,
  payload: blogs,
});

export const fetchBlogsFailure = (error) => ({
  type: FETCH_BLOGS_FAILURE,
  payload: error,
});

export const fetchBlogsAction = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/bloggers/blogs`);
      dispatch(fetchBlogsSuccess(response.data));
    } catch (error) {
      console.error('Error fetching blogs:', error);
      dispatch(fetchBlogsFailure('An error occurred while fetching blogs'));
    }
  };
};


export const createBlogSuccess = (message) => ({
  type: CREATE_BLOG_SUCCESS,
  payload: message,
});

export const createBlogFailure = (error) => ({
  type: CREATE_BLOG_FAILURE,
  payload: error,
});

export const createBlogAction = (blogData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/bloggers/createblogs`, blogData);
      if (response.data.message) {
        dispatch(createBlogSuccess(response.data.message));
      } else if (response.data.error) {
        dispatch(createBlogFailure(response.data.error));
      }
    } catch (error) {
      console.error('Error creating blog:', error);
      dispatch(createBlogFailure('An error occurred while creating a blog'));
    }
  };
};


export const editBlogSuccess = (editedBlog) => ({
  type: EDIT_BLOG_SUCCESS,
  payload: editedBlog,
});

export const editBlogFailure = (error) => ({
  type: EDIT_BLOG_FAILURE,
  payload: error,
});

export const editBlogAction = (blogId, editedContent) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/bloggers/blogs/${blogId}`, { content: editedContent });
      if (response.data.message) {
        dispatch(editBlogSuccess(response.data.message));
      } else if (response.data.error) {
        dispatch(editBlogFailure(response.data.error));
      }
    } catch (error) {
      console.error('Error editing blog:', error);
      dispatch(editBlogFailure('An error occurred while editing the blog'));
    }
  };
};


export const deleteBlogSuccess = (deletedBlogId) => ({
  type: DELETE_BLOG_SUCCESS,
  payload: deletedBlogId,
});

export const deleteBlogFailure = (error) => ({
  type: DELETE_BLOG_FAILURE,
  payload: error,
});

export const deleteBlogAction = (blogId) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/bloggers/blogs/${blogId}`);
      if (response.data.message) {
        dispatch(deleteBlogSuccess(blogId));
      } else if (response.data.error) {
        dispatch(deleteBlogFailure(response.data.error));
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
      dispatch(deleteBlogFailure('An error occurred while deleting the blog'));
    }
  };
};


export const likeBlogSuccess = (likedBlog) => ({
  type: LIKE_BLOG_SUCCESS,
  payload: likedBlog,
});

export const likeBlogFailure = (error) => ({
  type: LIKE_BLOG_FAILURE,
  payload: error,
});

export const likeBlogAction = (blogId) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/bloggers/blogs/${blogId}/like`);
      if (response.data.message) {
        dispatch(likeBlogSuccess(response.data.message));
      } else if (response.data.error) {
        dispatch(likeBlogFailure(response.data.error));
      }
    } catch (error) {
      console.error('Error liking blog:', error);
      dispatch(likeBlogFailure('An error occurred while liking the blog'));
    }
  };
};


export const commentBlogSuccess = (commentedBlog) => ({
  type: COMMENT_BLOG_SUCCESS,
  payload: commentedBlog,
});

export const commentBlogFailure = (error) => ({
  type: COMMENT_BLOG_FAILURE,
  payload: error,
});

export const commentBlogAction = (blogId, commentData) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/bloggers/blogs/${blogId}/comment`, commentData);
      if (response.data.message) {
        dispatch(commentBlogSuccess(response.data.message));
      } else if (response.data.error) {
        dispatch(commentBlogFailure(response.data.error));
      }
    } catch (error) {
      console.error('Error commenting on blog:', error);
      dispatch(commentBlogFailure('An error occurred while commenting on the blog'));
    }
  };
};



export const SET_SELECTED_BLOG = 'SET_SELECTED_BLOG';
export const CLEAR_SELECTED_BLOG = 'CLEAR_SELECTED_BLOG';


export const setSelectedBlog = (blog) => ({
  type: SET_SELECTED_BLOG,
  payload: blog,
});


export const clearSelectedBlog = () => ({
  type: CLEAR_SELECTED_BLOG,
});


export const selectBlogAction = (blogId) => {
  return async (dispatch, getState) => {
    try {
      const selectedBlog = getState().blogs.blogs.find((blog) => blog.id === blogId);
      dispatch(setSelectedBlog(selectedBlog));
    } catch (error) {
      console.error('Error setting selected blog:', error);
    }
  };
};





if (window.Cypress) {
  window.fetchBlogsSuccess = fetchBlogsSuccess;
  window.fetchBlogsFailure = fetchBlogsFailure;
  window.createBlogAction = createBlogAction;
  window.createBlogFailure = createBlogFailure;
  window.createBlogSuccess = createBlogSuccess;
  window.fetchBlogsAction = fetchBlogsAction;
}
