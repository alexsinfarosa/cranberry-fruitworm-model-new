import React, { Component } from "react";
import { inject, observer } from "mobx-react";

// material-ui
import withRoot from "../withRoot";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

// date
import { format, isSameDay, differenceInDays } from "date-fns/esm";

// styles
const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 6,
    marginBottom: theme.spacing.unit * 6
  },
  table: {
    // minWidth: 700,
  },
  isMobile: {
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  },
  tableCell: {
    padding: "0 10px",
    textAlign: "center",
    borderRight: "1px solid #E0E0E0"
    // "@media (min-width: 576px)": {
    //   fontSize: "0.6rem",
    //   color: "red"
    // }
  }
});

class PhenologyTable extends Component {
  render() {
    const { classes } = this.props;
    const { isLoading, dateOfInterest } = this.props.appStore.paramsStore;

    const { dataForTable, missingDays } = this.props.appStore.currentModel;

    return (
      <div className={classes.root}>
        <Typography
          variant="subheading"
          gutterBottom
          style={{ letterSpacing: 1 }}
        >
          PHENOLOGY DEGREE DAY RANGES
        </Typography>
        <Paper>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableCell}>
                  INSECT EVENT
                </TableCell>
                <TableCell className={classes.tableCell}>
                  RANGE (From March 1)
                </TableCell>
                <TableCell className={classes.tableCell}>
                  MEAN (From March 1)
                </TableCell>
                <TableCell className={classes.tableCell}>FROM BIOFIX</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell className={classes.tableCell}>
                  Moths emerge
                </TableCell>
                <TableCell className={classes.tableCell}>350-395</TableCell>
                <TableCell className={classes.tableCell}>375</TableCell>
                <TableCell className={classes.tableCell}>0</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className={classes.tableCell}>
                  Egg laying begins
                </TableCell>
                <TableCell className={classes.tableCell}>435-480</TableCell>
                <TableCell className={classes.tableCell}>460</TableCell>
                <TableCell className={classes.tableCell}>85</TableCell>
              </TableRow>

              <TableRow>
                <TableCell className={classes.tableCell}>
                  Egg laying ends
                </TableCell>
                <TableCell className={classes.tableCell}>835-880</TableCell>
                <TableCell className={classes.tableCell}>860</TableCell>
                <TableCell className={classes.tableCell}>485</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default withRoot(
  withStyles(styles)(inject("appStore")(observer(PhenologyTable)))
);
