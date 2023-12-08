import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

interface BreadcrumbProps {
  items: { text: string; link?: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="text-sm  font-medium text-gray-600" aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.link ? (
              <>
                <Link
                  className="hover:underline text-[14px] lg:text-[20px] font-bold text-pi-green "
                  href={item.link}
                >
                  {item.text}
                </Link>
                {index < items.length - 1 && (
                  <span className="mx-2">
                    <FaChevronRight />
                  </span>
                )}
              </>
            ) : (
              <span className="text-[14px] whitespace-nowrap lg:text-[20px]">
                {item.text}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
