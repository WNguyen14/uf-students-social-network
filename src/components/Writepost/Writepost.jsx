import React, { useEffect, useState } from "react";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import SendIcon from "@mui/icons-material/Send";
import ImageIcon from "@mui/icons-material/Image";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import "./Writepost.css";
import { db, auth } from "../../firebase";
import {
  collection,
  addDoc,
  setDoc,
  onSnapshot,
} from "firebase/compat/firestore";
import { doc, getDoc } from "firebase/firestore";
import Post from "../Post/Post";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import FlipMove from "react-flip-move";
import { getAuth, signOut } from "firebase/auth";
import { Firestore } from "firebase/firestore";
import { EmojiPeopleTwoTone } from "@mui/icons-material";

function Writepost() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  const [userName, setUserName] = useState("");
  const [userMajor, setUserMajor] = useState("");
  const Posts = firebase.firestore().collection("posts");
  const Profile = firebase.firestore().collection("Profiles");

  const sendPost = () => {
    Posts.add({
      userName: userName,
      Major: userMajor,
      message: input,
      postTime: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput(""); //clear input form after send
  };

  async function fetchProfile() {
    const docRef = doc(db, "Profiles", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    var name = data.firstName + " " + data.lastName;
    setUserName(name);
    setUserMajor(data.majors);
  }

  useEffect(() => {
    fetchProfile();

    Posts.orderBy("postTime", "desc").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((document) => ({
          id: document.id,
          data: document.data(),
        }))
      )
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendPost();
  };

  return (
    <div>
      <div className="writepost">
        <div className="inputContent">
          <div className="input">
            <AddCircleRoundedIcon style={{ color: "white" }} />

            <form className="inputForm" onSubmit={handleSubmit}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="share your thoughts!"
                id="inputform"
              />

              <SendIcon onClick={sendPost} className="inputicon" />
            </form>
          </div>
          <div className="bottom_bar">
            <ImageIcon className="inputicon" />
            <OndemandVideoIcon className="inputicon" />
            <AttachFileIcon className="inputicon" />
            <EmojiEmotionsIcon className="inputicon" />
          </div>
        </div>
      </div>
      <div className="post">
        <FlipMove>
          {posts.map(({ id, data: { userName, Major, message } }) => (
            <Post username={userName} major={Major} message={message} />
          ))}
        </FlipMove>
      </div>
    </div>
  );
}

export default Writepost;
