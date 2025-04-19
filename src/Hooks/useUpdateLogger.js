import { useEffect, useState } from "react";

export default function useUpdateLogger(prop) {
  const [value, setValue] = useState(prop);

  useEffect(() => {
    console.log(value);
  }, [value]);

  return [value, setValue];
}
