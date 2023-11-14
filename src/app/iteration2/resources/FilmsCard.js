import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import { Saira_Extra_Condensed } from "next/font/google";

const saira = Saira_Extra_Condensed({ subsets: ["latin"], weight: "600" });

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function FilmsCard({ film }) {
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  const likeFilm = () => {
    if (liked) {
      localStorage.removeItem(`film${film.title}`);
    } else {
      localStorage.setItem(`film${film.title}`, `film${film.title}`);
    }
    setLiked(!liked);
  };

  useEffect(() => {
    const isLiked = localStorage.getItem(`film${film.title}`);
    if (isLiked) {
      setLiked(true);
    }
  }, []);

  return (
    <Card>
      <CardMedia
        component="img"
        height="194"
        image={film.image}
        alt={film.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {film.summary}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <div>
          <div className={`${saira.className} text-2xl`}>{film.title}</div>
          <div>{film.sub}</div>
        </div>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className="bg-black text-white">
          <Typography paragraph>
            <div dangerouslySetInnerHTML={{ __html: film.description }} />
          </Typography>
        </CardContent>
        <div className="flex row justify-between p-2 bg-gray-300 w-full">
          <div className="flex row">
            {film.imdb && (
              <img
                src="/images/imdb.png"
                alt="imdb"
                className="w-10 h-10 cursor-pointer"
                onClick={() => openInNewTab(film.imdb)}
              />
            )}
            <IconButton
              className="place-self-end"
              onClick={() => openInNewTab(film.trailer)}
            >
              <SlideshowIcon />
            </IconButton>
          </div>
          <IconButton onClick={() => likeFilm()}>
            <FavoriteIcon sx={{ color: liked ? "red" : "grey" }} />
          </IconButton>
        </div>
      </Collapse>
    </Card>
  );
}
