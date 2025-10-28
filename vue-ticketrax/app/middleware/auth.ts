// middleware/auth.js
export default defineNuxtRouteMiddleware((to, from) => {
  // Replace this with your actual authentication check
  const isAuthenticated = checkIfUserIsAuthenticated();

  if (!isAuthenticated && to.path !== "/login") {
    return navigateTo("/auth/login"); // Redirect to login page if not authenticated
  }
});

function checkIfUserIsAuthenticated() {
  const sessionCookie = useCookie("ticketapp_session");
  console.log(sessionCookie.value === "mock_token");

  return sessionCookie.value === "mock_token";
}
