const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
      {
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
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));