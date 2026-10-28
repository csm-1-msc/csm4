@echo off
title 检查智慧客房后端服务
echo 正在访问 http://localhost:3000/api/ping ……
echo.
curl -s -m 5 http://localhost:3000/api/ping > "%TEMP%\smart_hotel_ping.txt" 2>nul
findstr /c:"pong" "%TEMP%\smart_hotel_ping.txt" >nul
if errorlevel 1 (
  echo [异常] 后端服务未响应。
  echo        请双击"启动后端服务.bat"启动；仍无法启动请举手联系现场技术人员。
) else (
  echo [正常] 后端服务运行中，返回：
  type "%TEMP%\smart_hotel_ping.txt"
  echo.
)
del "%TEMP%\smart_hotel_ping.txt" >nul 2>nul
echo.
pause
