import React from "react";
import DeleteButton from "../DeleteButton";

interface ShowNoteProps {
  title: string;
  content: string;
  handleDeleteNotes: React.MouseEventHandler<HTMLButtonElement>;
}

const ShowNote: React.FC<ShowNoteProps> = ({
  title,
  content,
  handleDeleteNotes,
}) => {
  return (
    <div>
      <p className="m-2 w-[calc(100%-1rem)] rounded-none border-b-2 p-1 font-medium outline-none">
        {" "}
        {title}{" "}
      </p>

      <p className="m-2 h-1/2 w-[calc(100%-1rem)] rounded-md p-1 font-medium outline-none">
        {" "}
        {content}{" "}
      </p>

      <div className="absolute bottom-7 left-1/2 -translate-x-1/2">
        <DeleteButton handleDeleteNotes={handleDeleteNotes} />
      </div>
    </div>
  );
};

export default ShowNote;
