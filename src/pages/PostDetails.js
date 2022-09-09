import React from 'react'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useStoreActions } from "easy-peasy";

const PostDetails = () => {
    const history = useNavigate();
  const { id } = useParams();
  const deletePost = useStoreActions((actions) => actions.deletePost);
  const handleDelete = async (id) => {
    deletePost(id);
    history("/");
  };
    console.log(id);
    
  return (
    <div className='h-4/5 w-full bg-slate-200 dark:bg-slate-700 dark:text-slate-300 p-5 '>
        <h2 className='text-lg text-black dark:bg-slate-700 dark:text-slate-300'>{id}</h2>
        <button
              className="border border-red-500 bg-red-500 rounded-lg p-2 mt-3"
              onClick={() => handleDelete(id)}
            >
              Delete post
            </button>
    </div>
  )
}

export default PostDetails