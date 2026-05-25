
export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px",
        background:
          "linear-gradient(to bottom right, #111827, #1f2937, #000000)",
      }}
    >
      <h1
        style={{
          fontSize: "64px",
          marginBottom: "20px",
          color: "#facc15",
        }}
      >
        Recipe Secrets 😮‍💨🔥
      </h1>

      <p
        style={{
          fontSize: "22px",
          maxWidth: "700px",
          lineHeight: "1.6",
          opacity: 0.9,
        }}
      >
        Viral recipes, luxury food trends, celebrity meals and AI food
        tools.
      </p>

      <div
        style={{
          marginTop: "40px",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            padding: "14px 28px",
            borderRadius: "10px",
            border: "none",
            background: "#facc15",
            color: "#000",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Explore Recipes
        </button>

        <button
          style={{
            padding: "14px 28px",
            borderRadius: "10px",
            border: "1px solid #555",
            background: "transparent",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          AI Food Tools
        </button>
      </div>
    </main>
  );
}