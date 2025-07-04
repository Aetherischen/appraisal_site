import { useEffect, useRef } from "react";

interface ProtectedContactProps {
  type: "phone" | "phone-secondary" | "email";
  className?: string;
}

const ProtectedContact = ({ type, className = "" }: ProtectedContactProps) => {
  const spanRef = useRef<HTMLSpanElement>(null);

  // Real data that will replace fake data after page loads
  const realData = {
    phone: "(201) 815-1000",
    "phone-secondary": "(973) 591-9990",
    email: "al@csrappraisals.com",
  };

  // Scrambled/fake data that appears in initial DOM to confuse scrapers
  const scrambledData = {
    phone: "555-000-1234",
    "phone-secondary": "555-000-5678",
    email: "nospam@example.org",
  };

  useEffect(() => {
    // Replace fake content with real content after component mounts
    if (spanRef.current) {
      spanRef.current.textContent = realData[type];
    }
  }, [type, realData]);

  return (
    <span ref={spanRef} className={className}>
      {scrambledData[type]}
    </span>
  );
};

export default ProtectedContact;
