import { ToolBoxLayout } from "@/layouts";
import { NextPageWithLayout } from "@/types";

const ToolBox: NextPageWithLayout = () => {
  return <div>tools</div>;
};

ToolBox.getLayout = (page) => <ToolBoxLayout>{page}</ToolBoxLayout>;

export default ToolBox;
