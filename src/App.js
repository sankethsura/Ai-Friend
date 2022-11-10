import "./App.css";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TimeComplexity from "./components/TimeComplexity";
import Translate from "./components/Translate";
import EssayWriting from "./components/EssayWriting";
import Grammer from "./components/Grammer";
import ConvertToLang from "./components/ConvertToLang";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

function App() {
  let [user, setUser] = useState("");
  let [email,setEmail] = useState("")
  let [output, setOutput] = useState("");
  let [prompt1, setPrompt] = useState("");
  let [out2, setOut2] = useState("");
  let [model, setModel] = useState("text-davinci-002");

  // API CALL STARTED
  const { Configuration, OpenAIApi } = require("openai");

  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  useEffect(() => {
    if (prompt1) setOutput("Running...");
    // console.log(prompt1)
    if (prompt1)
    (async () => {
      const response = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: `${prompt1}`,
        max_tokens: 512,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      });
      // console.log(prompt1)
      // console.log("function running", response.data.choices[0].text);
      setOutput(response.data.choices[0].text);
      setOut2(response.data.choices[0].text);
      // setTimeout(() => {
      // },1000)
      console.log(output, "output");
    })();
  }, [prompt1]);
  // API CALL ENDED
  useEffect(() => {
    formFunc();
  }, [out2]);

  //firebase setup
  const formFunc = async () => {
    var currentdate = new Date();
    var datetime =
      "Last Sync: " +
      currentdate.getDay() +
      "/" +
      currentdate.getMonth() +
      "/" +
      currentdate.getFullYear() +
      " @ " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds();
    if (prompt1 && out2) {
      try {
        const docRef = await addDoc(collection(db, "users"), {
          input: prompt1,
          output: out2,
          date: currentdate + " ",
          user: user,
          email:email
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };
  //firebase setup -end



  return (
    <div className="App">
      {/* <div className="w-full h-10 p-10 bg-slate-400">{output && output}</div> */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                output={output}
                setOutput={setOutput}
                prompt1={prompt1}
                setPrompt={setPrompt}
                setModel={setModel}
                user={user} setUser={setUser}
                email={email} setEmail={setEmail}
              />
            }
          />
          <Route
            path="/TimeComplexity"
            element={
              <TimeComplexity
                output={output}
                setOutput={setOutput}
                prompt1={prompt1}
                setPrompt={setPrompt}
                setModel={setModel}
              />
            }
          />
          <Route
            path="/Translate"
            element={
              <Translate
                output={output}
                setOutput={setOutput}
                prompt1={prompt1}
                setPrompt={setPrompt}
                setModel={setModel}
              />
            }
          />
          <Route
            path="/EssayWriting"
            element={
              <EssayWriting
                output={output}
                setOutput={setOutput}
                prompt1={prompt1}
                setPrompt={setPrompt}
                setModel={setModel}
              />
            }
          />
          <Route
            path="/Grammer"
            element={
              <Grammer
                output={output}
                setOutput={setOutput}
                prompt1={prompt1}
                setPrompt={setPrompt}
                setModel={setModel}
              />
            }
          />
          <Route
            path="/ConvertToLang"
            element={
              <ConvertToLang
                output={output}
                setOutput={setOutput}
                prompt1={prompt1}
                setPrompt={setPrompt}
                setModel={setModel}
              />
            }
          />
          {/* <Route
            path="/ChatBot"
            element={
              <ChatBot
                output={output}
                setOutput={setOutput}
                prompt1={prompt1}
                setPrompt={setPrompt}
                setModel={setModel}
                value={value}
                setValue={setValue}
              />
            }
          /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
