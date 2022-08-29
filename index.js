import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const users = [];
const tweets = [];

app.post('/sign-up', (req, res) => {
  const user = req.body;
  users.push(user);
  res.send("OK");
});

app.post('/tweets', (req, res) => {
  const tweet = req.body;
  tweets.push(tweet);
  res.send("OK");
});

app.get('/tweets', (req, res) => {
  const obj = tweets.map((e) => {
     return {
      ...e,
      avatar: users.find((el) => el.username === e.username).avatar
    }
  });
  res.send(obj.slice(-10).reverse());
}); 

app.listen(5000);
