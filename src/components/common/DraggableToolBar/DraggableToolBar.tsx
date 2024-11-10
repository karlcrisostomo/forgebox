import { memo, useEffect, useMemo, useRef, useState } from "react";
import { DragConstraints, IToolBarProps } from "./DraggableToolbar.types";
import { MotionValue, useMotionValue, motion } from "framer-motion";
import styles from "./styles.module.scss";
import { animateToolBar } from "@/animations";
import dragIcon from "@/assets/drag-indicator.svg";
import { MotionButton } from "../MotionButton";
import { IToolBarItems, ToolBarItems } from "@/configs/ToolbarItems";
export const DraggableToolBar = memo<IToolBarProps>(({ toolbarHeight }) => {
  const dragY: MotionValue<number> = useMotionValue(0);
  const dragRef = useRef<HTMLButtonElement>(null);

  const [isDragging, setIsDragging] = useState<boolean>(false);

  const [Constraints, SetConstraints] = useState<DragConstraints>({
    top: 0,
    bottom: 0,
  });

  const renderToolbarItems = useMemo(
    () => (items: IToolBarItems[]) =>
      items.map(({ title }) => {
        return (
          <nav key={title}>
            <span>{title}</span>
          </nav>
        );
      }),
    []
  );

  // theres a bug or incorrect logic with the height will figure out soon
  useEffect(() => {
    const updatedConstraints = (): void => {
      if (dragRef.current) {
        const pageHeight: number = document.documentElement.scrollHeight;
        const dragRect = dragRef.current.getBoundingClientRect();
        SetConstraints({
          top: 0,
          bottom: pageHeight - dragRect.height!,
        });
      }

      return;
    };

    updatedConstraints();

    const resizeObserver = new ResizeObserver(updatedConstraints);
    resizeObserver.observe(document.documentElement);

    return () => resizeObserver.disconnect();
  }, [toolbarHeight]);

  return (
    <motion.div
      variants={animateToolBar}
      initial="initial"
      animate="animate"
      drag={isDragging ? "y" : false}
      dragMomentum={false}
      dragConstraints={Constraints}
      className={styles.styledToolbarWrapper}
      style={{ height: `${toolbarHeight}px`, y: dragY }}
    >
      <MotionButton
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        whileDrag={{ cursor: "grabbing" }}
        ref={dragRef}
        icon={dragIcon}
        alt="dragIcon"
        width={20}
        height={20}
      />

      <motion.div className={styles.styledToolbarContent}>
        {renderToolbarItems(ToolBarItems)}
      </motion.div>
    </motion.div>
  );
});

DraggableToolBar.displayName = "DraggableToolBar";
export default DraggableToolBar;
