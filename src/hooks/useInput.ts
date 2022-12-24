import { useCallback, useState } from "react";
import { RegistUser, UserModel } from "./../model/userModel";
const useInput = <T extends Partial<UserModel>>(
  initValue: T
): [
  RegistUser,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  () => void
] => {
  const [initState, setInitState] = useState(initValue);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.currentTarget;

      setInitState((prev) => ({ ...prev, [name]: value }));
    },
    [initState]
  );

  const reset = () => {
    setInitState(initState);
  };

  return [initState as RegistUser, onChange, reset];
};

export default useInput;
