import React, { useCallback, useMemo } from "react";

const Post = ({ post, onToggleVerify }) => {
const [color, setColor] = useState("");

// Adding delay function to get random color
const delay = (ms) => {
return new Promise((resolve) => setTimeout(resolve, ms));
};

// Using useCallback to memoize toggleVerify function
const toggleVerify = useCallback(() => {
onToggleVerify(post.id);
}, [onToggleVerify, post.id]);

// Using useMemo to memoize the color value
useMemo(() => {
delay(500).then(() => {
setColor(#${Math.floor(Math.random() * 16777215).toString(16)});
});
}, []);

return (
<div
data-testid="post"
style={{ backgroundColor: color }}
>
<div>
<h6>{post.title}</h6>
<p>{post.body}</p>
</div>
<button data-testid="verify_btn" onClick={toggleVerify}>
{post.verifyPost ? "Verified" : "Verify"}
</button>
</div>
);
};

export default React.memo(Post);