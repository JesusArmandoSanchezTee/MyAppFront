📱 MyAppFront — App Segura con Autenticación en React Native
Aplicación desarrollada como prueba técnica para evaluar competencias en seguridad, arquitectura escalable, patrones de diseño y gestión avanzada de estado en un entorno móvil usando Expo + React Native + TypeScript.

✅ Tecnologías principales
Expo (para facilitar desarrollo y testing multiplataforma)

React Native + TypeScript

TanStack Query (@tanstack/react-query)

Zustand (manejo de estado global)

expo-secure-store (almacenamiento seguro nativo)

Axios (peticiones HTTP)

Formik + Yup (validación de formularios)

.NET 8 como backend simulado (no incluido en este repo)

📂 Estructura del Proyecto (Clean Architecture)

src/
├── api/                     # Acceso a servicios HTTP
├── domain/                 # Modelos y reglas de negocio
├── infrastructure/         # Servicios externos, adaptadores
├── presentation/           # Pantallas y navegación
├── store/                  # Zustand: estado global
├── utils/                  # Validaciones, helpers
✅ Capas:
Domain: contiene entidades y definiciones de contratos (User.ts)

Infrastructure: servicios como secureStorage.ts, adaptador de almacenamiento seguro (Patrón Adapter)

Presentation: UI + navegación

Store: control de estado con Zustand

API: implementación de repositorios (Patrón Repository)

🛡️ Seguridad
Almacenamiento seguro del token usando expo-secure-store

Recuperación automática de sesión desde almacenamiento seguro

Pantallas protegidas vía estado global de autenticación

Logout seguro con borrado explícito del token

Formulario validado con Formik + Yup

🧠 Patrones de Diseño Aplicados
Patrón	Uso
Repository	userRepository.ts abstrae el acceso a la API
Adapter	secureStorage.ts encapsula expo-secure-store
Factory (opcional)	Para instanciar clientes HTTP o servicios si fuera necesario
Dependency Injection	Servicios pasados como parámetros o instanciados modularmente
Observer	Zustand + listeners para detectar logout/token expiration (si aplica)

⚙️ Estado y datos
📌 TanStack Query
Usado para login, recuperación de sesión y refetching.

Control de errores, estado de carga y cache automático.

🧩 Zustand
Estado global: isAuthenticated, token, user

Acciones limpias: login(), logout(), setUser()

Persistencia opcional con middleware y uso de SecureStore

🚀 Funcionalidades
✅ Login con validación

✅ Registro con validación

✅ Recuperación automática de sesión

✅ Navegación segura tras autenticación

✅ Logout con borrado seguro

✅ Home protegida (sólo accesible con sesión activa)

🧪 Desarrollo y ejecución

# Instalar dependencias
yarn install

# Ejecutar app con Expo
yarn start


🔐 Notas técnicas

Se utilizó expo-secure-store por ser compatible directamente con Expo y ofrecer almacenamiento cifrado.

react-query maneja el flujo de login/sesión con control de carga y errores.

La app está dividida por capas siguiendo Clean Architecture.

El token se guarda y valida antes de navegar, protegiendo las rutas privadas.

No se usó redux por simplicidad y eficiencia de Zustand en proyectos medianos.
