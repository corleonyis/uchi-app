import { Flex, Title, Button, Center, Stack, Paper } from "@mantine/core";
import { FcGoogle } from "react-icons/fc";
// import { useAuth } from "../components/Auth";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../components/Auth";

export const Login: React.FC = () => {
  // const login = useAuth().login;
  const { login } = useAuthContext()
  const navigate = useNavigate()
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
          <Button variant="default" onClick={ () => {login(navigate)}}>
            <Flex justify={Center} align={Center} gap={"md"}>
              <FcGoogle />
              Googleアカウントでログイン
            </Flex>
          </Button>
        </Stack>
      </Paper>
    </Flex>
  );
};
