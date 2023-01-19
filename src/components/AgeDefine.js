import { Button, Card, CardActions, CardContent, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import AgeService, { getAPIAge } from '../services/AgeDefineService';


function AgeDefine() {

    const [age, setAge] = useState('');
    const [name, setName] = useState('');

    function estimateAge() {
        setAge(AgeService.getAPIAge(name));
    };

    return (
        <div>
            <Card sx={{ maxWidth: 345}} elevation={5}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Estimate name's age {name === '' ? '' : 'of '+ name}
                    </Typography>
                    <TextField id="outlined-basic" label="name" variant="outlined" onChange={e => setName(e.target.value)}/>
                    <Typography variant = "h5" component="div">
                    {age === null? '' : age}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={estimateAge}>Estimate</Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default AgeDefine;