import { useEffect, useRef } from "react";

interface ProtectedContactProps {
  type: "phone" | "phone-secondary" | "email";
  className?: string;
}

const ProtectedContact = ({ type, className = "" }: ProtectedContactProps) => {
  const spanRef = useRef<HTMLSpanElement>(null);

  // Base64 encoded real data to hide from scrapers
  const encodedData = {
    phone: "KDIwMSkgODE1LTEwMDA=", // (201) 815-1000
    "phone-secondary": "KDk3MykgNTkxLTk5OTA=", // (973) 591-9990
    email: "YWxAY3NyYXBwcmFpc2Fscy5jb20=", // al@csrappraisals.com
  };

  // Scrambled/fake data that appears in initial DOM
  const scrambledData = {
    phone: "555-000-1234",
    "phone-secondary": "555-000-5678",
    email: "nospam@example.org",
  };

  useEffect(() => {
    // Decode and replace content after mount
    if (spanRef.current && encodedData[type]) {
      try {
        const decoded = atob(encodedData[type]);
        spanRef.current.textContent = decoded;
      } catch (e) {
        console.error("Failed to decode contact info");
      }
    }
  }, [type]);

  return (
    <span ref={spanRef} className={className}>
      {scrambledData[type]}
    </span>
  );
};

export default ProtectedContact;
