import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import RestartIcon from "@mui/icons-material/Replay";
import PlayIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import Stack from "@mui/material/Stack";

const GameActions = () => {
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" endIcon={<PlayIcon />}>
          Play
        </Button>
        <TextField label="Enter Canton" variant="outlined" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" endIcon={<RestartIcon />}>
          Restart
        </Button>
        <Button variant="contained" endIcon={<PauseIcon />}>
          Pause
        </Button>
      </Stack>
    </div>
  );
};

export default GameActions;
