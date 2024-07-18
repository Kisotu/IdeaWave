/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import Markdown from "react-markdown"

const OpenAi = () => {

  const [ideas, setIdeas] = useState([]);
  const [trends, setTrends] = useState([]);

  // init api
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash"
  })

  useEffect(() => {
    const storedTrends = localStorage.getItem('trends');
    if (storedTrends) {
      setTrends(JSON.parse(storedTrends));
    }

    const stored_mark = localStorage.getItem('data_mark');
    if (stored_mark) {
      setIdeas(JSON.parse(stored_mark))
    }
    
  }, []);
  

  const generateIdeas = async () => {

    const prompt = `Generate business ideas for mearchandise related to the following list items: ${trends.join(',')}`;
    try {
      const result = await model.generateContent(prompt);
      const response = result.response;
      const data = (response.candidates[0].content.parts[0].text)
      console.log(data)
      localStorage.setItem("data_mark", JSON.stringify(data));
      


      // setIdeas(response.response.candidates[0].content.parts[0]);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(ideas)
  return (
    <div className="response_box">
      <h4>Response</h4>
      <div className="response-content">
        Awating response...
        <ul>
          {/* {ideas.map((idea, index) => (
            <li key={index}>
              <Markdown>{idea}</Markdown>
            </li>
          ))} */}
        </ul>
      </div>
      <button type="submit" className="submit_btn" onClick={generateIdeas}>Generate</button>
    </div>
  );
};

export default OpenAi;