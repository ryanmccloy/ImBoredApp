function Button({ children, onClick, type = "button", bg, name }) {
  return (
    <button
      type={type}
      name={name}
      onClick={onClick}
      className={`bg-${bg} rounded p-2 border border-white hover:scale-105  transition-all duration-300 `}
    >
      {children}
    </button>
  );
}

export default Button;
