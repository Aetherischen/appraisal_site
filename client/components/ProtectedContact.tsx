interface ProtectedContactProps {
  type: "phone" | "phone-secondary" | "email";
  className?: string;
}

const ProtectedContact = ({ type, className = "" }: ProtectedContactProps) => {
  // Scrambled/fake data that appears in DOM to confuse scrapers
  const scrambledData = {
    phone: "555-000-1234",
    "phone-secondary": "555-000-5678",
    email: "nospam@example.org",
  };

  return (
    <span className={`protected-${type} ${className}`}>
      {scrambledData[type]}
    </span>
  );
};

export default ProtectedContact;
