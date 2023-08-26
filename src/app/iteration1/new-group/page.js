"use client";

import { Fragment, lazy, useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  ThemeProvider,
} from "@mui/material";
import LightTheme from "../theme";
import InputText from "@/app/Component/InputText";
import { toBase64 } from "@/helper/Image";
import { useRouter } from "next/navigation";
import axios from "axios";
const Footer = lazy(() => import("../../Component/Footer"));
const Navigation = lazy(() => import("../../Component/Navigation"));

export default function NewGroup() {
  const [newGroup, setNewGroup] = useState({});
  const [image, setImage] = useState(null);
  const inputRef = useRef(null);
  const router = useRouter();

  const onValueChanged = (event) => {
    const { name, value } = event.target;
    setNewGroup({ ...newGroup, [name]: value });
  };

  const handlePhotoUpload = async (event) => {
    let file = event.target.files[0];
    if (file) {
      const { name } = file;
      const base64 = await toBase64(file);
      setImage({ name, base64 });
    }
  };

  const saveGroup = async () => {
    await axios.post("/api/save-group", {
      image,
      newGroup,
    });

    router.push("/iteration1/groups");
  };

  useEffect(() => {
    const localUser = localStorage.getItem("localUser");
    if (!localUser) {
      router.push("/iteration1/login");
    }
  }, []);

  return (
    <ThemeProvider theme={LightTheme}>
      <Fragment>
        <Navigation />
        <Box display="flex" justifyContent="center" alignContent="center">
          <div className="container max-w-screen-md pt-36 ">
            <Card>
              <CardHeader title="Create group" />
              <CardContent>
                <FormControl fullWidth>
                  <InputText
                    label="Name"
                    placeholder="Group Name"
                    name="name"
                    onChange={(e) => onValueChanged(e)}
                    value={newGroup.name || ""}
                    maxWidth="100%"
                  />
                </FormControl>
                <FormControl fullWidth>
                  <InputText
                    rows={10}
                    label="Description"
                    placeholder="Group Description"
                    name="description"
                    onChange={(e) => onValueChanged(e)}
                    value={newGroup.description || ""}
                    maxWidth="100%"
                  />
                </FormControl>
                <FormControl fullWidth>
                  <InputText
                    label="URL"
                    placeholder="Group Website"
                    name="url"
                    onChange={(e) => onValueChanged(e)}
                    value={newGroup.url || ""}
                    maxWidth="100%"
                  />
                </FormControl>
                <FormControl fullWidth>
                  {image && (
                    <img
                      src={image.base64}
                      alt={image.name}
                      className="w-32 pb-4"
                    />
                  )}
                  <input
                    name="photo"
                    style={{ display: "none" }}
                    ref={inputRef}
                    type="file"
                    id="label-photo-upload"
                    multiple={false}
                    accept="image/*, capture=camera"
                    onChange={(e) => handlePhotoUpload(e)}
                  />

                  <label
                    name="photo"
                    htmlFor="label-photo-upload"
                    className="w-full"
                  >
                    <div className="flex w-full cursor-pointer">
                      <Box
                        sx={{
                          border: "1px solid #e5e7eb",
                          padding: "4px 15px 4px 15px",
                          borderRadius: "4px",
                        }}
                      >
                        <div className="font-semibold text-black">
                          {image ? "Replace Photo" : "Upload Photo"}
                        </div>
                      </Box>
                    </div>
                  </label>
                  <span className="text-gray-600 font-thin text-sm">
                    Recommended Size: 1,000 x 400px
                  </span>
                </FormControl>
                <br />
                <br />
                <br />
              </CardContent>
              <CardActions sx={{ paddingLeft: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ textTransform: "none" }}
                  onClick={() => saveGroup()}
                >
                  Submit
                </Button>
              </CardActions>
            </Card>
          </div>
        </Box>
        <Footer />
      </Fragment>
    </ThemeProvider>
  );
}
