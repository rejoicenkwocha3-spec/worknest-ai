import Link from "next/link";
import RemoteSiteLogo from "@/components/RemoteSiteLogo";

export default function NotFound() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#F7F8FA", padding: "2rem", textAlign: "center" }}>
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.625rem", textDecoration: "none", marginBottom: "2.5rem" }}>
        <RemoteSiteLogo size={36} />
        <span style={{ fontFamily: "var(--font-manrope)", fontWeight: 800, fontSize: "1.25rem", color: "#101828" }}>RemoteSite</span>
      </Link>
      <div style={{ fontFamily: "var(--font-manrope)", fontSize: "5rem", fontWeight: 900, color: "#0039FF", lineHeight: 1, marginBottom: "1rem" }}>404</div>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#101828", marginBottom: "0.75rem" }}>Page not found</h1>
      <p style={{ color: "#6B7280", fontSize: "1rem", maxWidth: "400px", marginBottom: "2rem" }}>
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/" className="btn-primary">Back to home</Link>
    </div>
  );
}
