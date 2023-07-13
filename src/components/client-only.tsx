"use client";

import React, { useState, useEffect } from "react";

export function ClientOnly({ children }: React.PropsWithChildren) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return children;
}
