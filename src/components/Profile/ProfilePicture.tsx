import React from "react";

const ProfilePicture: React.FC = () => {
  return (
    <div className="my-6 flex justify-center">
      <div className="rounded-full border-2 border-black bg-yellow-400 p-5 shadow-xl">
        <img
          className="size-48"
          src="../../images/profile.png"
          alt="Profile Picture"
        />
      </div>
    </div>
  );
};

export default ProfilePicture;
