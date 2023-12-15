import clsx from "clsx";
import { FC, HTMLAttributes } from "react";

const Paragraph: FC<HTMLAttributes<HTMLParagraphElement>> = (props) => (
  <p {...props} className={clsx("my-1", props.className)} />
);

export default Paragraph;
