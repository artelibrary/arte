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
        top: 1521,
        left: 560,
        width: 1200,
        height: 24,
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
          width: 1200,
          translate: interpolate(frame, [0, 30], ["0px 100%", "0px 0%"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      />
    </Interactive.Div>
  );
};
