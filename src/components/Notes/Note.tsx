import React from "react";
import { DocumentData } from "firebase/firestore";
import ShowNote from "./ShowNote";
import { deleteNote } from "../../utilities/delete";

interface NoteProps {
  id: string;
  data: DocumentData;
  last: boolean;
  openNotepad: () => void;
  changeContent: (Content: React.ReactNode) => void;
  handleClose: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}

const Note: React.FC<NoteProps> = ({
  id,
  data,
  last,
  openNotepad,
  changeContent,
  handleClose,
}) => {
  const handleDeleteNotes: React.MouseEventHandler<HTMLButtonElement> = () => {
    deleteNote(id);
    handleClose();
  };

  const handleOpenNotes: React.MouseEventHandler<HTMLDivElement> = () => {
    openNotepad();
    changeContent(
      <ShowNote
        title={data.title}
        content={data.content}
        handleDeleteNotes={handleDeleteNotes}
      />,
    );
  };

  return (
    <div
      onClick={handleOpenNotes}
      className={`flex w-full items-center justify-between border border-black bg-white p-2 shadow-xl transition-all hover:cursor-pointer active:bg-yellow-300 ${last === true ? "rounded-b-xl" : ""}`}
    >
      <p className="text-sm font-medium">{data.title}</p>
      <p className="text-xs font-medium">
        {data.createdAt.toDate().toLocaleDateString()}
      </p>
    </div>
  );
};

export default Note;
