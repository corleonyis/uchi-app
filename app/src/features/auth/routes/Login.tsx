import { Flex, Title, Button, Center, Stack, Paper } from "@mantine/core";
import { FcGoogle } from "react-icons/fc";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuthContext, login } from "../components/Auth";

export const Login: React.FC = () => {
  const { currentUser } = useAuthContext();
  const navigate = useNavigate();

  return currentUser ? (
    <Navigate to={"/lists/buy"} />
  ) : (
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
          <Button
            variant="default"
            onClick={() => {
              login(navigate);
            }}
          >
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
