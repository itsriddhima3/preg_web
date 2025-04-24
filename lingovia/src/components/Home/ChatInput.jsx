import { useState } from "react";
import axios from "axios";
import { VscArrowUp } from "react-icons/vsc";

export default function ChatInput() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSend = async () => {
    if (!message.trim()) return; 
    try {
      const res = await axios.post("http://localhost:3001/api/grok", {
        message,
      });
      setResponse(res.data.reply || "No response received.");
      setMessage(""); 
    } catch (err) {
      console.error(err);
      setResponse("Something went wrong. Please try again.");
    }
  };


  return (
    <div className="flex flex-col justify-center items-center w-full h-165 bg-[#a094a6] ">
      <div className="w-300 max-w-500 bg-[#a094a6] p-4 overflow-auto  h-[400px] max-h-[500px] hide-scrollbar h-50 max-h-60 transition-all duration-300 ease-in-out  ">
        {response ? (
          <p className="text-black whitespace-pre-wrap">{response}</p>
        ) : (
          <p className="text-black text-center ">Your response will appear here...</p>
        )}
      </div>
      <div className=" rounded-full relative top-20 px-3 py-2 bg-white w-100   ">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className=" flex-grow resize-none border-none bg-transparent focus:outline-none p-2 text-base message-input  "
         />
        <button
          onClick={handleSend}
          className="ml-32 bg-black text-white px-4 py-4 rounded-full hover:bg-gray-800 transition"
        ><VscArrowUp />
        </button>
      </div>
    </div>
  );
}

