import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import DateRangeIcon from "@mui/icons-material/DateRange";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LanguageIcon from "@mui/icons-material/Language";
import { format } from "date-fns";

export default function ImgMediaCard({ userEvent }) {
  const { image, title, description, date, location, link } = userEvent;
  return (
    <Card sx={{ minWidth: 345, margin: 1 }}>
      <CardMedia component="img" alt={title} height="140" image={image} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Grid container spacing={2} className="pt-5 text-sm">
          <Grid item md={1}>
            <DateRangeIcon fontSize="small"/>
          </Grid>
          <Grid item md={11}>
            {format(new Date(date), "EEE dd MMMM yyyy")} |{" "}
            {format(new Date(date), "h:mm a")}
          </Grid>
          <Grid item md={1}>
            <LocationOnIcon fontSize="small"/>
          </Grid>
          <Grid item md={11}>
            {location || ""}
          </Grid>
          <Grid item md={1}>
            <LanguageIcon fontSize="small"/>
          </Grid>
          <Grid item md={11}>
            {link}
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
