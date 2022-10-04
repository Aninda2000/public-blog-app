import { Box, TextField, Button, styled, Typography } from "@mui/material";

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/0.6);
`;

const Image = styled(`img`)({
  width: 100,
  margin: "auto",
  display: "flex",
  padding: "50px 0 0",
});

const Wrapper = styled(Box)`
  padding: 25px 35 px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: orange;
  height: 40px;
  border-radius: 3px;
  font-size: 18px;
`;

const SignUpButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: blue;
  height: 40px;
  font-size: 18px;
  border-radius: 3px;
  box-shadow: 0 10px 4px 0 rgb(0 0 0/10%);
`;

const Text = styled(Typography)`
  color: grey;
  font-size: 15px;
`;
const Login = () => {
  const imageURL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpontSlvp3M590TtkTRDwJsrtZX9m0ADSqug&usqp=CAU";
  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="login" />
        <Wrapper>
          <TextField variant="standard" label="Enter Username" />
          <TextField variant="standard" label="Enter Password" />
          <LoginButton variant="contained">Login</LoginButton>
          <Text style={{ textAlign: "center" }}> OR</Text>
          <SignUpButton>Create an Account</SignUpButton>
        </Wrapper>
      </Box>
    </Component>
  );
};

export default Login;