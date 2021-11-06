import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './Home.css';

interface HomeProps {
  checkWord: (word: string) => void
}

export default function Home(props: HomeProps) {
  let [enteredWord, setEnteredWord] =  useState<string>("")
  let navigate = useNavigate();
  const navigateToResults = ()  => {
    props.checkWord(enteredWord);
    navigate("/result");
  }

  function updateEnteredWord(event: React.ChangeEvent<HTMLInputElement>): void {
    setEnteredWord(event.target.value);
  }
  return (
    <>
      <section>
        <h1>What is good bad words?</h1>

        <p>Swearing is normal and can even be benefitial for your health.
            Many of us might have common swear words in our daily language but we should stop to ask ourselves - Is this still okay?
            Good bad words is meant to be able to tell you if your favorite swear words could be inappropriate, and even better, to suggest you a better one to express your feelings 😉.
        </p>

        <h2>Do I really need this?</h2>

        <p>Maybe not but hey, what's wrong with checking if your favorite swear word could be hurt- or disrespectful to any group of people?</p>
        <h2>Enter your swear word here: </h2>
      </section>
      <section className="flex-column">
        
        <TextField 
        onChange= {updateEnteredWord}
        value={enteredWord}
        variant="outlined" 
        label="Is this ok?"
        ></TextField>
        <Button variant="contained" onClick={navigateToResults}>Check</Button>
      </section>
    </>
  )
}