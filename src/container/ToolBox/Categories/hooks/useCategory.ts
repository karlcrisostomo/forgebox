import { IToolBoxMenuItem, ToolBoxMenuItems } from "@/configs";
import { useRouter } from "@/hooks";

interface IUseCategoryReturn {
  category: string | string[] | undefined;
  currentCategory: IToolBoxMenuItem | undefined;
  fullPath: string;
}

export const useCategory = (): IUseCategoryReturn => {
  const router = useRouter();
  const { category } = router.query;

  const currentCategory = ToolBoxMenuItems.find(
    (item) => item.href.replace("/all-tools/", "") === category,
  );

  return {
    category,
    currentCategory,
    fullPath: router.asPath,
  };
};
