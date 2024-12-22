import Link from "next/link";

interface BreadcrumbItem {
  name: string;
  link?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-[26px] font-bold leading-[30px] text-dark dark:text-white">
        {items[items.length - 1]?.name || "Page"}
      </h2>

      <nav>
        <ol className="flex items-center gap-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {item.link ? (
                <Link className="font-medium text-primary" href={item.link}>
                  {item.name}
                </Link>
              ) : (
                <span className="font-medium text-gray-500">{item.name}</span>
              )}
              {index < items.length - 1 && <span>/</span>}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
