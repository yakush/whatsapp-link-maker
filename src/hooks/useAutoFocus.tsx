import React, { useEffect, useRef } from "react";

export default function useAutoFocus(
  ref?: React.MutableRefObject<HTMLElement | undefined>
): React.MutableRefObject<any> {
  const refCreated = useRef(null);
  const refActual =
    ref || (refCreated as React.MutableRefObject<HTMLElement | null>);

  useEffect(() => {
    if (refActual?.current) {
      console.log("focus");
      
      refActual?.current?.focus();
    }
  }, [refActual]);

  return refActual!;
}
