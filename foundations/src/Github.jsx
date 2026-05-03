import { useEffect, useState } from "react";

function Github() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        setIsLoading(true);
        setError("");

        const response = await fetch("https://api.github.com/users/Shubh-ujala");
        if (!response.ok) {
          throw new Error("Could not fetch profile data");
        }

        const profile = await response.json();
        setData(profile);
      } catch (fetchError) {
        setError(fetchError.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background:
          "radial-gradient(circle at 20% 20%, #2a250a 0%, #111111 38%, #090909 100%)",
        color: "#f4f4f5",
        padding: "24px",
        fontFamily: '"Space Grotesk", "Segoe UI", sans-serif',
      }}
    >
      <article
        style={{
          width: "100%",
          maxWidth: "360px",
          border: "1px solid rgba(250, 204, 21, 0.25)",
          borderRadius: "18px",
          background: "rgba(15, 15, 15, 0.92)",
          padding: "22px",
          boxShadow: "0 14px 38px rgba(0, 0, 0, 0.45)",
          backdropFilter: "blur(4px)",
        }}
      >
        {isLoading && (
          <p style={{ margin: 0, color: "#facc15", letterSpacing: "0.4px" }}>
            Loading profile...
          </p>
        )}

        {error && !isLoading && (
          <p style={{ margin: 0, color: "#f87171" }}>{error}</p>
        )}

        {data && !isLoading && !error && (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <img
                src={data.avatar_url}
                alt={data.login}
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  border: "2px solid #facc15",
                  objectFit: "cover",
                }}
              />

              <div>
                <h2 style={{ margin: 0, fontSize: "1.15rem", fontWeight: 700 }}>
                  {data.name || data.login}
                </h2>
                <p style={{ margin: "4px 0 0", color: "#facc15", fontSize: "0.92rem" }}>
                  @{data.login}
                </p>
              </div>
            </div>

            <p
              style={{
                margin: "16px 0 0",
                color: "#d4d4d8",
                fontSize: "0.92rem",
                lineHeight: 1.5,
              }}
            >
              {data.bio || "Building cool things, one commit at a time."}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                marginTop: "16px",
                borderTop: "1px solid rgba(250, 204, 21, 0.2)",
                borderBottom: "1px solid rgba(250, 204, 21, 0.2)",
              }}
            >
              {[
                ["Repos", data.public_repos],
                ["Followers", data.followers],
                ["Following", data.following],
              ].map(([label, value]) => (
                <div
                  key={label}
                  style={{
                    padding: "12px 6px",
                    textAlign: "center",
                  }}
                >
                  <p style={{ margin: 0, color: "#facc15", fontWeight: 700 }}>{value}</p>
                  <p style={{ margin: "4px 0 0", color: "#a1a1aa", fontSize: "0.75rem" }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href={data.html_url}
              target="_blank"
              rel="noreferrer"
              style={{
                marginTop: "16px",
                display: "inline-block",
                textDecoration: "none",
                color: "#111111",
                background: "#facc15",
                fontWeight: 700,
                padding: "10px 14px",
                borderRadius: "10px",
                fontSize: "0.86rem",
              }}
            >
              View GitHub
            </a>
          </>
        )}
      </article>
    </section>
  );
}

export default Github;
