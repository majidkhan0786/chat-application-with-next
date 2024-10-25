const EnterName = ({ user, socket, input, setInput }) => {
  const addUser = () => {
    user.current = { name: input, id: socket.id };
    socket.emit("new_user", { user: input });
    setInput("");
  };

  return (
    <div className="w-full h-full flex flex=col items-center justify-center">
      <div className="text-center grid grid-rows-3 gap-2 gradient p-8 rounded-md">
        <h2 className="text-2xl text-black">Enter your name to join to chat</h2>
        <input
          type="text"
          className="text-1xl border text-center rounded-md p-3 my-2 text-black-400 placeholder-black-300 focus:outline-none"
          placeholder="Write your name here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addUser()}
        />
        <button
          className={`text-1xl w-full text-white font-bold py-3 px-3 rounded-md ${
            input ? "bg-blue-500" : "bg-slate-400"
          }`}
          disabled={!input}
          onClick={addUser}
        >
          Join Chat
        </button>
      </div>
    </div>
  );
};

export default EnterName;
