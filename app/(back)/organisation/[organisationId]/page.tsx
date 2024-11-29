import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { auth } from "@clerk/nextjs/server";

type Props = {
  params: {
    organisationId: string;
  };
};

export default async function OrganisationPage({ params }: Props) {
  const { organisationId } = await params;
  const { userId, orgId } = await auth();

  console.log(organisationId, userId, orgId);
  return (
    <div className="flex flex-col gap-5">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbPage>Organisation</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-3xl font-bold">Organisation page</h1>
      <p>User id from auth: {userId}</p>
      <p>Org id from auth: {orgId}</p>
      <p>Org id from params: {organisationId}</p>
    </div>
  );
}
