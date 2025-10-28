<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "#imports"; // ✅ for Nuxt UI Toast composable

// --- Props ---
const props = defineProps<{
  foobar?: string;
}>();

if (props.foobar) {
  console.log("Parent passed prop:", props.foobar);
}

// --- Type Definitions ---
interface SignupForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

// --- Composables ---
const router = useRouter();
const toast = useToast();

// --- State ---
const form = ref<SignupForm>({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const errors = ref<FormErrors>({});

// --- Validation Function ---
const validate = (): boolean => {
  const newErrors: FormErrors = {};

  if (!form.value.name) newErrors.name = "Full name is required";
  if (!form.value.email) newErrors.email = "Email is required";
  else if (!/\S+@\S+\.\S+/.test(form.value.email))
    newErrors.email = "Please enter a valid email";

  if (!form.value.password) newErrors.password = "Password is required";
  if (!form.value.confirmPassword)
    newErrors.confirmPassword = "Please confirm your password";
  else if (form.value.password !== form.value.confirmPassword)
    newErrors.confirmPassword = "Passwords do not match";

  errors.value = newErrors;
  return Object.keys(newErrors).length === 0;
};

// --- Form Submit ---
const handleSubmit = (): void => {
  if (!validate()) {
    toast.add({title:'Please fix the errors and try again.',color:"error"})

    return;
  }

  // Mock signup
  localStorage.setItem("ticketapp_session", "mock_token");
  toast.add({title:'Signup successful! Redirecting...',
   color:'success'
})

  setTimeout(() => {
    router.push("/dashboard");
  }, 1000);
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="space-y-5">
    <!-- Full Name -->
    <div>
      <label for="name" class="block text-sm text-gray-600 mb-1">Full Name</label>
      <input
        id="name"
        v-model="form.name"
        type="text"
        class="w-full px-4 py-2 border rounded-lg focus:ring-2 outline-none"
        :class="errors.name ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-deep-blue'"
        placeholder="John Doe"
      />
      <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
    </div>

    <!-- Email -->
    <div>
      <label for="email" class="block text-sm text-gray-600 mb-1">Email</label>
      <input
        id="email"
        v-model="form.email"
        type="email"
        class="w-full px-4 py-2 border rounded-lg focus:ring-2 outline-none"
        :class="errors.email ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-deep-blue'"
        placeholder="name@example.com"
      />
      <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
    </div>

    <!-- Password -->
    <div>
      <label for="password" class="block text-sm text-gray-600 mb-1">Password</label>
      <input
        id="password"
        v-model="form.password"
        type="password"
        class="w-full px-4 py-2 border rounded-lg focus:ring-2 outline-none"
        :class="errors.password ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-deep-blue'"
        placeholder="••••••••"
      />
      <p v-if="errors.password" class="text-red-500 text-sm mt-1">{{ errors.password }}</p>
    </div>

    <!-- Confirm Password -->
    <div>
      <label for="confirmPassword" class="block text-sm text-gray-600 mb-1">Confirm Password</label>
      <input
        id="confirmPassword"
        v-model="form.confirmPassword"
        type="password"
        class="w-full px-4 py-2 border rounded-lg focus:ring-2 outline-none"
        :class="errors.confirmPassword ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-deep-blue'"
        placeholder="••••••••"
      />
      <p v-if="errors.confirmPassword" class="text-red-500 text-sm mt-1">
        {{ errors.confirmPassword }}
      </p>
    </div>

    <!-- Submit -->
    <button
      type="submit"
      class="w-full bg-deep-blue text-white py-2 rounded-lg hover:bg-blue-800 transition"
    >
      Sign Up
    </button>

    <p class="text-sm text-center text-gray-600">
      Already have an account?
      <RouterLink to="/auth/login" class="text-deep-blue font-semibold">
        Login
      </RouterLink>
    </p>
  </form>
</template>
