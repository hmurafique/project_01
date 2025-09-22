export const getUsers = (req, res) => {
  res.json([
    { id: 1, name: "Ali" },
    { id: 2, name: "Umar" },
    { id: 3, name: "Ayesha" }
  ]);
};
