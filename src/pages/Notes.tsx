import React, { useEffect, useState } from "react";
import Main from "../components/Main";
import { DocReturn, subscribeToNotes } from "../utilities/get";
import LoadingScreen from "../components/LoadingScreen";
import NotesContainer from "../components/Notes/NotesContainer";
import Write from "../components/Notes/Write";
import { auth } from "../utilities/firebase";
import Notepad from "../components/Notes/Notepad";

interface NotesProps {
  setColor: () => void;
}

const Notes: React.FC<NotesProps> = ({ setColor }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [notes, setNotes] = useState<DocReturn[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [NotepadContent, setNotepadContent] = useState<React.ReactNode | null>(
    null,
  );

  const handleClose: (
    event?: React.MouseEvent<HTMLButtonElement>,
  ) => void = () => {
    setOpen(false);
    setNotepadContent(null);
  };

  const changeContent = (Content: React.ReactNode) => {
    setNotepadContent(Content);
  };

  const openNotepad = () => {
    setOpen(true);
  };

  useEffect(() => {
    setLoading(true);

    const user = auth.currentUser;
    if (user) {
      subscribeToNotes(user.uid, (updatedNotes) => {
        setNotes(updatedNotes);
        setLoading(false);
      });
    }
  }, []);

  useEffect(() => {
    setColor();
  }, [setColor]);

  return (
    <Main
      header="Notes"
      Extra={
        <>
          <Write noteCount={notes.length} />
          {open && (
            <Notepad handleClose={handleClose}>{NotepadContent}</Notepad>
          )}
        </>
      }
    >
      {loading ? (
        <LoadingScreen />
      ) : (
        <NotesContainer
          notes={notes}
          changeContent={changeContent}
          openNotepad={openNotepad}
          handleClose={handleClose}
        />
      )}
    </Main>
  );
};

export default Notes;
