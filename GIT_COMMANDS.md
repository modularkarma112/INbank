# 🚀 Comandos Git para Trabajar con Ramas Específicas

## 📋 Tabla de Contenidos
- [Comandos Básicos](#comandos-básicos)
- [Crear y Cambiar Ramas](#crear-y-cambiar-ramas)
- [Subir Cambios a Ramas](#subir-cambios-a-ramas)
- [Fusionar Ramas](#fusionar-ramas)
- [Comandos Avanzados](#comandos-avanzados)
- [Flujo de Trabajo Completo](#flujo-de-trabajo-completo)

---

## 🔧 Comandos Básicos

### Ver todas las ramas
```bash
# Ver ramas locales
git branch

# Ver ramas remotas
git branch -r

# Ver todas las ramas (locales y remotas)
git branch -a
```

### Ver rama actual
```bash
git branch --show-current
```

### Ver estado del repositorio
```bash
git status
```

---

## 🌿 Crear y Cambiar Ramas

### Crear una nueva rama
```bash
# Crear rama desde la rama actual
git branch nombre-de-la-rama

# Crear y cambiar a la nueva rama en un solo comando
git checkout -b nombre-de-la-rama

# Alternativa moderna (Git 2.23+)
git switch -c nombre-de-la-rama
```

### Cambiar entre ramas
```bash
# Cambiar a una rama existente
git checkout nombre-de-la-rama

# Alternativa moderna (Git 2.23+)
git switch nombre-de-la-rama

# Cambiar a la rama anterior
git checkout -

# Cambiar a main/master
git checkout main
```

---

## 📤 Subir Cambios a Ramas

### Proceso completo para subir a una rama específica

#### 1️⃣ Agregar archivos modificados
```bash
# Agregar archivos específicos
git add archivo1.js archivo2.css

# Agregar todos los archivos modificados
git add .

# Agregar archivos por patrón
git add *.js
```

#### 2️⃣ Hacer commit
```bash
# Commit con mensaje
git commit -m "Descripción de los cambios"

# Commit con mensaje multilinea
git commit -m "Título del commit

Descripción detallada de los cambios:
- Cambio 1
- Cambio 2
- Cambio 3"
```

#### 3️⃣ Subir a rama específica
```bash
# Primera vez subiendo la rama
git push -u origin nombre-de-la-rama

# Subidas posteriores
git push origin nombre-de-la-rama

# Subir rama actual (si ya está configurada)
git push
```

### Comandos de subida avanzados
```bash
# Forzar subida (cuidado!)
git push --force origin nombre-de-la-rama

# Forzar subida segura
git push --force-with-lease origin nombre-de-la-rama

# Subir todas las ramas
git push --all origin

# Subir tags también
git push origin nombre-de-la-rama --tags
```

---

## 🔀 Fusionar Ramas

### Fusionar rama específica a main
```bash
# 1. Cambiar a main
git checkout main

# 2. Actualizar main
git pull origin main

# 3. Fusionar la rama
git merge nombre-de-la-rama

# 4. Subir los cambios fusionados
git push origin main
```

### Fusionar con squash (combinar commits)
```bash
git checkout main
git merge --squash nombre-de-la-rama
git commit -m "Mensaje del commit combinado"
git push origin main
```

---

## ⚡ Comandos Avanzados

### Sincronizar con rama remota
```bash
# Descargar cambios sin fusionar
git fetch origin

# Descargar y fusionar cambios
git pull origin nombre-de-la-rama

# Actualizar todas las ramas
git fetch --all
```

### Eliminar ramas
```bash
# Eliminar rama local
git branch -d nombre-de-la-rama

# Forzar eliminación de rama local
git branch -D nombre-de-la-rama

# Eliminar rama remota
git push origin --delete nombre-de-la-rama
```

### Renombrar ramas
```bash
# Renombrar rama actual
git branch -m nuevo-nombre

# Renombrar rama específica
git branch -m nombre-viejo nombre-nuevo

# Subir rama renombrada y eliminar la antigua
git push origin nuevo-nombre
git push origin --delete nombre-viejo
```

---

## 🔄 Flujo de Trabajo Completo

### Ejemplo: Trabajar en feature nueva

```bash
# 1. Estar en main y actualizarlo
git checkout main
git pull origin main

# 2. Crear nueva rama para el feature
git checkout -b feature/login-bancario

# 3. Hacer cambios en los archivos...
# (editar archivos con VS Code)

# 4. Ver qué cambió
git status
git diff

# 5. Agregar cambios
git add .

# 6. Hacer commit
git commit -m "feat: Implementar login bancario con Inter typography

- Reemplazar template default de Angular
- Agregar tipografía Inter desde Google Fonts  
- Implementar diseño glassmorphism
- Agregar soporte para background personalizado
- Crear formulario responsivo"

# 7. Subir la rama
git push -u origin feature/login-bancario

# 8. Cuando esté listo, fusionar a main
git checkout main
git pull origin main
git merge feature/login-bancario
git push origin main

# 9. Opcional: Eliminar rama del feature
git branch -d feature/login-bancario
git push origin --delete feature/login-bancario
```

---

## 🚨 Comandos de Emergencia

### Deshacer cambios
```bash
# Deshacer cambios no confirmados
git restore archivo.js

# Deshacer todos los cambios no confirmados
git restore .

# Deshacer último commit (mantener cambios)
git reset --soft HEAD~1

# Deshacer último commit (eliminar cambios)
git reset --hard HEAD~1
```

### Guardar trabajo temporal
```bash
# Guardar cambios temporalmente
git stash

# Recuperar cambios guardados
git stash pop

# Ver lista de stashes
git stash list
```

---

## 📚 Comandos Útiles del Día a Día

```bash
# Ver historial de commits
git log --oneline

# Ver cambios en un archivo específico
git log -p archivo.js

# Ver quién modificó cada línea
git blame archivo.js

# Comparar ramas
git diff main..feature/mi-rama

# Ver archivos modificados entre ramas
git diff --name-only main..feature/mi-rama
```

---

## 🎯 Convenciones de Nombres de Ramas

```bash
# Features nuevos
feature/nombre-del-feature
feature/login-bancario
feature/dashboard-usuarios

# Corrección de bugs
bugfix/descripcion-del-bug
hotfix/error-critico

# Mejoras
improvement/mejor-rendimiento
enhancement/ui-updates

# Releases
release/v1.2.0

# Ramas personales
tu-nombre/feature-experimental
juandi/login-redesign
```

---

## 💡 Tips y Mejores Prácticas

1. **Siempre hacer pull antes de push**
2. **Usar mensajes de commit descriptivos**
3. **Crear ramas para cada feature/bugfix**
4. **No hacer force push a main/master**
5. **Eliminar ramas después de fusionar**
6. **Usar --force-with-lease en lugar de --force**
7. **Revisar cambios con git diff antes de commit**

---

## 🔗 Enlaces Útiles

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Flow](https://guides.github.com/introduction/flow/)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

*📝 Creado para el proyecto INbank - Sistema Bancario*
