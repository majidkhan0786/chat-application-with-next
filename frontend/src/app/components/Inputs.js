"use client";
import { useState } from "react";
import Image from "next/image";
import { send } from "@/app/assets";

const Inputs = ({ user, socket, setChat }) => {
  const [input, setInput] = useState("");
  const sendMessage = () => {
    if (input) {
      const msg = { content: input, type: "text", user };
      socket.emit("send_message", msg);
      socket.emit("user_typing", { user: user.name, typing: false });
      setChat((prev) => [...prev, msg]);
      setInput("");
    }
  };

  const userTyping = (e) => {
    setInput(e.target.value);
    socket.emit("user_typing", {
      user: user.name,
      typing: e.target.value ? true : false,
    });
  };

  return (
    <div className="mt-5 w-full absolute bottom-0 text-xl grid grid-cols-5 gradient md:bg-none md:text-1xl md:flex md:justify-center md:relative">
      <input
        className="focus:outline-none rounded-2xl p-3 text-black-400 placeholder-slate-200 col-span-4 gradient border border-gray-300 md:w-6/12 md:mr-3"
        type="text"
        placeholder="Enter your message"
        value={input}
        onChange={(e) => userTyping(e)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
      />

      <button
        className={`w-full py-2 px-3 ${
          input ? "bg-purple-500" : "bg-slate-200"
        } text-white font-bold rounded-md text-xl shadow-md border-none md:w-1/12 md:text-2xl`}
        onClick={sendMessage}
        disabled={!input}
      >
        <Image
          src={send}
          className="w-6 md:w-12 mx-auto"
          alt="send"
          height={20}
          width={20}
        />
      </button>
    </div>
  );
};

export default Inputs;
