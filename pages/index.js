function Home() {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
        color: "#222",
        fontFamily: "serif",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1
        style={{
          maxWidth: "800px",
          fontSize: "1.8rem",
          fontWeight: "normal",
          lineHeight: 1.6,
        }}
      >
        “Toda lenda precisa de um guardião. O Archivum preserva as histórias, os
        segredos e a alma do meu universo - porque conhecimento é poder.
        Arquive-o."
      </h1>
    </main>
  );
}

export default Home;
