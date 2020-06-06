import React, { useEffect, useState } from "react";

const validateName = (name: string): string => {
  if (name.length <= 2) {
    return "Navnet er for kort";
  }

  return "";
};

function App() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  useEffect(() => {
    setNameError(validateName(name));
  }, [name]);

  return (
    <div className={"app"}>
      <h1>Skjema!</h1>

      <p>Send inn skjemaet for å melde deg på arrangementet</p>

      <form
        action={"http://localhost:3000/submit-form"}
        method={"post"}
        className={"form"}
        onSubmit={(event) => {
          event.preventDefault();

          // TODO Post the request
        }}
      >
        <fieldset className={"form--fieldset"}>
          <legend>Informasjon</legend>

          <div className={"form--input-group"}>
            <div className={"form--input-label"}>
              <label>Navn</label>
              <p className={"form--error-message"}>{nameError}</p>
            </div>

            <input
              type={"text"}
              name={"name"}
              placeholder={"Anne Nordmann"}
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
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

          <button type={"submit"} disabled={nameError !== ""}>
            Send inn!
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
