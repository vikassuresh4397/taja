import React, { memo, useCallback, useEffect, useMemo, useState } from "react";

const Post = memo(({ id, title, body, verifyPost, togglePostVerification }) => {
  // Memoized function to handle click on the verify button
  const handleClick = useCallback(() => {
    togglePostVerification(id);
  }, [id, togglePostVerification]);

  // Memoized promise to generate a random color with a delay of 1 second
  const colorPromise = useMemo(
    () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0")
          );
        }, 1000);
      }),
    []
  );

  // Memoized state for the color of the left border of the post
  const [color, setColor] = useState("#000");

  // Effect to set the color state when the colorPromise resolves
  useEffect(() => {
    colorPromise.then(setColor);
  }, [colorPromise]);

  return (
    <div
      data-testid="post"
      style={{ borderLeft: `5px solid ${color}`, paddingLeft: "10px" }}
    >
      <h6>{title}</h6>
      <p>{body}</p>
      <button
        data-testid="verify_btn"
        onClick={handleClick}
        style={{
          backgroundColor: verifyPost ? "green" : "red",
          color: "#fff",
          borderRadius: "3px",
          padding: "5px",
          border: "none",
          cursor: "pointer",
        }}
      >
        {verifyPost ? "Verified" : "Verify"}
      </button>
    </div>
  );
});

export default Post;
