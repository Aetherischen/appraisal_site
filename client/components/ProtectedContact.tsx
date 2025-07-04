interface ProtectedContactProps {
  type: "phone" | "phone-secondary" | "email";
  className?: string;
}

const ProtectedContact = ({ type, className = "" }: ProtectedContactProps) => {
  return (
    <span className={`protected-${type} ${className}`}>
      {/* This text is hidden by CSS but provides fallback for screen readers */}
      {type === "phone" && "(201) 815-1000"}
      {type === "phone-secondary" && "(973) 591-9990"}
      {type === "email" && "al@csrappraisals.com"}
    </span>
  );
};

export default ProtectedContact;
