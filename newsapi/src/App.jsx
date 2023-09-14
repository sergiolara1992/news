import { Container, Grid, Typography } from "@mui/material";
import Formulario from "./components/Formulario";
import { NewsProvider } from "./context/NewsProvider";
import NewList from "./components/NewList";



function App() {
  return (
    <NewsProvider>
      <Container>
        <header>
          <Typography align="center" marginY={5} component="h1" variant="h3">
            News
          </Typography>
        </header>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} md={6} lg={4}>
            <Formulario />
          </Grid>
        </Grid>

        <NewList />
      </Container>
    </NewsProvider>
  );
}

export default App;
