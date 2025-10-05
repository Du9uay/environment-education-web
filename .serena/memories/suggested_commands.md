# 项目开发常用命令

## 开发环境
```bash
# 启动开发服务器 (http://localhost:3000)
npm start

# 安装依赖
npm install

# 构建生产版本
npm run build

# 运行测试
npm test

# 部署到GitHub Pages
npm run deploy
```

## 代码质量检查
```bash
# ESLint检查 (已集成在react-scripts中)
# 构建时会自动进行代码检查

# TypeScript类型检查
npx tsc --noEmit
```

## Git相关命令
```bash
# 查看状态
git status

# 添加文件
git add .

# 提交更改
git commit -m "commit message"

# 推送到远程
git push origin main
```

## 系统命令 (macOS)
```bash
# 列出文件和目录
ls -la

# 查看当前目录
pwd

# 搜索文件内容
grep -r "搜索内容" src/

# 查找文件
find src/ -name "*.tsx"
```

## 项目特殊命令
```bash
# 清理node_modules重新安装
rm -rf node_modules package-lock.json && npm install

# 分析打包文件大小
npm run build && npx serve -s build
```