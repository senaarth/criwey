import React from "react";

import { SectionContainer, ContentContainer } from "./styles";

interface SectionProps {
  children: React.ReactNode;
  id: string;
  variant?: string;
}

export function Section({ children, id, variant = "" }: SectionProps) {
  return (
    <SectionContainer id={id} className={`${variant}`}>
      <ContentContainer>{children}</ContentContainer>
    </SectionContainer>
  );
}
