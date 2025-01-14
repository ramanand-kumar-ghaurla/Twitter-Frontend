import React, { useState, forwardRef, useImperativeHandle, useRef } from "react";
import api from "../../helperFunction/axios";

const CommentForm = forwardRef(({ initialModelId, initialModelType }, ref) => {
  const [comment, setComment] = useState(""); // Controlled state for textarea
  const [modelId, setModelId] = useState(initialModelId); // Internal modelId
  const [modelType, setModelType] = useState(initialModelType); // Internal modelType

  const textareaRef = useRef();

  // Expose methods to parent component
  useImperativeHandle(ref, () => ({
    focusForm(newModelId, newModelType, preFilledContent = "") {
      setModelId(newModelId); // Update modelId
      setModelType(newModelType); // Update modelType
      setComment(preFilledContent); // Prefill the textarea (optional)
      textareaRef.current?.focus(); // Focus the textarea
    },
  }));
  const handleBlur = () => {
    
    setTimeout(() => {
      if (document.activeElement !== textareaRef.current) {
        setModelId(initialModelId); // Reset to tweet ID
        setModelType(initialModelType); // Reset to "Tweet"
        setComment('')
      }
    }, 500);
  };

  
  const postComment = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(
        "/comments/create-comment",
        { content: comment },
        {
          params: {
            modelType,
            modelId,
          },
        }
      );
      console.log("Comment posted:", response.data.data);
      setComment(""); // Reset textarea after posting
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  return (
    <div className="comment-form-fixed w-[80%] mx-auto">
      <form onSubmit={postComment}>
        <textarea
          ref={textareaRef}
          rows="3"
          className="w-full p-2 border rounded"
          placeholder="Write a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)} // Update only textarea state
          onBlur={handleBlur}
          required
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Post Comment
        </button>
      </form>
    </div>
  );
});

export default CommentForm;
