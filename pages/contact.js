import React from "react";
import styles from "../styles/Components/Contact.module.css";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [restaurantName, setRestaurantName] = useState("");

  const handleChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    }
    if (e.target.name == "email") {
      setEmail(e.target.value);
    }
    if (e.target.name == "number") {
      setNumber(e.target.value);
    }
    if (e.target.name == "city") {
      setCity(e.target.value);
    }
    if (e.target.name == "restaurantName") {
      setRestaurantName(e.target.value);
    }
  };

  // console.log(name,email,number,city, restaurantName);
  return (
    <div className={styles.contactContainer}>
      <div className={styles.leftSection}>
        <img src="/contactImg.svg" alt="" />
      </div>
      <div className={styles.rightSection}>
        <h1>Take a Free Demo</h1>
        <form className={styles.formGroup} type="submit">
          <input
            onChange={handleChange}
            type="text"
            placeholder="Name"
            name="name"
            value={name}
          />
          <input
            onChange={handleChange}
            type="text"
            placeholder="Email"
            name="email"
            value={email}
          />
          <input
            onChange={handleChange}
            type="text"
            placeholder="Phone Number"
            name="number"
            value={number}
          />
          <input
            onChange={handleChange}
            type="text"
            placeholder="City"
            name="city"
            value={city}
          />
          <input
            onChange={handleChange}
            type="text"
            placeholder="Restaurant Name"
            name="restaurantName"
            value={restaurantName}
          />
          <div className={styles.btnHolder}>
            <button className={styles.submitBtn}>Take a Free Demo</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
