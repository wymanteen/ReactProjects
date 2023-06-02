import React, { useRef } from 'react';
import './Book.css'; 
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';


export default function Book({id, title, author, date, uri, desc}){     

    return (
            <Card sx={{ maxWidth: 345 }} key={id}>
                <CardHeader
                    action={
                        <IconButton aria-label="settings">
                        <MoreVertIcon />
                        </IconButton>
                    }
                    title={`${title} - ${author}`}
                    subheader={date}
                    />
                    <CardMedia
                    component="img"
                    height="194"
                    image={uri}
                    alt={title}
                    />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {desc}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                </CardActions>
            </Card>
      )

}

