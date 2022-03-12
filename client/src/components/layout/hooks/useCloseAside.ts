import { useRef, useCallback } from "react";
import { useRecoilState } from "recoil";

import asideToggleAtom from "@recoil/asideToggle";
import useOnClickOutside from "@hooks/useOnClickOutside";

const useCloseAside = () => {
  const asideRef = useRef(null);
  const exceptRef = useRef(null);
  const [isShowAside, setIsShowAside] = useRecoilState(asideToggleAtom);

  const handleHideAside = useCallback(() => {
    setIsShowAside(false);
  }, []);
  useOnClickOutside(asideRef, handleHideAside, exceptRef);

  return { asideRef, isShowAside, exceptRef };
};

export default useCloseAside;
