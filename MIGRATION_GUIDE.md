# Guía de Migración: GitLab → GitHub con Mirror Automático

Esta guía te ayudará a migrar tu portafolio de GitLab a GitHub como fuente principal, y configurar un mirror automático desde GitHub hacia GitLab como respaldo.

## 📋 Requisitos Previos

- Cuenta de GitHub
- Cuenta de GitLab
- Git instalado en tu computadora
- Personal Access Token de GitLab (lo crearemos en el paso 3)

---

## 🚀 Paso 1: Crear Repositorio en GitHub

1. Ve a [GitHub](https://github.com) e inicia sesión
2. Haz clic en el botón **"+"** en la esquina superior derecha → **"New repository"**
3. Configura el repositorio:
   - **Repository name**: `mugencode_page` (o el nombre que prefieras)
   - **Description**: "Portafolio personal - Deyton Riascos Ortiz"
   - **Visibility**: Public
   - ⚠️ **NO** marques "Add a README file"
   - ⚠️ **NO** añadas .gitignore ni licencia (ya los tienes)
4. Haz clic en **"Create repository"**

---

## 📤 Paso 2: Migrar el Código a GitHub

Abre tu terminal en el directorio del proyecto y ejecuta:

```bash
# Verificar el remote actual (debería mostrar GitLab)
git remote -v

# Renombrar el remote de GitLab a 'gitlab'
git remote rename origin gitlab

# Añadir GitHub como el nuevo 'origin'
git remote add origin https://github.com/TU_USUARIO/mugencode_page.git

# Verificar que ambos remotes estén configurados
git remote -v
# Deberías ver:
# origin    https://github.com/TU_USUARIO/mugencode_page.git (fetch)
# origin    https://github.com/TU_USUARIO/mugencode_page.git (push)
# gitlab    https://gitlab.com/TU_USUARIO/mugencode_page.git (fetch)
# gitlab    https://gitlab.com/TU_USUARIO/mugencode_page.git (push)

# Cambiar la rama principal a 'main' (si aún usas 'master')
git branch -M main

# Hacer push a GitHub
git push -u origin main
```

---

## ⚙️ Paso 3: Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Haz clic en **"Settings"** (Configuración)
3. En el menú lateral, haz clic en **"Pages"**
4. En **"Build and deployment"**:
   - **Source**: Selecciona "GitHub Actions"
5. El workflow `.github/workflows/deploy.yml` ya está configurado
6. Haz un commit y push para activar el deploy:

```bash
git add .
git commit -m "Activar GitHub Pages"
git push origin main
```

7. Ve a la pestaña **"Actions"** en tu repositorio para ver el progreso del deploy
8. Una vez completado, tu sitio estará disponible en:
   - `https://TU_USUARIO.github.io/mugencode_page/`

---

## 🔄 Paso 4: Configurar Mirror Automático desde GitHub a GitLab

### 4.1 Crear Personal Access Token en GitLab

1. Ve a [GitLab](https://gitlab.com) e inicia sesión
2. Haz clic en tu avatar → **"Preferences"**
3. En el menú lateral, haz clic en **"Access Tokens"**
4. Haz clic en **"Add new token"**
5. Configura el token:
   - **Token name**: `GitHub Mirror`
   - **Expiration date**: Selecciona una fecha lejana (ej: 1 año)
   - **Scopes**: Marca **`write_repository`**
6. Haz clic en **"Create personal access token"**
7. **⚠️ IMPORTANTE**: Copia el token y guárdalo en un lugar seguro (no podrás verlo de nuevo)

### 4.2 Configurar el Mirror en GitHub

1. Ve a tu repositorio en GitHub
2. Haz clic en **"Settings"** → **"Secrets and variables"** → **"Actions"**
3. Haz clic en **"New repository secret"**
4. Configura el secret:
   - **Name**: `GITLAB_TOKEN`
   - **Secret**: Pega el Personal Access Token de GitLab que copiaste
5. Haz clic en **"Add secret"**

### 4.3 Crear Workflow de Mirror

Crea el archivo `.github/workflows/mirror-to-gitlab.yml`:

```yaml
name: Mirror to GitLab

on:
  push:
    branches:
      - main

jobs:
  mirror:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0
          
      - name: Mirror to GitLab
        env:
          GITLAB_TOKEN: ${{ secrets.GITLAB_TOKEN }}
        run: |
          git remote add gitlab https://oauth2:${GITLAB_TOKEN}@gitlab.com/TU_USUARIO/mugencode_page.git
          git push gitlab main --force
```

**⚠️ Reemplaza `TU_USUARIO` con tu nombre de usuario de GitLab**

### 4.4 Activar el Mirror

```bash
# Crear el archivo de workflow
mkdir -p .github/workflows
# (Copia el contenido del workflow arriba en el archivo)

# Commit y push
git add .github/workflows/mirror-to-gitlab.yml
git commit -m "Añadir mirror automático a GitLab"
git push origin main
```

---

## ✅ Paso 5: Verificar que Todo Funciona

### Verificar GitHub Pages

1. Visita `https://TU_USUARIO.github.io/mugencode_page/`
2. Verifica que el sitio se vea correctamente
3. Prueba la funcionalidad PWA (botón de instalar en Chrome)

### Verificar Mirror de GitLab

1. Haz un cambio pequeño en tu proyecto:

```bash
# Edita el README.md o cualquier archivo
echo "# Test mirror" >> README.md

# Commit y push a GitHub
git add README.md
git commit -m "Test: verificar mirror automático"
git push origin main
```

2. Ve a la pestaña **"Actions"** en GitHub
3. Verifica que ambos workflows se ejecuten correctamente:
   - ✅ Deploy to GitHub Pages
   - ✅ Mirror to GitLab

4. Espera 1-2 minutos y ve a tu repositorio en GitLab
5. Verifica que el cambio aparezca en GitLab automáticamente

---

## 🎯 Resultado Final

Ahora tienes:

✅ **GitHub** como fuente principal con GitHub Pages activo  
✅ **GitLab** como mirror automático (respaldo)  
✅ Cada push a GitHub actualiza automáticamente GitLab  
✅ Portafolio mejorado con SEO, PWA y accesibilidad  

---

## 📝 Actualizar URLs en el Código

No olvides actualizar las URLs en los siguientes archivos:

1. **`sitemap.xml`**: Reemplaza `https://tuusuario.github.io/mugencode_page/` con tu URL real
2. **`robots.txt`**: Actualiza la URL del sitemap
3. **Todos los archivos HTML**: Actualiza las meta tags de Open Graph y Twitter Cards con tu URL real
4. **`manifest.json`**: Verifica que la configuración sea correcta

```bash
# Buscar y reemplazar en todos los archivos
# En Windows PowerShell:
(Get-Content -Path "archivo.html") -replace "tuusuario", "TU_USUARIO_REAL" | Set-Content -Path "archivo.html"
```

---

## 🔧 Comandos Útiles

```bash
# Ver todos los remotes configurados
git remote -v

# Push manual a GitLab (si es necesario)
git push gitlab main

# Ver el estado de los workflows en GitHub
# Ve a: https://github.com/TU_USUARIO/mugencode_page/actions

# Actualizar el mirror manualmente
git push gitlab main --force
```

---

## 🆘 Solución de Problemas

### El mirror no funciona

1. Verifica que el token de GitLab sea válido
2. Verifica que el secret `GITLAB_TOKEN` esté configurado en GitHub
3. Revisa los logs del workflow en la pestaña "Actions"

### GitHub Pages no se actualiza

1. Ve a Settings → Pages y verifica que esté configurado correctamente
2. Revisa los logs del workflow "Deploy to GitHub Pages"
3. Asegúrate de que el workflow tenga permisos de escritura

### Error de permisos

Si ves errores de permisos en los workflows:

1. Ve a Settings → Actions → General
2. En "Workflow permissions", selecciona "Read and write permissions"
3. Haz clic en "Save"

---

## 📚 Recursos Adicionales

- [Documentación de GitHub Pages](https://docs.github.com/en/pages)
- [Documentación de GitHub Actions](https://docs.github.com/en/actions)
- [Documentación de GitLab Mirroring](https://docs.gitlab.com/ee/user/project/repository/mirror/)

---

¡Felicidades! Tu portafolio ahora está alojado en GitHub con un respaldo automático en GitLab. 🎉
