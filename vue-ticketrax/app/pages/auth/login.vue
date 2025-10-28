<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// Optional props (if used for nested routing context)
const props = defineProps<{
  foobar?: string
}>()

if (props.foobar) {
  console.log('Parent passed prop:', props.foobar)
}

// --- Setup ---
const router = useRouter()
const toast = useToast()

// --- Reactive State ---
interface LoginForm {
  email: string
  password: string
}

interface FormErrors {
  email?: string
  password?: string
}

const form = ref<LoginForm>({
  email: '',
  password: ''
})

const errors = ref<FormErrors>({})

// --- Input Change Handler ---
const handleChange = (field: keyof LoginForm, value: string) => {
  form.value[field] = value
  errors.value[field] = ''
}

// --- Submit Handler ---
const handleSubmit = (e: Event) => {
  e.preventDefault()

  const newErrors: FormErrors = {}

  if (!form.value.email) newErrors.email = 'Email is required'
  else if (!/\S+@\S+\.\S+/.test(form.value.email))
    newErrors.email = 'Please enter a valid email'

  if (!form.value.password) newErrors.password = 'Password is required'

  // Validation check
  if (Object.keys(newErrors).length > 0) {
    errors.value = newErrors
    toast.add({title:'Please fix the errors and try again.',color:"error"})
    return
  }

  // Mock login
  // localStorage.setItem('ticketapp_session', 'mock_token')
  const sessionCookie = useCookie('ticketapp_session');
  sessionCookie.value = "mock_token"; // Store the token

  toast.add({title:'Login successful! Redirecting...',
   color:'success'
}

  )


  router.push('/dashboard')
}
</script>

<template>
  <form @submit="handleSubmit" class="space-y-5">
    <!-- Email -->
    <div>
      <label for="email" class="block text-sm text-gray-600 mb-1">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        v-model="form.email"
        @input="handleChange('email', form.email)"
        :class="[
          'w-full px-4 py-2 border rounded-lg focus:ring-2 outline-none',
          errors.email
            ? 'border-red-500 focus:ring-red-500'
            : 'border-gray-300 focus:ring-blue-800'
        ]"
        placeholder="name@example.com"
      />
      <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
    </div>

    <!-- Password -->
    <div>
      <label for="password" class="block text-sm text-gray-600 mb-1">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        v-model="form.password"
        @input="handleChange('password', form.password)"
        :class="[
          'w-full px-4 py-2 border rounded-lg focus:ring-2 outline-none',
          errors.password
            ? 'border-red-500 focus:ring-red-500'
            : 'border-gray-300 focus:ring-blue-800'
        ]"
        placeholder="••••••••"
      />
      <p v-if="errors.password" class="text-red-500 text-sm mt-1">{{ errors.password }}</p>
    </div>

    <!-- Submit Button -->
    <button
      type="submit"
      class="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-900 transition"
    >
      Login
    </button>

    <!-- Redirect to Signup -->
    <p class="text-sm text-center text-gray-600">
      Don’t have an account?
      <NuxtLink to="/auth/signup" class="text-blue-800 font-semibold">
        Sign Up
      </NuxtLink>
    </p>
  </form>
</template>
