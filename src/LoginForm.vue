<template>
  <div class="login-card">
    <!-- Pantalla de recuperación de contraseña -->
    <div v-if="showForgotPassword" class="forgot-password-screen">
      <div class="login-header">
        <h1 class="login-title">Recuperar Contraseña</h1>
        <p class="login-subtitle">Ingresa tu correo electrónico para recibir un enlace de recuperación</p>
      </div>

      <form @submit.prevent="handleForgotPassword" class="login-form">
        <div class="form-group">
          <label for="forgotEmail" class="form-label">Correo Electrónico</label>
          <input
            id="forgotEmail"
            v-model="forgotEmail"
            type="email"
            class="form-input"
            :class="{ 'error': forgotEmailError }"
            placeholder="Ingresa tu correo electrónico"
            required
          />
          <span v-if="forgotEmailError" class="error-message">{{ forgotEmailError }}</span>
        </div>

        <button
          type="submit"
          class="login-button"
          :class="{ 'loading': isLoading }"
          :disabled="isLoading"
        >
          <span v-if="!isLoading">Enviar Enlace de Recuperación</span>
          <span v-else class="loading-text">
            <svg class="loading-spinner" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" opacity="0.25"/>
              <path fill="currentColor" opacity="0.75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
            </svg>
            Enviando...
          </span>
        </button>
      </form>

      <div class="login-footer">
        <p class="signup-text">
          <a href="#" @click.prevent="showForgotPassword = false" class="signup-link">
            ← Volver al inicio de sesión
          </a>
        </p>
      </div>
    </div>

    <!-- Pantalla principal de login/registro -->
    <div v-else>
      <div class="login-header">
        <h1 class="login-title">{{ isLogin ? 'Bienvenido de Nuevo' : 'Crear Cuenta' }}</h1>
        <p class="login-subtitle">{{ isLogin ? 'Inicia sesión para acceder a tu panel' : 'Regístrate para comenzar' }}</p>
      </div>

      <form @submit.prevent="handleSubmit" class="login-form">
        <!-- Nombre completo (solo para registro) -->
        <div v-if="!isLogin" class="form-group">
          <label for="fullName" class="form-label">Nombre Completo</label>
          <input
            id="fullName"
            v-model="fullName"
            type="text"
            class="form-input"
            :class="{ 'error': fullNameError }"
            placeholder="Ingresa tu nombre completo"
            :required="!isLogin"
          />
          <span v-if="fullNameError" class="error-message">{{ fullNameError }}</span>
        </div>

        <!-- Email -->
        <div class="form-group">
          <label for="email" class="form-label">Correo Electrónico</label>
          <input
            id="email"
            v-model="email"
            type="email"
            class="form-input"
            :class="{ 'error': emailError }"
            placeholder="Ingresa tu correo electrónico"
            required
          />
          <span v-if="emailError" class="error-message">{{ emailError }}</span>
        </div>

        <!-- Contraseña -->
        <div class="form-group">
          <label for="password" class="form-label">Contraseña</label>
          <input
            id="password"
            v-model="password"
            type="password"
            class="form-input"
            :class="{ 'error': passwordError }"
            :placeholder="isLogin ? 'Ingresa tu contraseña' : 'Crea una contraseña (mín. 6 caracteres)'"
            required
          />
          <span v-if="passwordError" class="error-message">{{ passwordError }}</span>
        </div>

        <!-- Confirmar contraseña (solo para registro) -->
        <div v-if="!isLogin" class="form-group">
          <label for="confirmPassword" class="form-label">Confirmar Contraseña</label>
          <input
            id="confirmPassword"
            v-model="confirmPassword"
            type="password"
            class="form-input"
            :class="{ 'error': confirmPasswordError }"
            placeholder="Confirma tu contraseña"
            :required="!isLogin"
          />
          <span v-if="confirmPasswordError" class="error-message">{{ confirmPasswordError }}</span>
        </div>

        <!-- Opciones del formulario -->
        <div class="form-options">
          <label v-if="isLogin" class="checkbox-label">
            <input type="checkbox" v-model="rememberMe" class="checkbox">
            <span class="checkbox-text">Recordarme</span>
          </label>
          <label v-else class="checkbox-label">
            <input type="checkbox" v-model="acceptTerms" class="checkbox">
            <span class="checkbox-text">Acepto los términos y condiciones</span>
          </label>
          <a v-if="isLogin" href="#" @click.prevent="showForgotPassword = true" class="forgot-link">
            ¿Olvidaste tu contraseña?
          </a>
        </div>

        <!-- Botón de envío -->
        <button
          type="submit"
          class="login-button"
          :class="{ 'loading': isLoading }"
          :disabled="isLoading || (!isLogin && !acceptTerms)"
        >
          <span v-if="!isLoading">{{ isLogin ? 'Iniciar Sesión' : 'Crear Cuenta' }}</span>
          <span v-else class="loading-text">
            <svg class="loading-spinner" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" opacity="0.25"/>
              <path fill="currentColor" opacity="0.75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
            </svg>
            {{ isLogin ? 'Iniciando sesión...' : 'Creando cuenta...' }}
          </span>
        </button>
      </form>

      <div class="login-footer">
        <p class="signup-text">
          {{ isLogin ? '¿No tienes una cuenta?' : '¿Ya tienes una cuenta?' }}
          <a href="#" @click.prevent="toggleMode" class="signup-link">
            {{ isLogin ? 'Regístrate' : 'Inicia sesión' }}
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Estado del formulario
const isLogin = ref(true)
const email = ref('')
const password = ref('')
const fullName = ref('')
const confirmPassword = ref('')
const rememberMe = ref(false)
const acceptTerms = ref(false)
const isLoading = ref(false)

