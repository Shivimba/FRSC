@echo off
REM ============================================================
REM  FSRC website - deploy via GitHub push
REM  Cloudflare Pages watches github.com/Shivimba/FRSC and
REM  rebuilds automatically on every push (~2-3 minutes).
REM  Double-click this file to ship the current code live.
REM ============================================================
cd /d C:\dev\fsrc-website\artifacts\fsrc-website

where git >nul 2>nul
if errorlevel 1 (
  echo Git not found. Install it from https://git-scm.com/download/win then re-run.
  pause
  exit /b 1
)

echo Files changed since last deploy:
git status --short
echo.

git add -A
git commit -m "Site update %date% %time%"
if errorlevel 1 (
  echo Nothing new to deploy - the live site already matches your files.
  pause
  exit /b 0
)

git push origin main
if errorlevel 1 (
  echo PUSH FAILED - the live site is unchanged. Check your internet or GitHub login.
  pause
  exit /b 1
)

echo.
echo ============================================================
echo  Pushed. Cloudflare Pages is now building (~2-3 minutes).
echo  Watch it: dash.cloudflare.com - Workers ^& Pages - fsrc-website
echo  Then check: https://fsrc.pro
echo ============================================================
pause
