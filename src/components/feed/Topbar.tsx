import React from "react";
import Menu from "../../assets/menu.svg";
import Love from "../../assets/heart.svg";
import Comment from "../../assets/comment.svg";
import Share from "../../assets/share.svg";

export const Topbar = () => {
  const Fell = [
    {
      avatar: "https://cdn.waifu.im/4371.jpg",
      avatar_name: "hello",
      avatar_user: "@nice",
      post_desc:
        "waifu.im DOES NOT own any picture, therefore, we return a source link to credit the artist.",
      post_img: "https://cdn.waifu.im/7559.png",
      post_love: "23k",
      post_mess: "2k",
      post_share: "67k",
    },
    {
      avatar: "https://cdn.waifu.im/6828.jpg",
      avatar_name: "anime",
      avatar_user: "@anime",
      post_desc:
        "waifu.im DOES NOT own any picture, therefore, we return a source link to credit the artist.asdfdasfsf",
      post_img: "https://cdn.waifu.im/7432.jpg",
      post_love: "123k",
      post_mess: "12k",
      post_share: "167k",
    },
    {
      avatar: "https://cdn.waifu.im/7363.jpg",
      avatar_name: "anime",
      avatar_user: "@anime",
      post_desc:
        "waifu.im DOES NOT own any picture, therefore, we return a source link to credit the artist.asdfdasfsf",
      post_img: "https://cdn.waifu.im/593.jpeg",
      post_love: "123k",
      post_mess: "12k",
      post_share: "167k",
    },
  ];
  return (
    <div className="flex flex-col  px-5 py-5">
      {Fell.map((num) => (
        <div className="card mt-10 px-5 py-5">
          <div className="border border-b-gray-400 border-none ">
            <div
              className="flex w-full gap-2 justify-between items-center
              "
            >
              <div className="flex gap-2">
                <img
                  src={num.avatar}
                  className="w-[48px] h-[48px] object-cover rounded-[10px]"
                />
                <div className="flex flex-col font-semibold">
                  <span className="text-xl text-black">{num.avatar_name}</span>
                  <span className="text-sm text-gray-500">
                    {num.avatar_user}
                  </span>
                </div>
              </div>

              <div className="flex ">
                <img className="w-4 h-4" src={Menu} alt="" />
              </div>
            </div>
            <div className="text-sm text-black my-5 mx-2 font-semibold">
              {num.post_desc}
              <span className="text-red-500">Read More</span>
            </div>

            <div className="border-none border-b-gray-400 mb-2">
              <img
                src={num.post_img}
                className="w-full h-[406px] object-cover rounded-md"
                alt=""
              />
            </div>
          </div>

          <div className="flex gap-6 ml-3 border-2 border-t-gray-400 border-none ">
            <div className="mt-6 flex items-center">
              <img
                src={Love}
                alt="hello"
                className="w-[24px] h-[22px] mr-1 text-black"
              />
              <span>{num.post_love}</span>
            </div>
            <div className="mt-6 flex items-center">
              <img
                src={Comment}
                alt="hello"
                className="w-[24px] mr-1 h-[22px] text-black"
              />
              <span>{num.post_mess}</span>
            </div>
            <div className="mt-6 flex items-center">
              <img
                src={Share}
                alt="hello"
                className="w-[24px] mr-1 h-[22px] text-black"
              />
              <span>{num.post_share}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
