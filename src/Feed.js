import React, { useState, useEffect } from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@mui/icons-material/Image";
import InputOption from "./InputOption";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import { db } from "./firebase";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import pink from '@mui/material/colors/pink';
import {
  collection,
  query,
  addDoc,
  onSnapshot,
  serverTimestamp,
  orderBy,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "./features/counter/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let postsArr = [];
      querySnapshot.forEach((post) => {
        postsArr.push({ id: post.id, data: post.data() });
      });
      setPosts(postsArr);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (input) {
      addDoc(collection(db, "posts"), {
        name: user.name,
        description: user.email,
        timestamp: serverTimestamp(),
        message: input,
      });
    }
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputCon">
        <div className="feed__input">
          
          <CreateIcon />
          <form onSubmit={submitHandler}>
            <textarea
              onChange={inputHandler}
              value={input}
              name="message"
              rows={4} // Set the number of rows to display
              placeholder="What's on your mind?"
            />
            <button type="submit"><ArrowCircleUpIcon sx={[{ color: pink[500] }, {fontSize:'large'}]} /></button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" />
          <InputOption Icon={SubscriptionsIcon} title="Video" />
          <InputOption Icon={EventNoteIcon} title="Event" />
          <InputOption Icon={CalendarViewDayIcon} title="Write Article" />
        </div>
      </div>

      {/* Posts */}
      <FlipMove>
        {posts.map(({ id, data }) => (
          <Post
            key={id}
            name={data.name}
            description={data.description}
            message={data.message}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
