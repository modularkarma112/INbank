#!/bin/bash

# Script de despliegue para INBANK en EC2
# Uso: ./deploy.sh

set -e

echo "🚀 Iniciando despliegue de INBANK..."

# Variables
APP_DIR="/home/ubuntu/INbank"
ENV_FILE=".env.production"

# 1. Actualizar código (desde Git)
echo "📥 Actualizando código..."
cd $APP_DIR
git pull origin main

# 2. Instalar dependencias
echo "📦 Instalando dependencias..."
npm install --production=false

# 3. Compilar backend
echo "🔨 Compilando backend..."
npm run build:api

# 4. Compilar frontend
echo "🎨 Compilando frontend..."
npm run build

# 5. Reiniciar servidor con PM2
echo "🔄 Reiniciando servidor..."
pm2 restart inbank-api

# 6. Verificar salud
echo "🏥 Verificando salud del servidor..."
sleep 3
curl -f http://localhost:4000/health || echo "⚠️ Advertencia: Health check falló"

echo "✅ Despliegue completado!"
echo "📊 Estado de PM2:"
pm2 status

echo ""
echo "📝 Logs disponibles con: pm2 logs inbank-api"
echo "📊 Monitoreo con: pm2 monit"
