@echo off
echo Iniciando modulos do microfrontend...

REM Matar processos existentes
taskkill /F /IM node.exe 2>nul

REM Aguardar um momento
timeout /t 2 /nobreak

REM Iniciar app-shell
echo Iniciando App Shell...
cd app-shell
start /B cmd /c "npm run rebuild-preview"
cd ..

REM Iniciar cargo
echo Iniciando Cargo...
cd cargo
start /B cmd /c "npm run rebuild-preview"
cd ..

REM Iniciar desligamento
echo Iniciando Desligamento...
cd desligamento
start /B cmd /c "npm run rebuild-preview"
cd ..

REM Iniciar classes
echo Iniciando Classes...
cd classes
start /B cmd /c "npm run rebuild-preview"
cd ..

echo.
echo Todos os modulos foram iniciados!
echo App Shell: http://localhost:3000
echo Modulo de Cargos: http://localhost:4174
echo Modulo de Desligamento: http://localhost:4173
echo Modulo de Classes: http://localhost:4175

pause 