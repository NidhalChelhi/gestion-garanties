import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import React from "react";
import SearchForm from "@/components/Header/SearchForm";
import ButtonDefault from "@/components/Buttons/ButtonDefault";
import { PlusCircle } from "lucide-react";
import DataTable from "./_components/DataTable";
import { getAllTiersPersonnePhysique } from "@/lib/TiersPersonnePhysique.action";
import { TiersPersonnePhysique } from "@/types/TiersPersonnePhysique";

export const metadata: Metadata = {
  title: "Gestion des Garanties | Personne Physique",
  description: "This is Next.js Home page for NextAdmin Dashboard Kit",
};

export default async function Home() {
  let data: TiersPersonnePhysique[] | undefined;

  try {
    // Fetch data from the API
    data = await getAllTiersPersonnePhysique();
  } catch (error) {
    console.error("Error fetching TiersPersonnePhysique data:", error);
  }

  const breadcrumbItems = [
    { name: "Tableau de Bord", link: "/" },
    { name: "Tiers Personne Physique" },
  ];
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />

      <div className="flex flex-col gap-10">
        <div className="space-y-8 rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
          <div className="flex flex-row items-center justify-between">
            <SearchForm />
            <ButtonDefault
              label="Ajouter une Personne"
              link="/tiers-personne-physique/ajouter"
              customClasses="bg-primary rounded-xl text-white py-[11px] px-6"
            >
              <PlusCircle />
            </ButtonDefault>
          </div>

          {/* Handle loading, error, or empty state */}
          {data ? (
            data.length > 0 ? (
              <DataTable data={data} />
            ) : (
              <p className="text-center text-gray-500">
                Aucune donnée trouvée.
              </p>
            )
          ) : (
            <p className="text-center text-red-500">
              Erreur lors du chargement des données.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
