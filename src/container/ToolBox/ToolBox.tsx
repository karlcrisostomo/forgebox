import {RootLayout } from "@/layouts/RootLayout";
import { NextPageWithLayout } from "@/types";

const ToolBox: NextPageWithLayout = () => {
  return <div>tools</div>;
};

ToolBox.getLayout = (page) => <RootLayout>{page}</RootLayout>;

export default ToolBox;
