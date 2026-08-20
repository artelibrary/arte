import { Img, staticFile } from "remotion";

export const Footer: React.FC = () => {
  return (
    <Img
      name="Footer"
      src={staticFile("webpage-sections/section-10.png")}
      style={{ position: "absolute", top: 5592, left: 0, width: 1920 }}
    />
  );
};
