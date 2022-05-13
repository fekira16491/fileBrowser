import React, { useEffect } from "react";
import { useFilePicker } from "use-file-picker";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Item from "@mui/material/ListItem";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TextField, Switch, FormControlLabel } from "@mui/material";
import { postComments } from "./Redux/action/commentAction";
import { postVideos } from "./Redux/action/videoAction";

/**
*  To browse file and play videos component
*/
const FileBrowser = () => {
  const [
    openFileSelector,
    { filesContent},
  ] = useFilePicker({
    multiple: true,
    readAs: "DataURL",
    accept: ["mp4"],
    limitFilesConfig: { min: 1, max: 6 },
  });

  const dispatch = useDispatch();
  const user = useSelector((state) => state?.login.user);
  const [comment, addComment] = useState("");
  const [isCommentOn, setIsCommentOn] = useState(true);
  let { commentsList } = useSelector((state) => state?.comment);
  let { videoList } = useSelector((state) => state?.video);
  const [videoPlayerSource, setVideoPlayerSource] = useState("");

  useEffect(() => {
    if (filesContent.length > 0) {
      for (const element of filesContent) {
        dispatch(postVideos(element));
      }
    }
  }, [dispatch, filesContent]);

  const openFileSelectorFunc = async () => {
    await openFileSelector();
  };

  const onHandleChange = (event) => {
    addComment(event.target.value);
  };

  const onHandleSwitchChange = (event) => {
    setIsCommentOn(!isCommentOn);
  };

  const submitComment = () => {
    dispatch(postComments(comment));
    addComment("");
  };

  return (
    <div>
      <div>
        <Box textAlign="center" style={{ marginTop: "10px" }}>
          <Box>
            <Button
              variant="outlined"
              style={{ color: "blue" }}
              onClick={async () => openFileSelectorFunc()}
            >
              Browse Videos
            </Button>

            <label style={{ marginleft: "20px" }}>
              {" "}
              Hello!!
              {user.firstName} Guten Tag
            </label>
          </Box>

          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {!!videoList.length &&
              Array.from(Array(videoList.length)).map((_, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <Item>
                    <CardActionArea>
                      <Button
                        variant="outlined"
                        style={{ color: "blue" }}
                        onClick={() =>
                          setVideoPlayerSource(videoList[index].content)
                        }
                      >
                        {videoList[index].name}
                      </Button>
                    </CardActionArea>
                  </Item>
                </Grid>
              ))}
          </Grid>
          <Grid item xs={2} sm={4} md={4} style={{ marginTop: "60px" }}>
            <CardMedia
              component="video"
              src={videoPlayerSource}
              controls
              alt="CardMedia Image Example"
              height="200"
              width="30%"
              title="CardMedia Image Example"
            />
            <Box columns={{ xs: 1, sm: 1, md: 1 }}>
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Toggle Comments Here"
                onChange={onHandleSwitchChange}
                value={isCommentOn}
              />
            </Box>
            {isCommentOn ? (
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 390,
                  bgcolor: "background.paper",
                }}
              >
                <TextField
                  id="standard-basic"
                  value={comment}
                  label="Enter comments here"
                  variant="standard"
                  onChange={(event) => onHandleChange(event)}
                ></TextField>
                <Button onClick={submitComment} style={{ marginTop: "5px" }}>
                  Submit
                </Button>

                <List>
                  {!!commentsList.length &&
                    Array.from(Array(commentsList.length)).map((_, index) => (
                      <>
                        <Item disablePadding key={index}>
                          <ListItemButton>
                            <ListItemIcon></ListItemIcon>
                            <ListItemText primary={commentsList[index]} />
                          </ListItemButton>
                        </Item>
                      </>
                    ))}
                </List>
              </Box>
            ) : (
              []
            )}
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default FileBrowser;
