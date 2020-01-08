import React from "react";
// import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


function CustomerCard() {
  
    const classes = useStyles();
    return (
      <>

        <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.landonhomes.com/2017/wp-content/uploads/2019/12/612-Bentley-Elv-C-Stone-900x675-1.jpg" width="200"
          title="My Home"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            John Doe
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          123 North South Street Blvd. Indianapolis, IN 12345
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>


      </>
    );
  
}

export default CustomerCard;
