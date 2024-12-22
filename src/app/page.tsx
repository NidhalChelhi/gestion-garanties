import { Metadata } from "next";

import React from "react";

export const metadata: Metadata = {
  title: "Gestion des Garanties | Tableau de Bord",
  description: "This is Next.js Home page for NextAdmin Dashboard Kit",
};

export default async function Home() {
  return (
    <>
      <div className="fex flex-col gap-10">
        <h1>Tableau de Bord</h1>
      </div>
    </>
  );
}
