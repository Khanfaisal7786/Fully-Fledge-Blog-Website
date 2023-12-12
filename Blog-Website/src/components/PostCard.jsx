import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full h-80 backdrop-blur-sm bg-white/30 rounded-xl p-4 mb-4 sm:mb-0 flex flex-col items-center">
        <div className="w-full mb-4">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl w-full h-48 object-cover"
          />
        </div>
        <h2 className="text-xl font-bold text-center overflow-hidden max-h-16">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
