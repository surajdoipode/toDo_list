import { Container } from "@mui/material";

const Task = () => {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{ border: "solid 2px black", bgcolor: "#81f0d4" }}
      >
        <input type="text"/>
      </Container>
    </>
  );
};
export default Task;
