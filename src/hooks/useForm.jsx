import React from "react";
import { useState } from "react";

export const useForm = () => {
  const [name, setName] = useState();
  const [desc, setDesc] = useState();
  const [due_date, setDueDate] = useState();
  const [list_name, setListName] = useState();
}