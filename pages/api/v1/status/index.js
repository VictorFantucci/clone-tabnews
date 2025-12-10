function status(request, response) {
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.status(200).json({ chave: "valor" });
}

export default status;
