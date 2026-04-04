import { useState } from "react";






export function EasterTask({ url, text, task, ans, id }) {
    const [Input, setInput] = useState("");
    const [nextQuestion, setNextQuestion] = useState(false);

    const validateInput = () => {
        if (Input.trim() == "") {
            alert("Antwort eingeben")
            return
        }
        if (Input.toLowerCase().trim() == ans.toLowerCase()) {
            alert("Richtige Antwort")
            setNextQuestion(true)
            return
        } else {
            setInput("")
            alert("Falsche Antwort")
            return
        }


    }

    const next = () => {
        if (nextQuestion) {
            Navigate(window.location.hostname + { url } + "/" + { id })
        } else {
            alert("Du musst die antwort erst richtig eingeben")
        }
    }


    return (
        <div className="task">
            <p className="taskText">{text}</p>
            <p className="taskTask">{task}</p>
            <input className="taskInput" type="text" autoFocus placeholder="Antwort eingeben" value={Input} onChange={(e) => setInput(e.target.value)}></input>
            <button className="taskSubmitAnswer" onClick={validateInput}>Submit answer</button>
            <button className="nextTaskbutton" onClick={next}>Next Task</button>
        </div>
    )




}