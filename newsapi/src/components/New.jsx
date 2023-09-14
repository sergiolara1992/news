import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";

const New = ({ news }) => {
  const { urlToImage, url, title, description, source } = news;

  return (
    <Grid item md={6} lg={4}>
      <Card>
        {urlToImage && (
          <CardMedia
            component="img"
            alt={`Imagen de la noticia ${title}`}
            image={urlToImage}
            height={"250"}
          />
        )}
        <CardContent>
          <Typography variant="body1" color="error">
            {source.name}
          </Typography>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" >
            {description}
          </Typography>
        </CardContent>

        <CardActions>
          <Link
          href={url}
          target="_blank"
          variant="button"
          width={'100%'}
          textAlign={'center'}
          
          > Read More
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default New;
