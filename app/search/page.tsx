export default function SearchPage() {
  return (
    <main style={{ padding: "40px", color: "white" }}>
      <h1>AI Search</h1>
      <p>Search ideas, startups, workflows and AI opportunities.</p>

      <input
        placeholder="Ask AI OS anything..."
        style={{
          width: "100%",
          maxWidth: "700px",
          padding: "16px",
          marginTop: "20px",
          borderRadius: "12px"
        }}
      />
    </main>
  );
}