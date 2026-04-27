"use client";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

const RightSideBar = () => {
  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Login With</h2>
      <div className="flex w-full max-w-xs flex-col gap-3">
        <Button
          onClick={handleGoogleSignIn}
          className="w-full"
          variant="tertiary"
        >
          <Icon icon="devicon:google" />
          Sign in with Google
        </Button>
        <Button className="w-full" variant="tertiary">
          <Icon icon="mdi:github" />
          Sign in with GitHub
        </Button>
      </div>
    </div>
  );
};

export default RightSideBar;
