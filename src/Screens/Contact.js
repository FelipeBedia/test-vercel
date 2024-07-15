import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <div name="Contact" className={styles.contact}>
      <h2>Datos de envio</h2>
      <form className={styles.form} method="POST" action="https://getform.io/f/awngqozb" >
        <label for="Name">Name</label>
        <input id="Name" name="Name" className={styles.input}></input>
        <label for="Email">Email</label>
        <input id="Email"name="Email"type="Email"className={styles.input}></input>
        <label for="Message">Adress</label>
        <textarea id="Message" className={styles.textArea}></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

