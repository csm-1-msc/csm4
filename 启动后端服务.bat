@echo off
title 智慧客房 Mock 后端服务（请勿关闭本窗口）
cd /d "%~dp0smart_hotel_server"

echo ============================================
echo   智慧客房 Mock 后端服务 启动脚本
echo ============================================
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo [错误] 未检测到 Node.js，请举手联系现场技术人员。
  pause
  exit /b 1
)

if not exist "node_modules" (
  echo [错误] 缺少 node_modules 依赖目录，请举手联系现场技术人员。
  pause
  exit /b 1
)

netstat -ano | findstr ":3000" | findstr "LISTENING" >nul
if not errorlevel 1 (
  echo [提示] 3000 端口已被占用，后端服务可能已经在运行。
  echo        请双击"检查后端服务.bat"确认；无需重复启动。
  echo.
  pause
  exit /b 0
)

echo 正在启动后端服务……
echo 启动成功后请保持本窗口打开，关闭窗口即停止服务。
echo.
call npm start

echo.
echo [提示] 后端服务已停止。如需重新启动，请再次双击本脚本。
pause
