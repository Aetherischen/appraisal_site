interface ProtectedContactProps {
  type: "phone" | "phone-secondary" | "email";
  className?: string;
}

const ProtectedContact = ({ type, className = "" }: ProtectedContactProps) => {
  // Real data - testing direct render first
  const realData = {
    phone: "(201) 815-1000",
    "phone-secondary": "(973) 591-9990",
    email: "al@csrappraisals.com",
  };

  return <span className={className}>{realData[type]}</span>;
};

export default ProtectedContact;
