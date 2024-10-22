import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (featuredImage) {
      // Fetch the image URL from Appwrite storage
      const url = appwriteService.getFilePreview(featuredImage);
      setImageUrl(url);
    }
  }, [featuredImage]);
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full  bg-white rounded-xl p-4 px-6 ">
        <div className="w-full justify-center mb-4">
          {imageUrl && (
            <img
              src={appwriteService.getFilePreview(featuredImage)}
              alt={title}
              className="rounded-xl w-64 h-40 object-cover"
            />
          )}
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
