import React, { useState } from "react";

function App() {
  return (
    <div className={"app"}>
      <h1>Skjema!</h1>

      <p>Send inn skjemaet for å melde deg på arrangementet</p>

      <form
        action={"http://localhost:3000/submit-form"}
        method={"post"}
        className={"form"}
      >
        <fieldset className={"form--fieldset"}>
          <legend>Informasjon</legend>

          <div className={"form--input-group"}>
            <label>Navn</label>
            <input type={"text"} name={"name"} placeholder={"Anne Nordmann"} />
          </div>

          <div className={"form--input-group"}>
            <label>E-post</label>
            <input
              type={"email"}
              name={"email"}
              placeholder={"navn@domene.no"}
            />
          </div>

          <div className={"form--input-group"}>
            <label>Telefon</label>
            <input type={"tel"} name={"phone"} placeholder={"XXX XX XXX"} />
          </div>

          <div className={"form--input-group"}>
            <label>Postnummer</label>
            <input
              type={"number"}
              name={"areacode"}
              max={"9999"}
              placeholder={"1234"}
            />
          </div>

          <div className={"form--input-group"}>
            <label>Kommentar</label>
            <textarea name={"comment"} />
          </div>

          <button type={"submit"}>Send inn!</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
