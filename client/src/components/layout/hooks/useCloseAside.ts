import { useRef, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";

import asideToggleAtom from "@recoil/asideToggle";
import useOnClickOutside from "@hooks/useOnClickOutside";

const useCloseAside = () => {
  const router = useRouter();

  const asideRef = useRef(null);
  const exceptRef = useRef(null);

  const [isShowAside, setIsShowAside] = useRecoilState(asideToggleAtom);

  const handleHideAside = useCallback(() => {
    setIsShowAside(false);
  }, []);

  useOnClickOutside(asideRef, handleHideAside, exceptRef);

  useEffect(() => {
    setIsShowAside(false);
  }, [router.pathname]);

  return { asideRef, isShowAside, exceptRef };
};

export default useCloseAside;
