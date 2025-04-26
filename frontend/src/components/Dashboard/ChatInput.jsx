import { useState } from "react";
import axios from "axios";
import { VscArrowUp } from "react-icons/vsc";

export default function ChatInput() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSend = async () => {
    if (!message.trim()) return; 

    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (!isLoggedIn) {
      setResponse("⚠️ You must be logged in to ask questions.");
      setMessage("");
      setTimeout(() => {
        navigate('/login'); 
      }, 2000);
      return;
    }
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
    <div className="flex flex-col justify-center items-center w-full h-165 bg-black ">
      <div className="w-370 max-w-500 bg-black p-4 overflow-auto h-[400px] max-h-[700px] hide-scrollbar transition-all duration-300 ease-in-out">
        {response ? (
          <p className="text-white text-xl bg-black whitespace-pre-wrap pl-6 pt-6 pr-6 pb-6">  {response} </p>
        ) : (
          <p className="text-white text-xl bg-black text-shadow-lg text-shadow-gray-600  text-center ">Welcome....</p>
        )}
      </div>
      <div className=" rounded-full relative top-10 px-3 py-2 bg-white w-100   ">
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

