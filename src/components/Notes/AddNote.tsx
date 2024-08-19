import React, { useState } from "react";
import CheckButton from "../CheckButton";
import Notepad from "../Notepad";
import { postNote } from "../../utilities/post";
import { auth } from "../../utilities/firebase";

interface AddNoteProps {
  handleClose: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}

const AddNote: React.FC<AddNoteProps> = ({ handleClose }) => {
  const TITLE_MAX_COUNT = 24;
  const CONTENT_MAX_COUNT = 180;
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [textCount, setCount] = useState<number>(0);

  const handleChangeTitle: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value.length <= TITLE_MAX_COUNT) {
      setTitle(e.target.value);
    }
  };

  const handleChangeContent: React.ChangeEventHandler<HTMLTextAreaElement> = (
    e,
  ) => {
    if (e.target.value.length <= CONTENT_MAX_COUNT) {
      setCount(e.target.value.length);
      setContent(e.target.value);
    }
  };

  const handlePost: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (auth?.currentUser && title && content) {
      postNote(title, content, auth.currentUser.uid);
      handleClose();
    }
  };

  return (
    <Notepad handleClose={handleClose}>
      <input
        type="text"
        className="m-2 w-[calc(100%-1rem)] rounded-none border-b-2 p-1 font-medium outline-none"
        placeholder="Title"
        value={title}
        onChange={handleChangeTitle}
      />

      <div className="relative h-1/2 w-[calc(100%-1rem)]">
        <textarea
          value={content}
          onChange={handleChangeContent}
          className="m-2 h-full w-full resize-none rounded-md p-1 font-medium outline-none"
          placeholder="Your notes here..."
        ></textarea>

        <p
          className={`${textCount === CONTENT_MAX_COUNT ? "text-red-400" : "text-gray-400"} absolute bottom-0 right-0 text-xs font-bold`}
        >
          {textCount}/{CONTENT_MAX_COUNT}
        </p>
      </div>

      <div className="absolute bottom-7 left-1/2 -translate-x-1/2">
        <CheckButton handleCheck={handlePost} />
      </div>
    </Notepad>
  );
};

export default AddNote;
