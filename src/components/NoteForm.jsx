import { addNote } from "@/redux/actions"
import { Button, Flex, Input } from "@chakra-ui/react"
import { useState } from "react"
import { useDispatch } from "react-redux"

export const NoteForm = () => {
    const [note,setNote] = useState('')
    const dispatch = useDispatch()
    const handleAdd = () => {
        if(note.trim()){
            let newNote = {
                title: note,
                content: Date.now()
            }
              dispatch(addNote(newNote))
              setNote('')
        }
        else {
            alert("write something before adding")
        }
    }
    return (
        <Flex
        p={4}
        gap={4}
        >
        <Input type="text" placeholder="Enter your note" value={note} onChange={(e) => setNote(e.target.value)}/>
        <Button backgroundColor={"green.500"}
        onClick={handleAdd}
        >Add</Button>
        </Flex>
    )
}