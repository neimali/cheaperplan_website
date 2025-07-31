export default function Home() {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">CheaperPlan</div>
      </div>
      
      <div className="content">
        <h1 className="title">欢迎来到 CheaperPlan</h1>
        <p className="subtitle">
          您的智能规划助手
        </p>
        
        <div className="section">
          <h2>快速链接</h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="/welcome" className="button">
              邮箱验证成功页面
            </a>
            <a href="/privacy" className="button">
              隐私政策
            </a>
            <a href="/terms" className="button">
              使用条款
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer">
        <p>&copy; 2024 CheaperPlan. 保留所有权利。</p>
      </div>
    </div>
  )
}