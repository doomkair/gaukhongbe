import { twcx } from "@/shared/utils";
import Image from "next/image";
import Link from "next/link";

export const PageHeader = () => {
  return (
    <header className={twcx("h-24 flex items-center gap-4 mx-auto max-w-8xl")}>
      <div className={twcx("h-20 w-40 relative")}>
        <Image
          className="object-contain"
          src="/images/logo.webp"
          alt="logo"
          fill
        />
      </div>

      <nav>
        <ul className={twcx("flex gap-3 font-semibold")}>
          <li>
            <Link className={twcx("hover:text-primary")} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={twcx("hover:text-primary")} href="/shop">
              Shop
            </Link>
          </li>
        </ul>
      </nav>

      <div></div>
    </header>
  );
};
