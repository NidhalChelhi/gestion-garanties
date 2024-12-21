import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableThree from "@/components/Tables/TableThree";
import { Metadata } from "next";

import React from "react";

export const metadata: Metadata = {
  title: "Gestion des Garanties | Personne Physique",
  description: "This is Next.js Home page for NextAdmin Dashboard Kit",
};

export default function Home() {
  return (
    <>
      <Breadcrumb pageName="Personne Physique" />

      <div className="fex flex-col gap-10">
        <TableThree />
      </div>
    </>
  );
}
