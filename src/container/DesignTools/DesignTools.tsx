import { DesignToolsItems } from "@/configs";
import { ToolBoxLayout } from "@/layouts";
import { NextPageWithLayout } from "@/types";

const DesignTools: NextPageWithLayout = () => {
  return <div>test</div>;
};

DesignTools.getLayout = (page) => (
  <ToolBoxLayout routes={DesignToolsItems}>{page}</ToolBoxLayout>
);

export default DesignTools;
