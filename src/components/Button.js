import { Button } from "@chakra-ui/react";
import { GLOBAL_COLOR } from "constant/color";

export default function CustomButton(props) {
  return (
    <Button
      {...props}
      _hover={{
        background: props.variant !== "ghost" ? GLOBAL_COLOR.pink1 : "",
        textColor: props.variant === "ghost" ? GLOBAL_COLOR.pink1 : "",
        ...props._hover,
      }}
      _active={{
        background: props.variant !== "ghost" ? GLOBAL_COLOR.pink1 : "",
        textColor: props.variant === "ghost" ? GLOBAL_COLOR.pink1 : "",
        ...props._active,
      }}
    />
  );
}
