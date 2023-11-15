'use client';
import FeedCard from "@/components/FeedCard";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession, signOut, signIn } from "next-auth/react";
import { graphqlClient } from "@/clients/api";
import { registerUser } from "@/graphql/query/user";

export default function Home() {
  const router = useRouter();
  const { data: session } = useSession();

  const handleLogout = async () => {
    await signOut();
    router.push("/");
  };

  const handleLogin = async () => {
    await signIn();
  
    const firstName = session?.user?.name?.split(" ")[0];
    const lastName = session?.user?.name?.split(" ")[1];
    const email = session?.user?.email;
    const profileImageUrl = session?.user?.image;
  
    if (firstName && lastName && email && profileImageUrl) {
      try {
        const { registerUser: newUser } = await graphqlClient.request(
          registerUser,
          {
            firstName,
            lastName,
            email,
            profileImageUrl,
          }
        );
  
        console.log("New User:", newUser);
        router.push("/");
      } catch (error) {
        console.error("GraphQL Error:", error);
      }
    }
  };

  return (
    <div className="w-full">
      <div className="container w-full max-w-[1280px] mx-auto my-0">
        <div className="w-full grid grid-cols-12">
          <div className="col-span-3">
            <Sidebar />
          </div>
          <div
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            className="col-span-6 border-l border-r border-white h-screen overflow-x-hidden overflow-y-scroll"
          >
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
          </div>
          <div className="col-span-3">
            {session ? (
              <button
                onClick={handleLogout}
                className="bg-white text-black rounded-md p-4"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={handleLogin}
                className="bg-white text-black rounded-md p-4"
              >
                Google Login
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
