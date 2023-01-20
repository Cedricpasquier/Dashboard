import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import calculateAge from "../services/AgeDefineService";

function AgeDefine() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");

  function estimateAge() {
    calculateAge(name).then((response) => {
        setAge(response['age']);
    })
  }

  function enterName(name){
    setName(name);
    if (name === ''){
        setAge(0);
    }
  }

  return (
    <div>
      <Card sx={{ maxWidth: 345 }} elevation={5}>
        <CardContent>
          <Typography sx={{mb: 3}} gutterBottom variant="h5" component="div">
            Estimate name's age
          </Typography>
          <TextField
            id="outlined-basic"
            label="name"
            variant="outlined"
            onChange={(e) => enterName(e.target.value)}
            sx={{mb: 1}}
          />
          <Typography justifyContent="center" display="flex" variant="h6" component="div">
            <b>{age !== 0 && name !== '' ? age : "" }</b>
          </Typography>
        </CardContent>
        <CardActions>
          <Button sx={{ml: 1}} size="small" variant="outlined" onClick={estimateAge}>
            Estimate
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default AgeDefine;
