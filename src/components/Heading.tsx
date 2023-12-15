import clsx from "clsx";
import { FC, HTMLAttributes } from "react";

const Heading: FC<HTMLAttributes<HTMLHeadingElement>> = (props) => (
  <h1 {...props} className={clsx("text-3xl font-bold my-4", props.className)} />
);

export default Heading;
