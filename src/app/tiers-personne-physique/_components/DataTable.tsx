"use client";

import { TiersPersonnePhysique } from "@/types/TiersPersonnePhysique";
import { Edit, Eye } from "lucide-react";
import Link from "next/link";

const DataTable = ({ data }: { data: TiersPersonnePhysique[] | undefined }) => {
  return (
    <>
      {data ? (
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-[#F7F9FC] text-left dark:bg-dark-2">
                <th className="px-4 py-4 font-medium text-dark dark:text-white">
                  Actions
                </th>
                <th className="min-w-[220px] px-4 py-4 font-medium text-dark dark:text-white">
                  Nom & Prénom
                </th>
                <th className="min-w-[150px] px-4 py-4 font-medium text-dark dark:text-white">
                  Date de Naissance
                </th>
                <th className="min-w-[120px] px-4 py-4 font-medium text-dark dark:text-white">
                  Lieu de Naissance
                </th>
                <th className="min-w-[120px] px-4 py-4 font-medium text-dark dark:text-white">
                  Téléphone
                </th>
                <th className="min-w-[120px] px-4 py-4 font-medium text-dark dark:text-white">
                  Profession
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((personne, index) => (
                <tr key={index} className="border-b last:border-b-0">
                  <td className={`border-[#eee] px-4 py-4 dark:border-dark-3`}>
                    <div className="flex items-center justify-start space-x-3.5">
                      <Link
                        href={`tiers-personne-physique/${personne.Id_Tier}`}
                        className="hover:text-primary"
                      >
                        <Eye />
                      </Link>
                      <button className="hover:text-primary">
                        <Edit />
                      </button>
                    </div>
                  </td>
                  <td className={`border-[#eee] px-4 py-4 dark:border-dark-3`}>
                    <h5 className="text-dark dark:text-white">
                      {personne.Prenom} {personne.Nom}
                    </h5>
                    <p className="mt-[3px] text-body-sm font-medium">
                      {personne.Etat_Civil}
                    </p>
                  </td>
                  <td className={`border-[#eee] px-4 py-4 dark:border-dark-3`}>
                    <p className="text-dark dark:text-white">
                      {personne.Date_Naissance}
                    </p>
                  </td>
                  <td className={`border-[#eee] px-4 py-4 dark:border-dark-3`}>
                    <p
                      className={`inline-flex rounded-full px-3.5 py-1 text-body-sm font-medium`}
                    >
                      {personne.Lieu_Naissance}
                    </p>
                  </td>
                  <td className={`border-[#eee] px-4 py-4 dark:border-dark-3`}>
                    <p className="text-dark dark:text-white">
                      {personne.Prenom_Pere}
                    </p>
                  </td>
                  <td className={`border-[#eee] px-4 py-4 dark:border-dark-3`}>
                    <p className="text-dark dark:text-white">
                      {personne.Profession}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-body-sm font-medium text-gray-500">
          Aucun résultat trouvé. Veuillez effectuer une recherche.
        </p>
      )}
    </>
  );
};

export default DataTable;
