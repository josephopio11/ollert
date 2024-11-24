import { OrganizationList } from "@clerk/nextjs";

export default function CreateOrganisationPage() {
  return (
    <OrganizationList
      hidePersonal={true}
      afterSelectOrganizationUrl={"/organisation/:id"}
      afterCreateOrganizationUrl={"/organisation/:id"}
    />
  );
}
