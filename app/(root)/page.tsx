import { Collection } from "@/components/shared/Collection";
import { Boxes } from "@/components/ui/background-boxes";
import { navLinks } from "@/constants";
import { getAllImages } from "@/lib/actions/image.actions";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Home = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || "";

  const images = await getAllImages({ page, searchQuery });

  return (
    <>
      <section className="sm:flex-center hidden h-95 relative w-full overflow-hidden bg-white items-center justify-center  h-72 flex-col gap-4 rounded-[20px] border bg-cover bg-no-repeat p-10">
        <div className="absolute inset-0 w-full h-full bg-slate-100 z-20 [mask-image:linear-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <h1 className={cn("md:text-4xl text-xl text-dark-800 relative z-20")}>
          Unleash Your Creative Vision
        </h1>
        {/*         <ul className="flex-center w-full gap-20 text-center mt-10 text-neutral-300 relative z-20">
          {navLinks.slice(1, 5).map((link) => (
            <Link
              key={link.route}
              href={link.route}
              className="flex-center flex-col gap-2 "
            >
              <li className="flex-center w-fit rounded-full bg-white/60 p-4 border hover:bg-yellow-100/40">
                <Image src={link.icon} alt="image" width={24} height={24} />
              </li>
              <p className="p-14-medium text-center text-dark-600">
                {link.label}
              </p>
            </Link>
          ))}
        </ul>
 */}{" "}
      </section>

      <section className="sm:mt-12">
        <Collection
          hasSearch={true}
          images={images?.data}
          totalPages={images?.totalPage}
          page={page}
        />
      </section>
    </>
  );
};

export default Home;
