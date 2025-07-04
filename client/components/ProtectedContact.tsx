interface ProtectedContactProps {
  type: "phone" | "phone-secondary" | "email";
  className?: string;
}

const ProtectedContact = ({ type, className = "" }: ProtectedContactProps) => {
  // Real data stored in data attributes for CSS
  const realData = {
    phone: "(201) 815-1000",
    "phone-secondary": "(973) 591-9990",
    email: "al@csrappraisals.com",
  };

  // Scrambled/fake data that appears in DOM to confuse scrapers
  const scrambledData = {
    phone: "555-000-1234",
    "phone-secondary": "555-000-5678",
    email: "nospam@example.org",
  };

  return (
    <span
      className={`protected-${type} ${className}`}
      data-real={realData[type]}
    >
      {scrambledData[type]}
    </span>
  );
};

export default ProtectedContact;
