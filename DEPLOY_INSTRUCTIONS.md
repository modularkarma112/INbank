# 🚀 Instrucciones de Despliegue INBANK
## Configuración Específica para tu Servidor

**IP del Servidor EC2**: `3.139.254.175`
**Base de Datos Aurora**: `ingbank.c56w684so72d.us-east-2.rds.amazonaws.com`
**Región AWS**: `us-east-2` (Ohio)

---

## ✅ Paso 1: Conectarse al Servidor EC2

Primero necesitas tu archivo `.pem` (llave privada) que descargaste al crear la instancia EC2.

### Desde PowerShell en Windows:

```powershell
# Navegar a donde está tu archivo .pem
cd C:\ruta\a\tu\archivo

# Conectarse via SSH (reemplaza "tu-llave.pem" con el nombre real)
ssh -i tu-llave.pem ubuntu@3.139.254.175
```

**Nota**: Si te da error de permisos en Windows, puedes usar PuTTY o Windows Subsystem for Linux (WSL).

### Alternativa con PuTTY:
1. Descargar PuTTY y PuTTYgen
2. Convertir tu `.pem` a `.ppk` con PuTTYgen
3. En PuTTY configurar:
   - Host: `ubuntu@3.139.254.175`
   - Port: `22`
   - Auth > Private key: seleccionar tu `.ppk`

---

## ✅ Paso 2: Configurar el Servidor (Solo Primera Vez)

Una vez conectado via SSH, ejecutar:

```bash
# Actualizar el sistema
sudo apt update && sudo apt upgrade -y

# Instalar Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verificar instalación
node --version  # Debe mostrar v20.x.x
npm --version   # Debe mostrar 10.x.x

# Instalar herramientas necesarias
sudo npm install -g pm2
sudo apt install -y nginx git mysql-client

# Crear directorio para la aplicación
mkdir -p /home/ubuntu/inbank
cd /home/ubuntu/inbank
```

---

## ✅ Paso 3: Subir Archivos al Servidor

### Opción A: Usar SCP (Desde Windows PowerShell)

```powershell
# Navegar a tu proyecto
cd "C:\Users\david\OneDrive\Escritorio\Escuela\noveno\Inteligencia de Negocios\repo\INbank"

# Subir archivos compilados (reemplaza "tu-llave.pem")
scp -i C:\ruta\a\tu-llave.pem -r dist-server ubuntu@3.139.254.175:/home/ubuntu/inbank/
scp -i C:\ruta\a\tu-llave.pem -r dist ubuntu@3.139.254.175:/home/ubuntu/inbank/
scp -i C:\ruta\a\tu-llave.pem package.json ubuntu@3.139.254.175:/home/ubuntu/inbank/
scp -i C:\ruta\a\tu-llave.pem package-lock.json ubuntu@3.139.254.175:/home/ubuntu/inbank/
scp -i C:\ruta\a\tu-llave.pem .env ubuntu@3.139.254.175:/home/ubuntu/inbank/.env
```

### Opción B: Usar Git (Recomendado)

```bash
# En el servidor EC2 (conectado via SSH)
cd /home/ubuntu/inbank
git clone https://github.com/modularkarma112/INbank.git .

# Instalar dependencias
npm install --production

# Compilar en el servidor
npm run build:api
npm run build
```

### Opción C: Usar WinSCP (GUI para Windows)
1. Descargar WinSCP
2. Conectar a `3.139.254.175` con tu `.ppk`
3. Arrastrar carpetas manualmente

---

## ✅ Paso 4: Configurar Variables de Entorno en el Servidor

```bash
# En el servidor EC2
cd /home/ubuntu/inbank
nano .env
```

**Pegar este contenido** (presiona `Ctrl+O` para guardar, `Ctrl+X` para salir):

```env
PORT=4000
DB_HOST=ingbank.c56w684so72d.us-east-2.rds.amazonaws.com
DB_PORT=3306
DB_USER=admin
DB_PASSWORD=a1s2d3f4
DB_NAME=INGBANK

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=p2those@gmail.com
SMTP_PASS=vyay rkhf msii sclt
SMTP_FROM=noreply@inbank.com
BANK_NAME=INBANK

NODE_ENV=production
JWT_SECRET=tu_secreto_super_seguro_cambiar_esto_12345
```

---

## ✅ Paso 5: Inicializar Base de Datos (Solo Primera Vez)

```bash
# Verificar conexión a la base de datos
mysql -h ingbank.c56w684so72d.us-east-2.rds.amazonaws.com -u admin -p

# Cuando te pida password, ingresa: a1s2d3f4

# Dentro de MySQL:
USE INGBANK;
SHOW TABLES;  # Verificar si ya existen tablas

# Si NO existen tablas, salir (escribir: exit) y ejecutar:
npm run initdb:api

# Opcional: Cargar datos de prueba
npm run seed:api
```

---

## ✅ Paso 6: Iniciar la Aplicación con PM2

```bash
cd /home/ubuntu/inbank

# Iniciar el servidor backend
pm2 start dist-server/index.js --name inbank-api

# Verificar que esté corriendo
pm2 status
pm2 logs inbank-api

# Configurar para que inicie automáticamente al reiniciar servidor
pm2 startup
# Copiar y ejecutar el comando que te muestra
pm2 save

# Verificar que funcione
curl http://localhost:4000/health
# Debe responder: {"status":"ok"}
```

