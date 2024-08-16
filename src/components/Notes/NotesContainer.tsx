import React from "react";
import { DocReturn } from "../../utilities/get";
import Note from "./Note";

interface NotesContainerProps {
  notes: DocReturn[];
  changeContent: (Content: React.ReactNode) => void;
  openNotepad: () => void;
  handleClose: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}

const NotesContainer: React.FC<NotesContainerProps> = ({
  notes,
  changeContent,
  openNotepad,
  handleClose,
}) => {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between rounded-t-xl border-2 border-black bg-yellow-400 p-2 font-coffee text-sm">
        <p>Title</p>
        <p>Date</p>
      </div>

      {notes.map((note, i) => {
        return (
          <Note
            key={note.id}
            id={note.id}
            data={note.data}
            last={i === notes.length - 1 ? true : false}
            openNotepad={openNotepad}
            changeContent={changeContent}
            handleClose={handleClose}
          />
        );
      })}

      {notes.length === 0 && (
        <div
          className={`flex w-full items-center justify-center rounded-b-xl border-2 border-t-0 border-black bg-white p-2`}
        >
          <p className="text-sm font-medium">No notes yet.</p>
        </div>
      )}
    </div>
  );
};

export default NotesContainer;
