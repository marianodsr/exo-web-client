import AuthContextProvider from "./Contexts/AuthContext";
import Router from "./Router";
function App() {
  return (
    <AuthContextProvider>
      <div className="w-screen h-screen box-border">
        <Router />
      </div>
    </AuthContextProvider>
  );
}

export default App;
