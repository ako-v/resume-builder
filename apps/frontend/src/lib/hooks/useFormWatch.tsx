import { useEffect } from "react";
import { FieldValues, UseFormWatch, WatchObserver } from "react-hook-form";

const useFormWatch = <T extends FieldValues>(watch: UseFormWatch<T>, callback: WatchObserver<T>) => {
  useEffect(() => {
    const { unsubscribe } = watch(callback);

    return () => unsubscribe();
  }, [watch, callback]);
};

export default useFormWatch;
