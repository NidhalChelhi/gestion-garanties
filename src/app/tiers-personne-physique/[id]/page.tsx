import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { getTiersPersonnePhysiqueById } from "@/lib/TiersPersonnePhysique.action";
import { Metadata } from "next";
import { GetServerSidePropsContext } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Gestion des Garanties | Personne Physique",
  description: "This is Next.js Home page for NextAdmin Dashboard Kit",
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let singlePersonne = null;
  try {
    singlePersonne = await getTiersPersonnePhysiqueById(parseInt(id));
  } catch (error) {
    console.error(`Error fetching Personne Physique with ID ${id}:`, error);
  }

  const breadcrumbItems = [
    { name: "Tableau de Bord", link: "/" },
    { name: "Tiers Personne Physique", link: "/tiers-personne-physique" },
    { name: `Personne Physique #${id}` },
  ];

  if (!singlePersonne) {
    return (
      <>
        <Breadcrumb items={breadcrumbItems} />
        <div className="flex flex-col items-center gap-10">
          <div className="rounded-[10px] border border-stroke bg-white p-4 text-center text-red-500 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
            <h2>Personne Physique introuvable</h2>
            <p>Aucune donnée trouvée pour l&apos;identifiant {id}</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-4 rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-8">
          {/* Information Générale */}
          <h3 className="text-xl font-bold text-gray-700 dark:text-white">
            Information Générale
          </h3>
          <div className="space-y-2">
            <p>
              <strong>Nom:</strong> {singlePersonne.Nom}
            </p>
            <p>
              <strong>Prénom:</strong> {singlePersonne.Prenom}
            </p>
            <p>
              <strong>Civilité:</strong>{" "}
              {singlePersonne.Civilite || "Non spécifié"}
            </p>
            <p>
              <strong>Date de Naissance:</strong>{" "}
              {singlePersonne.Date_Naissance || "Non spécifié"}
            </p>
            <p>
              <strong>Lieu de Naissance:</strong>{" "}
              {singlePersonne.Lieu_Naissance || "Non spécifié"}
            </p>
            <p>
              <strong>Nationalité:</strong>{" "}
              {singlePersonne.Nationalite || "Non spécifié"}
            </p>
            <p>
              <strong>Profession:</strong>{" "}
              {singlePersonne.Profession || "Non spécifié"}
            </p>
          </div>
        </div>
        <div className="space-y-4 rounded-[10px] border border-stroke bg-white p-6 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-10">
          {/* Conjoint */}
          <h3 className="text-xl font-bold text-gray-700 dark:text-white">
            Conjoint(e)
          </h3>
          <div className="space-y-2">
            <p>
              <strong>Nom:</strong>{" "}
              {singlePersonne.Conjoint_Nom || "Non spécifié"}
            </p>
            <p>
              <strong>Prénom:</strong>{" "}
              {singlePersonne.Conjoint_Prenom || "Non spécifié"}
            </p>
            <p>
              <strong>Régime Matrimonial:</strong>{" "}
              {singlePersonne.Regime_Matrimonial || "Non spécifié"}
            </p>
          </div>
        </div>

        <div className="space-y-4 rounded-[10px] border border-stroke bg-white p-6 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-10">
          {/* Information Décès */}
          <h3 className="text-xl font-bold text-gray-700 dark:text-white">
            Information Décès
          </h3>
          <div className="space-y-2">
            <p>
              <strong>Date de Décès:</strong>{" "}
              {singlePersonne.Date_Deces || "Non spécifié"}
            </p>
            <p>
              <strong>Date Acte Décès:</strong>{" "}
              {singlePersonne.Date_Acte_Deces || "Non spécifié"}
            </p>
            <p>
              <strong>Date Réception Acte Décès:</strong>{" "}
              {singlePersonne.Date_Reception_Acte_Deces || "Non spécifié"}
            </p>
            <p>
              <strong>Date PV Héritage:</strong>{" "}
              {singlePersonne.Date_PV_heritage || "Non spécifié"}
            </p>
          </div>
        </div>
        <div className="space-y-4 rounded-[10px] border border-stroke bg-white p-6 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-10">
          {/* Adresse */}
          <h3 className="text-xl font-bold text-gray-700 dark:text-white">
            Adresse
          </h3>
          <div className="space-y-2">
            <p>
              <strong>Pays:</strong>{" "}
              {singlePersonne.Adresse_Pays || "Non spécifié"}
            </p>
            <p>
              <strong>Ville:</strong>{" "}
              {singlePersonne.Adresse_Ville || "Non spécifié"}
            </p>
            <p>
              <strong>Code Postal:</strong>{" "}
              {singlePersonne.Adresse_Code_Postal || "Non spécifié"}
            </p>
            <p>
              <strong>Rue:</strong>{" "}
              {singlePersonne.Adresse_Rue || "Non spécifié"}
            </p>
          </div>
        </div>
        <div className="space-y-4 rounded-[10px] border border-stroke bg-white p-6 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-10">
          {/* Pièce d'identité */}
          <h3 className="text-xl font-bold text-gray-700 dark:text-white">
            Pièce d&apos;identité
          </h3>
          <div className="space-y-2">
            <p>
              <strong>Type:</strong> {singlePersonne.PID_Type || "Non spécifié"}
            </p>
            <p>
              <strong>Numéro:</strong>{" "}
              {singlePersonne.PID_Numero || "Non spécifié"}
            </p>
            <p>
              <strong>Délivrée Par:</strong>{" "}
              {singlePersonne.PID_Delivrance_Par || "Non spécifié"}
            </p>
            <p>
              <strong>Date de Délivrance:</strong>{" "}
              {singlePersonne.PID_Delivrance_Date || "Non spécifié"}
            </p>
          </div>
        </div>
        <div className="space-y-4 rounded-[10px] border border-stroke bg-white p-6 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-10">
          {/* Contacts */}
          <h3 className="text-xl font-bold text-gray-700 dark:text-white">
            Informations de Contact
          </h3>
          {singlePersonne.Contacts && singlePersonne.Contacts.length > 0 ? (
            singlePersonne.Contacts.map((contact, index) => (
              <div key={index} className="space-y-2">
                <p>
                  <strong>Téléphone 1:</strong>{" "}
                  {contact.tel_1 || "Non spécifié"}
                </p>
                <p>
                  <strong>Téléphone 2:</strong>{" "}
                  {contact.tel_2 || "Non spécifié"}
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  {contact.Adresse_mail || "Non spécifié"}
                </p>
              </div>
            ))
          ) : (
            <p>Aucun contact disponible.</p>
          )}
        </div>
        <div className="space-y-4 rounded-[10px] border border-stroke bg-white p-6 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-10">
          {/* Héritiers */}
          <h3 className="text-xl font-bold text-gray-700 dark:text-white">
            Informations Héritage
          </h3>
          {singlePersonne.Heritiers && singlePersonne.Heritiers.length > 0 ? (
            singlePersonne.Heritiers.map((heritier, index) => (
              <div key={index} className="space-y-2">
                <p>
                  <strong>Nom Héritier:</strong>{" "}
                  {heritier.Nom_heritier || "Non spécifié"}
                </p>
                <p>
                  <strong>Part Héritage:</strong>{" "}
                  {heritier.Part_heritage || "Non spécifié"}
                </p>
                <p>
                  <strong>Tuteur Nom:</strong>{" "}
                  {heritier.Tuteur_Nom || "Non spécifié"}
                </p>
              </div>
            ))
          ) : (
            <p>Aucun héritier disponible.</p>
          )}
        </div>
      </div>
    </>
  );
}
