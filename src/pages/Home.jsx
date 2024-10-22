import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getAllPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);
  const animeList = [
    {
      name: "Itachi: The Family man",
      arc: "Shippuden",
      img: "https://images3.alphacoders.com/132/thumb-1920-1328396.png",
    },
    {
      name: "One Piece",
      arc: "Wano",
      img: "https://giffiles.alphacoders.com/219/219782.gif",
    },
    {
      name: "Attack on Titan",
      arc: "Marley",
      img: "https://giffiles.alphacoders.com/221/221266.gif",
    },
    {
      name: "Demon Slayer",
      arc: "Entertainment District",
      img: "https://images8.alphacoders.com/119/thumb-1920-1198192.png",
    },
    {
      name: "My Hero Academia",
      arc: "Paranormal Liberation War",
      img: "https://images5.alphacoders.com/135/thumb-440-1355144.webp",
    },
    {
      name: "Hunter x Hunter",
      arc: "Chimera Ant",
      img: "https://images3.alphacoders.com/137/thumb-440-1378188.webp",
    },
    {
      name: "Dragon Ball Z",
      arc: "Frieza Saga",
      img: "https://images2.alphacoders.com/134/thumb-440-1344311.webp",
    },
    {
      name: "Bleach",
      arc: "Thousand-Year Blood War",
      img: "https://images.alphacoders.com/819/thumb-440-81993.webp",
    },
    {
      name: "Jujutsu Kaisen",
      arc: "Shibuya Incident",
      img: "https://giffiles.alphacoders.com/220/220764.gif",
    },
    {
      name: "Fullmetal Alchemist",
      arc: "Promised Day",
      img: "https://giffiles.alphacoders.com/113/113103.gif",
    },
    {
      name: "Death Note",
      arc: "L Arc",
      img: "https://images2.alphacoders.com/153/thumb-440-153272.webp",
    },
    {
      name: "Hasirama: The Good God",
      arc: "Aogiri Tree",
      img: "https://images3.alphacoders.com/119/thumb-440-1198899.webp",
    },
    {
      name: "Jiraiya the Gallant",
      arc: "Aincrad",
      img: "https://images5.alphacoders.com/116/thumb-440-1169179.webp",
    },
    {
      name: "Story behind titans",
      arc: "Tartaros",
      img: "https://images.alphacoders.com/131/thumb-350-1311164.webp",
    },
    {
      name: "Black Clover",
      arc: "Elf Reincarnation",
      img: "https://giffiles.alphacoders.com/221/221908.gif",
    },
  ];

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap ">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-black">
                Login to read posts
              </h1>
              <div className="flex flex-wrap justify-center space-x-4">
                {/* Create rectangular boxes for anime names, arcs, and images */}
                {animeList.map((anime, index) => (
                  <div
                    key={index}
                    className="bg-gray-200 p-4 m-2 w-1/4 text-center rounded-md shadow-md"
                  >
                    <img
                      src={anime.img}
                      alt={anime.name}
                      className="h-40 w-full object-cover rounded-md mb-4"
                    />
                    <h2 className="text-xl font-semibold">{anime.name}</h2>
                    <p className="text-gray-700">Arc: {anime.arc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap justify-center items-center rounded-lg">
          {posts.map((post) => (
            <div
              key={post.$id}
              className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
