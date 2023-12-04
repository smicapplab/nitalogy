"use client";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Button, ButtonGroup } from "@mui/material";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Saira_Extra_Condensed } from "next/font/google";

const saira = Saira_Extra_Condensed({ subsets: ["latin"], weight: "600" });

export default function GroupCard({
  group,
  doJoin = () => {},
  doLeave = () => {},
  isMyGroup = false,
  showJoin = true,
  elevation = 1,
}) {
  const [localUser, setLocalUser] = useState(null);
  const router = useRouter();
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  useEffect(() => {
    const localUser = localStorage.getItem("localUser");
    setLocalUser(JSON.parse(localUser));
  }, []);

  return (
    <Card
      elevation={elevation}
      variant={elevation === 0 ? "outlined" : "elevation"}
    >
      <CardMedia
        component="img"
        sx={{ height: 140 }}
        image={group.image}
        alt={group.name}
      />
      <CardContent>
        <div className={`${saira.className} text-3xl truncate w-full pb-5`}>{group.name}</div>
        <div className="text-sm">
          <p>
            <strong>Members: </strong>
            {group.members.length}
          </p>
          <p>
            <strong>Date Created: </strong>
            {format(new Date(group.sk), "MMM dd, yyyy")}
          </p>
        </div>
      </CardContent>
      <CardActions disableSpacing>
        <ButtonGroup
          fullWidth
          variant={elevation === 0 ? "outlined" : "elevation"}
          aria-label="outlined primary button group"
        >
          <Button
            variant={elevation === 0 ? "outlined" : "elevation"}
            color="primary"
            sx={{ textTransform: "none" }}
            onClick={() => router.push(`/iteration3/group?title=${group.gsi2}`)}
          >
            View More
          </Button>
          {showJoin && (
            <>
              {localUser && localUser.email !== group.gsi1 && (
                <Button
                  variant={elevation === 0 ? "outlined" : "elevation"}
                  color="primary"
                  sx={{ textTransform: "none" }}
                  onClick={
                    isMyGroup ? () => doLeave(group) : () => doJoin(group)
                  }
                >
                  {isMyGroup ? "Leave" : "Join"}
                </Button>
              )}
            </>
          )}
          <Button
            variant={elevation === 0 ? "outlined" : "elevation"}
            color="primary"
            sx={{ textTransform: "none" }}
            onClick={() => openInNewTab(group.url)}
          >
            View Website
          </Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
}
