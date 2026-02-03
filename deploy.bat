@echo off
@REM echo ============================
@REM echo REMOVENDO BRANCH GH-PAGES
@REM echo ============================
@REM git push origin --delete gh-pages

echo.
echo ============================
echo FAZENDO NOVO BUILD
echo ============================
call npm run build

echo.
echo ============================
echo CRIANDO 404.html
echo ============================
cd dist
copy index.html 404.html

echo.
echo ============================
echo VOLTANDO PARA RAIZ
echo ============================
cd ..

echo.
echo ============================
echo REALIZANDO DEPLOY
echo ============================
call npm run deploy

echo.
echo ============================
echo DEPLOY COMPLETO!
echo ============================
pause
