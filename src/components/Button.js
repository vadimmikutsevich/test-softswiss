const Button = ({ className, variant = "default", children, onClick }) => {
  return (
    <button className={`btn btn--${variant} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
