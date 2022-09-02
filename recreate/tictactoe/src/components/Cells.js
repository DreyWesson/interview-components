export const Cell = ({ num, handlePlayer, cells }) => {
  return (
    <td
      style={{
        width: "50px",
        height: "50px",
        border: "1px solid grey",
        textAlign: "center",
        fontSize: "24px",
      }}
      onClick={() => handlePlayer(num)}
    >
      {cells[num]}
    </td>
  );
};
