import React, { useReducer } from "react";

export default function Form({ handleSubmit }) {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: "",
      genre: "",
      band_member1: "",
      band_member2: "",
      band_member3: "",
      band_member4: "",
      band_member5: "",
      email: "",
      bio: "",
      profile_img: "",
      facebook_link: "",
      instagram_link: "",
      website_link: "",
      streaming_link: ""
    }
  );

  const handleInputChange = event => {
    const { value, name } = event;
    setUserInput({ [name]: value });
  };
  return (
    <div id="artist_form">
      <form onSubmit={handleSubmit} className="artist-form">
        <h1>Add Artist</h1>
        <div className="artist-form-group">
          <label>Name:</label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={e => handleInputChange(e.target)}
            value={userInput.name}
          />
        </div>

        <div className="artist-form-group">
          <label>Genre(s):</label>
          <input
            type="text"
            placeholder="Genre"
            name="genre"
            onChange={e => handleInputChange(e.target)}
            value={userInput.genre}
          />
        </div>

        <div className="artist-form-group">
          <label>Band Members (if applicable):</label>
          <br />
          <input
            type="text"
            placeholder="Add a Member"
            name="band_member1"
            onChange={e => handleInputChange(e.target)}
            value={userInput.band_member1}
          />
          <br />
          <input
            type="text"
            placeholder="Add a Member"
            name="band_member2"
            onChange={e => handleInputChange(e.target)}
            value={userInput.band_member2}
          />
          <br />
          <input
            type="text"
            placeholder="Add a Member"
            name="band_member3"
            onChange={e => handleInputChange(e.target)}
            value={userInput.band_member3}
          />
          <br />
          <input
            type="text"
            placeholder="Add a Member"
            name="band_member4"
            onChange={e => handleInputChange(e.target)}
            value={userInput.band_member4}
          />
          <br />
          <input
            type="text"
            placeholder="Add a Member"
            name="band_member5"
            onChange={e => handleInputChange(e.target)}
            value={userInput.band_member5}
          />
          <br />
        </div>

        <div className="artist-form-group">
          <label>Email(s):</label>
          <input
            type="email"
            placeholder="johndoe@ie.com"
            name="email"
            onChange={e => handleInputChange(e.target)}
            value={userInput.email}
          />
        </div>

        <div className="artist-form-group">
          <label>Bio:</label>
          <input
            type="text"
            placeholder="Bio"
            name="bio"
            onChange={e => handleInputChange(e.target)}
            value={userInput.bio}
          />
        </div>

        <div className="artist-form-group">
          <label>Profile_img:</label>
          <input
            type="text"
            placeholder="url_profile_img"
            name="profile_img"
            onChange={e => handleInputChange(e.target)}
            value={userInput.photos}
          />
        </div>
        <div className="artist-form-group">
          <label>Facebook:</label>
          <input
            type="text"
            placeholder="url_profile_img"
            name="facebook_link"
            onChange={e => handleInputChange(e.target)}
            value={userInput.facebook_link}
          />
        </div>
        <div className="artist-form-group">
          <label>Instagram:</label>
          <input
            type="text"
            placeholder="url_profile_img"
            name="instagram_link"
            onChange={e => handleInputChange(e.target)}
            value={userInput.instagram_link}
          />
        </div>
        <div className="artist-form-group">
          <label>Website:</label>
          <input
            type="text"
            placeholder="url_profile_img"
            name="website_link"
            onChange={e => handleInputChange(e.target)}
            value={userInput.website_link}
          />
        </div>
        <div className="artist-form-group">
          <label>Streaming:</label>
          <input
            type="text"
            placeholder="spotify link"
            name="streaming_link"
            onChange={e => handleInputChange(e.target)}
            value={userInput.streaming_link}
          />
        </div>
        <div className="artist-form-action">
          <button className="btn-submit" type="submit">
            Add Artist
          </button>
        </div>
      </form>
    </div>
  );
}
