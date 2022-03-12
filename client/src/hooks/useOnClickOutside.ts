import { useEffect } from "react";

const useOnClickOutside = <T extends HTMLElement>(
  ref: React.RefObject<T>,
  handler: () => void,
  exceptRef?: React.RefObject<HTMLElement>
) => {
  useEffect(() => {
    const listener = (e: MouseEvent) => {
      const el = ref?.current;
      const exceptEl = exceptRef?.current;
      const isIncludeEl = !el || el.contains(e?.target as HTMLElement);
      const isIncludeExceptel =
        !exceptEl || exceptEl?.contains(e?.target as HTMLElement);

      if (isIncludeEl || isIncludeExceptel) {
        return;
      }

      handler();
    };
    window.addEventListener("click", listener);
    return () => {
      window.removeEventListener("click", listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
