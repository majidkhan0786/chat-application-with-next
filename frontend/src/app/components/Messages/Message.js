const Message = ({ content, type, own, user }) => {
  return (
    <p className={`message px-1 md:px-6 py-1 flex ${own && "justify-end"}`}>
      {!own && (
        <span
          className={`logo text-2xl bg-purple-700 text-white rounded-full py-2 text-center px-4 mr-2 flex items-center ${
            type === "text" ? "my-auto" : "max-h-12"
          }`}
        >
          {user.name.charAt(0).toUpperCase()}
        </span>
      )}
      <span
        className={`text-xl md:text-1xl py-2 rounded-2xl 
            ${type === "text" ? "px-6" : "px-2"}
            ${own ? "bg-purple-400 text-white" : " bg-purple-500"}
            `}
      >
        {type === "text" ? (
          content
        ) : (
          <img src={content} className="rounded-md" alt="image" />
        )}
      </span>
    </p>
  );
};

export default Message;
