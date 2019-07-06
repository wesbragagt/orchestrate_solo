import React, { useContext, useReducer, useEffect } from "react";
import BandList from "../BandList/BandList";
import "../../Styles/Bands.scss";
import { Page } from "../Containers";
import Modal from "../Modal/Modal";
import AddArtist from "../AddArtist/AddArtist";
import useAPI from "../../Utils/useAPI";
import axios from "axios";

import { AppContext } from "../../App";

function Bands({ dashboard }) {
  const { userId } = useContext(AppContext);

  const InitState = {
    modalOpen: false,
    bands: []
  };

  const reducer = (state, newState) => {
    return { ...state, ...newState };
  };

  const [State, setState] = useReducer(reducer, InitState);

  const getBands = useAPI("get", `/api/artist?created_by=${userId}`);

  useEffect(() => {
    if (getBands) setState({ bands: getBands });
  }, [getBands]);

  const toggleModal = () => {
    setState({ modalOpen: !State.modalOpen });
  };

  const addArtist = band => {
    const newBands = [...State.bands, band];
    setState({ bands: newBands, modalOpen: false });
  };

  const deleteBand = id => {
    axios
      .delete(`/api/artist/${id}`)
      .then(res => {
        const UpdatedBands = State.bands.filter(band => band._id !== id);
        setState({ bands: UpdatedBands });
      })
      .catch(err => console.log("error!"));
  };

  return (
    <Page>
      {!dashboard && (
        <div className="pageHeader">
          <h1>Artists</h1>
          <button className="addItem" onClick={() => toggleModal()}>
            <i className="fas fa-plus" /> Add an artist
          </button>
        </div>
      )}
      <BandList bands={State.bands} deleteBand={deleteBand} dashboard={dashboard} />
      {State.modalOpen && (
        <Modal closeModal={toggleModal} returnLink="artists">
          <AddArtist userId={userId} addArtist={addArtist} />
        </Modal>
      )}
    </Page>
  );
}

export default Bands;
