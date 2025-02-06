import { ToolBoxLayout } from "@/layouts";
import { NextPageWithLayout } from "@/types";

const AllTools: NextPageWithLayout = () => {
  return <div>all tools</div>;
};

AllTools.getLayout = (page) => <ToolBoxLayout>{page}</ToolBoxLayout>;

export default AllTools;
