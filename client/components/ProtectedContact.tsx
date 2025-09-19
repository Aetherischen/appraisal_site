import { useEffect, useRef } from "react";

interface ProtectedContactProps {
  type: "phone" | "phone-secondary" | "email";
  className?: string;
}

const ProtectedContact = ({ type, className = "" }: ProtectedContactProps) => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  // Real data for users
  const realData = {
    phone: "(201) 815-1000",
    "phone-secondary": "(973) 591-9990",
    email: "al@csrappraisals.com",
  } as const;

  // Scrambled data that appears in initial DOM to confuse scrapers
  const scrambledData = {
    phone: "555-000-1234",
    "phone-secondary": "555-000-5678",
    email: "nospam@example.org",
  } as const;

  // Build href values
  const makeHref = (t: ProtectedContactProps["type"], value: string) => {
    if (t === "email") return `mailto:${value}`;
    const digits = value.replace(/[^0-9]/g, "");
    return `tel:${digits}`;
  };

  useEffect(() => {
    if (linkRef.current) {
      const realValue = realData[type];
      linkRef.current.textContent = realValue;
      linkRef.current.href = makeHref(type, realValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  return (
    <a
      ref={linkRef}
      className={className}
      href={makeHref(type, scrambledData[type])}
      aria-label={type === "email" ? "Email us" : "Call us"}
      rel={type === "email" ? "nofollow" : undefined}
    >
      {scrambledData[type]}
    </a>
  );
};

export default ProtectedContact;
