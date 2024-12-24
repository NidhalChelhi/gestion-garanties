// app/tiers-personne-physique/_components/AddPersonnePhysiqueForm.tsx
"use client";

import { useForm, Controller } from "react-hook-form";
import InputGroup from "@/components/FormElements/InputGroup";
import SelectGroup from "@/components/FormElements/SelectGroup";
import DatePicker from "@/components/FormElements/DatePicker";
import { tiersPersonnePhysiqueFields } from "@/data/tiersPersonnePhysiqueFields";
import {
  createTiersPersonnePhysique,
  Option,
} from "@/actions/tiersPersonnePhysique";
import toast from "react-hot-toast";
import { revalidatePath } from "next/cache";

interface FormValues {
  [key: string]: string | number | null;
}

const AddPersonnePhysiqueForm = ({
  optionsMap,
}: {
  optionsMap: Record<string, Option[]>;
}) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: tiersPersonnePhysiqueFields.reduce((acc, section) => {
      section.inputs.forEach((input) => {
        acc[input.name] = input.defaultValue || null;
      });
      return acc;
    }, {} as FormValues),
  });

  const onSubmit = async (data: FormValues) => {
    const normalizedData = Object.fromEntries(
      Object.entries(data).map(([key, value]) => [
        key,
        value === "" ? null : value,
      ]),
    );

    try {
      await createTiersPersonnePhysique(normalizedData);
      revalidatePath("/tiers-personne-physique");
      toast.success("Personne physique ajoutée avec succès !");
      reset();
    } catch (error: unknown) {
      const errorMessage =
        (error as { message?: string })?.message ||
        "Une erreur s'est produite.";
      toast.error(`Erreur: ${errorMessage}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-[10px] border border-stroke bg-white p-6.5 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card"
    >
      {tiersPersonnePhysiqueFields.map((section) => (
        <section key={section.section} className="mb-6">
          <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white">
            {section.section}
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {section.inputs.map((input) => (
              <Controller
                key={input.name}
                name={input.name}
                control={control}
                rules={{
                  required: input.mandatory
                    ? `${input.label} est requis`
                    : false,
                }}
                render={({ field }) => {
                  const error = errors[input.name]?.message;

                  if (input.type === "text" || input.type === "number") {
                    return (
                      <InputGroup
                        {...field}
                        name={input.name}
                        value={field.value ?? ""}
                        label={input.label}
                        type={input.type}
                        placeholder={`Entrer ${input.label}`}
                        required={input.mandatory}
                        error={error as string}
                      />
                    );
                  }

                  if (input.type === "select") {
                    return (
                      <SelectGroup
                        {...field}
                        name={input.name}
                        value={field.value}
                        label={input.label}
                        options={optionsMap[input.name] || []}
                        placeholder={`Sélectionner ${input.label}`}
                        required={input.mandatory}
                        error={error as string}
                      />
                    );
                  }

                  if (input.type === "date") {
                    return (
                      <DatePicker
                        id={input.name}
                        value={field.value as string | null}
                        onChange={(date) => field.onChange(date)}
                        label={input.label}
                        placeholder={`Sélectionner ${input.label}`}
                        required={input.mandatory}
                        error={error as string}
                      />
                    );
                  }

                  return <div />;
                }}
              />
            ))}
          </div>
        </section>
      ))}
      <button
        type="submit"
        className="hover:bg-primary-dark mt-6 w-full rounded bg-primary py-3 font-medium text-white"
      >
        Soumettre
      </button>
    </form>
  );
};

export default AddPersonnePhysiqueForm;
