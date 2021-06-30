import AppRouter from "./routers/AppRouter.jsx";
import AuthProvider from "./auth/AuthProvider";

function App() {
  return (
    <div>
        <AuthProvider>
            <AppRouter />
        </AuthProvider>

    </div>
  );
}

export default App;
