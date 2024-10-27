function Button({ children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-primary rounded p-1 border border-white hover:scale-105  transition-all duration-300 "
    >
      {children}
    </button>
  );
}

export default Button;
