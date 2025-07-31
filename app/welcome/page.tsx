export default function Welcome() {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">CheaperPlan</div>
      </div>
      
      <div className="content">
        <div style={{ textAlign: 'center' }}>
          <div className="success-icon">✅</div>
          <h1 className="title">Welcome to CheaperPlan！</h1>
          <p className="subtitle">
            Your email has been successfully verified. <br/> Please open the app and log in to start.
          </p>
        </div>
      </div>
      
      <div className="footer">
        <p>Thank you for choosing CheaperPlan.</p>
      </div>
    </div>
  )
}