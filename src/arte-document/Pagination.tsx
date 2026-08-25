import {
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

export const Pagination: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <Interactive.Div
      name="Pagination mask"
      style={{
        position: "absolute",
        top: 1563,
        left: 592,
        width: 1168,
        height: 32,
        overflow: "hidden",
      }}
    >
      <Img
        name="Pagination"
        src={staticFile("arte-document/pagination.png")}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 1168,
          translate: interpolate(frame, [290, 320], ["0px 100%", "0px 0%"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      />
    </Interactive.Div>
  );
};
