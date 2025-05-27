import type * as React from "react"

interface EmailTemplateProps {
  name: string
  email: string
  phone: string
  message: string
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({ name, email, phone, message }) => (
  <div style={container}>
    <div style={header}>
      <h1 style={heading}>New Suggestion/Complaint</h1>
    </div>
    <div style={content}>
      <p style={paragraph}>You have received a new message from the Suggestions and Complaints form:</p>

      <div style={infoBlock}>
        <p style={infoItem}>
          <strong style={label}>Name:</strong> {name}
        </p>
        <p style={infoItem}>
          <strong style={label}>Email:</strong> {email}
        </p>
        <p style={infoItem}>
          <strong style={label}>Phone:</strong> {phone}
        </p>
      </div>

      <div style={messageBlock}>
        <p style={messageLabel}>
          <strong>Message:</strong>
        </p>
        <p style={messageContent}>{message}</p>
      </div>

      <div style={footer}>
        <p style={footerText}>This email was sent from the Malhotra Cables website.</p>
      </div>
    </div>
  </div>
)

// Styles
const container = {
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  maxWidth: "600px",
  margin: "0 auto",
  padding: "0",
  backgroundColor: "#f9fafb",
}

const header = {
  backgroundColor: "#00607d",
  padding: "20px",
  textAlign: "center" as const,
  borderTopLeftRadius: "4px",
  borderTopRightRadius: "4px",
}

const heading = {
  color: "#ffffff",
  fontSize: "24px",
  margin: "0",
  fontWeight: "600",
}

const content = {
  padding: "20px",
  backgroundColor: "#ffffff",
  borderBottomLeftRadius: "4px",
  borderBottomRightRadius: "4px",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
}

const paragraph = {
  fontSize: "16px",
  lineHeight: "1.5",
  color: "#374151",
  margin: "0 0 20px 0",
}

const infoBlock = {
  backgroundColor: "#f3f4f6",
  padding: "15px",
  borderRadius: "4px",
  marginBottom: "20px",
}

const infoItem = {
  margin: "8px 0",
  fontSize: "15px",
  color: "#374151",
}

const label = {
  color: "#00607d",
}

const messageBlock = {
  marginBottom: "20px",
}

const messageLabel = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#374151",
  marginBottom: "8px",
}

const messageContent = {
  fontSize: "15px",
  lineHeight: "1.6",
  color: "#4b5563",
  backgroundColor: "#f3f4f6",
  padding: "15px",
  borderRadius: "4px",
  whiteSpace: "pre-wrap",
}

const footer = {
  borderTop: "1px solid #e5e7eb",
  marginTop: "20px",
  paddingTop: "15px",
}

const footerText = {
  fontSize: "14px",
  color: "#6b7280",
  margin: "0",
  textAlign: "center" as const,
}
