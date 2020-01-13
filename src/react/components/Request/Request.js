import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class Request extends React.Component {
  

  render() {
    const useStyles = makeStyles({
      card: {
        minwidth:275,
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
    });
    
    return (
      <Card >
        <CardContent>
          <Typography variant="h5" component="h2">
            Grounds keepers infromation
        </Typography>
          <Typography color="textSecondary">
            Price information / time
        </Typography>
          <Typography variant="body2" component="p">
           Grounds keepers information
          </Typography>
        </CardContent>
        <CardActions>
         <div>x bids</div> <Button size="small">View Bid</Button>
        </CardActions>
      </Card>
    );
  }
}

export default Request