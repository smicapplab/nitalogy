import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

export default function GroupCard({ group }) {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <Card>
      <CardHeader title={group.name} />
      <CardMedia
        component="img"
        height="194"
        image={group.image}
        alt={group.name}
      />
      <CardContent>
        <div dangerouslySetInnerHTML={{ __html: group.description }} />
      </CardContent>
      <CardActions disableSpacing>
        <Button variant="contained" color="primary"
          sx={{ textTransform: "none" }}
          onClick={() => openInNewTab(group.link)}
        >
          Join
        </Button>
      </CardActions>
    </Card>
  );
}
