import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Redirect({ to }: { to: string }) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
}

export default Redirect;
