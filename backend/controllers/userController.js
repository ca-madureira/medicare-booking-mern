import User from "../models/UserSchema";

export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    re.status(200).json({
      success: true,
      message: "Atualizacao com sucesso",
      data: updatedUser,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Falhou ao atualizar" });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await User.findByIdAndDelete(id);

    res.status(200).json({ success: true, message: "Sucesso ao deletar" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Falha ao deletar" });
  }
};

export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);

    res.status(200).json({ success: true, message: "User found", data: user });
  } catch (err) {
    res.status(404).json({ success: false, message: "No user found" });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({}).select("-password");

    res.status(200).json({
      success: true,
      message: "Users found",
      data: users,
    });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not found" });
  }
};

//crypto.randomBytes(356).toString('base64')
//copiar e colar no JWT_SECRET_keys
