// MyPost.jsx

import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";
import { useSelector } from "react-redux";

function MyPost() {
  const [loading, setLoading] = useState(true);
  const [myPosts, setMyPosts] = useState([]);
  const authUser = useSelector((state) => state.auth.userData);

  useEffect(() => {

    if (!authUser) {
      // Redirect or handle the case when authUser is not available
      setLoading(false);
      return;
    }

    appwriteService
      .getPostsByUser(authUser.$id)
      .then((posts) => {
        if (posts) {
          setMyPosts(posts.documents);
        }
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      })
      .finally(() => setLoading(false));
  }, [authUser]);

  if (!authUser) {
    // Return a message or component for the case when authUser is not available
    return (
      <div className="w-full py-8">
        <Container>
          <div className="p-2 w-full">
            <h1 className="text-2xl font-bold bg-gradient-to-r hover:from-yellow-500 hover:to-pink-500 rounded-full">
              Please Add Post to get started...
            </h1>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <Container>
        {loading ? (
          "Loading your posts ..."
        ) : myPosts.length === 0 ? (
          <div className="p-2 w-full">
            <h1 className="text-2xl font-bold bg-gradient-to-r hover:from-yellow-500 hover:to-pink-500 rounded-full">
              No posts found.
            </h1>
          </div>
        ) : (
          <div className="flex flex-wrap">
            {myPosts.map((post) => (
              <div key={post.$id} className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <PostCard {...post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}

export default MyPost;
