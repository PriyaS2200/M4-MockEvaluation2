import { fetchNotes } from "@/redux/actions"
import { Box, Button, Flex, Text } from "@chakra-ui/react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export const NotesList = () => {
    const notes = useSelector(state=> state.notes.notes)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchNotes())
    },[])
    return (
        <Flex
        width={"50%"}
        flexDirection={"column"}
        p={4}
        gap={4}
        >
        {notes.map((note,index)=>{
            return (
                <Flex
                key={index}
                flexDirection={"column"}
                width={"100%"}
                justifyContent={"space-between"}
                border={"2px solid grey"}
                p={4}
                borderRadius={8}
                >
                <Flex 
                width={"100%"}
                justifyContent={"space-between"}
                >
                <Text>{note.title}</Text>
                <Text>{note.content}</Text>
                </Flex>
                <Flex
                justifyContent={"space-between"}
                p={4}
                >
                    <Button
                    backgroundColor={"blue.300"}
                    >Edit</Button>
                    <Button
                    backgroundColor={"gray.400"}
                    >Delete</Button>
                </Flex>
                </Flex>
            )
        })}
        </Flex>
    )
}