import React, { useContext } from "react";
import Form from "./Form";
import { AppContext } from "../../App";
import axios from "axios";

function NewArtist() {
  const { userId } = useContext(AppContext);

  const handleSubmit = event => {
    event.preventDefault();
    const {
      name,
      genre,
      band_member1,
      band_member2,
      band_member3,
      band_member4,
      band_member5,
      email,
      bio,
      profile_img,
      facebook_link,
      instagram_link,
      website_link,
      streaming_link
    } = event.target;

    const newArtist = {
      name: name.value,
      members: [
        band_member1.value,
        band_member2.value,
        band_member3.value,
        band_member4.value,
        band_member5.value
      ],
      genres: genre.value,
      bio: bio.value,
      email: email.value,
      links: [
        facebook_link.value,
        instagram_link.value,
        website_link.value,
        streaming_link.value,
        profile_img.value
      ],

      created_by: userId
    };

    axios
      .post("/api/artist", newArtist)
      .then(response => (window.location = "/bands"));
  };

  return (
    <div className="artist-list">
      {/* adding new artist */}
      <Form handleSubmit={e => handleSubmit(e)} />
      {/* Reading from state */}
    </div>
  );
}

export default NewArtist;
