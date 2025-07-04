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

  // Scrambled/fake data that appears initially
  const scrambledData = {
    phone: "555-000-1234",
    "phone-secondary": "555-000-5678",
    email: "nospam@example.org",
  };

  const [displayText, setDisplayText] = useState(scrambledData[type]);

  useEffect(() => {
    // Replace with real data after a very short delay
    const timer = setTimeout(() => {
      setDisplayText(realData[type]);
    }, 100);

    return () => clearTimeout(timer);
  }, [type, realData]);

  return <span className={className}>{displayText}</span>;
};

export default ProtectedContact;
