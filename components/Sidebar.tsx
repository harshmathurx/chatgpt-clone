/* eslint-disable @next/next/no-img-element */
"use client";

import ChatRow from "../components/ChatRow";
import { db } from "../firebase";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession, signOut } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import NewChat from "./NewChat";
import ModelSelection from "./ModelSelection";
import { HomeIcon } from "@heroicons/react/24/solid";

const SideBar = () => {
  const { data: session } = useSession();
  const [chats, loading, error] = useCollection(
    session &&
    query(
      collection(db, "users", session.user?.email!, "chats"),
      orderBy("timestamp", "asc")
    )
  );

  return (
    <div className="p-2 py-3 md:py-5 w-24 md:w-full flex flex-col h-full md:h-screen">
      <div className="flex-1">
        
        <div className="border-gray-700 border mobile md:chatRow my-2">
          <HomeIcon className="h-4 w-4" />
          <p>
            Home</p>
        </div>

        <NewChat />

        <div className="hidden sm:inline">
          <ModelSelection />
        </div>

        <div className="flex flex-col space-y-2 my-4">
          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>

      {session && (
        <div
          className="md:flex md:flex-row-reverse md:-space-x-5 md:gap-4 md:justify-center md: items-stretch"
          onClick={() => signOut()}
        >
          <p className="text-gray-300 text-center py-2 text-sm font-medium cursor-pointer">
            Logout
          </p>
          <img
            src={session.user?.image!}
            alt="profile pict"
            className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
          />
        </div>
      )}
    </div>
  );
};

export default SideBar;