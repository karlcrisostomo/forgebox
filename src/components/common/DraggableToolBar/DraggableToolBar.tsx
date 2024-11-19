import { memo, useEffect, useMemo, useRef, useState } from 'react';
import { IToolBarProps } from './DraggableToolbar.types';
import { BoundingBox, motion } from 'framer-motion';
import styles from './styles.module.scss';
import { animateToolBar, dragTransition } from '@/animations';
import dragIcon from '@/assets/drag-indicator.svg';
import { MotionButton } from '../MotionButton';
import { IToolBarItems, ToolBarItems } from '@/configs/ToolbarItems';
export const DraggableToolBar = memo<IToolBarProps>(
  ({ toolbarHeight, ...props }) => {
    // const dragY: MotionValue<number> = useMotionValue(0);

    const [dragConstraints, setDragConstraints] = useState<
      Partial<BoundingBox>
    >({});
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const toolbarRef = useRef<HTMLDivElement>(null);

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

    // this dynamically sets the page height for better drag of the toolbar e.g. if the overall page height is 500px we have to subtract the toolbar height
    // 500px - toolbar height(50px) = 450px and then we also subtract the buffer to ensure that toolbar doesnt go too far up so 450px - buffer(100px) = 350px

    useEffect(() => {
      const updateConstraints = () => {
        const pageHeight = window.innerHeight;
        const buffer = 100;

        setDragConstraints({
          top: -pageHeight + toolbarHeight + buffer,
          bottom: 0,
        });
      };

      updateConstraints();
      window.addEventListener('resize', updateConstraints);

      return () => window.removeEventListener('resize', updateConstraints);
    }, [setDragConstraints, toolbarHeight]);

    return (
      <motion.div
        {...props}
        ref={toolbarRef}
        variants={animateToolBar}
        initial='initial'
        animate='animate'
        drag={isDragging ? 'y' : false}
        dragTransition={dragTransition}
        dragConstraints={dragConstraints}
        dragMomentum={false}
        className={styles.styledToolbarWrapper}
      >
        <MotionButton
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          whileDrag={{ cursor: 'grabbing' }}
          icon={dragIcon}
          alt='dragIcon'
          width={20}
          height={20}
        />

        <motion.div className={styles.styledToolbarContent}>
          {renderToolbarItems(ToolBarItems)}
        </motion.div>
      </motion.div>
    );
  }
);

DraggableToolBar.displayName = 'DraggableToolBar';
export default DraggableToolBar;
