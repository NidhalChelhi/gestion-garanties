import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import AddPersonnePhysiqueForm from "../_components/AddPersonnePhysiqueForm";

const AddPersonnePhysiquePage = () => {
  const breadcrumbItems = [
    { name: "Tableau de Bord", link: "/" },
    { name: "Tiers Personne Physique", link: "/tiers-personne-physique" },
    { name: "Ajouter une personne physique" },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />

      <AddPersonnePhysiqueForm />
    </>
  );
};

export default AddPersonnePhysiquePage;
