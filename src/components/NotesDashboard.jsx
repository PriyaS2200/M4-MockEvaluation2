import { Button, Flex, Heading } from "@chakra-ui/react"
import { NotesList } from "./NotesList"
import { NoteForm } from "./NoteForm"
import { useDispatch, useSelector } from "react-redux"
import { signOut } from "@/redux/actions"

export const NotesDashboard = () => {
    const user = useSelector(state=> state.auth.user)
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(signOut())
    }
    return (
        <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        p={4}
        >
        <Heading>Welcome!</Heading>
        {user && <Button
        backgroundColor={"red.400"}
        onClick={handleLogout}
        >Logout</Button>}
        <NoteForm />
        <NotesList />
        </Flex>
    )
}