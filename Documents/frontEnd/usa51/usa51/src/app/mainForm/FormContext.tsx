"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface FormData {
  carType: string[];
  fuelType: string[];
  year: string[];
  price: string[];
  gift: string[];
  name: string;
  number: string;
}

interface FormContextType {
  formData: FormData;
  setFormData: (data: Partial<FormData>) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormDataState] = useState<FormData>({
    carType: [""],
    fuelType: [""],
    year: [""],
    price: [""],
    gift: [""],
    name: "",
    number: "",
  });

  const setFormData = (data: Partial<FormData>) => {
    const updatedFormData = { ...formData, ...data };
    localStorage.setItem("formData", JSON.stringify(updatedFormData));
    setFormDataState(updatedFormData);
  };
  useEffect(() => {
    const savedFormData = localStorage.getItem("formData");
    if (savedFormData) {
      setFormDataState(JSON.parse(savedFormData));
    }
  }, []);

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormData = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormData must be used within a FormProvider");
  }
  return context;
};
