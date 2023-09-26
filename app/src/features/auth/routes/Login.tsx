import { Flex, Title, Button, Center, Stack, Paper } from "@mantine/core";
import { FcGoogle } from "react-icons/fc";
import { browserLocalPersistence, setPersistence, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
  const navigate = useNavigate()

  const signUp = () => {
    setPersistence(auth, browserLocalPersistence).then(() => {
      signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential?.accessToken;
        // The signed-in user info.
        console.log(auth.currentUser)
        navigate("/lists/buy")
      })
      .catch((error) => {
        console.log(error)
      })
    }).catch((error) => {
      console.log(error)
    })
  }
  return (
    <Flex gap={"md"} align="center" justify="center" wrap={"wrap"} p={"lg"}>
      <Paper
        withBorder
        radius={"lg"}
        shadow="md"
        p={"lg"}
        style={{ width: 350 }}
      >
        <Stack align="center" justify="center">
          <Title order={3}>ログイン</Title>
          <Button variant="default" onClick={signUp}>
            <Flex justify={Center} align={Center} gap={"md"}>
              <FcGoogle />
              Googleアカウントでログイン
            </Flex>
          </Button>
        </Stack>
      </Paper>
    </Flex>
  )
}
