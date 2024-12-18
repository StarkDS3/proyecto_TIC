export const login = (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({
      mensaje: "Error al crear el usuario",
      error: error.message,
    });
  }
};
