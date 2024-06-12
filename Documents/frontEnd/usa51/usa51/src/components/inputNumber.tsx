import { useState } from "react";

export default function PhoneInput({
  handleFunc,
}: {
  handleFunc: (name: string, value: string) => void;
}) {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const validatePhoneNumber = (number: any) => {
    const regex = /^\d{9}$/;
    return regex.test(number);
  };

  const handleChange = (e: any) => {
    const { value, name } = e.target;
    if (value.length <= 9) {
      setPhone(value);
      handleFunc(name, "+380" + value);
    }
  };

  const handleBlur = () => {
    setIsTouched(true);
    if (!validatePhoneNumber(phone)) {
      setError("Номер телефону повинен складатися з 9 цифр після +380");
    } else {
      setError("");
    }
  };

  return (
    <div className="phone-input mt-3">
      <div
        className={`w-full bg-inherit text-white bg-none ${
          error ? "border-[#f22c3d]" : "border-[#c9c9c9]"
        } flex items-center border-[#c9c9c9] border-[1px] outline-none rounded-md h-[60px] px-5 text-base`}
      >
        <span>+380</span>
        <input
          className="w-full bg-inherit outline-none"
          type="text"
          id="phone"
          name="phone"
          value={phone}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="XXXXXXXXX"
        />
      </div>
      {isTouched && error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}
