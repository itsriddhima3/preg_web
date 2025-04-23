import { useState } from "react";
import { VscArrowUp } from "react-icons/vsc";

export default function ChatInput() {
  const [message, setMessage] = useState("");

  return (
    <div className="w-full p-2  bg-transparent  rounded-full bg-white shadow-xl">
      <div className="flex items-end rounded-full  px-3 py-2 bg-white">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow resize-none border-none bg-transparent focus:outline-none p-2 text-base message-input"
         />
        <button
          onClick={() => {
           setMessage();
          }}
          className="ml-2 bg-black text-white px-4 py-4 rounded-full hover:bg-gray-800 transition"
        ><VscArrowUp />
        </button>
      </div>
    </div>
  );
}

