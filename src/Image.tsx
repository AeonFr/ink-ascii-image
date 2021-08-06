import * as React from "react";
import { useEffect, useState, useMemo } from "react";
import { Box, Text } from "ink";
import AsciiArtImage from "ascii-art-image";

interface Props {
  filePath: string;
  width?: number;
  height?: number;
  alphabet?:
    | "variant1"
    | "variant2"
    | "variant3"
    | "variant4"
    | "ultra-wide"
    | "wide"
    | "hatching"
    | "bits"
    | "binary"
    | "greyscale"
    | "blocks";
}

export const Image: React.FC<Props> = ({
  filePath,
  width,
  height,
  alphabet = "blocks",
}) => {
  const [imageText, setImageText] = useState();

  useEffect(() => {
    const image = new AsciiArtImage({
      filepath: filePath,
      alphabet,
      width,
      height: height * 2,
    });
    image.write((err, rendered) => {
      if (err) {
        console.error(err);
      }
      setImageText(rendered);
    });
  }, [filePath, alphabet, width, height]);

  return (
    <Box width={width} height={height}>
      <Text>{imageText}</Text>
    </Box>
  );
};
