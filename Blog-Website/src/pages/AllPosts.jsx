// import React, { useState, useEffect } from "react";
// import { Container, PostCard } from "../components";
// import appwriteService from "../appwrite/config";

// function AllPosts() {
//   const [loading, setLoading] = useState(true);
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     appwriteService
//       .getPosts()
//       .then((posts) => {
//         if (posts) {
//           setPosts(posts.documents);
//         }
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   return (
//     <div className="w-full py-8">
//       <Container>
//         {loading ? (
//           "Loading data ... "
//         ) : (
//           <div className="flex flex-wrap">
//             {posts.map((post) => (
//               <div key={post.$id} className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
//                 <PostCard {...post} />
//               </div>
//             ))}
//           </div>
//         )}
//       </Container>
//     </div>
//   );
// }

// export default AllPosts;