---

## ✅ Paso 7: Configurar Nginx

```bash
# Crear archivo de configuración
sudo nano /etc/nginx/sites-available/inbank
```

**Pegar esta configuración**:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name 3.139.254.175;

    access_log /var/log/nginx/inbank_access.log;
    error_log /var/log/nginx/inbank_error.log;

    # Backend API
    location /api/ {
        proxy_pass http://localhost:4000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Health check
    location /health {
        proxy_pass http://localhost:4000/health;
        access_log off;
    }

    # Frontend Angular
    location / {
        root /home/ubuntu/inbank/dist/INBANK/browser;
        try_files $uri $uri/ /index.html;
        
        # Cache para assets
        location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Gzip
    gzip on;
    gzip_vary on;
    gzip_types text/plain text/css text/javascript application/javascript application/json;
}
```

**Guardar** (`Ctrl+O`, Enter, `Ctrl+X`) y luego:

```bash
# Habilitar el sitio
sudo ln -s /etc/nginx/sites-available/inbank /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default

# Verificar configuración
sudo nginx -t

# Si sale "test is successful", reiniciar Nginx
sudo systemctl restart nginx
sudo systemctl enable nginx
```

---

## ✅ Paso 8: Configurar Security Group en AWS

1. Ve a **AWS Console > EC2 > Security Groups**
2. Encuentra el security group de tu instancia
3. **Editar Inbound Rules**:

| Tipo  | Protocolo | Puerto | Origen       | Descripción        |
|-------|-----------|--------|--------------|-------------------|
| SSH   | TCP       | 22     | Tu IP        | Acceso SSH        |
| HTTP  | TCP       | 80     | 0.0.0.0/0    | Tráfico web       |
| HTTPS | TCP       | 443    | 0.0.0.0/0    | Tráfico seguro    |

---

## ✅ Paso 9: Verificar que Todo Funciona

### En el servidor (via SSH):
```bash
# Ver logs del backend
pm2 logs inbank-api

# Ver estado
pm2 status

# Verificar health
curl http://localhost:4000/health
```

### Desde tu navegador:
```
http://3.139.254.175/health
# Debe mostrar: {"status":"ok"}

http://3.139.254.175
# Debe cargar la aplicación INBANK
```

---

## ✅ Paso 10: Conectar Dominio (Opcional)

Si tienes un dominio (por ejemplo: `inbank.com`):

### A. Configurar DNS:
1. Ve a tu registrador de dominios (GoDaddy, Namecheap, etc.)
2. Agregar registro **A**:
   - **Host**: `@` (o vacío para raíz)
   - **Value**: `3.139.254.175`
   - **TTL**: 300

3. Agregar registro **A** para www:
   - **Host**: `www`
   - **Value**: `3.139.254.175`
   - **TTL**: 300

### B. Actualizar Nginx:
```bash
sudo nano /etc/nginx/sites-available/inbank

# Cambiar la línea:
server_name 3.139.254.175;
# Por:
server_name tudominio.com www.tudominio.com;

# Guardar y reiniciar
sudo nginx -t
sudo systemctl restart nginx
```

### C. Instalar SSL (Certificado HTTPS):
```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d tudominio.com -d www.tudominio.com

# Seguir las instrucciones:
# - Ingresar email
# - Aceptar términos
# - Elegir redireccionar automáticamente a HTTPS
```

---

## 🔧 Comandos Útiles

```bash
# Ver logs en tiempo real
pm2 logs inbank-api

# Reiniciar aplicación
pm2 restart inbank-api

# Ver estado
pm2 status

# Ver uso de recursos
pm2 monit

# Actualizar código (después de cambios)
cd /home/ubuntu/inbank
git pull
npm install
npm run build:api
npm run build
pm2 restart inbank-api
```

---

## 🆘 Solución de Problemas

### Error: No se puede conectar a la base de datos
```bash
# Verificar conexión
mysql -h ingbank.c56w684so72d.us-east-2.rds.amazonaws.com -u admin -p

# Verificar variables de entorno
cat .env

# Verificar Security Group de RDS permite conexión desde EC2
```

### Error: Nginx muestra 502 Bad Gateway
```bash
# Verificar que el backend esté corriendo
pm2 status
curl http://localhost:4000/health

# Ver logs de Nginx
sudo tail -f /var/log/nginx/error.log

# Reiniciar servicios
pm2 restart inbank-api
sudo systemctl restart nginx
```

### Error: Cannot GET /api/...
```bash
# Verificar que el backend responda
curl http://localhost:4000/health
pm2 logs inbank-api --lines 50
```

---

## 📞 Checklist Final

- [ ] Conexión SSH al servidor funciona
- [ ] Node.js, PM2, Nginx instalados
- [ ] Archivos subidos al servidor
- [ ] `.env` configurado correctamente
- [ ] Base de datos inicializada
- [ ] PM2 corriendo con `inbank-api`
- [ ] Nginx configurado y corriendo
- [ ] Security Group permite HTTP (80) y HTTPS (443)
- [ ] `http://3.139.254.175/health` retorna `{"status":"ok"}`
- [ ] `http://3.139.254.175` carga la aplicación

---

**¡Listo!** Tu aplicación INBANK ya debe estar funcionando en AWS 🎉

