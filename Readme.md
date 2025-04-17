# CI/CD Pipeline Práctica – Aplicación Web Simple

Este proyecto es parte de una práctica académica cuyo objetivo es implementar un pipeline de CI/CD básico utilizando **GitHub Actions**, integrando pruebas automatizadas y despliegue a **GitHub Pages**.

## Estructura del Proyecto

test-app-ci-cd/ ├── .github/workflows/ci.yml # Archivo de workflow para GitHub Actions ├── public/ # Archivos para despliegue (si aplica) ├── tests/ │ └── app.test.js # Pruebas unitarias con Jest ├── index.js # Lógica principal de la app ├── package.json # Configuración del proyecto Node.js └── README.md # Documentación del proyecto

yaml
Copy code

---

## Tecnologías y Herramientas

- **Node.js** y **npm**
- **Jest** para pruebas unitarias
- **GitHub Actions** para CI/CD
- **GitHub Pages** para despliegue

---

## Instrucciones de Uso

### 1. Clonar el repositorio

```bash
git clone https://github.com/Franny-Alexandro/test-app-ci-cd.git
cd test-app-ci-cd
2. Instalar dependencias
bash
Copy code
npm install
3. Ejecutar pruebas
bash
Copy code
npm test
Esto ejecutará las pruebas con Jest y mostrará el reporte de cobertura.

Pruebas Automatizadas
Las pruebas están ubicadas en la carpeta tests/. Se usa Jest como framework de testing.

Ejemplo:

js
Copy code
// tests/app.test.js
const add = require('../index');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});
Integración Continua (CI)
Se ejecuta automáticamente en cada push o pull request a la rama main.

El workflow de GitHub Actions realiza los siguientes pasos:

Checkout del código

Instalación de dependencias (npm ci)

Ejecución de pruebas con cobertura (npx jest --coverage)

Despliegue a GitHub Pages (si las pruebas pasan)

Despliegue a GitHub Pages
Este proyecto se despliega automáticamente al branch gh-pages utilizando la acción peaceiris/actions-gh-pages.

Asegúrate de tener configurados los permisos del bot de GitHub Actions para escritura en los settings del repositorio.

Guía de Contribución
Haz un fork del repositorio.

Crea una nueva rama (git checkout -b feature/nueva-feature)

Realiza tus cambios y haz commit (git commit -m 'Agrega nueva feature')

Haz push a tu rama (git push origin feature/nueva-feature)

Abre un Pull Request desde GitHub.

Licencia
Este proyecto es únicamente con fines educativos.

Presentación
Puedes ver el video demostrativo en YouTube (enlace pendiente) o revisar la presentación en formato PPT/PDF explicando el pipeline paso a paso.

Autor
Franny Alexandro

GitHub: @Franny-Alexandro