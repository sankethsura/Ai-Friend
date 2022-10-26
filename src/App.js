import "./App.css";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TimeComplexity from "./components/TimeComplexity";
import Translate from "./components/Translate";
import EssayWriting from "./components/EssayWriting";
import Grammer from "./components/Grammer";
import ConvertToLang from "./components/ConvertToLang";
import ChatBot from "./components/ChatBot";
function App() {
  let [output, setOutput] = useState("");
  let [prompt1, setPrompt] = useState("");
  let [value, setValue] = useState(
    "What have you been up to?\n Watching old movies.\n "
  );
  let [model, setModel] = useState("text-davinci-002");
  // API CALL STARTED
  const { Configuration, OpenAIApi } = require("openai");

  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  useEffect(() => {
    if (prompt1) setOutput("Running...");

    if (prompt1)
      (async () => {
        const response = await openai.createCompletion({
          model: `${model}`,
          prompt: `${prompt1}`,
          temperature: 0.3,
          max_tokens: 512,
          top_p: 1.0,
          frequency_penalty: 0.0,
          presence_penalty: 0.0,
        });
        // console.log(prompt1)
        // console.log("function running", response.data.choices[0].text);
        setOutput(response.data.choices[0].text);
        let a = prompt1 + "\n" + output
        console.log("a",a)
        setValue(prompt1 + "\n" + response.data.choices[0].text)
        console.log("v",value)
      })();
  }, [prompt1]);
  // API CALL ENDED

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
          <Route
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
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
