import { Flex, Title, Button, Center, Stack, Paper } from "@mantine/core"
import { FcGoogle } from "react-icons/fc"
import { AuthContext } from "../components/Auth"
import { useContext } from "react"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth, provider } from "../../firebase/firebase"

export const SignUp:React.FC = () => {
  const {setUser} = useContext(AuthContext)

  const signUp = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential?.accessToken;
        // The signed-in user info.
        setUser(result.user)
        console.log(result.user)
      }).catch((error) => {
        console.log(error)
      })
  }
  return(
    <Flex
      gap={"md"}
      align="center" 
      justify="center"
      wrap={"wrap"}
      p={"lg"}
    >
      <Paper withBorder radius={"lg"} shadow="md" p={"lg"} style={{width: 350}}>
        <Stack align="center" justify="center">
          <Title order={3}>アカウントの登録</Title>
          <Button variant="default" onClick={signUp}>
            <Flex justify={Center} align={Center} gap={"md"}>
              <FcGoogle/>
              Googleアカウントで登録
            </Flex>
          </Button>
        </Stack>
      </Paper>
    </Flex>
  )
}