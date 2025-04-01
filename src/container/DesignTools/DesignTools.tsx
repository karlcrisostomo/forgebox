import { DesignToolsItems } from "@/configs";
import { PageLayout } from "@/layouts";
import { NextPageWithLayout } from "@/types";

const DesignTools: NextPageWithLayout = () => {
  return <div>test</div>;
};

DesignTools.getLayout = (page) => (
  <PageLayout routes={DesignToolsItems}>{page}</PageLayout>
);

export default DesignTools;
