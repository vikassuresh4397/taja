import {
  FETCH_BLOGS_SUCCESS,
  FETCH_BLOGS_FAILURE,
  CREATE_BLOG_SUCCESS,
  CREATE_BLOG_FAILURE,
  EDIT_BLOG_SUCCESS,
  EDIT_BLOG_FAILURE,
  DELETE_BLOG_SUCCESS,
  DELETE_BLOG_FAILURE,
  LIKE_BLOG_SUCCESS,
  LIKE_BLOG_FAILURE,
  COMMENT_BLOG_SUCCESS,
  COMMENT_BLOG_FAILURE,
} from './action';

const initialState = {
  blogs: [],
  error: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BLOGS_SUCCESS:
      return {
        ...state,
        blogs: action.payload,
        error: null,
      };

    case FETCH_BLOGS_FAILURE:
      return {
        ...state,
        blogs: [],
        error: action.payload,
      };

    case CREATE_BLOG_SUCCESS:
     
      return state;

    case CREATE_BLOG_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case EDIT_BLOG_SUCCESS:
    
      return {
        ...state,
        blogs: state.blogs.map((blog) =>
          blog.id === action.payload.id ? action.payload : blog
        ),
        error: null,
      };

    case EDIT_BLOG_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case DELETE_BLOG_SUCCESS:
     
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog.id !== action.payload),
        error: null,
      };

    case DELETE_BLOG_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case LIKE_BLOG_SUCCESS:
 
      return {
        ...state,
        blogs: state.blogs.map((blog) =>
          blog.id === action.payload.id ? action.payload : blog
        ),
        error: null,
      };

    case LIKE_BLOG_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case COMMENT_BLOG_SUCCESS:
     
      return {
        ...state,
        blogs: state.blogs.map((blog) =>
          blog.id === action.payload.id ? action.payload : blog
        ),
        error: null,
      };

    case COMMENT_BLOG_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};


