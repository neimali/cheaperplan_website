export default function Terms() {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">CheaperPlan</div>
      </div>
      
      <div className="content">
        <h1 className="title">使用条款</h1>
        <p className="subtitle">
          最后更新日期：{new Date().toLocaleDateString('zh-CN')}
        </p>
        
        <div className="section">
          <h2>1. 接受条款</h2>
          <p>
            欢迎使用 CheaperPlan！通过访问或使用我们的服务，您同意遵守并受这些使用条款的约束。
            如果您不同意这些条款，请不要使用我们的服务。
          </p>
        </div>

        <div className="section">
          <h2>2. 服务描述</h2>
          <p>
            CheaperPlan 是一个智能规划助手平台，旨在帮助用户：
          </p>
          <ul>
            <li>创建和管理个人或团队计划</li>
            <li>优化资源配置和成本控制</li>
            <li>提供智能建议和分析</li>
            <li>协作和分享规划内容</li>
          </ul>
        </div>

        <div className="section">
          <h2>3. 用户账户</h2>
          <h3>3.1 注册要求</h3>
          <ul>
            <li>您必须年满 18 岁才能使用我们的服务</li>
            <li>提供准确、完整的注册信息</li>
            <li>保持账户信息的及时更新</li>
            <li>对账户安全负责，包括密码保护</li>
          </ul>
          
          <h3>3.2 账户责任</h3>
          <p>
            您对通过您的账户进行的所有活动负责。如果发现账户被未经授权使用，
            请立即通知我们。
          </p>
        </div>

        <div className="section">
          <h2>4. 可接受的使用</h2>
          <p>使用我们的服务时，您同意不会：</p>
          <ul>
            <li>违反任何适用的法律法规</li>
            <li>侵犯他人的知识产权</li>
            <li>上传恶意软件或有害内容</li>
            <li>进行任何形式的骚扰或滥用</li>
            <li>尝试未经授权访问系统或数据</li>
            <li>干扰服务的正常运行</li>
            <li>进行商业垃圾邮件或广告活动</li>
          </ul>
        </div>

        <div className="section">
          <h2>5. 内容和知识产权</h2>
          <h3>5.1 用户内容</h3>
          <p>
            您保留对上传到我们平台的内容的所有权。通过上传内容，您授予我们
            使用、存储、显示该内容以提供服务的许可。
          </p>
          
          <h3>5.2 我们的知识产权</h3>
          <p>
            我们的服务、软件、商标、版权和其他知识产权受法律保护。
            未经明确许可，您不得复制、修改或分发这些内容。
          </p>
        </div>

        <div className="section">
          <h2>6. 付费服务</h2>
          <p>某些功能可能需要付费订阅：</p>
          <ul>
            <li>订阅费用将在购买时明确显示</li>
            <li>除非另有说明，订阅将自动续费</li>
            <li>您可以随时取消订阅</li>
            <li>退款政策详见我们的退款条款</li>
          </ul>
        </div>

        <div className="section">
          <h2>7. 隐私</h2>
          <p>
            我们重视您的隐私。请查阅我们的
            <a href="/privacy" style={{ color: '#0070f3', textDecoration: 'underline' }}>
              隐私政策
            </a>
            了解我们如何收集、使用和保护您的信息。
          </p>
        </div>

        <div className="section">
          <h2>8. 服务可用性</h2>
          <p>
            我们努力保持服务的可用性，但不保证服务始终可用或无错误。
            我们可能会因维护、更新或其他原因暂时中断服务。
          </p>
        </div>

        <div className="section">
          <h2>9. 免责声明</h2>
          <p>
            我们的服务按"现状"提供，不提供任何明示或暗示的保证。
            我们不保证服务将满足您的特定需求或始终可用。
          </p>
        </div>

        <div className="section">
          <h2>10. 责任限制</h2>
          <p>
            在法律允许的最大范围内，我们对因使用或无法使用我们的服务而造成的
            任何直接、间接、附带或后果性损害不承担责任。
          </p>
        </div>

        <div className="section">
          <h2>11. 条款修改</h2>
          <p>
            我们保留随时修改这些条款的权利。重大变更将提前通知用户。
            继续使用服务表示您接受修改后的条款。
          </p>
        </div>

        <div className="section">
          <h2>12. 终止</h2>
          <p>
            我们或您都可以随时终止您的账户。终止后，您将无法访问您的账户和数据。
            我们可能因违反条款而暂停或终止您的账户。
          </p>
        </div>

        <div className="section">
          <h2>13. 适用法律</h2>
          <p>
            这些条款受中华人民共和国法律管辖。任何争议将通过友好协商解决，
            如协商不成，将提交至有管辖权的人民法院解决。
          </p>
        </div>

        <div className="section">
          <h2>14. 联系信息</h2>
          <p>如果您对这些条款有任何问题，请联系我们：</p>
          <ul>
            <li>邮箱：legal@cheaperplan.com</li>
            <li>地址：[您的公司地址]</li>
          </ul>
        </div>
      </div>
      
      <div className="footer">
        <p>&copy; 2024 CheaperPlan. 保留所有权利。</p>
      </div>
    </div>
  )
}