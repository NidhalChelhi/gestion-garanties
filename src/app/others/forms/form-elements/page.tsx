import React from "react";
import FormElements from "@/components/FormElements";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Form Elements Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Form Elements page for NextAdmin Dashboard Kit",
};

const FormElementsPage = () => {
  return (
    <>
      <FormElements />
    </>
  );
};

export default FormElementsPage;
