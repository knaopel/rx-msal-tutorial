import "./styles.css";
import { PageLayout } from "./components/PageLayout";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate
} from "@azure/msal-react";
import { ProfileContent } from "./components/ProfileContent";

export default function App() {
  return (
    <PageLayout>
      <AuthenticatedTemplate>
        <ProfileContent />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <p>You are not signed in! Please sign in.</p>
      </UnauthenticatedTemplate>
    </PageLayout>
  );
}
