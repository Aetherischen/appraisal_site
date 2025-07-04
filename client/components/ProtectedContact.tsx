import { useState, useEffect } from "react";

interface ProtectedContactProps {
  type: "phone" | "phone-secondary" | "email";
  className?: string;
}

const ProtectedContact = ({ type, className = "" }: ProtectedContactProps) => {
  // Real data
  const realData = {
    phone: "(201) 815-1000",
    "phone-secondary": "(973) 591-9990",
    email: "al@csrappraisals.com",
  };

  // Scrambled/fake data for scrapers
  const scrambledData = {
    phone: "555-000-1234",
    "phone-secondary": "555-000-5678",
    email: "nospam@example.org",
  };

  const [showReal, setShowReal] = useState(false);

  useEffect(() => {
    // Show real data after component mounts (for human users)
    setShowReal(true);
  }, []);

  return (
    <span className={className}>
      {showReal ? realData[type] : scrambledData[type]}
    </span>
  );
};

export default ProtectedContact;
