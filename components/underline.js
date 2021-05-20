export function Underline({ children, className = "", ...otherProps }) {
  const _className = `custom-underline ${className}`;
  return (
    <span {...otherProps} className={_className}>
      {children}
    </span>
  );
}
