import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useSelector } from "react-redux";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    appwriteService
      .getPosts()
      .then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      })
      .finally(() => setLoading(false));
  }, []);


  return (
    <div className="w-full py-8">
      <Container>
        {authStatus ? (
          loading ? (
            <h1>Loading your content...</h1>
          ) : posts.length === 0 ? (
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold bg-gradient-to-r hover:from-yellow-500 hover:to-pink-500 rounded-full">
                No post is there. Create one.
              </h1>
            </div>
          ) : (
            <div className="flex flex-wrap">
            {posts.map((post) => (
              <div key={post.$id} className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <PostCard {...post} />
              </div>
              ))}
            </div>
          )
        ) : (
          <div className="p-2 w-full">
            <h1 className=" text-3xl text-white font-bold bg-gradient-to-r hover:from-yellow-500 hover:to-pink-500 rounded-full">
              Login to read posts..
            </h1>
          </div>
        )}
      </Container>
    </div>
  );
}

export default Home;
