import React, { useReducer, useEffect } from "react";
import axios from "axios";

export default function AddArtist({userId, addArtist}) {

  const InitState = {
    name: "",
    genre: "",
    members: [""],
    email: "",
    bio: "",
    links: [""],
    profile_img: "",
    created_by: ""
  };

  const reducer = (state, newState) => {
    return { ...state, ...newState };
  };

  const [State, setState] = useReducer(reducer, InitState);

  useEffect(() => {
    if (userId) setState({ created_by: userId})
  }, [userId])

  const handleInputChange = event => {
    let { value, name } = event;
    if (name.includes("members")) {
      let newMembers = [...State.members];
      const idx = parseInt(name.charAt(name.length - 1));
      newMembers[idx] = value;
      setState({ members: newMembers });
    } else if (name.includes("links")) {
      let newLinks = [...State.links];
      const idx = parseInt(name.charAt(name.length - 1));
      newLinks[idx] = value;
      setState({ links: newLinks });
    } else {
      setState({ [name]: value });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("/api/artist", State)
      .then(response => addArtist(response.data))
      .catch(err => console.log(err))
  };

  const addMember = () => {
    const newMembers = [...State.members]
    newMembers.push("")
    setState({ members: newMembers})
  }

  const addLink = () => {
    const newLinks = [...State.links]
    newLinks.push("")
    setState({ links: newLinks})
  }


  return (
    <div id="add-new-artist">
      <form onSubmit={e => handleSubmit(e)} className="loginForm">
        <h3>Add Artist</h3>
        <div className="formGroup">
          <label>Name:</label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={e => handleInputChange(e.target)}
            value={State.name}
          />
        </div>

        <div className="formGroup">
          <label>Genre:</label>
          <input
            type="text"
            placeholder="Genre"
            name="genre"
            onChange={e => handleInputChange(e.target)}
            value={State.genre}
          />
        </div>

        <div className="formGroup">
          <label>Member(s):</label>
          {State.members.map((mem, idx) => (
            <input
            key={`members${idx}`}
            type="text"
            placeholder="Add a Member"
            name={`members-${idx}`}
            onChange={e => handleInputChange(e.target)}
            value={mem}
          />))}
          <div className="addMore" onClick={() => addMember()}><i className="fas fa-user-plus"></i> Add Member</div>
        </div>

        <div className="formGroup">
          <label>Artist Email:</label>
          <input
            type="email"
            placeholder="johndoe@ie.com"
            name="email"
            onChange={e => handleInputChange(e.target)}
            value={State.email}
          />
        </div>

        <div className="formGroup">
          <label>Bio:</label>
          <textarea name="bio" onChange={e => handleInputChange(e.target)} />
        </div>

        <div className="formGroup">
          <label>Profile Image:</label>
          <input
            type="text"
            placeholder="Profile Image URL"
            name="profile_img"
            onChange={e => handleInputChange(e.target)}
            value={State.profile_img}
          />
        </div>

        <div className="formGroup">
          <label>Link(s):</label>
          {State.links.map((link, idx) => (
            <input
            key={`links${idx}`}
            type="text"
            placeholder="URL"
            name={`links-${idx}`}
            onChange={e => handleInputChange(e.target)}
            value={link}
          />
          ))}
          <div className="addMore" onClick={() => addLink()}><i className="fas fa-plus-square"></i> Add Link</div>
        </div>
        <div className="formAction">
          <button className="btn-submit" type="submit">
            Add Artist
          </button>
        </div>
      </form>
    </div>
  );
}