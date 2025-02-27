import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NotesDashboard } from './components/NotesDashBoard'
import { useDispatch, useSelector } from 'react-redux'
import { signIn } from './redux/actions'
import { Button, Text } from '@chakra-ui/react'

function App() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const handleGoogleSignIn = () => {
    dispatch(signIn())
  }
  return (
    <div>
      {user ? <NotesDashboard />
        : (
          <div
            style={{
              display: 'flex', flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center', padding: '20px', gap: '10px'
            }}
          >
            <Text>Login</Text>
            <Button
              backgroundColor={"blue.300"}
              onClick={handleGoogleSignIn}>Sign in with Google</Button>
          </div>
        )}
    </div>
  );
}

export default App
