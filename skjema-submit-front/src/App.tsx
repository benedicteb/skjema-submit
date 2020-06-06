import React, { useEffect, useState } from "react";
import submitForm from "./services/submitForm";
import validateEmail from "./validators/validateEmail";
import validateName from "./validators/validateName";
import validatePhone from "./validators/validatePhone";

function App() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [postalCode, setPostalCode] = useState("");

  const [comment, setComment] = useState("");

  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    setNameError(validateName(name));
  }, [name]);

  useEffect(() => {
    setEmailError(validateEmail(email));
  }, [email]);

  useEffect(() => {
    setPhoneError(validatePhone(phone));
  }, [phone]);

  return (
    <div className={"app"}>
      <h1>Skjema!</h1>

      <p>Send inn skjemaet for å melde deg på arrangementet</p>

      <form
        action={"http://localhost:3000/submit-form"}
        method={"post"}
        className={"form"}
        onSubmit={async (event) => {
          event.preventDefault();

          try {
            await submitForm(name, email, phone, postalCode, comment);
          } catch (error) {
            setSubmitError("Klarte ikke å sende inn skjema... Ta kontakt!");
          }
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
            <div className={"form--input-label"}>
              <label>E-post</label>
              <p className={"form--error-message"}>{emailError}</p>
            </div>

            <input
              type={"email"}
              name={"email"}
              value={email}
              placeholder={"navn@domene.no"}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>

          <div className={"form--input-group"}>
            <div className={"form--input-label"}>
              <label>Telefon</label>
              <p className={"form--error-message"}>{phoneError}</p>
            </div>

            <input
              type={"tel"}
              name={"phone"}
              placeholder={"XXX XX XXX"}
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
              }}
            />
          </div>

          <div className={"form--input-group"}>
            <label>Postnummer</label>
            <input
              type={"number"}
              name={"areacode"}
              max={"9999"}
              placeholder={"1234"}
              value={postalCode}
              onChange={(event) => {
                setPostalCode(event.target.value);
              }}
            />
          </div>

          <div className={"form--input-group"}>
            <label>Kommentar</label>
            <textarea
              name={"comment"}
              value={comment}
              onChange={(event) => {
                setComment(event.target.value);
              }}
            />
          </div>

          <button
            type={"submit"}
            disabled={
              nameError !== "" || phoneError !== "" || emailError !== ""
            }
          >
            Send inn!
          </button>

          <p className={"form--submit-error"}>{submitError}</p>
        </fieldset>
        @
      </form>
    </div>
  );
}

export default App;
