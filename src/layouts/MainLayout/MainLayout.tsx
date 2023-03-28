import { PropsWithChildren } from "react";
import { PageHeader } from "./PageHeader/PageHeader";
import { twcx } from "@/shared/utils";

type MainLayoutProps = PropsWithChildren<{
  className?: string;
}>;

export const MainLayout = ({ children, className }: MainLayoutProps) => {
  return (
    <div className={twcx(className)}>
      <PageHeader />
      <main className={twcx("max-w-8xl mx-auto")}>{children}</main>
    </div>
  );
};
