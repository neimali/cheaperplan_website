# CheaperPlan Website

CheaperPlan 的官方网站，包含用户邮箱验证欢迎页面、密码重置功能、隐私政策和使用条款。

## 页面

- `/` - 首页
- `/welcome` - 邮箱验证成功欢迎页面
- `/screens/ResetPasswordScreen` - 密码重置页面
- `/privacy` - 隐私政策
- `/terms` - 使用条款

## 环境变量配置

复制 `.env.local.example` 文件并重命名为 `.env.local`，然后填入您的 Supabase 项目信息：

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 密码重置功能

### 工作流程
1. 用户在移动应用中请求重置密码
2. Supabase 发送重置密码邮件
3. 用户点击邮件中的链接，跳转到网页版重置密码页面
4. 用户输入新密码并确认
5. 系统更新密码后自动尝试跳转回移动应用

### Supabase 配置
在 Supabase Dashboard 中：

1. **邮件模板设置**：Authentication > Templates > Reset password
   - 确保重置链接指向：`https://yourdomain.com/screens/ResetPasswordScreen#access_token={{ .Token }}&refresh_token={{ .RefreshToken }}&type=recovery`

2. **站点URL**：Authentication > Settings > Site URL
   - 设置为您的域名

3. **重定向URL**：Authentication > Settings > Redirect URLs
   - 添加重置密码页面的URL

## 本地开发

```bash
npm install
npm run dev
```

## 部署到 Vercel

1. 将项目推送到 GitHub
2. 在 Vercel 中导入项目
3. Vercel 会自动检测 Next.js 项目并进行部署

## 技术栈

- Next.js 14
- TypeScript
- 静态导出（Static Export）
- 响应式设计