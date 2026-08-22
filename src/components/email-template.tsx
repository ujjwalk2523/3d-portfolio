import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  message,
}) => (
  <div
    style={{
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      backgroundColor: "#090d16",
      color: "#e2e8f0",
      padding: "32px 24px",
      borderRadius: "12px",
      maxWidth: "560px",
      margin: "0 auto",
      border: "1px solid #1e293b",
    }}
  >
    <div
      style={{
        borderBottom: "1px solid #1e293b",
        paddingBottom: "16px",
        marginBottom: "20px",
      }}
    >
      <h2
        style={{
          margin: "0 0 6px 0",
          fontSize: "20px",
          color: "#ffffff",
          fontWeight: "600",
        }}
      >
        📬 New Portfolio Message
      </h2>
      <p style={{ margin: 0, fontSize: "14px", color: "#94a3b8" }}>
        Someone submitted the contact form on your portfolio website.
      </p>
    </div>

    <div style={{ marginBottom: "20px" }}>
      <div style={{ marginBottom: "12px" }}>
        <strong style={{ fontSize: "12px", textTransform: "uppercase", color: "#64748b", letterSpacing: "0.05em" }}>
          From:
        </strong>
        <p style={{ margin: "4px 0 0 0", fontSize: "15px", color: "#f8fafc", fontWeight: "500" }}>
          {fullName}
        </p>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <strong style={{ fontSize: "12px", textTransform: "uppercase", color: "#64748b", letterSpacing: "0.05em" }}>
          Email Address:
        </strong>
        <p style={{ margin: "4px 0 0 0", fontSize: "15px" }}>
          <a
            href={`mailto:${email}`}
            style={{ color: "#38bdf8", textDecoration: "none" }}
          >
            {email}
          </a>
        </p>
      </div>

      <div>
        <strong style={{ fontSize: "12px", textTransform: "uppercase", color: "#64748b", letterSpacing: "0.05em" }}>
          Message:
        </strong>
        <div
          style={{
            margin: "8px 0 0 0",
            padding: "16px",
            backgroundColor: "#0f172a",
            borderRadius: "8px",
            border: "1px solid #1e293b",
            fontSize: "14px",
            lineHeight: "1.6",
            color: "#e2e8f0",
            whiteSpace: "pre-wrap",
          }}
        >
          {message}
        </div>
      </div>
    </div>

    <div
      style={{
        borderTop: "1px solid #1e293b",
        paddingTop: "16px",
        marginTop: "24px",
        fontSize: "12px",
        color: "#64748b",
        textAlign: "center",
      }}
    >
      Click reply to respond directly to <a href={`mailto:${email}`} style={{ color: "#38bdf8" }}>{email}</a>
    </div>
  </div>
);

