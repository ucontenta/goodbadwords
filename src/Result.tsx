import { truncate } from "fs";
import { Link } from "react-router-dom";
import { StringMappingType, textChangeRangeIsUnchanged } from "typescript";

interface ResultProps {
    word: string | undefined
}
type Word = {
  text: string;
  isOkay: boolean;
  explanation?: string;
  suggestion?: string;
}
export default function Result(props: ResultProps) {
  const storedWords: Word[] = [
    {text: 'retarded', isOkay: false, suggestion: "idiot", explanation: 'is not ok'},
    {text: 'pussy', isOkay: false, suggestion: "idiot", explanation: 'is not ok'},
    {text: 'bonehead', isOkay: true},
  ]
  const checkedWord = storedWords.find((word) => word.text === props.word)

  const renderResult = () => {
    if(checkedWord == undefined) {
      return(<p> sorry, not found</p>);
    } else if (checkedWord.isOkay) {
        return(<p>is Okay</p>);
    } else {
      return(<p>is not okay, because {checkedWord.explanation}
      Maybe use {checkedWord.suggestion} instead</p>);
    }
  
  }

  
  return (
    <>
      <h1> Results for {props.word}</h1>
      {renderResult()}
      <Link to="/">Back</Link>
    </>


  );
}