// Estado de recuperación de contraseña
const showForgotPassword = ref(false)
const forgotEmail = ref('')
const forgotEmailError = ref('')

// Errores
const emailError = ref('')
const passwordError = ref('')
const fullNameError = ref('')
const confirmPasswordError = ref('')

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const resetErrors = () => {
  emailError.value = ''
  passwordError.value = ''
  fullNameError.value = ''
  confirmPasswordError.value = ''
  forgotEmailError.value = ''
}

const validateForm = () => {
  resetErrors()
  let isValid = true

  // Validar nombre completo (solo para registro)
  if (!isLogin.value) {
    if (!fullName.value.trim()) {
      fullNameError.value = 'El nombre completo es requerido'
      isValid = false
    } else if (fullName.value.trim().length < 2) {
      fullNameError.value = 'El nombre debe tener al menos 2 caracteres'
      isValid = false
    }
  }

  // Validar email
  if (!email.value) {
    emailError.value = 'El correo electrónico es requerido'
    isValid = false
  } else if (!validateEmail(email.value)) {
    emailError.value = 'Por favor ingresa un correo electrónico válido'
    isValid = false
  }

  // Validar contraseña
  if (!password.value) {
    passwordError.value = 'La contraseña es requerida'
    isValid = false
  } else if (password.value.length < 6) {
    passwordError.value = 'La contraseña debe tener al menos 6 caracteres'
    isValid = false
  }

  // Validar confirmación de contraseña (solo para registro)
  if (!isLogin.value) {
    if (!confirmPassword.value) {
      confirmPasswordError.value = 'Confirma tu contraseña'
      isValid = false
    } else if (password.value !== confirmPassword.value) {
      confirmPasswordError.value = 'Las contraseñas no coinciden'
      isValid = false
    }
  }

  return isValid
}

const handleSubmit = async () => {
  if (!validateForm()) {
    return
  }

  isLoading.value = true
  
  try {
    // Simular llamada a API
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    if (isLogin.value) {
      // Lógica de inicio de sesión
      console.log('Intento de inicio de sesión:', {
        email: email.value,
        password: password.value,
        rememberMe: rememberMe.value
      })
      alert('¡Inicio de sesión exitoso! Redirigiendo al panel...')
    } else {
      // Lógica de registro
      console.log('Intento de registro:', {
        fullName: fullName.value,
        email: email.value,
        password: password.value,
        acceptTerms: acceptTerms.value
      })
      alert('¡Cuenta creada exitosamente! Ahora puedes iniciar sesión.')
      // Cambiar a modo login después del registro exitoso
      toggleMode()
    }
    
  } catch (error) {
    console.error('Error:', error)
    if (isLogin.value) {
      passwordError.value = 'Credenciales inválidas. Por favor intenta de nuevo.'
    } else {
      emailError.value = 'Error al crear la cuenta. El correo podría estar en uso.'
    }
  } finally {
    isLoading.value = false
  }
}

const handleForgotPassword = async () => {
  forgotEmailError.value = ''
  
  if (!forgotEmail.value) {
    forgotEmailError.value = 'El correo electrónico es requerido'
    return
  }
  
  if (!validateEmail(forgotEmail.value)) {
    forgotEmailError.value = 'Por favor ingresa un correo electrónico válido'
    return
  }

  isLoading.value = true
  
  try {
    // Simular envío de email
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Solicitud de recuperación de contraseña:', {
      email: forgotEmail.value
    })
    
    alert('¡Enlace de recuperación enviado! Revisa tu correo electrónico.')
    showForgotPassword.value = false
    forgotEmail.value = ''
    
  } catch (error) {
    console.error('Error:', error)
    forgotEmailError.value = 'Error al enviar el enlace. Por favor intenta de nuevo.'
  } finally {
    isLoading.value = false
  }
}

const toggleMode = () => {
  isLogin.value = !isLogin.value
  resetErrors()
  // Limpiar campos específicos del registro
  if (isLogin.value) {
    fullName.value = ''
    confirmPassword.value = ''
    acceptTerms.value = false
  } else {
    rememberMe.value = false
  }
  email.value = ''
  password.value = ''
}
</script>

<style scoped>
.login-card {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 450px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.login-header {
  text-align: center;
  margin-bottom: 2rem;
}

.login-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1E40AF;
  margin: 0;
}

.login-subtitle {
  font-size: 1rem;
  color: #4B5563;
  margin-top: 0.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
}

.form-input {
  width: 100%;
  font-size: 1rem;
  border: 1px solid #D1D5DB;
  border-radius: 0.5rem;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.form-input:focus {
  outline: none;
  border-color: #3B82F6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
}

.form-input.error {
  border-color: #EF4444;
}

.error-message {
  color: #EF4444;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.checkbox-label {
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: #4B5563;
  cursor: pointer;
}

.checkbox {
  margin-right: 0.5rem;
}

.forgot-link {
  font-size: 0.875rem;
  color: #3B82F6;
  text-decoration: none;
  transition: color 0.2s;
}

.forgot-link:hover {
  color: #1E40AF;
}

.login-button {
  width: 100%;
  padding: 0.875rem;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background-color: #3B82F6;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.1s;
}

.login-button:hover {
  background-color: #2563EB;
}

.login-button:active {
  transform: scale(0.98);
}

.login-button:disabled {
  background-color: #9CA3AF;
  cursor: not-allowed;
}

.loading-spinner {
  display: inline-block;
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.login-footer {
  text-align: center;
  margin-top: 2rem;
}

.signup-text {
  font-size: 0.875rem;
  color: #4B5563;
}

.signup-link {
  color: #3B82F6;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;
}

.signup-link:hover {
  color: #1E40AF;
}
</style>