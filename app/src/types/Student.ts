export type Subject = "MATH" | "ENGLISH" | "FRENCH" | "CODING";
export type Status = "ACTIVE" | "NOTACTIVE" | "PENDING";
export type Teacher = "Chinurum" | "Joy";

export type Student = {
  name: string;
  grade: number;
  age: number;
  subjects: Subject[];
  traffic: string;
  teacher: Teacher;
  price: number;
  occurrence: number;
  status: Status;
  dateStarted: string;
};
