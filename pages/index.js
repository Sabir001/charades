import Head from "next/head";
import React, { useState, useEffect } from "react";

import styles from "../styles/Home.module.css";

let kids = [
  "Running/jogging",
  "Playing baseball",
  "Playing basketball",
  "Playing tennis",
  "Throwing a football",
  "Throwing a frisbee",
  "Playing golf",
  "Swimming",
  "Skateboarding",
  "Riding a bike",
  "Riding a scooter",
  "Jumping rope",
  "Banana",
  "Orange",
  "Ice cream",
  "Lollipop",
  "Bubblegum",
  "Spaghetti",
  "Sandwich",
  "French fries",
  "Hot dog",
  "Taco",
  "Milk and cookies",
  "Chips and dip",
];

let adults = [
  "Applying makeup",
  "Getting dressed/undressed",
  "Applying lotion",
  "Washing hair",
  "Buckling a belt",
  "Buttoning a shirt",
  "Feeding a baby a bottle",
  "Feeding a baby food",
  "Burping a baby",
  "Pushing a baby in a stroller",
  "Changing a diaper",
  "Cutting food with a knife",
  "Opening a can",
  "Putting dishes in the dishwasher",
  "Washing dishes in the sink",
  "Doing laundry",
  "Mopping floors",
  "Sweeping floors",
  "Vacuuming floors",
  "Dusting furniture",
  "Fluffing pillows",
  "Making a bed",
  "Cooking pancakes",
  "Icing a cake",
  "Driving a car",
  "Listening to music",
  "Singing",
  "Typing",
  "Writing",
  "Shopping for groceries",
  "Checking the mail",
  "Opening a letter",
  "Coughing",
  "Sneezing",
  "Scratching",
  "Mowing the lawn",
  "Raking leaves",
  "Picking flowers",
  "Shoveling snow",
  "Watering plants",
  "Smoking a cigarette",
  "Lighting candles",
  "Blowing out candles",
  "Sharpening a pencil",
  "Spray painting",
  "Painting with a brush",
  "Watching television",
  "Going to the movies",
  "Going on a picnic",
  "Opening a present",
  "Going to church/praying",
  "Going to the gym",
  "Going to school",
  "Going to the hospital/doctor",
];

export default function Home() {
  const [currentWord, setCurrentWord] = useState("");

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const calculate = () => {
    if (adults.length === 0) {
      setCurrentWord("Game Over");
      return;
    }
    const rand = getRandomInt(0, adults.length);
    setCurrentWord(adults[rand]);
    console.log(adults[rand], rand);
    adults = adults.filter((_, index) => index !== rand);
  };

  const handleNext = (e) => {
    e.preventDefault();
    calculate();
  };

  useEffect(() => {
    calculate();
  }, []);

  useEffect(() => {
    console.log(currentWord);
  }, [currentWord]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Carades by Sabir</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Charades</h1>

        <p className={styles.description}>Play as a team</p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Current Word &rarr;</h3>
          </div>

          <div className={styles.card}>
            <h3>{currentWord}</h3>
          </div>
          <div className={styles.card} onClick={handleNext}>
            <button>Next</button>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>Copyright @ Sabir</footer>
    </div>
  );
}
