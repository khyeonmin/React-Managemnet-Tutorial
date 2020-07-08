import React, { Component } from 'react';
// import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth : 1080
  }
})

const customers = [{
  'id' : 'admin',
  'image' : 'https://placeimg.com/64/64/1',
  'name': 'Kang Hyeon Min',
  'birthday': '1994.08.08',
  'gender': 'Male',
  'job': 'M.S Candidate',
},
{
  'id' : 'ez1',
  'image' : 'https://placeimg.com/64/64/2',
  'name': 'Lee Jee Won',
  'birthday': '1994.12.13',
  'gender': 'Female',
  'job': 'Developer'
},
{
  'id' : 'operator',
  'image' : 'https://placeimg.com/64/64/3',
  'name': 'Lee Chae Won',
  'birthday': '1995.02.05',
  'gender': 'Female',
  'job': 'CEO'
}
];

class App extends Component{
  render(){
    const {classes} = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>IMAGE</TableCell>
              <TableCell>NAME</TableCell>
              <TableCell>BIRTHDAY</TableCell>
              <TableCell>GENDER</TableCell>
              <TableCell>JOB</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          { customers.map(c => { return(<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>); }) }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
