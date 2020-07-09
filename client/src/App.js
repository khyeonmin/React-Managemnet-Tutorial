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
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth : 1080
  },
  progress:{
    margint: theme.spacing(2)
  } 
});

class App extends Component{

  state = {
    customers: "",
    completed: 0
  }

   /*
  [React Life Cycle]
  1. constructor()
  2. componentWillMount()
  3. render()
  4. componentDidMount()

  if props or stats is changed
  Load shouldComponentUpdate() n Update render()
  */

  // Execution, when all components is mounted
  componentDidMount(){
    this.timer = setInterval(this.progress, 20);
    this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err));
  }

  callApi = async() => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  // Progress Bar
  progress = () =>{
    const{completed} = this.state;
    this.setState({completed : completed >= 100 ? 0 : completed + 1})
  }

  render()
  {
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

          {/* SET DATA */}
          <TableBody>
          { 
            this.state.customers ? this.state.customers.map(c => { 
            return(<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>);
            }) : 
            // Progress Bar
            <TableRow>
              <TableCell colspan="6" align="center"></TableCell>
                <CircularProgress className = {classes.progress} variant="determinate" value={this.state.completed}></CircularProgress>
            </TableRow>
          }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
