# Script para iniciar todos os módulos do microfrontend
Write-Host "Iniciando módulos do microfrontend..." -ForegroundColor Green

# Função para matar processos em uma porta específica
function Stop-ProcessOnPort {
    param(
        [int]$Port
    )
    $processId = (Get-NetTCPConnection -LocalPort $Port -ErrorAction SilentlyContinue).OwningProcess
    if ($processId) {
        Stop-Process -Id $processId -Force
        Write-Host "Processo na porta $Port finalizado" -ForegroundColor Yellow
    }
}

# Parar processos nas portas utilizadas
Write-Host "Finalizando processos existentes..." -ForegroundColor Yellow
Stop-ProcessOnPort 3000
Stop-ProcessOnPort 4173
Stop-ProcessOnPort 4174
Stop-ProcessOnPort 4175

# Aguardar um momento para garantir que as portas foram liberadas
Start-Sleep -Seconds 2

# Iniciar os módulos
Write-Host "Iniciando app-shell na porta 3000..." -ForegroundColor Cyan
Set-Location app-shell; npm run rebuild-preview; Set-Location ..

Write-Host "Iniciando cargo na porta 4174..." -ForegroundColor Cyan
Set-Location cargo; npm run rebuild-preview; Set-Location ..

Write-Host "Iniciando desligamento na porta 4173..." -ForegroundColor Cyan
Set-Location desligamento; npm run rebuild-preview; Set-Location ..

Write-Host "Iniciando classes na porta 4175..." -ForegroundColor Cyan
Set-Location classes; npm run rebuild-preview; Set-Location ..

Write-Host "`nTodos os módulos foram iniciados!" -ForegroundColor Green
Write-Host "App Shell: http://localhost:3000"
Write-Host "Módulo de Cargos: http://localhost:4174"
Write-Host "Módulo de Desligamento: http://localhost:4173"
Write-Host "Módulo de Classes: http://localhost:4175" 