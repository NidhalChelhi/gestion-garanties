import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import AddPersonnePhysiqueForm from "../_components/AddPersonnePhysiqueForm";
import { tiersPersonnePhysiqueFields } from "@/data/tiersPersonnePhysiqueFields";
import { fetchFormOptions } from "@/utils/fetchFormOptions";

const AddPersonnePhysiquePage = async () => {
  const breadcrumbItems = [
    { name: "Tableau de Bord", link: "/" },
    { name: "Tiers Personne Physique", link: "/tiers-personne-physique" },
    { name: "Ajouter une personne physique" },
  ];

  const optionsMap = await fetchFormOptions(tiersPersonnePhysiqueFields);

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <AddPersonnePhysiqueForm optionsMap={optionsMap} />
    </>
  );
};

export default AddPersonnePhysiquePage;
