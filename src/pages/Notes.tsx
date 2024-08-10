import React, { useEffect, useState } from 'react'
import Main from '../components/Main';
import { DocReturn, getNotes } from '../utilities/fetch';
import LoadingScreen from '../components/LoadingScreen';
import NotesContainer from '../components/Notes/NotesContainer';
import Write from '../components/Notes/Write';
import { auth } from '../utilities/firebase';

interface NotesProps {
    setColor: () => void;
}

const Notes: React.FC<NotesProps> = ({setColor}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [notes, setNotes] = useState<DocReturn[]>([]);

  useEffect(() => {
 
    setLoading(true);

    async function handleNotes() {
      if(auth !== null && auth.currentUser !== null ) {
        const docNotes = await getNotes(auth.currentUser.uid);
        setNotes(docNotes);
      }
      setLoading(false);
    }

    handleNotes();
  }, []);

    useEffect(() => {
        setColor();
    }, [setColor])

  return (
    <Main header='Notes' 
      Extra = {<Write />}
    >
      {loading ? 
      
      <LoadingScreen /> : 
      
      <NotesContainer notes = {notes} />
      
      }
    </Main>
  )
}

export default Notes