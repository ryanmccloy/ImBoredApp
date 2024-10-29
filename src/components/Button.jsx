function Button({ children, onClick, type = "button", bg }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-${bg} rounded p-2 border border-white hover:scale-105  transition-all duration-300 `}
    >
      {children}
    </button>
  );
}

export default Button;
