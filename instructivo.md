#  Instructivo para estudiantes – Contribuir al proyecto desde VS Code (como colaboradores directos)

Este instructivo te guiará para trabajar en el repositorio `simon-proa` directamente desde Visual Studio Code.

---

## ✅ Requisitos previos

1. Tener una cuenta de **GitHub**.
2. Haber sido **agregado como colaborador** en el repositorio `https://github.com/lole-s/simon-proa` (vas a recibir un mail para aceptar la invitación).
3. Tener instalados en tu computadora:

   * [Git](https://git-scm.com/)
   * [Visual Studio Code](https://code.visualstudio.com/)
   * Extensión de **GitHub** en VS Code (opcional pero útil)

---

## 🔁 1. Clonar el repositorio en tu computadora

1. Abrí Visual Studio Code.
2. Presioná `Ctrl + Shift + P` (o `Cmd + Shift + P` en Mac) y escribí:

   ```
   Git: Clone
   ```
3. Pegá esta URL:

   ```
   https://github.com/lole-s/simon-proa.git
   ```
4. Elegí una carpeta para guardar el proyecto.
5. Cuando te pregunte si querés **abrir el proyecto clonado**, hacé clic en **"Sí"**.

---

## 🌿 2. Crear una nueva rama para tu tarea

Esto evita modificar directamente la rama principal (`main`).

1. En la barra inferior de VS Code, hacé clic sobre el nombre de la rama (probablemente diga `main`).
2. Elegí **"Create new branch"** y poné un nombre, por ejemplo:

   ```
   tarea-nombre-apellido
   ```

---

## ✏️ 3. Hacer tus cambios

1. Editá los archivos del proyecto según tu tarea.
2. Guardá los cambios (`Ctrl + S`).

---

## 💾 4. Hacer commit de tus cambios

1. En la barra lateral izquierda, hacé clic en el ícono de **control de código fuente** (parece un símbolo de rama `<>`).
2. Escribí un mensaje descriptivo en el campo que dice `Message` (ej: `Agrego función para secuencia aleatoria`).
3. Hacé clic en el ícono de ✓ (check) para hacer commit.

---

## 📤 5. Subir tu rama (push)

1. Luego del commit, hacé clic en el botón azul que dice **"Publish branch"** o "Push".
2. Esto subirá tu rama al repositorio remoto en GitHub.

---

## 🔁 6. (Opcional) Crear un Pull Request

Si querés que el profe revise tu código antes de que se una a `main`:

1. Abrí GitHub y entrá a tu rama recién subida.
2. Vas a ver un botón que dice **"Compare & pull request"**.
3. Hacé clic, escribí un mensaje claro y creá el pull request.

> *Si estás autorizado a trabajar directo en `main`, podés evitar este paso.*

---

## ♻️ 7. Actualizar tu copia del repositorio

Antes de empezar una nueva tarea o si alguien más subió cambios, hacé lo siguiente para tener la última versión:

1. Asegurate de estar en la rama `main`:

   ```bash
   git checkout main
   ```
2. Traé los cambios del servidor:

   ```bash
   git pull origin main
   ```

---

## 🆘 ¿Problemas?

Si ves errores al hacer `push`, puede ser porque:

* No aceptaste la invitación como colaborador.
* Estás tratando de subir a `main` sin permisos.
* Tenés conflictos. Preguntá al profe o pedí ayuda.

