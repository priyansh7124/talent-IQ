import "./App.css";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/clerk-react";

/**
 * Root application component that renders the app header and authentication controls.
 *
 * Renders a "Welcome to the app" heading, a sign-in button (opens a modal) when the user is signed out, a sign-out button when the user is signed in, and a user menu button that is always shown.
 * @returns {JSX.Element} The app's main JSX element.
 */
function App() {
  return (
    <>
      <h1>Welcome to the app</h1>
      <SignedOut>
        <SignInButton mode="modal">
          <button>Login</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton />
      </SignedIn>

      <UserButton />
    </>
  );
}

export default App;