import { ToolBoxLayout } from "@/layouts";
import { NextPageWithLayout } from "@/types";

const Toolbox: NextPageWithLayout = () => {
  return <div>test</div>;
};

Toolbox.getLayout = (page) => <ToolBoxLayout>{page}</ToolBoxLayout>;

export default Toolbox;
